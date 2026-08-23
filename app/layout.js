import "./globals.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata = {
  metadataBase: new URL("https://www.wadhawanhospital.com"),
  title: "Wadhawan Hospital | Orthopedics, Gynecology & Diabetic Foot Care in Panipat",
  description:
    "Wadhawan Hospital, Panipat — multi-speciality care in Orthopedics, Gynecology and Diabetic Foot Clinic. 24x7 Emergency Care. Book an appointment or chat with us on WhatsApp.",
  openGraph: {
    title: "Wadhawan Hospital | Panipat",
    description: "Multi-speciality care in Orthopedics, Gynecology & Diabetic Foot Clinic. 24x7 Emergency Care.",
    url: "https://www.wadhawanhospital.com",
    siteName: "Wadhawan Hospital",
    images: ["/images/home/hero-banner.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wadhawan Hospital | Panipat",
    description: "Multi-speciality care in Orthopedics, Gynecology & Diabetic Foot Clinic. 24x7 Emergency Care.",
    images: ["/images/home/hero-banner.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="has-mobile-bar antialiased">
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
