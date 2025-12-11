export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: "skin" | "hair" | "general";
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Your Guide To Getting Rid Of Blackheads Without Damaging Skin",
    excerpt:
      "No more squeezing the pores - learn the right way to treat blackheads safely and effectively.",
    content:
      "As a beauty editor, there are two things I am constantly asked about: how to get rid of blackheads and how to prevent them from coming back. Blackheads are a common skin concern that affects people of all ages. The key is to treat them properly without causing damage to your skin barrier...",
    author: "Dr. [Name]",
    date: "August 14, 2023",
    category: "skin",
  },
  {
    id: "2",
    title: "Curious about facial masks? Here's what you need to know",
    excerpt:
      "Beauty tips: Curious about facial masks? Here's everything you need to know about choosing and using the right mask for your skin type.",
    content:
      "Facial masks have become an essential part of skincare routines, but with so many options available, it can be overwhelming to choose the right one. Understanding your skin type and concerns is crucial for selecting the most effective mask...",
    author: "Dr. [Name]",
    date: "June 26, 2023",
    category: "skin",
  },
  {
    id: "3",
    title: "8 supplements that could help you get rid of persistent acne",
    excerpt:
      "Acne is multi-faceted. There's usually no single solution, but these supplements can support your treatment plan.",
    content:
      "Acne is a complex condition that often requires a multi-faceted approach. While topical treatments and medications are primary solutions, certain supplements can support your skin health and complement your treatment plan...",
    author: "Dr. [Name]",
    date: "June 13, 2023",
    category: "skin",
  },
  {
    id: "4",
    title:
      "Here's Your Expert-Approved Guide On How To Use Antioxidants According To Your Age",
    excerpt:
      "Antioxidants are essential for your skin but optimizing them according to your age can maximize their benefits.",
    content:
      "Antioxidants play a crucial role in protecting your skin from environmental damage and premature aging. However, the type and concentration of antioxidants you need can vary significantly based on your age and skin concerns...",
    author: "Dr. [Name]",
    date: "April 19, 2023",
    category: "skin",
  },
  {
    id: "5",
    title: "Understanding Hair Fall: Causes and Solutions",
    excerpt:
      "Comprehensive guide to understanding hair fall patterns, causes, and evidence-based treatment approaches.",
    content:
      "Hair fall is one of the most common concerns we see in our clinic. Understanding the root cause is essential for effective treatment. From hormonal changes to nutritional deficiencies, multiple factors can contribute to hair loss...",
    author: "Dr. [Name]",
    date: "May 15, 2023",
    category: "hair",
  },
  {
    id: "6",
    title: "The Complete Guide to Sunscreen: Why SPF Matters",
    excerpt:
      "Learn why sunscreen is your best anti-aging tool and how to choose the right one for your skin type.",
    content:
      "Sunscreen is arguably the most important product in your skincare routine. It protects against UV damage, prevents premature aging, and reduces the risk of skin cancer. But with so many options available, choosing the right sunscreen can be confusing...",
    author: "Dr. [Name]",
    date: "July 8, 2023",
    category: "general",
  },
];
