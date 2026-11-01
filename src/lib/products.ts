export const PHONE_DISPLAY = "(+91) 8276971566";
export const PHONE_TEL = "tel:+918276971566";
export const EMAIL = "contact@finlayteacompany.com";
export const WA_NUMBER = "918276971566";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  id: string;
  name: string;
  kind: "loose" | "packaged";
  unit: string;
  /** Price in ₹ for one unit; null = price on request */
  price: number | null;
  /** Price per kg in ₹ when known */
  pricePerKg: number | null;
  profile: string;
  bestFor: string;
};

export const products: Product[] = [
  {
    id: "darjeeling",
    name: "Darjeeling Loose Leaf Tea",
    kind: "loose",
    unit: "1 KG",
    price: 1350,
    pricePerKg: 1350,
    profile: "Whole leaf, muscatel aroma, light bright liquor",
    bestFor: "Premium menus, hotels, gifting retail",
  },
  {
    id: "ctc",
    name: "Loose CTC Tea",
    kind: "loose",
    unit: "1 KG",
    price: 250,
    pricePerKg: 250,
    profile: "Strong, malty, quick-brewing granules",
    bestFor: "Tea stalls, canteens, daily retail",
  },
  {
    id: "dooars-ctc",
    name: "Loose Dooars CTC Tea",
    kind: "loose",
    unit: "1 KG",
    price: 150,
    pricePerKg: 150,
    profile: "Bold colour, robust body, high cup yield",
    bestFor: "High-volume stalls, budget blends",
  },
  {
    id: "assam-blend",
    name: "Loose Blended Assam Tea",
    kind: "loose",
    unit: "1 KG",
    price: null,
    pricePerKg: null,
    profile: "Rich, brisk Assam character",
    bestFor: "Kirana shops, regional blends",
  },
  {
    id: "green-loose",
    name: "Loose Green Tea Leaves",
    kind: "loose",
    unit: "1 KG",
    price: null,
    pricePerKg: null,
    profile: "Fresh, grassy, light infusion",
    bestFor: "Cafés, wellness stores",
  },
  {
    id: "red-wine",
    name: "Red Wine Tea",
    kind: "loose",
    unit: "1 KG",
    price: null,
    pricePerKg: null,
    profile: "Unique specialty variant",
    bestFor: "Specialty shelves, curious customers",
  },
  {
    id: "ase-black",
    name: "ASE Black Tea",
    kind: "packaged",
    unit: "50 Grams Packet",
    price: 75,
    pricePerKg: 1500,
    profile: "Classic black tea",
    bestFor: "Counter-top retail",
  },
  {
    id: "ase-gold",
    name: "ASE Gold Assam Tea",
    kind: "packaged",
    unit: "250 Grams Packet",
    price: 105,
    pricePerKg: 420,
    profile: "Premium Assam strength",
    bestFor: "Family households, grocery shelves",
  },
  {
    id: "ase-desi",
    name: "ASE Desi CTC Tea",
    kind: "packaged",
    unit: "100 Grams Packet",
    price: null,
    pricePerKg: null,
    profile: "Strong desi kadak cup",
    bestFor: "Neighbourhood stores",
  },
  {
    id: "ase-regular",
    name: "ASE Regular CTC Tea",
    kind: "packaged",
    unit: "250 Grams Packet",
    price: null,
    pricePerKg: null,
    profile: "Everyday balanced CTC",
    bestFor: "Grocery & kirana",
  },
  {
    id: "ase-green",
    name: "ASE Standard Green Tea",
    kind: "packaged",
    unit: "50 Grams Packet",
    price: null,
    pricePerKg: null,
    profile: "Light green tea",
    bestFor: "Health-conscious shoppers",
  },
  {
    id: "josh",
    name: "Josh Tea",
    kind: "packaged",
    unit: "250 Grams Packet",
    price: null,
    pricePerKg: null,
    profile: "Energetic strong blend",
    bestFor: "Value retail",
  },
  {
    id: "elaichi",
    name: "Elaichi Flavored Tea",
    kind: "packaged",
    unit: "100 Grams Packet",
    price: null,
    pricePerKg: null,
    profile: "Cardamom-infused aroma",
    bestFor: "Festive & flavoured shelves",
  },
];

export const pricedLoose = products.filter((p) => p.kind === "loose" && p.pricePerKg !== null);

export function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}
