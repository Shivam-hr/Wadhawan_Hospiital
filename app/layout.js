import "./globals.css";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata = {
  title: "Wadhawan Hospital | Orthopedics, Gynecology & Diabetic Foot Care in Panipat",
  description:
    "Wadhawan Hospital, Panipat — multi-speciality care in Orthopedics, Gynecology and Diabetic Foot Clinic. 24x7 Emergency Care. Book an appointment or chat with us on WhatsApp.",
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
