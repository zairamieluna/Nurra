-- ─────────────────────────────────────────────────────────────────────────────
--  schema.sql — Nurra Supabase database setup
--
--  HOW TO USE:
--  1. Go to your Supabase project → SQL Editor
--  2. Paste this entire file and click Run
--  3. Your tables will be created with the right policies
-- ─────────────────────────────────────────────────────────────────────────────


-- ── WAITLIST TABLE ───────────────────────────────────────────────────────────
create table if not exists public.waitlist (
  id             uuid primary key default gen_random_uuid(),
  email          text not null unique,
  first_name     text not null,
  last_name      text,
  city           text,
  journey_stage  text check (journey_stage in (
                   'pregnant', 'newborn', '4-12months', 'planning', 'other'
                 )),
  created_at     timestamptz default now() not null
);

-- Index for faster email lookups
create index if not exists waitlist_email_idx on public.waitlist(email);
create index if not exists waitlist_created_at_idx on public.waitlist(created_at desc);

-- Row Level Security
alter table public.waitlist enable row level security;

-- Anyone can insert (join the waitlist)
create policy "Anyone can join the waitlist"
  on public.waitlist for insert
  with check (true);

-- Only authenticated admins can read the list
-- (Change this once you set up admin roles)
create policy "Admins can view waitlist"
  on public.waitlist for select
  using (auth.role() = 'authenticated');


-- ── USERS / PROFILES TABLE ───────────────────────────────────────────────────
-- Extends Supabase's built-in auth.users with Nurra-specific profile data
create table if not exists public.profiles (
  id             uuid primary key references auth.users(id) on delete cascade,
  full_name      text,
  avatar_url     text,
  journey_stage  text,
  city           text,
  onboarding_done boolean default false,
  created_at     timestamptz default now() not null,
  updated_at     timestamptz default now() not null
);

alter table public.profiles enable row level security;

-- Users can read and update only their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile when a user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
