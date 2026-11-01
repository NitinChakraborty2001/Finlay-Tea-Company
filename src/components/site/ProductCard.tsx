import { MessageCircle } from "lucide-react";
import { formatINR, waLink, type Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
          {p.unit}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{p.profile}.</p>
      <p className="mt-1 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Best For:</span> {p.bestFor}.
      </p>
      <div className="mt-auto flex items-end justify-between pt-5">
        <p className="font-display text-2xl font-semibold text-primary">
          {p.price !== null ? (
            <>
              {formatINR(p.price)}
              <span className="ml-1 text-sm font-sans font-normal text-muted-foreground">
                / {p.kind === "loose" ? "KG" : "Packet"}
              </span>
            </>
          ) : (
            <span className="text-base text-earth">Price On Request</span>
          )}
        </p>
        <a
          href={waLink(`Hello, I'd like wholesale price & availability for ${p.name} (${p.unit}).`)}
          target="_blank"
          rel="noreferrer"
          data-track={`wa-product-${p.id}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-2 text-xs font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire
        </a>
      </div>
    </article>
  );
}
