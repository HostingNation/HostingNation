# Hosting Nation — Official Website

Modern, futuristic, SEO-optimized website for **Hosting Nation**, founded by **Mohd Suhail**. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.

Live site: https://hostingnation.co.in
Contact: hostingnation.info@gmail.com

---

## Tech stack

- **Next.js 14** (App Router, RSC, Metadata API)
- **TypeScript**
- **Tailwind CSS** (custom theme, glassmorphism, neon gradients)
- **MongoDB + Mongoose** (contact form submissions)
- **Framer Motion + Lucide React** (icons & motion)
- **JSON-LD Schema.org** structured data (Organization, Person, FAQ, Service, Breadcrumb, WebSite)

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage — hero, services, founder, FAQ, CTA |
| `/about` | About Hosting Nation |
| `/founder` | Meet Mohd Suhail (with Person schema) |
| `/services` | All services overview |
| `/services/web-development` | Web Development |
| `/services/custom-software-development` | Custom Software |
| `/services/saas-development` | SaaS Development |
| `/services/ecommerce-development` | E-commerce |
| `/services/api-integration` | API Integration |
| `/services/business-automation` | Business Automation |
| `/contact` | Contact form (saves to MongoDB) |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots |

## SEO

- Per-page metadata, OpenGraph & Twitter cards
- JSON-LD: Organization, Person (Mohd Suhail), WebSite, FAQ, Service, Breadcrumb
- Canonical URLs on every page
- Auto-generated `sitemap.xml` and `robots.txt`
- Mobile-first, accessible markup, semantic headings
- Optimized for searches: *Hosting Nation*, *Mohd Suhail*, *Suhail*, *Hosting Nation web development*, *Mohd Suhail founder Hosting Nation*

## Getting started

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env.local
# fill in MONGODB_URI, MONGODB_DB, NEXT_PUBLIC_SITE_URL

# 3. Develop
npm run dev

# 4. Build
npm run build
npm start
```

## Environment variables

| Var | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | yes | MongoDB connection string (Atlas or self-hosted) |
| `MONGODB_DB` | optional | Database name (default `hostingnation`) |
| `NEXT_PUBLIC_SITE_URL` | yes | Public site URL (`https://hostingnation.co.in`) |
| `CONTACT_EMAIL` | optional | Contact email shown on the site |

## Project structure

```
app/                   # Next.js App Router pages
  about/
  contact/
  founder/
  services/
    web-development/
    custom-software-development/
    saas-development/
    ecommerce-development/
    api-integration/
    business-automation/
  api/contact/route.ts  # POST contact form → MongoDB
  layout.tsx            # Root layout + global JSON-LD
  page.tsx              # Homepage
  sitemap.ts            # Dynamic sitemap
  robots.ts             # robots.txt
  globals.css           # Tailwind + custom CSS
components/             # Reusable UI components
lib/
  mongodb.ts            # Mongoose connection (cached)
  schema.ts             # JSON-LD generators
  site.ts               # Site config & founder info
models/
  Contact.ts            # Mongoose contact model
public/                 # Static assets, images, favicons
```

## Deployment

Deploys cleanly to **Vercel** (recommended). Set the env vars in the Vercel dashboard and connect MongoDB Atlas. The free tier is sufficient to start.

Also works on AWS, Render, Railway, or any Node-hosting platform.

## License

© Hosting Nation. Founded by Mohd Suhail. All rights reserved.
