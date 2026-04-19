export const WHATSAPP_NUMBER = "94774370039";
export const WHATSAPP_DISPLAY = "+94 77 437 0039";

const DIVISION_LABELS: Record<string, string> = {
  super: "Jayathissa Lanka Super",
  ezymart: "Ezymart.lk",
  agri: "Jayathissa Lanka Agri",
  myphone: "MyPhone.lk",
  laptops: "Jayathissa Laptop & PC Centre",
  technology: "Jayathissa Lanka Technology",
  academy: "Jayathissa Lanka Academy",
  communication: "Jayathissa Lanka Communication",
  express: "Jayathissa Lanka Express",
  motors: "Jayathissa Lanka Motors",
  apple: "Jayathissa Apple Store",
  digital: "Jayathissa Digital Media",
  general: "General Enquiry",
};

export function divisionLabel(slug: string): string {
  return DIVISION_LABELS[slug] ?? slug;
}

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_GREETING =
  "Hi Jayathissa Lanka, I'm reaching out from your website (JCC.lk). I'd like to know more about your services.";

export function divisionGreeting(name: string): string {
  return `Hi Jayathissa Lanka, I'm reaching out from your website (JCC.lk) regarding ${name}. I'd like to know more.`;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function buildContactMessage(data: ContactFormPayload): string {
  const division = divisionLabel(data.service);
  return [
    "Hi Jayathissa Lanka,",
    "",
    "I'm reaching out from your website (JCC.lk) with the following enquiry:",
    "",
    `• Name: ${data.name}`,
    `• Email: ${data.email}`,
    `• Phone: ${data.phone}`,
    `• Division of Interest: ${division}`,
    "",
    "Message:",
    data.message,
    "",
    "Thank you.",
  ].join("\n");
}

export function openWhatsApp(message?: string): void {
  const url = whatsappUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
