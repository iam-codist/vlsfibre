# VLS Fibre — Industrial Composites & Chemical Process Equipment

An ultra-modern, high-converting marketing website and engineering lead-generation engine for **VLS Fibre** (Premier manufacturer of industrial FRP/GRP composites, PP-FRP reaction vessels, packed bed fume scrubbers, and dual-laminates).

---

## 🚀 Technical Stack & Architecture

- **Core Framework:** Next.js 16 (App Router, Server Components + Client Islands)
- **Styling & Design System:** Tailwind CSS v4 + Industrial High-Tech Palette (`#090D16` Deep Slate, `#06B6D4` Electric Cyan, `#F59E0B` Safety Amber, `#E2E8F0` Titanium Silver)
- **3D & Creative Tech:** Three.js / React Three Fiber (`@react-three/fiber` & `@react-three/drei`) with procedural glass-fiber weave mesh and rotating composite cylinder responding to pointer coordinates
- **Smooth Motion:** Lenis Smooth Scroll (`lenis`)
- **Forms & Validation:** `react-hook-form` + `zod`
- **Database & Leads:** Supabase (PostgreSQL schema provided in `supabase/schema.sql`)
- **Multi-Channel Dispatch:** Direct WhatsApp Cloud link generation + Resend Email API support
- **AI Sales Engineering Chatbot:** Floating widget with technical process engineering expertise and automatic lead capture triggers

---

## 📁 Key Routes & Pages

| Route | Purpose | Features |
|---|---|---|
| `/` | **Home Page** | 3D R3F Hero Canvas, Value Proposition Bar, Parallax Product Spotlight, Infinite Marquee, Interactive Material Comparison Tool (FRP vs Mild Steel vs SS316 vs Aluminum), CTA Banner |
| `/products` | **Product Catalog** | Filterable by Category (Industrial, Architectural, Custom) and Material (PP-FRP, PVDF, HDPE Spiral, PTFE Lined), live search, zero-text semantic badges |
| `/products/[slug]` | **Dynamic Product Detail** | 360° interactive composite layer slicing analyzer, ASME RTP-1 / BS 4994 specs table, "Get Bulk Pricing / Instant CAD Spec" lead gate |
| `/gallery` | **Field Installation Gallery** | Masonry grid with category filters, Lightbox modal with zoom, zero raw text on images, project site locations, "Inquire Similar Spec" action |
| `/about` | **Plant & Heritage** | 18-year engineering timeline, virtual factory tour with CNC filament winding & 20 kV spark testing bays, ISO 9001:2015 certifications |
| `/contact` | **Lead Qualifier & RFQ** | Interactive 4-step RFQ wizard (Product Category &rarr; Dimensions & Media &rarr; Timeline & Site &rarr; Contact Info) with Zod validation |
| `/api/lead` | **Lead Dispatch API** | Validates form data, inserts into Supabase `leads` table, and returns formatted WhatsApp direct-connect dispatch URL |
| `/api/chat` | **AI Engineering Chat API** | Technical application engineering desk with deterministic fallback and OpenAI/Anthropic LLM support |

---

## 🛠️ Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in your configuration:
- `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase Free Tier credentials.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Sales engineering desk WhatsApp number (e.g. `919444055555`).
- `RESEND_API_KEY`: For instant transactional email alerts.
- `OPENAI_API_KEY`: For advanced LLM AI chatbot replies.

### 2. Supabase Database Schema
Run the SQL queries located in `supabase/schema.sql` in your Supabase SQL Editor:
```sql
-- Creates public.leads and public.chat_sessions with Row Level Security (RLS)
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
