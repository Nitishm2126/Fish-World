# Fish World Ambattur — Website

A premium aquarium/aquatic-pet-store website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Where to edit content

Everything a shop owner needs to update lives in plain data files — no need to touch component code:

- `data/products.ts` — the shop catalogue (fishes, aquariums, filters, motors, food, plants, accessories, imported). Each product has a name, category, description, availability, price (leave as `null` to show "Price on Enquiry"), image, and feature bullets.
- `data/services.ts` — the 7 services shown in the Services section, each with its own WhatsApp message type.
- `data/gallery.ts` — the Featured Setups gallery images/categories, and the demo testimonials.
- `lib/whatsapp.ts` — the WhatsApp number, all pre-filled message templates, and the Instagram/YouTube/Maps links. Change the number here once and it updates everywhere on the site.

## Images

Product and gallery images currently use illustrated placeholder artwork at `public/images/categories/` and `public/images/gallery/` (SVG line-art on an ocean gradient) — built this way because no real product photography was provided. Swap in real shop photos by replacing the `image` path in `data/products.ts` / `data/gallery.ts` with your own files in `public/images/`.

## Pages

- `/` — Home (Hero, Stats, Services, Featured Gallery, Instagram, YouTube, Testimonials, About/Why Choose Us, Contact + Map)
- `/shop` — Full catalogue with search, category filters, sorting, and a product detail modal

## Notes for the next developer

- No backend/CMS — content is all in `data/*.ts` for simplicity. If the catalogue grows large or the owner wants to self-edit without a developer, a headless CMS (Sanity) or Supabase table would be a natural next step; the data shapes in `data/products.ts` are already structured to map cleanly onto either.
- Fonts use a system-font stack (no external font fetch) so the build works offline/in restricted network environments — swap in a Google Font via `next/font/google` if you have normal internet access.
- Instagram/YouTube sections link out to the real profiles but show placeholder tiles/thumbnails, since there's no live API integration — swap in the real feed via the Instagram Graph API or YouTube Data API when ready.
