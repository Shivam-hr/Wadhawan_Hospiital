import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital } from "@/lib/site-data";
import {
  SectionHeading,
  StatCard,
  CtaBanner,
  IconCalendar,
  IconPhone,
  IconHeartHand,
  IconUserShield,
  IconMonitorPulse,
  IconTarget,
  IconEye,
  IconUsers,
  IconStar,
  IconShieldCheck,
  IconClock24,
} from "@/components/ui";

export const metadata = { title: "About Us | Wadhawan Hospital" };

const storyPoints = [
  { label: "Compassionate Care", icon: <IconHeartHand /> },
  { label: "Advanced Technology", icon: <IconMonitorPulse /> },
  { label: "Patient First Approach", icon: <IconUserShield /> },
];

export default function AboutPage() {
  return (
    <>
      <Header theme="navy" />

      {/* HERO
          Desktop/tablet: the banner is one fully designed image (text baked in).
          We don't render duplicate text/buttons on top — we only lay two
          transparent, clickable hit-areas exactly over the "Book Appointment"
          and "Contact Us" buttons that are already part of the graphic.
          Mobile: the flattened banner's text would be unreadably small if
          scaled down, so mobile gets a real HTML hero (same pattern as the
          homepage) using a clean crop of the same building photo, with real
          buttons and proper tap targets. */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        {/* Mobile hero */}
        <div className="md:hidden mx-auto max-w-7xl px-4 py-8">
          <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-display text-3xl font-extrabold text-navy leading-tight">About Wadhawan Hospital</h1>
          <p className="text-teal font-semibold mt-2">Compassion &nbsp;|&nbsp; Care &nbsp;|&nbsp; Cure</p>
          <p className="text-slate mt-4 leading-relaxed">
            We are committed to providing advanced, ethical and affordable healthcare with compassion and dignity. Your health is our priority.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2">
              <IconCalendar /> Book Appointment
            </Link>
            <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-teal/5">
              <IconPhone /> Contact Us
            </a>
          </div>
          <div className="relative w-full aspect-[1050/724] rounded-2xl overflow-hidden mt-6">
            <Image
              src="/images/about/about-banner-building-crop.jpg"
              alt="Wadhawan Hospital building"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Desktop / tablet hero — flattened banner + transparent overlay buttons */}
        <div className="hidden md:block mx-auto max-w-7xl px-4 py-8">
          <div className="relative w-full aspect-[2172/724] rounded-2xl overflow-hidden">
            <Image
              src="/images/about/about-banner.png"
              alt="About Wadhawan Hospital"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Book Appointment hit-area */}
            <Link
              href="/contact"
              aria-label="Book Appointment"
              className="absolute rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 hover:brightness-110 transition"
              style={{ left: "6.6%", top: "76.2%", width: "13.5%", height: "10%" }}
            />
            {/* Contact Us hit-area */}
            <a
              href={`tel:${hospital.phoneTel}`}
              aria-label="Contact Us"
              className="absolute rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 hover:brightness-110 transition"
              style={{ left: "21.5%", top: "76.2%", width: "9.8%", height: "10%" }}
            />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="" title="Our Story" center={false} />
        <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">
          <div className="grid grid-cols-3 gap-3">
           
           <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/about/hospital-lobby.webp" alt="Patient waiting area at Wadhawan Hospital" fill className="object-cover" sizes="(min-width:768px) 16vw, 30vw" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/about/reception-desk.webp" alt="Reception desk at Wadhawan Hospital" fill className="object-cover" sizes="(min-width:768px) 16vw, 30vw" />
            </div>
            
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/about/dr-piyush-pritika.jpg" alt="Dr. Piyush & Dr. Pritika Wadhawan" fill className="object-cover" sizes="(min-width:768px) 16vw, 30vw" />
            </div>
          </div>
          <div>
            <p className="text-slate leading-relaxed">
              Wadhawan Hospital was founded with a vision to bring world-class healthcare closer to the people of Panipat. What started as a small healthcare center has today grown into a trusted multi-speciality hospital known for quality care, advanced technology and a patient-first approach.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6 text-sm">
              {storyPoints.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center">{s.icon}</div>
                  <span className="font-semibold text-navy">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-4 pb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-10 border border-emerald-100">
          <div className="w-14 h-14 rounded-2xl bg-emerald text-white flex items-center justify-center mb-5">
            <IconTarget size={28} />
          </div>
          <h3 className="font-display font-bold text-navy text-xl mb-3">Our Mission</h3>
          <p className="text-slate leading-relaxed">
            To provide compassionate, ethical and affordable healthcare services with the highest standards of quality and safety.
          </p>
        </div>
        <div className="bg-purple-50 rounded-2xl p-8 md:p-10 border border-purple-100">
          <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-5">
            <IconEye size={28} />
          </div>
          <h3 className="font-display font-bold text-navy text-xl mb-3">Our Vision</h3>
          <p className="text-slate leading-relaxed">
            To be the most trusted and preferred healthcare destination in Panipat, known for excellence and patient satisfaction.
          </p>
        </div>
      </section>

      {/* WHY PATIENTS TRUST US */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Why Patients Trust Us" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard icon={<span className="text-teal"><IconUsers /></span>} value={hospital.happyPatients} label="Happy Patients" sub="Trusted by thousands of families" />
            <StatCard icon={<span className="text-amber-500"><IconStar /></span>} value={hospital.googleRating} label="Google Rating" sub={`${hospital.googleReviews} Reviews from our patients`} />
            <StatCard icon={<span className="text-navy"><IconShieldCheck /></span>} value={hospital.yearsExperience} label="Years of Experience" sub="Delivering excellence in healthcare" />
            <StatCard icon={<span className="text-pink"><IconClock24 /></span>} value="24×7" label="Emergency Care" sub="Always here when you need us" />
          </div>
        </div>
      </section>

      <CtaBanner theme="navy" heading="Need Medical Consultation?" sub="We are here to take care of your health with compassion and expertise." />
      <Footer />
    </>
  );
}