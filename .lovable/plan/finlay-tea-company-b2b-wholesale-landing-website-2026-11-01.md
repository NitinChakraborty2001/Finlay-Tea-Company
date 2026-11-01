# Finlay Tea Company — B2B Wholesale Landing Website

Brand promise: "Exceptional Freshness, Direct Procurement — Premium Tea Engineered For Profitability."

## Visual direction:

- Palette: deep forest green, warm earthen brown, golden tea-liquor accent, crisp cream background.
- Type: Fraunces (headings, heritage feel) + Manrope (body, clean trade feel).
- Generated imagery: tea garden hero, warehouse/sacks, loose leaf close-ups, packaged lineup, new-batch gallery.

## Pages (separate routes for local SEO):

1. **Home (/)** — wholesale hero with CTAs (Explore Wholesale Catalog, Chat on WhatsApp, Call Office), "Since 2017" trust strip, direct-from-garden value proposition, featured products, market-based collection finder, Grand Slam offer teaser, benefits (freshness, no middlemen, consistency), new batch gallery, FAQ, bulk inquiry band.
2. **Catalog (/catalog)** — loose tea grid with per-kg prices (Darjeeling ₹1,350, CTC ₹250, Dooars CTC ₹150; Assam blend, Green leaves, Red Wine Tea as "price on request") and packaged lineup (ASE Black 50g ₹75, ASE Gold Assam 250g ₹105; others "price on request"). Responsive price table + "Enquire" per item via WhatsApp.
3. **Margin Calculator (/calculator)** — pick product + quantity (kg) + your resale price → shows cost and estimated gross margin. Uses only listed prices; clear "indicative, confirm live rates" note.
4. **Custom Blend Offer (/custom-blend)** — the Direct-To-Store Custom Blend Bundle presented as a *proposed concept* (premium leaf + commercial CTC pairings, blend advice, sample kit request), labelled "available on confirmation of batch availability".
5. **About (/about)** — A. S. Enterprises profile, proprietorship since 2017, sourcing approach; licensing section with placeholders for GST/FSSAI numbers to be supplied.
6. **Regions (/regions)** — Hooghly, Kolkata, wider West Bengal cards, each with a direct inquiry button.
7. **Contact (/contact)** — WhatsApp enquiry builder (choose topic: live prices, truckload availability, new season arrivals, sample kit; product, quantity, business name, city) → opens prefilled WhatsApp to +91 8276971566; plus call and email links.

## Website-wide:

- Sticky header with trade navigation, mobile menu, sticky mobile WhatsApp/Call bar.
- Footer with contact, regions, links.
- Unique SEO titles/descriptions per page targeting "tea wholesaler Kolkata", "loose tea distributor Hooghly", "bulk Assam tea West Bengal", "CTC tea trader", "Dooars CTC direct"; LocalBusiness structured data.
- CTA links carry data attributes for future conversion tracking.

## Honesty rules:

- No invented reviews, partners, discounts, volume claims or license numbers. Testimonials section shows a "client feedback coming soon" placeholder you can fill with real quotes.

## Technical details:

- TanStack routes per page, shared layout in __root, design tokens in styles.css (oklch), fonts via link tags.
- Product data in one shared module; margin math in a pure function with a small unit test.
- No backend needed; WhatsApp via wa.me prefilled links.