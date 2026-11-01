import { createFileRoute } from "@tanstack/react-router";
import warehouse from "@/assets/warehouse.jpg";
import { CtaBand, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About A. S. Enterprises — Finlay Tea Company, Est. 2017" },
      {
        name: "description",
        content:
          "Finlay Tea Company by A. S. Enterprises: a proprietorship tea trader and wholesaler serving Kolkata and Hooghly since 2017.",
      },
      { property: "og:title", content: "About Finlay Tea Company" },
      {
        property: "og:description",
        content:
          "Direct-from-garden tea trading built on quality and long-term trade relationships.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A. S. Enterprises — Trading Tea The Direct Way Since 2017."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p>
            Finlay Tea Company is a proprietorship firm under A. S. Enterprises, established in
            2017. We trade and wholesale premium-grade loose tea, authentic Assam tea and robust CTC
            blends across the Hooghly and Kolkata tea markets.
          </p>
          <p>
            We source directly from reputed tea gardens and authorised suppliers. That keeps our
            stock fresh, our aroma rich and our flavour consistent — and keeps unnecessary margins
            out of your purchase price.
          </p>
          <p>
            Our focus is simple: strict quality checks and long-term relationships with commercial
            clients, retailers and distributors.
          </p>
        </div>
        <img
          src={warehouse}
          alt="Tea warehouse"
          loading="lazy"
          className="rounded-3xl shadow-card"
        />
      </section>
      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-semibold">Business Details &rarr;</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Legal entity", "A. S. Enterprises (Proprietorship)"],
              ["Trade name", "Finlay Tea Company"],
              ["Established", "2017"],
              ["Business type", "Trader & Wholesaler"],
              ["GSTIN", "To Be Added"],
              ["FSSAI licence", "To Be Added"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
