import { Award, GraduationCap, Stethoscope } from "lucide-react";

export interface Expert {
  id: string;
  name: string;
  title: string;
  qualifications: string[];
  specialization: string;
  bio: string;
  image: string;
  icon: typeof Award;
}

export const experts: Expert[] = [
  {
    id: "1",
    name: "Dr. [Doctor Name]",
    title: "Founder & Lead Dermatologist",
    qualifications: [
      "M.B.B.S.",
      "M.D. (Dermatology, Venereology & Leprosy)",
      "MRCP (SCE), UK",
    ],
    specialization: "Clinical Dermatology & Aesthetic Treatments",
    bio: "The founder member at Dermapathy, a skin care hub specializing in accessible and affordable dermatology care. Passionate about making skin care accessible for all, with treatment programmes tailored to the individual, combining intelligent skin care with medical and aesthetic treatments.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    icon: Award,
  },
  {
    id: "2",
    name: "Dr. [Second Doctor]",
    title: "Dermatologist & Hair Transplant Surgeon",
    qualifications: [
      "M.B.B.S.",
      "M.D. (Dermatology, Venereology & Leprosy)",
      "MRCP (SCE), UK",
      "Fellowship in Cosmetic & Laser Surgery",
    ],
    specialization: "Hair Transplant & Cosmetic Dermatology",
    bio: "A dermatologist and hair transplant surgeon, trained under world-renowned hair transplant surgeons. Completed fellowship in cosmetic and laser surgery from Ludwig-Maximilian University, Munich, Germany. Highly regarded for expertise in treating stubborn skin and hair conditions.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    icon: Stethoscope,
  },
  {
    id: "3",
    name: "Dr. [Third Doctor]",
    title: "Board-Certified Dermatologist",
    qualifications: ["MBBS", "MD Dermatology"],
    specialization: "Patient-Centric Dermatology",
    bio: "Board-certified dermatologist known for patient-centric and academically driven approach to skin and hair health. Deeply committed to understanding each patient's unique skin. Treatment style blends evidence-based dermatological therapies with a holistic outlook.",
    image:
      "https://images.unsplash.com/photo-1594824476968-48dfc9d0d1b1?w=400&h=400&fit=crop",
    icon: GraduationCap,
  },
];
