# MF Studios (Graphite + Blue)

Production-ready starter with Admin & User dashboards, mobile drawer, Supabase integration, Rebates, QR codes, and Team pages.

## Quick Start (Replit or local)

1. **Install**: run `npm i`
2. **Secrets**: add env vars (Replit "Secrets" or local `.env` – do *not* commit secrets)

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

> Do **not** expose service role key in the frontend. Use serverless/API if needed.

3. **Dev**: `npm run dev` → open the URL
4. **Build**: `npm run build`

## Pages

- `/` Home (entry)
- `/admin` Admin dashboard
- `/user` User dashboard
- `/rebates` Rebates list (reads `rebates` table if available, else demo data)
- `/qr` QR Code generator
- `/team` Team management (demo until Supabase table exists)
- `/auth` Google OAuth sign-in

## Supabase Tables (optional but recommended)

Create these tables for real data:

```sql
-- rebates table
create table if not exists public.rebates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  amount numeric not null,
  status text check (status in ('draft','active','archived')) default 'draft'
);

-- team_members table
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  role text not null default 'member'
);
```

Enable RLS and add policies to allow appropriate read/write per role.

## Theme

- Graphite backgrounds, deep blue accents
- Mobile drawer for small screens
- Accessible focus rings and high-contrast components

## Environment

Read from `import.meta.env.VITE_*` in Vite.