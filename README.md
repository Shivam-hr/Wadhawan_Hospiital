# Wadhawan Hospital Website

Multi-page hospital website built with Next.js (App Router), React and Tailwind CSS v4.

## Pages
- `/` Home
- `/about` About Us
- `/orthopedics` Orthopedics department
- `/gynecology` Gynecology department
- `/diabetic-foot-clinic` Diabetic Foot Clinic
- `/doctors` Meet the doctors
- `/gallery` Photo gallery (with category filter)
- `/contact` Contact + appointment request form (sends to WhatsApp)

## Getting started
```
npm install
npm run dev
```
Open http://localhost:3000

## Editing content
All hospital details (address, phone, WhatsApp number, doctor bios, testimonials, FAQs)
live in `lib/site-data.js` — edit that one file to update text across the whole site.

## Swapping in real photos
Every photo/logo on the site is currently a labeled placeholder block (component
`PlaceholderImage` in `components/ui.js`), because no real hospital photos, doctor
photos, or the logo file were available when this was built. To swap in a real image:

1. Drop the image file into `public/images/...`
2. Replace the relevant `<PlaceholderImage label="..." .../>` with a Next.js `<Image />`
   pointing at your file, e.g.:
   ```jsx
   import Image from "next/image";
   <Image src="/images/dr-piyush.jpg" alt="Dr. Piyush Wadhawan" fill className="object-cover rounded-xl" />
   ```
   (wrap it in a `relative` container div since these use `fill`).
3. Do the same for the logo mark in `components/Header.js` (currently an inline SVG
   placeholder) once you have the real logo file.

## Structure
- `components/Header.js` — top utility bar + sticky nav, theme-aware (navy / maroon / green)
- `components/Footer.js` — site footer
- `components/MobileStickyBar.js` — fixed bottom Call / WhatsApp / Directions bar on mobile
- `components/ui.js` — shared building blocks (cards, FAQ accordion, testimonial carousel, CTA banner, placeholder image)
- `lib/site-data.js` — all editable content

## Deploying
Works out of the box on Netlify or Vercel. Push to GitHub and connect the repo.
