# Double You — Next.js Starter (MVP)

A ready-to-run starter for **Double You**: public marketing page + private dashboard + multi-type editor (ebook, template, audio) with **plan-based outlines** (blue = Free, gold = Premium).

## Tech
- Next.js 14 (App Router), React 18, TypeScript
- TailwindCSS
- Minimal UI components (Button, Card, Input, Textarea, Tabs, Slider)
- Icons: lucide-react
- API routes: mock stubs for generate/products/export/stripe webhook

> This starter is self-contained. You can layer in Supabase, Stripe, and external AI providers later.

## Quick Start
1. **Install** (Node >= 18.18 recommended):
   ```bash
   npm install
   npm run dev
   ```
   Visit http://localhost:3000

2. **Environment** (optional for later integrations):
   Copy `.env.example` to `.env.local` and fill when you add real services.

3. **Where to edit UI**
   - `src/components/DoubleYouApp.tsx` — main marketing + dashboard + editor UI
   - `src/app/page.tsx` — homepage (renders DoubleYouApp)
   - `src/app/dashboard/page.tsx` — dashboard route (also renders DoubleYouApp)

4. **Plan colors**
   - Free → Blue outlines
   - Premium → Gold outlines
   Use the **Settings** tab toggle in the UI to switch (demo-only).

5. **Next steps**
   - Wire `/app/api/generate` to your AI backends (OpenAI/Stability/ElevenLabs).
   - Add Supabase for auth/storage and Stripe for real payments.
   - Replace mock library data with your DB queries.

## Scripts
- `dev` — start dev server
- `build` — build
- `start` — run production server after build
- `lint` — eslint (optional if you add config)

Enjoy!
# doubleu
# doubleu
# doubleu.github.io
# doubleu.github.io
# doubleu.github.io
