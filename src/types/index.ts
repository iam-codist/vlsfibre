export interface ProductSpec {
  tensileStrength: string;
  temperatureRange: string;
  resinMatrix: string;
  wallThickness: string;
  designStandards: string[];
  chemicalResistance: string[];
  sparkTestVoltage: string;
  capacitiesAvailable: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'industrial-chemical' | 'architectural' | 'custom-moulding';
  subCategory: string;
  materialType: 'PP-FRP' | 'PVDF-FRP' | 'HDPE Spiral' | 'MS-PTFE Lined' | 'Pure FRP/GRP';
  resinGrade: 'Vinyl Ester (Derakane)' | 'Isophthalic' | 'Bisphenol' | 'Epoxy Novolac';
  shortDesc: string;
  fullDesc: string;
  image: string;
  featured?: boolean;
  specs: ProductSpec;
  applications: string[];
  features: string[];
}

export interface LeadFormData {
  fullName: string;
  email?: string;
  phone: string;
  companyName?: string;
  productCategory: string;
  capacityOrSize?: string;
  chemicalMedia?: string;
  operatingTemp?: string;
  deliveryTimeline: string;
  projectLocation?: string;
  projectDetails?: string;
  leadSource: 'rfq_wizard' | 'contact_form' | 'ai_chatbot' | 'quick_rfq';
}

export interface ChatMessage {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp: string;
  isLeadPrompt?: boolean;
}
