// Central place for the shop's WhatsApp number and every pre-filled message.
// Edit WHATSAPP_NUMBER if the business changes its number.

export const WHATSAPP_NUMBER = "918072705771"; // country code + number, no symbols
export const PHONE_DISPLAY = "+91 80727 05771";
export const PHONE_TEL = "+918072705771";

function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const whatsapp = {
  general: () =>
    buildWhatsAppUrl(
      "Hi Fish World Ambattur, I would like to know more about your aquarium products and services."
    ),
  product: (productName: string) =>
    buildWhatsAppUrl(
      `Hi Fish World Ambattur, I'm interested in the ${productName}. Please share the price and availability.`
    ),
  setup: () =>
    buildWhatsAppUrl(
      "Hi Fish World Ambattur, I am interested in aquarium setup services. Please share the details."
    ),
  customSetup: () =>
    buildWhatsAppUrl(
      "Hi Fish World Ambattur, I am interested in a custom aquarium setup. Please share the details."
    ),
  maintenance: () =>
    buildWhatsAppUrl(
      "Hi Fish World Ambattur, I am interested in aquarium cleaning/maintenance services."
    ),
  fishGuidance: () =>
    buildWhatsAppUrl(
      "Hi Fish World Ambattur, I would like guidance on choosing the right fish for my aquarium."
    ),
  shipping: () =>
    buildWhatsAppUrl(
      "Hi Fish World Ambattur, I would like to know more about shipping across Tamil Nadu."
    ),
  service: (serviceName: string) =>
    buildWhatsAppUrl(
      `Hi Fish World Ambattur, I am interested in your "${serviceName}" service. Please share the details.`
    ),
};

export const INSTAGRAM_URL = "https://www.instagram.com/fish_world_ambattur_/";
export const YOUTUBE_URL = "https://youtube.com/@shop_fishworld_ambattur";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fish+World+Ambattur+Chennai+Tamil+Nadu";
export const CALL_URL = `tel:${PHONE_TEL}`;
