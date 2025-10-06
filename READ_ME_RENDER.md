# MF Studios — Render Edition

This package is pre-configured for Render deployment with embedded Supabase credentials.

## What’s included
- `.env` with SUPABASE_URL and SUPABASE_ANON_KEY
- `render.yaml` (web service, Node environment)
- Theme applied (Admin & Colleague) with comfortable fonts and no white backgrounds
- UI labels updated: "User" → "Colleague"
- Lightweight splash screen

## Deploy on Render
1. Create a **New Web Service**.
2. Connect to this repo or upload this ZIP.
3. Render will detect `render.yaml` and set build/start commands.
4. Ensure **Environment** contains:
   - `SUPABASE_URL` = https://zoagrffpmgzpgwgsmihyu.supabase.co
   - `SUPABASE_ANON_KEY` = (already embedded)

### Local development
```bash
npm ci
npm run build
npm run start
# App listens on $PORT when running on Render
```

> Default landing is **Admin Dashboard**. Share **/colleague** route with teammates.
