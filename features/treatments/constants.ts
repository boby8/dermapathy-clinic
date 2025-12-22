export const treatmentTabs = [
  { value: "all", label: "All" },
  { value: "skin", label: "Skin" },
  { value: "hair", label: "Hair" },
  { value: "laser", label: "Laser" },
  { value: "cosmetic", label: "Cosmetic" },
  { value: "nails", label: "Nails" },
  { value: "sexual", label: "Sexual Disorders" },
  { value: "leprosy", label: "Leprosy" },
];

export const treatmentImages: Record<string, string> = {
  "Chemical Peels":
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
  "Laser Toning":
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  "Hair PRP":
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
  "Acne Scar Treatment":
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
  "Hair Transplant":
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
  "Botox & Fillers":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
  "Laser Hair Removal":
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  "Tattoo Removal":
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  Hydrafacial:
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
  "Nail Diseases Treatment":
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop",
  "Sexual Disorders":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
  "Leprosy Treatment":
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
};

export const treatments = {
  all: [
    {
      title: "Chemical Peels",
      category: "skin",
      description: "Safe & effective exfoliation for glow and pigmentation.",
    },
    {
      title: "Laser Toning",
      category: "laser",
      description: "Advanced Q-switch technology for brightness.",
    },
    {
      title: "Hair PRP",
      category: "hair",
      description: "Growth stimulation for hair thinning and hair fall.",
    },
    {
      title: "Acne Scar Treatment",
      category: "skin",
      description: "Microneedling + Laser for deep scar reduction.",
    },
    {
      title: "Hair Transplant",
      category: "hair",
      description: "Permanent solution for hair loss and baldness.",
    },
    {
      title: "Botox & Fillers",
      category: "cosmetic",
      description: "Non-surgical anti-aging treatments.",
    },
    {
      title: "Laser Hair Removal",
      category: "laser",
      description: "Painless, long-lasting hair removal for all skin types.",
    },
    {
      title: "Tattoo Removal",
      category: "laser",
      description: "Advanced laser technology for safe tattoo removal.",
    },
    {
      title: "Hydrafacial",
      category: "cosmetic",
      description: "Deep cleansing and hydration treatment.",
    },
    {
      title: "Nail Diseases Treatment",
      category: "nails",
      description:
        "Treatment for twenty nails dystrophy, onychomycosis, ingrown toe nail, etc.",
    },
    {
      title: "Sexual Disorders",
      category: "sexual",
      description:
        "Treatment for sexually transmitted diseases, secondary syphilis, vaginal discharge, etc.",
    },
    {
      title: "Leprosy Treatment",
      category: "leprosy",
      description: "Comprehensive care and treatment for leprosy patients.",
    },
  ],
  skin: [
    {
      title: "Chemical Peels",
      description: "Safe & effective exfoliation for glow and pigmentation.",
    },
    {
      title: "Acne Scar Treatment",
      description: "Microneedling + Laser for deep scar reduction.",
    },
  ],
  hair: [
    {
      title: "Hair PRP",
      description: "Growth stimulation for hair thinning and hair fall.",
    },
    {
      title: "Hair Transplant",
      description: "Permanent solution for hair loss and baldness.",
    },
  ],
  laser: [
    {
      title: "Laser Toning",
      description: "Advanced Q-switch technology for brightness.",
    },
    {
      title: "Laser Hair Removal",
      description: "Painless, long-lasting hair removal for all skin types.",
    },
  ],
  cosmetic: [
    {
      title: "Botox & Fillers",
      description: "Non-surgical anti-aging treatments.",
    },
    {
      title: "Hydrafacial",
      description: "Deep cleansing and hydration treatment.",
    },
  ],
  nails: [
    {
      title: "Nail Diseases Treatment",
      description:
        "Treatment for twenty nails dystrophy, onychomycosis, ingrown toe nail, etc.",
    },
  ],
  sexual: [
    {
      title: "Sexual Disorders",
      description:
        "Treatment for sexually transmitted diseases, secondary syphilis, vaginal discharge, etc.",
    },
  ],
  leprosy: [
    {
      title: "Leprosy Treatment",
      description: "Comprehensive care and treatment for leprosy patients.",
    },
  ],
};
