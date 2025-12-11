export interface SkinType {
  id: string;
  name: string;
  description: string;
  recommendations: string[];
}

export interface HairType {
  id: string;
  name: string;
  description: string;
  recommendations: string[];
}

export const skinTypes: SkinType[] = [
  {
    id: "oily",
    name: "Oily Skin",
    description: "Excess sebum production, enlarged pores, prone to acne",
    recommendations: [
      "Oil-free cleansers",
      "Non-comedogenic moisturizers",
      "Salicylic acid products",
      "Clay masks",
    ],
  },
  {
    id: "dry",
    name: "Dry Skin",
    description: "Tight feeling, flakiness, fine lines, sensitivity",
    recommendations: [
      "Hydrating cleansers",
      "Rich moisturizers",
      "Hyaluronic acid serums",
      "Gentle exfoliation",
    ],
  },
  {
    id: "combination",
    name: "Combination Skin",
    description: "Oily T-zone, dry cheeks, mixed concerns",
    recommendations: [
      "Balanced cleansers",
      "Lightweight moisturizers",
      "Targeted treatments",
      "Multi-masking",
    ],
  },
  {
    id: "sensitive",
    name: "Sensitive Skin",
    description: "Redness, irritation, reactivity to products",
    recommendations: [
      "Fragrance-free products",
      "Gentle formulations",
      "Soothing ingredients",
      "Patch testing",
    ],
  },
];

export const hairTypes: HairType[] = [
  {
    id: "straight",
    name: "Straight Hair",
    description: "Smooth, fine texture, tends to get oily",
    recommendations: [
      "Volumizing shampoos",
      "Lightweight conditioners",
      "Dry shampoo",
      "Texturizing products",
    ],
  },
  {
    id: "wavy",
    name: "Wavy Hair",
    description: "Natural wave pattern, medium texture",
    recommendations: [
      "Moisturizing shampoos",
      "Curl-enhancing products",
      "Leave-in conditioners",
      "Anti-frizz serums",
    ],
  },
  {
    id: "curly",
    name: "Curly Hair",
    description: "Defined curls, prone to dryness and frizz",
    recommendations: [
      "Sulfate-free shampoos",
      "Deep conditioners",
      "Curl creams",
      "Oil treatments",
    ],
  },
  {
    id: "coily",
    name: "Coily Hair",
    description: "Tight curls, very dry, needs intense moisture",
    recommendations: [
      "Co-washing",
      "Rich conditioners",
      "Butter-based products",
      "Protective styling",
    ],
  },
];
