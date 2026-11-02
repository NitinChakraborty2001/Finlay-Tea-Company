import { createFileRoute } from "@tanstack/react-router";
import loose from "@/assets/loose-teas.jpg";
import packaged from "@/assets/packaged.jpg";
import { formatINR, products, waLink } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaBand, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Wholesale Tea Catalog & Prices — Finlay Tea Company" },
      {
        name: "description",
        content:
          "Loose Darjeeling ₹1,350/kg, CTC ₹250/kg, Dooars CTC ₹150/kg plus ASE packaged teas. Bulk CTC and Assam tea traders in West Bengal.",
      },
      { property: "og:title", content: "Wholesale Tea Catalog — Finlay Tea Company" },
      {
        property: "og:description",
        content:
          "Transparent per-kg and per-packet wholesale tea prices for retailers and distributors.",
      },
    ],
    links: [{ rel: "canonical", href: "/catalog" }],
  }),
  component: Catalog,
});

function Catalog() {
  const looseP = products.filter((p) => p.kind === "loose");
  const packP = products.filter((p) => p.kind === "packaged");
  return (
    <>
      <PageHero eyebrow="Wholesale catalog" title="Loose leaf & packaged teas, priced in the open!">
        Indicative trade rates! Tea is seasonal — confirm live prices and batch availability on
        WhatsApp.
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr]">
          <img src={loose} alt="Loose tea varieties" loading="lazy" className="rounded-2xl" />
          <div>
            <p className="eyebrow">Loose Tea · Per KG</p>
            <h2 className="mt-2 text-3xl font-semibold">Bulk Loose Tea</h2>
            <p className="mt-3 text-muted-foreground">
              From premium Darjeeling whole leaf to high-yield Dooars CTC for daily commercial
              blends.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {looseP.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr]">
            <img src={packaged} alt="Packaged tea range" loading="lazy" className="rounded-2xl" />
            <div>
              <p className="eyebrow">Packaged · Per Packet</p>
              <h2 className="mt-2 text-3xl font-semibold">Retail Distribution Range</h2>
              <p className="mt-3 text-muted-foreground">
                ASE, Josh and Elaichi house blends — shelf-ready for kirana and grocery stores.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packP.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Quick Price Sheet &rarr;</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-140 text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Pack</th>
                <th className="p-3">Price</th>
                <th className="p-3">Per KG</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-border">
                  <td className="p-3 font-semibold">{p.name}</td>
                  <td className="p-3">{p.unit}</td>
                  <td className="p-3">{p.price !== null ? formatINR(p.price) : "On Request"}</td>
                  <td className="p-3 text-muted-foreground">
                    {p.pricePerKg !== null ? formatINR(p.pricePerKg) : "—"}
                  </td>
                  <td className="p-3">
                    <a
                      href={waLink(`Price & availability for ${p.name} (${p.unit})?`)}
                      target="_blank"
                      rel="noreferrer"
                      data-track={`wa-table-${p.id}`}
                      className="font-semibold text-primary"
                    >
                      Enquire →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
