import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, MessageCircle, Mail, Leaf } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/products";

const nav = [
  { to: "/catalog", label: "Catalog" },
  { to: "/calculator", label: "Margin Calculator" },
  { to: "/custom-blend", label: "Custom Blend Offer" },
  { to: "/regions", label: "Regions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Enquire" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Finlay Tea Company</span>
            <span className="block text-[11px] text-muted-foreground">
              By A. S. Enterprises · Est. 2017.
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={PHONE_TEL}
            data-track="call-header"
            className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Call Office
          </a>
        </div>
        <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background lg:hidden">
      <a
        href={PHONE_TEL}
        data-track="call-mobile-bar"
        className="flex items-center justify-center gap-2 py-3 font-semibold text-primary"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={waLink("Hello Finlay Tea Company, I'd like wholesale prices.")}
        target="_blank"
        rel="noreferrer"
        data-track="wa-mobile-bar"
        className="flex items-center justify-center gap-2 bg-whatsapp py-3 font-semibold text-primary-foreground"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest pb-20 text-forest-foreground lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">Finlay Tea Company</p>
          <p className="mt-1 text-sm opacity-80">
            By A. S. Enterprises · Proprietorship Firm · Est. 2017.
          </p>
          <p className="mt-4 max-w-md text-sm opacity-80">
            Exceptional Freshness, Direct Procurement — Premium Tea Engineered For Profitability!
            Trader & wholesaler of loose tea, Assam tea and CTC blends.
          </p>
        </div>
        <div>
          <p className="font-semibold">Markets:</p>
          <ul className="mt-3 space-y-1.5 text-sm opacity-80">
            <li>Kolkata Tea Market</li>
            <li>Hooghly</li>
            <li>West Bengal</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Trade Desk:</p>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>
              <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-gold">
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/15 py-4 text-center text-xs opacity-70">
        Copyright © {new Date().getFullYear()} Finlay Tea Company - All Rights Reserved! Powered By{" "}
        <a href="https://www.nexadigitalservices.agency">Nexa</a>, A Digital Agency By{" "}
        <a href="https://www.linkedin.com/in/NitinChakraborty2001/">Nitin Chakraborty</a>.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg opacity-85">{children}</div>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-gold-gradient">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gold-foreground">
            Ready to restock at source prices?
          </h2>
          <p className="mt-2 text-gold-foreground/80">
            Ask for live wholesale rates, truckload availability or a sample kit.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={waLink("Hello, I'd like live wholesale prices and availability.")}
            target="_blank"
            rel="noreferrer"
            data-track="wa-cta-band"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-forest-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Chat With A Trade Specialist
          </a>
          <a
            href={PHONE_TEL}
            data-track="call-cta-band"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-3 font-semibold text-forest"
          >
            <Phone className="h-4 w-4" />
            Call Our Distribution Office
          </a>
        </div>
      </div>
    </section>
  );
}
