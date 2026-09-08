import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse aquarium fishes, tanks, filters, motors, food, plants and accessories from Fish World Ambattur. Enquire directly on WhatsApp.",
};

export default function ShopPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Deep ocean ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 175, 193, 0.12) 0%, rgba(7, 75, 104, 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-aqua text-[0.65rem] sm:text-xs tracking-[0.3em] mb-3 uppercase font-semibold flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-aqua opacity-60" />
          Catalogue
        </p>
        <h1 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-pearl leading-tight">
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

