export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  image?: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Dermapathy Featured in Health Magazine",
    source: "Health Today",
    date: "2024",
  },
  {
    id: "2",
    title: "Expert Tips on Skincare Routine",
    source: "Beauty Weekly",
    date: "2024",
  },
  {
    id: "3",
    title: "Innovative Hair Treatment Methods",
    source: "Dermatology News",
    date: "2024",
  },
  {
    id: "4",
    title: "Patient Success Stories",
    source: "Medical Times",
    date: "2024",
  },
  {
    id: "5",
    title: "Advanced Laser Technology",
    source: "Skin Care Journal",
    date: "2024",
  },
  {
    id: "6",
    title: "Award for Excellence in Dermatology",
    source: "Healthcare Awards",
    date: "2024",
  },
];
