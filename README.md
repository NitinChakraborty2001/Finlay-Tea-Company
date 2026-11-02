# Finlay Tea Company

Official B2B wholesale web platform for **Finlay Tea Company** (a proprietorship firm under **A. S. Enterprises**, established in **2017**). Built for retailers, kirana & grocery shops, commercial tea stalls, distributors, and hospitality buyers across **Kolkata**, **Hooghly**, and **West Bengal** to browse direct-from-garden loose and packaged teas, calculate retail margins, and place bulk enquiries directly with the trade desk.

---

## Features

- **Homepage & Market Collection Finder (`/`)**
  - Direct-from-garden value proposition, trust metrics, godown gallery, partner testimonials, and buyer FAQs.
  - Interactive **Collection Finder** that filters recommended tea lines by buyer segment (_Tea Stalls & Canteens_, _Kirana & Grocery Retail_, _Hotels, Cafés & Premium Menus_, and _Flavoured & Festive Shelves_).
- **Wholesale Catalog & Quick Price Sheet (`/catalog`)**
  - Dedicated sections for **Bulk Loose Tea** (priced per KG) and the **Retail Distribution Range** (packaged teas priced per packet) with tasting profiles and recommended use cases.
  - Consolidated **Quick Price Sheet** table comparing pack sizes, unit rates, per-KG rates, and one-click pre-filled WhatsApp enquiry links.
- **Retailer Gross Margin Calculator (`/calculator`)**
  - Interactive calculator for priced loose-leaf and CTC teas (`src/lib/margin.ts`).
  - Computes purchase cost, projected sales revenue, estimated gross profit (`₹`), and gross margin percentage (`%`) from order volume and target resale price, with a direct rate-confirmation link.
- **Direct-To-Store Custom Blend Offer (`/custom-blend`)**
  - Curated wholesale bundle pairings (_Stall Volume Pairing_, _Premium Upsell Pairing_, _Retail Shelf Starter_) combining hero leaf teas with high-yield CTC workhorses, plus sample kit request triggers.
- **Regional Trade Coverage (`/regions`)**
  - Operational footprint overview for **Kolkata**, **Hooghly**, and **Across West Bengal** with region-specific enquiry actions.
- **Company Profile (`/about`)**
  - Story and direct-procurement model of **A. S. Enterprises**, alongside structured legal and trade details.
- **Bulk Enquiry Builder & Trade Desk (`/contact`)**
  - Structured enquiry form covering topic (_Live Wholesale Prices_, _Truckload Availability_, _New Season Arrivals_, _Sample Kit_), product, quantity, city, and business name—launching a pre-formatted WhatsApp message—paired with direct phone and email channels.
