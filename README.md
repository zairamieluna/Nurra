# 🌸 Nurra — Postpartum Care Platform

> Postpartum recovery support for new mothers in Canada.

Built with **React + Vite + Tailwind CSS v4 + Supabase + Netlify**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
```
Open `.env.local` and fill in your Supabase credentials:
- Go to [supabase.com](https://supabase.com) → Your Project → **Settings → API**
- Copy your **Project URL** and **anon public key**

### 3. Set up the database
- Go to your Supabase project → **SQL Editor**
- Open `src/supabase/schema.sql` and paste + run the entire file

### 4. Start the dev server
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
nurra-app/
├── public/                   # Static files (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI: Button, Tag, SectionHeader
│   │   └── layout/           # Navbar, Footer, Layout wrapper
│   ├── sections/             # Landing page sections (Hero, Benefits, etc.)
│   ├── pages/                # Full pages composed from sections
│   ├── hooks/                # Custom React hooks (useWaitlist, useSupabaseUser)
│   ├── lib/                  # Utility functions (cn, formatDate, etc.)
│   ├── supabase/
│   │   ├── client.js         # Supabase client (singleton)
│   │   ├── queries.js        # All database query functions
│   │   └── schema.sql        # SQL to run in Supabase dashboard
│   ├── config/
│   │   └── app.js            # App-wide config (name, routes, feature flags)
│   ├── styles/
│   │   └── index.css         # Tailwind + design tokens (@theme)
│   └── assets/               # fonts/, images/, icons/
├── .env.example              # Template for environment variables
├── .env.local                # Your real keys (NOT committed to git)
├── netlify.toml              # Netlify build + redirect config
├── vite.config.js            # Vite + Tailwind + path aliases
└── index.html                # HTML entry point with SEO meta
```

---

## 🎨 Design System

Nurra's colors and fonts are defined as CSS variables in `src/styles/index.css` under `@theme`.

| Token | Value | Usage |
|---|---|---|
| `--color-terracotta` | `#B86B5A` | Primary brand, CTAs |
| `--color-blush` | `#F5E6DF` | Light backgrounds |
| `--color-ink` | `#2C2118` | Body text |
| `--color-cream` | `#FAF6F1` | Section backgrounds |
| `--font-display` | Cormorant Garamond | Headings |
| `--font-body` | DM Sans | Body text |

Use in Tailwind classes: `text-terracotta`, `bg-blush`, `font-display`, etc.

---

## 🔌 Path Aliases

Import from anywhere without `../../..` paths:

```js
import { supabase }    from '@supabase/client'
import { joinWaitlist } from '@supabase/queries'
import Button           from '@components/ui/Button'
import { cn }           from '@lib/utils'
import { APP_CONFIG }   from '@config/app'
```

---

## 🗄️ Supabase Tables

| Table | Purpose |
|---|---|
| `waitlist` | Email signups before launch |
| `profiles` | Extended user data (auto-created on signup) |

---

## 🚢 Deploy to Netlify

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
3. In Netlify **Site settings → Environment variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_APP_URL` (your Netlify URL)
4. Deploy — Netlify will auto-detect the `netlify.toml` config

---

## 🛠️ Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | 4 | Styling |
| React Router | 7 | Client-side routing |
| Supabase JS | 2 | Database + Auth |

---

*Built with 🌸 for every mother who needed more support.*
