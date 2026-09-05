import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const SITE_URL = "https://fishworldambattur.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fish World Ambattur | Aquarium Fishes, Tanks & Aquarium Services",
    template: "%s | Fish World Ambattur",
  },
  description:
    "Fish World Ambattur is an aquatic pet store with 25+ years of experience offering aquarium fishes, tanks, aquarium setup, maintenance, cleaning, food, filters and accessories with shipping across Tamil Nadu.",
  keywords: [
    "Fish World Ambattur",
    "aquarium shop Chennai",
    "aquarium setup Ambattur",
    "fish shop Ambattur",
    "aquarium maintenance Chennai",
    "aquarium tanks Tamil Nadu",
  ],
  openGraph: {
    title: "Fish World Ambattur | Aquarium Fishes, Tanks & Aquarium Services",
    description:
      "Aquatic pet store in Ambattur, Chennai with 25+ years of experience. Fishes, aquariums, setup, maintenance and shipping across Tamil Nadu.",
    url: SITE_URL,
    siteName: "Fish World Ambattur",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fish World Ambattur | Aquarium Fishes, Tanks & Aquarium Services",
    description:
      "Aquatic pet store in Ambattur, Chennai with 25+ years of experience. Fishes, aquariums, setup, maintenance and shipping across Tamil Nadu.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-abyss text-pearl overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