- **B2B Conversion UX, SEO & Resilience**
  - Sticky desktop navigation and a persistent mobile bottom action bar (_Call_ & _WhatsApp_).
  - Per-route SEO metadata (`title`, `description`, Open Graph, canonical links) and Schema.org `WholesaleStore` JSON-LD structured data.
  - Conversion tracking hooks via `data-track` attributes across CTAs.
  - Custom SSR error normalization, client error/404 boundaries, and CSRF protection middleware for server functions.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router) (file-based SSR routing) + [TanStack Query](https://tanstack.com/query)
- **Frontend**: [React 19](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/)
- **Styling & UI**: [Tailwind CSS v4](https://tailwindcss.com/) (OKLCH design tokens, _Fraunces_ serif & _Manrope_ sans-serif typography), [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/) primitives, and [Lucide React](https://lucide.dev/) icons
- **Build & Server Runtime**: [Vite 8](https://vite.dev/) & [Nitro](https://nitro.build/)
- **Testing & Quality**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/), [ESLint 9](https://eslint.org/), and [Prettier](https://prettier.io/)

---

## Project Structure

```text
Finlay-Tea-Company/
├── .project/                    # Project metadata & wholesale platform blueprint
├── public/
│   ├── favicon.png              # Site favicon
│   └── robots.txt               # Search crawler directives
├── src/
│   ├── assets/                  # Photography (tea gardens, warehouse, loose & packaged teas)
│   ├── components/
│   │   ├── site/
│   │   │   ├── Layout.tsx       # SiteHeader, SiteFooter, MobileActionBar, PageHero, CtaBand
│   │   │   └── ProductCard.tsx  # Wholesale product card with INR pricing & WhatsApp CTA
│   │   └── ui/                  # Reusable Radix UI / shadcn components
│   ├── hooks/
│   │   └── use-mobile.tsx       # Responsive viewport hook
│   ├── lib/
│   │   ├── error-capture.ts     # SSR error capture helpers
│   │   ├── error-page.ts        # Fallback 500 HTML error page renderer
│   │   ├── margin.ts            # Gross profit & margin percentage calculation utility
│   │   ├── products.ts          # Single source of truth for catalog, prices & trade contacts
│   │   └── utils.ts             # Class name merging helper (cn)
│   ├── routes/
│   │   ├── __root.tsx           # Root HTML shell, JSON-LD schema, 404 & error boundaries
│   │   ├── index.tsx            # Homepage, Collection Finder, testimonials & FAQs
│   │   ├── catalog.tsx          # Loose & packaged catalog + Quick Price Sheet
│   │   ├── calculator.tsx       # Interactive retailer gross margin calculator
│   │   ├── custom-blend.tsx     # Custom blend trade bundle pairings
│   │   ├── regions.tsx          # Kolkata, Hooghly & West Bengal supply coverage
│   │   ├── about.tsx            # A. S. Enterprises company story & business details
│   │   └── contact.tsx          # Bulk enquiry builder & trade desk contact details
│   ├── test/
│   │   ├── app-routing.test.tsx # Route matching verification
│   │   ├── margin.test.ts       # Unit tests for margin calculation & product pricing
│   │   └── setup.ts             # Vitest / Testing Library setup
│   ├── routeTree.gen.ts         # Auto-generated TanStack Router route tree
│   ├── router.tsx               # Router & QueryClient factory
│   ├── server.ts                # Custom SSR server entry & error normalization
│   ├── start.ts                 # TanStack Start request & CSRF middleware
│   └── styles.css               # Tailwind CSS v4 theme tokens & custom utilities
├── components.json              # UI component configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project scripts and dependencies
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite & TanStack Start build configuration
└── vitest.config.ts             # Vitest configuration
```

---

## Architecture & Conventions

- **Single Source of Truth for Products & Pricing**: All product names, pack sizes, tasting profiles, target buyer segments, INR prices (`price` and `pricePerKg`), and contact helpers (`PHONE_DISPLAY`, `PHONE_TEL`, `EMAIL`, `WA_NUMBER`, `waLink()`, `formatINR()`) reside exclusively in `src/lib/products.ts`. Pages and components read directly from this module to keep pricing consistent across the catalog, homepage, enquiry form, and margin calculator.
- **File-Based Routing**: Every `.tsx` file under `src/routes/` defines a route wrapped by `src/routes/__root.tsx`. Do not edit `src/routeTree.gen.ts` manually, as it is regenerated automatically by the router plugin.

---

## Getting Started

### Prerequisites

- **Node.js** 20+ and **npm** (or **Bun**)

### Installation

```sh
git clone https://github.com/NitinChakraborty2001/Finlay-Tea-Company.git
cd Finlay-Tea-Company
npm install
```

### Local Development

Start the development server with hot module replacement:

```sh
npm run dev
```

---

## Available Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start the local Vite development server     |
| `npm run build`      | Build the production client and SSR bundle  |
| `npm run build:dev`  | Run a development-mode build                |
| `npm run preview`    | Preview the production build locally        |
| `npm test`           | Run the Vitest test suite once              |
| `npm run test:watch` | Run Vitest in interactive watch mode        |
| `npm run lint`       | Lint TypeScript and React files with ESLint |
| `npm run format`     | Format codebase files with Prettier         |

---

## Credits

Copyright © Finlay Tea Company (A. S. Enterprises). All Rights Reserved.  
Powered by [Nexa](https://www.nexadigitalservices.agency), a Digital Agency by [Nitin Chakraborty](https://www.linkedin.com/in/NitinChakraborty2001/).
