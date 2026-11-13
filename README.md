# Noor Ul Quran Online Academy

Premium multi-page website for Noor Ul Quran Online Academy — online Quran education for children with experienced male and female teachers.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Server-side form processing with optional Resend email delivery

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL` — production site URL for SEO canonicals/sitemap
- `RESEND_API_KEY` — optional; enables email delivery of inquiries
- `INQUIRY_TO_EMAIL` / `INQUIRY_FROM_EMAIL` — optional email routing

Without Resend, form submissions are still validated and saved under `data/inquiries/`.

## Key conversion features

- 3-day free trial form
- Separate male / female WhatsApp contact flows
- Fee inquiry WhatsApp buttons (no prices on site)
- Student registration and contact forms
- SEO metadata, sitemap, robots, and structured data

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
