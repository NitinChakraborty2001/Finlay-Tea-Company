import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Sprout,
  Repeat,
  Quote,
  Star,
} from "lucide-react";
import hero from "@/assets/hero-garden.jpg";
import warehouse from "@/assets/warehouse.jpg";
import loose from "@/assets/loose-teas.jpg";
import packaged from "@/assets/packaged.jpg";
import { PHONE_TEL, products, waLink } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaBand } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Finlay Tea Company — Tea Wholesaler In Kolkata & Hooghly!" },
      {
        name: "description",
        content:
          "Bulk Assam, Darjeeling and CTC tea direct from gardens. Trusted tea trader & wholesaler for West Bengal since 2017. WhatsApp for live rates.",
      },
      { property: "og:title", content: "Finlay Tea Company — Direct-From-Garden Tea Wholesaler!" },
      {
        property: "og:description",
        content:
          "Premium loose tea, Assam and CTC blends for retailers, distributors and hospitality across Kolkata, Hooghly & West Bengal.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const markets = [
  {
    id: "stall",
    label: "Tea Stalls & Canteens",
    note: "High cup yield, strong colour, lowest cost per cup.",
    ids: ["dooars-ctc", "ctc"],
  },
  {
    id: "kirana",
    label: "Kirana & Grocery Retail",
    note: "Shelf-ready packets your customers already ask for.",
    ids: ["ase-gold", "ase-regular", "ase-desi", "josh"],
  },
  {
    id: "premium",
    label: "Hotels, Cafés & Premium Menus",
    note: "Whole-leaf and specialty teas that justify a premium.",
    ids: ["darjeeling", "green-loose", "red-wine"],
  },
  {
    id: "flavour",
    label: "Flavoured & Festive Shelves",
    note: "Aromatic blends for seasonal demand.",
    ids: ["elaichi", "ase-black", "ase-green"],
  },
];

const testimonials = [
  {
    name: "Subrata Mukherjee",
    role: "Kirana & Grocery Retailer · Serampore, Hooghly.",
    segment: "Retail Partner",
    quote:
      "Consistent liquor strength and aroma across every batch. Our regular household buyers ask for these packets by name, and direct wholesale billing keeps our shelf margins healthy.",
  },
  {
    name: "Rajesh Agarwal",
    role: "Tea Distributor · Burrabazar, Kolkata.",
    segment: "Distribution",
    quote:
      "High cup yield and brisk colour are non-negotiable for our commercial stall network. Dispatch from the godown is prompt, and the granule grade stays uniform throughout the season.",
  },
  {
    name: "Ananya Sen",
    role: "Hospitality Procurement · Salt Lake, Kolkata.",
    segment: "Hospitality",
    quote:
      "Sampling a custom blend before placing our monthly bulk order made all the difference. Fresh garden-sourced leaf without middleman markups has noticeably upgraded our tea menu.",
  },
] as const;

const faqs = [
  [
    "What is your minimum order quantity?",
    "MOQ depends on the variety and current batch. Message our trade desk on WhatsApp and we'll confirm for your order.",
  ],
  [
    "Are listed prices final?",
    "Listed prices are our current indicative rates. Tea is a seasonal commodity, so please confirm live wholesale rates before ordering.",
  ],
  [
    "Do you deliver outside Kolkata and Hooghly?",
    "We serve regional networks across West Bengal. Share your location and volume and we'll confirm logistics options.",
  ],
  [
    "Can I get a sample before a bulk order?",
    "Yes — request a sample through WhatsApp or the enquiry page and we'll advise on availability.",
  ],
  [
    "Where do you source your tea?",
    "We source directly from reputed tea gardens and authorised suppliers, skipping middlemen for freshness and consistent flavour.",
  ],
] as const;

