import { describe, expect, it } from "vitest";
import { calcMargin } from "@/lib/margin";
import { products } from "@/lib/products";

describe("margin calculator", () => {
  it("buying 100 kg Loose CTC at ₹250 and reselling at ₹320 gives ₹7,000 profit", () => {
    const r = calcMargin(250, 100, 320);
    expect(r.cost).toBe(25000);
    expect(r.profit).toBe(7000);
    expect(r.marginPct).toBeCloseTo(21.875);
  });
  it("uses the listed per-kg prices", () => {
    const byId = Object.fromEntries(products.map((p) => [p.id, p.pricePerKg]));
    expect(byId["darjeeling"]).toBe(1350);
    expect(byId["ctc"]).toBe(250);
    expect(byId["dooars-ctc"]).toBe(150);
  });
});
