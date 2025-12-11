export interface Concern {
  id: string;
  name: string;
  category: "skin" | "hair";
  description: string;
  treatments: string[];
}

export const skinConcerns: Concern[] = [
  {
    id: "acne",
    name: "Acne",
    category: "skin",
    description: "Active breakouts, blackheads, whiteheads",
    treatments: ["Chemical Peels", "Laser Toning", "Acne Scar Treatment"],
  },
  {
    id: "anti-aging",
    name: "Anti-Aging",
    category: "skin",
    description: "Fine lines, wrinkles, loss of elasticity",
    treatments: ["Botox & Fillers", "Laser Toning", "Chemical Peels"],
  },
  {
    id: "pigmentation",
    name: "Face Pigmentation",
    category: "skin",
    description: "Dark spots, melasma, uneven skin tone",
    treatments: ["Laser Toning", "Chemical Peels", "Acne Scar Treatment"],
  },
  {
    id: "dark-circles",
    name: "Dark Circles",
    category: "skin",
    description: "Under-eye darkness, puffiness",
    treatments: ["Laser Toning", "Botox & Fillers", "Chemical Peels"],
  },
  {
    id: "open-pores",
    name: "Open Pores",
    category: "skin",
    description: "Enlarged pores, rough texture",
    treatments: ["Chemical Peels", "Laser Toning", "Hydrafacial"],
  },
  {
    id: "stretch-marks",
    name: "Stretch Marks",
    category: "skin",
    description: "Body pigmentation, scars",
    treatments: ["Laser Toning", "Chemical Peels", "Microneedling"],
  },
];

export const hairConcerns: Concern[] = [
  {
    id: "hair-fall",
    name: "Hair Fall",
    category: "hair",
    description: "Excessive shedding, thinning",
    treatments: ["Hair PRP", "Hair Transplant", "Supplements"],
  },
  {
    id: "dandruff",
    name: "Anti Dandruff",
    category: "hair",
    description: "Flaky scalp, itching",
    treatments: ["Medicated Shampoos", "Scalp Treatments"],
  },
  {
    id: "frizzy-hair",
    name: "Frizzy Hair",
    category: "hair",
    description: "Unmanageable, dry hair",
    treatments: ["Hair PRP", "Deep Conditioning", "Serums"],
  },
  {
    id: "grey-hair",
    name: "Grey Hair",
    category: "hair",
    description: "Premature greying",
    treatments: ["Supplements", "Hair PRP", "Color Treatments"],
  },
];
