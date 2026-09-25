import { NextResponse } from 'next/server';

interface IncomingMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages, language }: { messages: IncomingMessage[]; language?: string } = await req.json();
    const userMessages = messages.filter((m) => m.role === 'user');
    const latestUserMessage = userMessages[userMessages.length - 1]?.content.toLowerCase() || '';
    const userQueryCount = userMessages.length;
    const targetLang = language || 'English';

    // Check if third-party LLM key is available (OpenAI / Anthropic)
    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: `You are the Senior Technical Sales & Chemical Process Engineer at VLS Fibre (premier manufacturer of industrial FRP/GRP composites, PP-FRP reaction vessels, packed bed scrubbers, and dual-laminates).
IMPORTANT INSTRUCTIONS FOR LANGUAGE AND READABILITY:
1. Answer the user in ${targetLang} using authentic, highly professional, native B2B industrial terminology. Avoid unnatural, literal, or robotic AI phrasing.
2. CRITICAL RULE: Always keep ALL product names (e.g., PP-FRP Chemical Reaction Vessels, FRP Storage Tanks, Packed Bed Scrubbers, HDPE Spiral Road Tankers, PPRC & HDPE Electric Fusion Pipe Line Work, Nutsche Filters), resin brands (Derakane 411, Hetron 922, Vinylester), engineering standards (ASME RTP-1, BS 4994, DIN/DVS 2205, ISO 9001:2015), and technical test metrics (15–20 kV Spark Test, 120 kL, Barcol Hardness, CFM, MPa) in clean ENGLISH. Never translate or transliterate these technical designations.
3. Be concise, authoritative, and helpful. Prompt the user for operating temperature, chemical concentration, and capacity so VLS Fibre can generate a formal engineering calculation.`
              },
              ...messages
            ],
            temperature: 0.6
          })
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices[0]?.message?.content || '';
          return NextResponse.json({
            reply,
            triggerLeadCapture: userQueryCount >= 2
          });
        }
      } catch (err) {
        console.error('LLM API Error, falling back to expert knowledge engine:', err);
      }
    }

    // Built-in Expert Technical Knowledge Engine (Deterministic Fallback with English Product Terminology)
    let reply = '';

    if (latestUserMessage.includes('hcl') || latestUserMessage.includes('hydrochloric') || latestUserMessage.includes('acid')) {
      reply = `For Hydrochloric Acid (HCl 30-33%) service, VLS Fibre standardly engineers dual-laminate **PP-FRP Reaction Vessels** or **HDPE Spiral Wound Storage Tanks**. We use a 5mm–8mm thermoformed Polypropylene homopolymer (PPH) liner spark-tested at 15–20 kV, reinforced with filament-wound FRP using **Derakane 411 vinyl ester resin**. What tank capacity (e.g. 10 kL, 30 kL, 50 kL) and design temperature do you require?`;
    } else if (latestUserMessage.includes('scrubber') || latestUserMessage.includes('fume') || latestUserMessage.includes('emission') || latestUserMessage.includes('cfm')) {
      reply = `Our **PP-FRP Packed Bed Fume Scrubbers** achieve up to 99.8% removal efficiency for acidic fumes (HCl, SO2, Cl2, NOx). Built to BS 4994 and CPCB guidelines, systems include multi-tier polypropylene Tellerette packing, chevron demisters, and integrated PP-FRP centrifugal blowers (500 CFM to 65,000 CFM). Could you share your duct inlet airflow (CFM or m³/hr) and the acidic gas concentration?`;
    } else if (latestUserMessage.includes('price') || latestUserMessage.includes('cost') || latestUserMessage.includes('quote') || latestUserMessage.includes('rfq')) {
      reply = `VLS Fibre fabricates custom-engineered process equipment built to exact chemical operating parameters. Our pricing depends on the resin matrix (Isophthalic, Derakane 411/470 Vinyl Ester), design pressure, and capacity. Our engineering desk can issue a formal budgetary estimate and GA drawing within 24 hours.`;
    } else if (latestUserMessage.includes('standard') || latestUserMessage.includes('asme') || latestUserMessage.includes('bs 4994')) {
      reply = `All VLS Fibre vessels and scrubbers are engineered in accordance with recognized international codes: **BS 4994:1987**, **ASME RTP-1 / Section X**, **ASTM D3299**, and **DIN / DVS 2205**. Every piece undergoes full 15–20 kV spark testing and Barcol hardness testing prior to factory dispatch.`;
    } else if (latestUserMessage.includes('reactor') || latestUserMessage.includes('reaction vessel') || latestUserMessage.includes('agitator')) {
      reply = `Our **PP-FRP & PVDF-FRP Chemical Reaction Vessels** are designed for severe synthesis reactions. They feature heavy top-head stiffener beams to support geared motor drives, solid PP/PVDF encapsulated agitator shafts (anchor, turbine, or hydrofoil), and external half-pipe limpet or dimple jackets for steam/cooling brine. What batch volume and reaction temperature are you designing for?`;
    } else {
      reply = `Hello! I am VLS Fibre's Senior Application Engineer. We specialize in custom-engineered PP-FRP reaction vessels, bulk chemical storage tanks, packed bed scrubbers, centrifugal exhaust blowers, and PTFE/PVDF lined piping. How can I assist with your process plant requirements today?`;
    }

    return NextResponse.json({
      reply,
      triggerLeadCapture: userQueryCount >= 2
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { reply: 'Our engineering desk is available. Please share your phone or WhatsApp number for an immediate technical callback.' },
      { status: 200 }
    );
  }
}
