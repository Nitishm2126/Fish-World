// DEMO catalogue data for development. These are sample entries so the shop
// owner/developer can see the site working end-to-end — replace or extend
// with the real, current inventory before launch. Prices are left as
// "Price on Enquiry" wherever a verified price wasn't provided.

export type ProductCategory =
  | "FISHES"
  | "AQUARIUMS"
  | "FILTERS"
  | "MOTORS"
  | "FOOD"
  | "PLANTS"
  | "ACCESSORIES"
  | "IMPORTED";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  availability: "In Stock" | "Enquire for Stock" | "Made to Order";
  price: string | null; // null => "Price on Enquiry"
  image: string;
  featured?: boolean;
  features: string[];
}

const img = (name: string) => `/images/categories/${name}.svg`;

export const products: Product[] = [
  {
    id: "flowerhorn",
    name: "Flowerhorn",
    category: "FISHES",
    description:
      "A striking, hardy cichlid known for its prominent head hump and bold colouring — a centrepiece fish for a single-species tank.",
    availability: "Enquire for Stock",
    price: null,
    image: img("fish"),
    featured: true,
    features: ["Bold colour & pattern", "Territorial — best kept alone", "Hardy for beginners"],
  },
  {
    id: "guppy",
    name: "Guppy",
    category: "FISHES",
    description:
      "Colourful, easy-going livebearers that do well in community tanks. A great starting point for new aquarists.",
    availability: "In Stock",
    price: null,
    image: img("fish"),
    features: ["Community-friendly", "Breeds easily", "Low maintenance"],
  },
  {
    id: "molly",
    name: "Molly",
    category: "FISHES",
    description: "Peaceful, adaptable livebearers available in a range of colour forms.",
    availability: "In Stock",
    price: null,
    image: img("fish"),
    features: ["Adaptable to water types", "Community-friendly", "Active swimmer"],
  },
  {
    id: "betta",
    name: "Betta (Fighter Fish)",
    category: "FISHES",
    description:
      "The Siamese fighting fish — flowing fins and vivid colour. Best housed alone or with carefully chosen tank mates.",
    availability: "In Stock",
    price: null,
    image: img("fish"),
    featured: true,
    features: ["Vivid fin display", "Low bio-load", "Needs gentle filtration"],
  },
  {
    id: "oscar",
    name: "Oscar",
    category: "FISHES",
    description:
      "An intelligent, large-growing cichlid that recognises its keeper. Needs a spacious tank as it matures.",
    availability: "Enquire for Stock",
    price: null,
    image: img("fish"),
    features: ["Grows large — plan tank size", "Interactive personality", "Hardy water tolerance"],
  },
  {
    id: "goldfish",
    name: "Goldfish",
    category: "FISHES",
    description: "A classic cold-water favourite, ideal for beginners with a properly cycled tank.",
    availability: "In Stock",
    price: null,
    image: img("fish"),
    features: ["Cold-water friendly", "Long lifespan with care", "Great for beginners"],
  },
  {
    id: "mini-fibre-tank",
    name: "Mini Fibre Tank",
    category: "AQUARIUMS",
    description:
      "A compact, lightweight fibre tank suited for small spaces, desks and starter setups.",
    availability: "In Stock",
    price: null,
    image: img("aquariums"),
    features: ["Space-saving footprint", "Lightweight & durable", "Good for beginners"],
  },
  {
    id: "glass-aquarium",
    name: "Glass Aquarium",
    category: "AQUARIUMS",
    description: "Crystal-clear glass tank built for long-term display setups, available in multiple sizes.",
    availability: "Enquire for Stock",
    price: null,
    image: img("aquariums"),
    featured: true,
    features: ["High-clarity glass", "Multiple size options", "Built for display setups"],
  },
  {
    id: "planted-aquarium-setup",
    name: "Planted Aquarium Setup",
    category: "AQUARIUMS",
    description:
      "A complete planted-tank package — substrate, hardscape and live plants arranged as a ready aquascape.",
    availability: "Made to Order",
    price: null,
    image: img("plants"),
    featured: true,
    features: ["Live aquatic plants", "Aquascaped layout", "Setup handled by our team"],
  },
  {
    id: "java-fern",
    name: "Java Fern",
    category: "PLANTS",
    description: "A hardy, low-light aquatic plant that attaches to driftwood and rock.",
    availability: "In Stock",
    price: null,
    image: img("plants"),
    features: ["Low-light tolerant", "Attaches to wood/rock", "Beginner-friendly"],
  },
  {
    id: "anubias",
    name: "Anubias",
    category: "PLANTS",
    description: "A slow-growing, resilient plant that thrives across a wide range of tank conditions.",
    availability: "In Stock",
    price: null,
    image: img("plants"),
    features: ["Slow-growing & resilient", "Wide condition tolerance", "Great aquascape anchor"],
  },
  {
    id: "internal-filter",
    name: "Internal Filter",
    category: "FILTERS",
    description: "A compact submersible filter offering mechanical and biological filtration for small to mid tanks.",
    availability: "In Stock",
    price: null,
    image: img("filters"),
    features: ["Compact submersible design", "Mechanical + biological media", "Easy to clean"],
  },
  {
    id: "sponge-filter",
    name: "Sponge Filter",
    category: "FILTERS",
    description: "Gentle, air-driven filtration that's ideal for fry tanks, bettas and breeding setups.",
    availability: "In Stock",
    price: null,
    image: img("filters"),
    features: ["Gentle flow — fry safe", "Great biological surface area", "Simple to maintain"],
  },
  {
    id: "hang-on-filter",
    name: "Hang-on Filter",
    category: "FILTERS",
    description: "A hang-on-back filter for stronger flow and easy media access without a sump.",
    availability: "Enquire for Stock",
    price: null,
    image: img("filters"),
    features: ["Strong filtration flow", "Tool-free media access", "No drilling required"],
  },
  {
    id: "aquarium-motor",
    name: "Aquarium Water Motor",
    category: "MOTORS",
    description: "A reliable circulation motor for filtration systems and custom aquarium builds.",
    availability: "Enquire for Stock",
    price: null,
    image: img("motors"),
    features: ["Reliable circulation", "Suited to custom builds", "Available in multiple flow rates"],
  },
  {
    id: "tropical-fish-food",
    name: "Tropical Fish Food",
    category: "FOOD",
    description: "A balanced daily flake/pellet feed formulated for community tropical fish.",
    availability: "In Stock",
    price: null,
    image: img("food"),
    features: ["Balanced daily nutrition", "Suited to community tanks", "Enhances natural colour"],
  },
  {
    id: "betta-food",
    name: "Betta Food",
    category: "FOOD",
    description: "High-protein pellets sized and formulated specifically for bettas.",
    availability: "In Stock",
    price: null,
    image: img("food"),
    features: ["High-protein formula", "Right-sized pellets", "Supports fin & colour health"],
  },
  {
    id: "goldfish-food",
    name: "Goldfish Food",
    category: "FOOD",
    description: "A cold-water formula that supports healthy digestion in goldfish.",
    availability: "In Stock",
    price: null,
    image: img("food"),
    features: ["Cold-water formula", "Supports digestion", "Low water-fouling"],
  },
  {
    id: "air-pump",
    name: "Air Pump",
    category: "ACCESSORIES",
    description: "A quiet air pump for oxygenation, sponge filters and decorative air stones.",
    availability: "In Stock",
    price: null,
    image: img("accessories"),
    features: ["Quiet operation", "Drives sponge filters & stones", "Multiple outlet options"],
  },
  {
    id: "aquarium-light",
    name: "Aquarium Light",
    category: "ACCESSORIES",
    description: "An LED light fixture that brings out fish colour and supports live plants.",
    availability: "In Stock",
    price: null,
    image: img("accessories"),
    features: ["LED — energy efficient", "Plant-growth friendly spectrum", "Slim mounting profile"],
  },
  {
    id: "gravel",
    name: "Aquarium Gravel",
    category: "ACCESSORIES",
    description: "Aquarium-safe substrate gravel in a range of natural tones.",
    availability: "In Stock",
    price: null,
    image: img("accessories"),
    features: ["Aquarium-safe material", "Natural colour range", "Supports beneficial bacteria"],
  },
  {
    id: "decorative-accessories",
    name: "Decorative Accessories",
    category: "ACCESSORIES",
    description: "Ornaments, driftwood and hardscape pieces to bring a tank's layout together.",
    availability: "In Stock",
    price: null,
    image: img("accessories"),
    features: ["Safe aquarium materials", "Wide style range", "Finishing touch for aquascapes"],
  },
  {
    id: "imported-filter-media",
    name: "Imported Filter Media",
    category: "IMPORTED",
    description: "Premium imported filtration media for aquarists seeking higher-grade water quality.",
    availability: "Enquire for Stock",
    price: null,
    image: img("imported"),
    features: ["Imported, higher-grade media", "Improved water clarity", "For serious setups"],
  },
  {
    id: "imported-aquascaping-tools",
    name: "Imported Aquascaping Tools",
    category: "IMPORTED",
    description: "Precision imported tools for planting, trimming and shaping aquascapes.",
    availability: "Enquire for Stock",
    price: null,
    image: img("imported"),
    features: ["Precision-built tools", "Ideal for aquascaping", "Imported quality"],
  },
];

export const categories: { label: string; value: "ALL" | ProductCategory }[] = [
  { label: "All", value: "ALL" },
  { label: "Fishes", value: "FISHES" },
  { label: "Aquariums", value: "AQUARIUMS" },
  { label: "Filters", value: "FILTERS" },
  { label: "Motors", value: "MOTORS" },
  { label: "Food", value: "FOOD" },
  { label: "Plants", value: "PLANTS" },
  { label: "Accessories", value: "ACCESSORIES" },
  { label: "Imported", value: "IMPORTED" },
];
