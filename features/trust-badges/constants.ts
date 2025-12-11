import { Shield, Truck, Award, CheckCircle } from "lucide-react";

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: typeof Shield;
}

export const trustBadges: TrustBadge[] = [
  {
    id: "1",
    title: "Easy Recommendations",
    description: "By leading Dermatologist",
    icon: Award,
  },
  {
    id: "2",
    title: "Free Shipping",
    description: "Superfast and Easy",
    icon: Truck,
  },
  {
    id: "3",
    title: "Dermatologist approved",
    description: "Only the best Products",
    icon: CheckCircle,
  },
  {
    id: "4",
    title: "100% Authentic",
    description: "Fresh Stock – Long Expiry",
    icon: Shield,
  },
];
