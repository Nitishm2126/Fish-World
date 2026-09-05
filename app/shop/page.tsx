import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse aquarium fishes, tanks, filters, motors, food, plants and accessories from Fish World Ambattur. Enquire directly on WhatsApp.",
};

export default function ShopPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-cyan text-xs sm:text-sm tracking-[0.2em] mb-2 sm:mb-3 uppercase font-medium">Catalogue</p>
        <h1 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-pearl">
          Shop our aquarium collection
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-seafoam max-w-2xl leading-relaxed">
          Demo catalogue shown below — every item can be enquired about directly on WhatsApp
          for current price and availability.
        </p>

        <div className="mt-8 sm:mt-10">
          <ShopClient />
        </div>
      </div>
    </div>
  );
}
