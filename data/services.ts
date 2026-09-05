import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Sparkles,
  Droplets,
  Compass,
  Home,
  Truck,
  PenTool,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  whatsappType:
    | "setup"
    | "customSetup"
    | "maintenance"
    | "fishGuidance"
    | "shipping"
    | "general";
}

export const services: Service[] = [
  {
    id: "aquarium-setup",
    title: "Aquarium Setup",
    description:
      "End-to-end setup of your aquarium — tank, substrate, filtration and cycling — done right the first time.",
    icon: Wrench,
    whatsappType: "setup",
  },
  {
    id: "custom-aquarium-setup",
    title: "Custom Aquarium Setup",
    description:
      "A tank designed around your space and vision, from size and shape to planting and hardscape.",
    icon: PenTool,
    whatsappType: "customSetup",
  },
  {
    id: "aquarium-maintenance",
    title: "Aquarium Maintenance",
    description:
      "Scheduled upkeep that keeps water parameters stable and your aquarium healthy long-term.",
    icon: Sparkles,
    whatsappType: "maintenance",
  },
  {
    id: "fish-tank-cleaning",
    title: "Fish Tank Cleaning",
    description:
      "Thorough cleaning of glass, substrate and filtration — for tanks that have drifted off track.",
    icon: Droplets,
    whatsappType: "maintenance",
  },
  {
    id: "fish-selection-guidance",
    title: "Fish Selection Guidance",
    description:
      "Advice on which fish suit your tank size, water type and experience level before you buy.",
    icon: Compass,
    whatsappType: "fishGuidance",
  },
  {
    id: "home-office-setup",
    title: "Home & Office Aquarium Setup",
    description:
      "Aquariums fitted to living rooms, lobbies and workspaces, sized and styled for the setting.",
    icon: Home,
    whatsappType: "customSetup",
  },
  {
    id: "delivery-shipping",
    title: "Delivery / Shipping",
    description: "Careful, reliable delivery of fish, tanks and equipment across Tamil Nadu.",
    icon: Truck,
    whatsappType: "shipping",
  },
];
