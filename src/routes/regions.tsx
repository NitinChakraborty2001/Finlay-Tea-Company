import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/products";
import { CtaBand, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/regions")({
  head: () => ({
    meta: [
      { title: "Tea Supply in Kolkata, Hooghly & West Bengal — Finlay Tea" },
      {
        name: "description",
        content:
          "Loose tea distributor in Hooghly and tea wholesaler in Kolkata, supplying bulk Assam and CTC tea across West Bengal.",
      },
      { property: "og:title", content: "Where We Trade — Finlay Tea Company" },
      {
        property: "og:description",
        content: "Active tea trading across Kolkata, Hooghly and West Bengal.",
      },
    ],
    links: [{ rel: "canonical", href: "/regions" }],
  }),
  component: Regions,
});

const regions = [
  {
    name: "Kolkata",
    text: "Serving the Kolkata tea market's retailers, stall owners, hotels and distributors.",
  },
  {
    name: "Hooghly",
    text: "Loose tea and CTC supply for Hooghly district shops and regional distributors.",
  },
  {
    name: "Across West Bengal",
    text: "Bulk Assam, Dooars and CTC supply for wider regional networks — enquire for your town.",
  },
];

function Regions() {
  return (
    <>
      <PageHero
        eyebrow="Operational footprint"
        title="Trading Across Kolkata, Hooghly & West Bengal!"
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-3">
        {regions.map((r) => (
          <article
            key={r.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <MapPin className="h-7 w-7 text-earth" />
            <h2 className="mt-3 text-2xl font-semibold">{r.name}</h2>
            <p className="mt-2 flex-1 text-muted-foreground">{r.text}</p>
            <a
              href={waLink(
                `Hello, I'm a buyer in ${r.name}. Please share wholesale prices and delivery options.`,
              )}
              target="_blank"
              rel="noreferrer"
              data-track={`wa-region-${r.name}`}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire For {r.name}
            </a>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
