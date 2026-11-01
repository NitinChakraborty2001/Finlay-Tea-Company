import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { formatINR, pricedLoose, waLink } from "@/lib/products";
import { calcMargin } from "@/lib/margin";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Tea Margin Calculator For Retailers — Finlay Tea Company" },
      {
        name: "description",
        content:
          "Estimate your gross margin buying bulk CTC, Dooars or Darjeeling loose tea direct from a West Bengal wholesaler.",
      },
      { property: "og:title", content: "Calculate Your Tea Margin — Finlay Tea Company" },
      {
        property: "og:description",
        content: "See what direct-from-garden wholesale pricing could mean for your shop.",
      },
    ],
    links: [{ rel: "canonical", href: "/calculator" }],
  }),
  component: Calculator,
});

function Calculator() {
  const [id, setId] = useState(pricedLoose[1]!.id);
  const [qty, setQty] = useState(100);
  const product = pricedLoose.find((p) => p.id === id)!;
  const [resale, setResale] = useState(Math.round(product.pricePerKg! * 1.3));
  const r = calcMargin(product.pricePerKg!, qty, resale);

  const field = "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 text-base";
  return (
    <>
      <PageHero eyebrow="Margin calculator" title="Calculate your margin before you order!">
        Pick a loose tea, and enter your volume and your selling price per kilogram.
      </PageHero>
      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-2">
        <div className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card">
          <label className="block text-sm font-semibold">
            Tea
            <select
              className={field}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
                const p = pricedLoose.find((x) => x.id === e.target.value)!;
                setResale(Math.round(p.pricePerKg! * 1.3));
              }}
            >
              {pricedLoose.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {formatINR(p.pricePerKg!)}/KG
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold">
            Quantity (KG)
            <input
              type="number"
              min={1}
              className={field}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </label>
          <label className="block text-sm font-semibold">
            Your Selling Price (₹ Per KG)
            <input
              type="number"
              min={0}
              className={field}
              value={resale}
              onChange={(e) => setResale(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="rounded-2xl bg-forest p-6 text-forest-foreground">
          <p className="text-sm opacity-80">Your Purchase Cost &rarr;</p>
          <p className="font-display text-3xl">{formatINR(r.cost)}</p>
          <p className="mt-4 text-sm opacity-80">Your Sales Revenue &rarr;</p>
          <p className="font-display text-3xl">{formatINR(r.revenue)}</p>
          <div className="mt-6 rounded-xl bg-gold-gradient p-4 text-gold-foreground">
            <p className="text-sm">Estimated Gross Profit &rarr;</p>
            <p className="font-display text-4xl font-semibold">{formatINR(r.profit)}/-</p>
            <p className="text-sm">{r.marginPct.toFixed(1)}% Gross Margin.</p>
          </div>
          <p className="mt-4 text-xs opacity-75">
            Indicative only, using our listed rate. Excludes transport, taxes and packing! Confirm
            live rates with our trade desk.
          </p>
          <a
            href={waLink(
              `Hi, I'm looking at ${qty} kg of ${product.name}. Please confirm the live wholesale rate.`,
            )}
            target="_blank"
            rel="noreferrer"
            data-track="wa-calculator"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Confirm This Rate On WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