function Index() {
  const [market, setMarket] = useState(markets[0]!);
  const featured = products.filter((p) =>
    ["darjeeling", "ctc", "dooars-ctc", "ase-gold"].includes(p.id),
  );
  const marketProducts = products.filter((p) => market.ids.includes(p.id));

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Tea garden at sunrise"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 text-forest-foreground md:pb-28 md:pt-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/30 bg-forest/40 px-3 py-1 text-xs font-semibold backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Trusted Trader & Wholesaler Since 2017
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">
            Exceptional Freshness, Direct Procurement —{" "}
            <span className="text-gold">Premium Tea Engineered For Profitability.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90">
            Bulk loose tea, authentic Assam and robust CTC blends sourced straight from reputed
            gardens — for retailers, distributors and hospitality buyers across Kolkata, Hooghly and
            West Bengal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalog"
              data-track="hero-catalog"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 font-semibold text-gold-foreground"
            >
              Explore Wholesale Catalog <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink("Hello, I'm a trade buyer. Please share live wholesale prices.")}
              target="_blank"
              rel="noreferrer"
              data-track="hero-wa"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Chat On WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              data-track="hero-call"
              className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/50 px-6 py-3.5 font-semibold"
            >
              <Phone className="h-4 w-4" />
              Call Office
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {[
            ["2017", "Established"],
            ["13", "Loose & Packaged Lines"],
            ["₹150/KG", "CTC From"],
            ["Direct", "Garden Sourcing"],
          ].map(([a, b]) => (
            <div key={b}>
              <p className="font-display text-3xl font-semibold text-primary">{a}</p>
              <p className="text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value prop */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img
          src={warehouse}
          alt="Tea sacks in a wholesale warehouse"
          width={1200}
          height={912}
          loading="lazy"
          className="rounded-3xl shadow-card"
        />
        <div>
          <p className="eyebrow">Direct from garden</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Cut out the middlemen! Keep the margin.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every extra hand between the garden and your shelf adds cost and costs freshness. We
            procure directly from reputed tea gardens and authorised suppliers, so you get fresher
            stock, richer aroma and the same flavour batch after batch.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [Sprout, "Freshness", "Shorter supply chain."],
              [Truck, "No Middlemen", "Source-level pricing."],
              [Repeat, "Consistency", "Quality-checked batches."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Sprout;
              return (
                <div key={t as string} className="rounded-2xl bg-secondary p-4">
                  <I className="h-6 w-6 text-primary" />
                  <p className="mt-2 font-semibold">{t as string}</p>
                  <p className="text-xs text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Wholesale bestsellers</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Transparent prices, per kg & per packet &rarr;
              </h2>
            </div>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-1 font-semibold text-primary"
            >
              Full Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Market engine */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="eyebrow">Collection finder</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">What does your market buy?</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {markets.map((m) => (
            <button
              key={m.id}
              onClick={() => setMarket(m)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${market.id === m.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <p className="mt-5 text-muted-foreground">{market.note}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {marketProducts.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Offer teaser */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Proposed trade offer
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              The Direct-To-Store Custom Blend Bundle
            </h2>
            <p className="mt-4 opacity-85">
              Pair premium leaf with high-yield commercial CTC, get blend advice tuned to your
              customers' taste, and request a sample before you commit.
            </p>
            <p className="mt-3 text-sm text-gold">
              Available on confirmation of batch availability and logistics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/custom-blend"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-semibold text-gold-foreground"
              >
                See The Offer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/40 px-6 py-3 font-semibold"
              >
                Calculate Margin Savings
              </Link>
            </div>
          </div>
          <img
            src={loose}
            alt="Darjeeling, CTC and green tea varieties"
            width={1200}
            height={912}
            loading="lazy"
            className="rounded-3xl"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="eyebrow">New batch arrivals</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">From the garden to our godown!</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(
            [
              [hero, "Garden Sourcing", 1600, 1008],
              [warehouse, "Bulk CTC Stock", 1200, 912],
              [packaged, "Retail-Ready Packets", 1200, 912],
            ] as const
          ).map(([src, cap, width, height]) => (
            <figure key={cap}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={cap}
                  width={width}
                  height={height}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="mt-2.5 text-sm font-medium text-muted-foreground">
                {cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Trade Client Feedback */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Partner testimonials</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Trade Client Feedback</h2>
            <p className="mt-3 text-muted-foreground">
              What retailers, distributors and hospitality buyers across Kolkata and Hooghly value
              most when sourcing directly from our godown.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-0.5 text-gold">
                      <span className="sr-only">Rated 5 out of 5 stars</span>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote aria-hidden="true" className="h-5 w-5 text-gold/60" />
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                    <p>&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    {t.segment}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <p className="eyebrow text-center">Frequently Asked Questions</p>
        <h2 className="mt-2 text-center text-3xl font-semibold">Questions buyers ask us &rarr;</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Leaf className="h-4 w-4 text-primary" />
          More Questions?{" "}
          <Link to="/contact" className="font-semibold text-primary">
            Send A Bulk Enquiry.
          </Link>
        </p>
      </section>

      <CtaBand />
    </>
  );
}
