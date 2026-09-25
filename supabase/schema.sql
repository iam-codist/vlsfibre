-- ==============================================================================
-- VLS Fibre Supabase Database Schema (Free Tier)
-- ==============================================================================

-- 1. Leads Table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text,
  phone text not null,
  company_name text,
  product_interest text,
  project_details text,
  lead_source text default 'website_form', -- 'contact_form', 'rfq_wizard', 'ai_chatbot', 'quick_rfq'
  status text default 'new' -- 'new', 'contacted', 'qualified', 'converted'
);

-- 2. Analytics & Chat Inquiries
create table if not exists public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  phone text,
  transcript jsonb,
  lead_captured boolean default false
);

-- Row Level Security (RLS)
alter table public.leads enable row level security;
alter table public.chat_sessions enable row level security;

-- Allow anonymous inserts for website lead generation
create policy "Allow anonymous lead inserts" on public.leads
  for insert with check (true);

create policy "Allow anonymous chat inserts" on public.chat_sessions
  for insert with check (true);
