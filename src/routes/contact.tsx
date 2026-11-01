import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, products, waLink } from "@/lib/products";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Bulk Tea Enquiry — Finlay Tea Company Trade Desk" },
      {
        name: "description",
        content:
          "Send a WhatsApp enquiry for live wholesale tea prices, truckload availability, new season arrivals or sample kits.",
      },
      { property: "og:title", content: "Bulk Tea Enquiry — Finlay Tea Company" },
      { property: "og:description", content: "Reach our trade desk on WhatsApp, phone or email." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const topics = [
  "Live Wholesale Prices",
  "Truckload Availability",
  "New Season Arrivals",
  "Sample Kit",
];

function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [product, setProduct] = useState(products[1]!.name);
  const [qty, setQty] = useState("");
  const [biz, setBiz] = useState("");
  const [city, setCity] = useState("");

  const msg = `Hello Finlay Tea Company,\nEnquiry: ${topic}\nProduct: ${product}\nQuantity: ${qty || "-"}\nBusiness: ${biz.trim() || "-"}\nCity: ${city.trim() || "-"}`;
  const field = "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 text-base";

  return (
    <>
      <PageHero eyebrow="Bulk enquiry" title="Talk To Our Trade Desk!">
        Build your enquiry below — it opens WhatsApp with everything filled in.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[3fr_2fr]">
        <form
          className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(msg), "_blank");
          }}
        >
          <fieldset>
            <legend className="text-sm font-semibold">I Want To Ask About:</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTopic(t)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${topic === t ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="block text-sm font-semibold">
            Product:
            <select className={field} value={product} onChange={(e) => setProduct(e.target.value)}>
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.unit})
                </option>
              ))}
              <option value="Mixed / Not Sure">Mixed / Not Sure</option>
            </select>
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Quantity:
              <input
                className={field}
                maxLength={50}
                placeholder="Example: 200 KG."
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </label>
            <label className="block text-sm font-semibold">
              City:
              <input
                className={field}
                maxLength={60}
                placeholder="Example: Chinsurah."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
          <label className="block text-sm font-semibold">
            Business Name:
            <input
              className={field}
              maxLength={100}
              value={biz}
              onChange={(e) => setBiz(e.target.value)}
            />
          </label>
          <button
            type="submit"
            data-track="wa-enquiry-form"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Send Enquiry On WhatsApp
          </button>
        </form>
        <aside className="space-y-4">
          <a
            href={PHONE_TEL}
            data-track="call-contact"
            className="flex items-center gap-4 rounded-2xl bg-forest p-5 text-forest-foreground"
          >
            <Phone className="h-6 w-6 text-gold" />
            <span>
              <span className="block text-sm opacity-80">Call Our Distribution Office</span>
              <span className="font-display text-xl">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            data-track="email-contact"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <Mail className="h-6 w-6 text-primary" />
            <span>
              <span className="block text-sm text-muted-foreground">E-Mail Address</span>
              <span className="font-semibold break-all">{EMAIL}</span>
            </span>
          </a>
        </aside>
      </section>
    </>
  );
}
