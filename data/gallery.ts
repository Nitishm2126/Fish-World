export interface GalleryItem {
  id: string;
  image: string;
  category:
    | "Home Aquariums"
    | "Office Aquariums"
    | "Custom Tanks"
    | "Planted Aquariums"
    | "Fish Displays";
  span?: "tall" | "wide" | "normal";
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: "/images/gallery/home-aquarium-1.svg", category: "Home Aquariums", span: "tall" },
  { id: "g2", image: "/images/gallery/planted-1.svg", category: "Planted Aquariums" },
  { id: "g3", image: "/images/gallery/office-aquarium-1.svg", category: "Office Aquariums", span: "wide" },
  { id: "g4", image: "/images/gallery/custom-tank-1.svg", category: "Custom Tanks" },
  { id: "g5", image: "/images/gallery/fish-display-1.svg", category: "Fish Displays", span: "tall" },
  { id: "g6", image: "/images/gallery/home-aquarium-2.svg", category: "Home Aquariums" },
  { id: "g7", image: "/images/gallery/custom-tank-2.svg", category: "Custom Tanks", span: "wide" },
  { id: "g8", image: "/images/gallery/fish-display-2.svg", category: "Fish Displays" },
];

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating?: number;
}

// Sample / demo testimonials — clearly placeholders until real, verified
// customer reviews are collected. Do not present these as real quotes.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Demo review — Ambattur customer",
    text: "Placeholder testimonial slot. Replace with a real, verified customer review before publishing.",
  },
  {
    id: "t2",
    name: "Demo review — Avadi customer",
    text: "Placeholder testimonial slot. Replace with a real, verified customer review before publishing.",
  },
  {
    id: "t3",
    name: "Demo review — Chennai customer",
    text: "Placeholder testimonial slot. Replace with a real, verified customer review before publishing.",
  },
];
