export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "skin" | "hair" | "sunscreen" | "supplements";
  image?: string;
  inStock: boolean;
  rating?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aclaris Photon 360 Hydra Sunscreen Fluid Cream SPF 50+",
    description: "Advanced broad-spectrum sunscreen with hydrating properties",
    price: 919,
    originalPrice: 990,
    category: "sunscreen",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Ceuticoz Moduseb Moist Oil-free Moisturiser",
    description: "Lightweight, non-comedogenic moisturizer for oily skin",
    price: 497,
    originalPrice: 550,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.3,
  },
  {
    id: "3",
    name: "Ceuticoz Moduseb Anti-Acne Gel",
    description: "Effective acne treatment gel with salicylic acid",
    price: 538,
    originalPrice: 575,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.6,
  },
  {
    id: "4",
    name: "Osaine AHA Peeling",
    description: "Gentle exfoliating treatment with alpha hydroxy acids",
    price: 1715,
    originalPrice: 1805,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e785b?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.4,
  },
  {
    id: "5",
    name: "Fixderma Shadow Gel SPF 30",
    description: "Lightweight sunscreen gel for daily protection",
    price: 412,
    originalPrice: 450,
    category: "sunscreen",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.2,
  },
  {
    id: "6",
    name: "Perobar 5% Soap",
    description: "Medicated soap for acne-prone skin",
    price: 183,
    originalPrice: 193,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.5,
  },
  {
    id: "7",
    name: "Dermatica HA Pure Serum",
    description: "Hyaluronic acid serum for intense hydration",
    price: 1190,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.7,
  },
  {
    id: "8",
    name: "Hair Growth Supplement",
    description: "Essential vitamins and minerals for healthy hair",
    price: 699,
    originalPrice: 799,
    category: "supplements",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.3,
  },
  {
    id: "9",
    name: "Anti-Hair Fall Shampoo",
    description: "Strengthens hair roots and reduces hair fall",
    price: 549,
    originalPrice: 599,
    category: "hair",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.4,
  },
  {
    id: "10",
    name: "Hair PRP Serum",
    description: "Topical serum to boost hair growth",
    price: 1299,
    originalPrice: 1499,
    category: "hair",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.6,
  },
  {
    id: "11",
    name: "Vitamin C Brightening Serum",
    description: "Brightens skin and reduces pigmentation",
    price: 899,
    originalPrice: 999,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.5,
  },
  {
    id: "12",
    name: "Retinol Night Cream",
    description: "Anti-aging cream with retinol for night use",
    price: 1299,
    originalPrice: 1499,
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    inStock: true,
    rating: 4.6,
  },
];

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "skin", label: "Skin Care" },
  { id: "hair", label: "Hair Care" },
  { id: "sunscreen", label: "Sunscreen" },
  { id: "supplements", label: "Supplements" },
];
