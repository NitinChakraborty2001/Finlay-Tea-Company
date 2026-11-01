import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/products";
import { CtaBand, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/custom-blend")({
  head: () => ({
    meta: [
      { title: "Direct-To-Store Custom Blend Bundle — Finlay Tea Company" },
      {
        name: "description",
        content:
          "Proposed trade bundle pairing premium leaf with high-yield CTC, plus custom blend advice and sample kits for West Bengal retailers.",
      },
      { property: "og:title", content: "Custom Blend Bundle — Finlay Tea Company" },
      {
        property: "og:description",
        content: "Premium leaf + commercial CTC pairings with blend advice tuned to your market.",
      },
    ],
    links: [{ rel: "canonical", href: "/custom-blend" }],
  }),
  component: CustomBlend,
});

const pairings = [
  {
    name: "Stall Volume Pairing",
    items: "Loose Dooars CTC (₹150/KG) + Loose CTC (₹250/KG)",
    why: "Strong colour and body with a lower blended cost per cup.",
  },
  {
    name: "Premium Upsell Pairing",
    items: "Darjeeling Loose Leaf (₹1,350/KG) + Loose CTC (₹250/KG)",
    why: "A premium hero tea for your menu, backed by a daily workhorse.",
  },
  {
    name: "Retail Shelf Starter",
    items: "ASE Gold Assam 250 Grams (₹105) + ASE Black 50 Grams (₹75) + Flavoured Packets",
    why: "A ready-to-sell mix across price points.",
  },
];

function CustomBlend() {
  return (
    <>
      <PageHero
        eyebrow="Proposed promotional concept"
        title="The Direct-To-Store Custom Blend Bundle"
      >
        Everything a growing tea business needs to stock smarter — offered on confirmation of batch
        availability, bulk logistics and pricing for your order.
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold">What's Included &rarr;</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Curated bulk pairings of premium leaf and high-yield CTC at clearly listed rates.",
            "Custom blend advice matched to your region's taste — strength, colour, aroma.",
            "Sample kit request before committing to volume.",
            "Mixed loose and retail-ready packet bundles, with savings where margins permit.",
          ].map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              {t}
            </li>
          ))}
        </ul>
        <h2 className="mt-16 text-3xl font-semibold">Sample Pairings &rarr;</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pairings.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl bg-forest p-6 text-forest-foreground"
            >
              <h3 className="text-xl font-semibold text-gold">{p.name}</h3>
              <p className="mt-3 font-semibold">{p.items}</p>
              <p className="mt-2 text-sm opacity-80">{p.why}</p>
              <a
                href={waLink(
                  `Hi, I'm interested in the ${p.name}: ${p.items}. Please share availability and a sample.`,
                )}
                target="_blank"
                rel="noreferrer"
                data-track="wa-blend"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-gold-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Request Custom Blend Sample
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
          This is a proposed offer! Bundle composition, any savings and delivery terms are confirmed
          individually by our trade desk based on current stock.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
