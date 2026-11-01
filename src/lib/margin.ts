export type MarginResult = {
  cost: number;
  revenue: number;
  profit: number;
  marginPct: number;
};

/** Indicative gross margin: buy qtyKg at costPerKg, resell at resalePerKg. */
export function calcMargin(costPerKg: number, qtyKg: number, resalePerKg: number): MarginResult {
  const q = Math.max(0, qtyKg);
  const cost = costPerKg * q;
  const revenue = resalePerKg * q;
  const profit = revenue - cost;
  const marginPct = revenue > 0 ? (profit / revenue) * 100 : 0;
  return { cost, revenue, profit, marginPct };
}
