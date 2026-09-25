import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(7, 'Valid phone/WhatsApp number is required'),
  email: z.string().email().optional().or(z.literal('')),
  companyName: z.string().optional().or(z.literal('')),
  productCategory: z.string().min(1, 'Product selection is required'),
  capacityOrSize: z.string().optional().or(z.literal('')),
  chemicalMedia: z.string().optional().or(z.literal('')),
  operatingTemp: z.string().optional().or(z.literal('')),
  deliveryTimeline: z.string().optional().or(z.literal('')),
  projectLocation: z.string().optional().or(z.literal('')),
  projectDetails: z.string().optional().or(z.literal('')),
  leadSource: z.string().default('ai_chatbot')
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.parse(body);

    // 1. Persist to Supabase if configured
    let savedToDb = false;
    if (supabase) {
      const { error } = await supabase.from('leads').insert([
        {
          full_name: validatedData.fullName,
          phone: validatedData.phone,
          email: validatedData.email || null,
          company_name: validatedData.companyName || null,
          product_interest: `${validatedData.productCategory}${validatedData.capacityOrSize ? ` (${validatedData.capacityOrSize})` : ''}`,
          project_details: [
            validatedData.projectDetails,
            validatedData.chemicalMedia ? `Media: ${validatedData.chemicalMedia}` : null,
            validatedData.operatingTemp ? `Temp: ${validatedData.operatingTemp}` : null,
            validatedData.deliveryTimeline ? `Timeline: ${validatedData.deliveryTimeline}` : null,
            validatedData.projectLocation ? `Site: ${validatedData.projectLocation}` : null,
          ].filter(Boolean).join(' | '),
          lead_source: validatedData.leadSource,
          status: 'new'
        }
      ]);
      if (!error) savedToDb = true;
    }

    // 2. Generate WhatsApp Direct Dispatch Link
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919898426164';
    const waMessage = encodeURIComponent(
      `*New Engineering RFQ - VLS Fibre*\n\n` +
      `👤 *Name:* ${validatedData.fullName}\n` +
      `🏢 *Company:* ${validatedData.companyName || 'Not Specified'}\n` +
      `📞 *Phone:* ${validatedData.phone}\n` +
      `📦 *Product:* ${validatedData.productCategory}\n` +
      (validatedData.capacityOrSize ? `📐 *Capacity/Size:* ${validatedData.capacityOrSize}\n` : '') +
      (validatedData.chemicalMedia ? `🧪 *Chemical Media:* ${validatedData.chemicalMedia}\n` : '') +
      (validatedData.projectLocation ? `📍 *Location:* ${validatedData.projectLocation}\n` : '') +
      (validatedData.projectDetails ? `📝 *Notes:* ${validatedData.projectDetails}\n` : '') +
      `\n_Source: ${validatedData.leadSource}_`
    );

    const waDispatchUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

    return NextResponse.json({
      success: true,
      savedToDb,
      waDispatchUrl,
      message: 'Lead captured successfully. Technical engineer will connect shortly.'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
