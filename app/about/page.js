import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, doctors, testimonials } from "@/lib/site-data";
import {
  SectionHeading,
  PlaceholderImage,
  CtaBanner,
  TestimonialGrid,
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
  IconSurgery,
  IconXray,
  IconFlask,
  IconPill,
} from "@/components/ui";

export const metadata = { title: "About Us | Wadhawan Hospital" };

const storyPoints = [
  { label: "Compassionate Care", icon: <IconHeartHand /> },
  { label: "Advanced Technology", icon: <IconMonitorPulse /> },
  { label: "Patient First Approach", icon: <IconUserShield /> },
];

const facilities = [
  { title: "Operation Theatre", desc: "Modern modular OT with advanced imaging and anesthesia support.", icon: <IconSurgery size={22} />, img: "/images/about/facilities/operation-theatre.jpg" },
  { title: "OPD & Waiting Area", desc: "Comfortable, clean waiting and consultation area for outpatients.", icon: <IconUsers size={22} />, img: "/images/about/facilities/opd-waiting-area.jpg" },
  { title: "Digital X-Ray", desc: "Digital X-Ray for accurate and quick diagnosis.", icon: <IconXray size={22} />, img: "/images/about/facilities/xray.jpg" },
  { title: "Ultrasound & Imaging", desc: "High-resolution ultrasound for precise imaging.", icon: <IconMonitorPulse size={22} />, img: "/images/about/facilities/ultrasound.jpg" },
  { title: "Laboratory", desc: "Fully equipped lab for all blood & diagnostic tests.", icon: <IconFlask size={22} />, img: "/images/about/facilities/laboratory.jpg" },
  { title: "Pharmacy", desc: "In-house pharmacy with genuine medicines.", icon: <IconPill size={22} />, img: "/images/about/facilities/pharmacy.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Header theme="navy" />

      {/* HERO — full-bleed, edge to edge, no page gutters.
          Desktop: one flattened banner image (text baked in) with two
          transparent hit-areas over the real "Book Appointment" /
          "Contact Us" buttons that are already part of the graphic.
          Mobile: real HTML hero (image would be unreadable that small),
          image bleeds edge-to-edge, text keeps normal page padding. */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        {/* Mobile hero */}
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-8">
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
          </div>
          <div className="relative w-full aspect-[1050/724]">
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

        {/* Desktop / tablet hero — full width, no side gutters */}
        <div className="hidden md:block relative w-full aspect-[2172/724]">
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
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="" title="Our Story" center={false} />
        <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">
          <div className="grid grid-cols-3 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/about/reception-desk.webp" alt="Reception desk at Wadhawan Hospital" fill className="object-cover" sizes="(min-width:768px) 16vw, 30vw" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/about/hospital-lobby.webp" alt="Patient waiting area at Wadhawan Hospital" fill className="object-cover" sizes="(min-width:768px) 16vw, 30vw" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/about/dr-piyush-pritika.jpg" alt="Dr. Piyush & Dr. Pritika Wadhawan" fill className="object-cover" sizes="(min-width:768px) 16vw, 30vw" />
            </div>
          </div>
          <div>
            <p className="text-slate leading-relaxed">
              Wadhawan Hospital was founded with a vision to bring world-class healthcare closer to the people of Panipat. Located in the heart of the city&apos;s medical hub, behind Civil Hospital, what started as a small healthcare center has today grown into a trusted multi-speciality destination for Orthopaedics and Women&apos;s Health. We are known for our conservative, patient-first philosophy &mdash; prioritizing non-surgical relief wherever possible &mdash; backed by advanced technology and a compassionate, experienced team.
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

      {/* MISSION + VISION + WHY PATIENTS TRUST US — one compact row */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          <div className="lg:w-[23%] bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <div className="w-10 h-10 rounded-xl bg-emerald text-white flex items-center justify-center mb-3">
              <IconTarget size={18} />
            </div>
            <h3 className="font-display font-bold text-navy text-base mb-2">Our Mission</h3>
            <p className="text-sm text-slate leading-relaxed">
              To provide compassionate, ethical and affordable healthcare services with the highest standards of quality and safety.
            </p>
          </div>
          <div className="lg:w-[23%] bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3">
              <IconEye size={18} />
            </div>
            <h3 className="font-display font-bold text-navy text-base mb-2">Our Vision</h3>
            <p className="text-sm text-slate leading-relaxed">
              To be the most trusted and preferred healthcare destination in Panipat, known for excellence and patient satisfaction.
            </p>
          </div>
          <div className="flex-1 bg-mist rounded-2xl p-6">
            <SectionHeading title="Why Patients Trust Us" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {[
                { icon: <IconUsers size={18} />, color: "text-teal", value: hospital.happyPatients, label: "Happy Patients", sub: "Trusted by thousands of families" },
                { icon: <IconStar size={18} />, color: "text-amber-500", value: hospital.googleRating, label: "Google Rating", sub: `${hospital.googleReviews} Reviews from our patients` },
                { icon: <IconShieldCheck size={18} />, color: "text-navy", value: hospital.yearsExperience, label: "Years of Experience", sub: "Delivering excellence in healthcare" },
                { icon: <IconClock24 size={18} />, color: "text-pink", value: "24×7", label: "Emergency Care", sub: "Always here when you need us" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                  <div className={`w-8 h-8 rounded-lg bg-mist flex items-center justify-center mb-2 ${s.color}`}>{s.icon}</div>
                  <div className="font-display font-bold text-lg text-navy leading-tight">{s.value}</div>
                  <div className="text-xs font-semibold text-navy/80">{s.label}</div>
                  <div className="text-[11px] text-slate mt-0.5 leading-snug">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR HOSPITAL FACILITIES — real photos supplied by the client */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Our Hospital Facilities" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={f.img} alt={f.title} fill className="object-cover" sizes="(min-width:768px) 32vw, 50vw" />
                </div>
                <div className="p-4 -mt-6 relative">
                  <div className="w-11 h-11 rounded-full bg-white shadow border border-slate-100 text-teal flex items-center justify-center mb-2">
                    {f.icon}
                  </div>
                  <h4 className="font-display font-bold text-navy text-sm">{f.title}</h4>
                  <p className="text-xs text-slate mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE FROM OUR DOCTORS — real banner graphic supplied by the
          client (photos + cards + heartbeat line baked in). Full-bleed,
          edge to edge, and cropped to trim only the empty space below
          the cards (verified pixel-by-pixel that the photos themselves
          end well above the crop line, so nothing gets cut off). Text
          is real HTML positioned to sit exactly inside the two card
          shapes already drawn in the image. */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Message From Our Doctors" />
        </div>
        <div className="relative w-full mt-6 hidden md:block" style={{ aspectRatio: "1983 / 724" }}>
          <Image
            src="/images/about/doctors-banner.png"
            alt="Message from Dr. Piyush Wadhawan and Dr. Pritika Nijhara Wadhawan"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Text inside Dr. Piyush's card */}
          <div
            className="absolute flex flex-col justify-center px-[3%]"
            style={{ left: "15.7%", top: "15.9%", width: "27.9%", height: "73.9%" }}
          >
            <h4 className="font-display font-bold text-navy text-lg lg:text-xl">Dr. Piyush Wadhawan</h4>
            <p className="text-sm font-semibold text-navy/80 mt-1">MBBS, MS (Orthopaedics)</p>
            <p className="text-sm font-medium text-teal">Orthopedic &amp; Joint Replacement Surgeon</p>
            <p className="text-sm text-slate leading-relaxed mt-3">
              &ldquo;Our commitment is to restore mobility, reduce pain and improve the quality of life with advanced treatment and compassionate care.&rdquo;
            </p>
          </div>
          {/* Text inside Dr. Pritika's card */}
          <div
            className="absolute flex flex-col justify-center px-[3%]"
            style={{ left: "56.8%", top: "15.9%", width: "27.7%", height: "73.9%" }}
          >
            <h4 className="font-display font-bold text-maroon text-lg lg:text-xl">Dr. Pritika Nijhara Wadhawan</h4>
            <p className="text-sm font-semibold text-navy/80 mt-1">MBBS, MS (Obstetrics &amp; Gynecology)</p>
            <p className="text-sm font-medium text-pink">Obstetrician &amp; Laparoscopic Surgeon</p>
            <p className="text-sm text-slate leading-relaxed mt-3">
              &ldquo;Women&apos;s health is our priority. We provide personalized care at every stage of life with empathy, respect and medical excellence.&rdquo;
            </p>
          </div>
        </div>

        {/* Mobile fallback — the banner's side-anchored photos and
            fine card proportions don't scale down to a phone width,
            so mobile gets simple stacked cards with the same copy. */}
        <div className="md:hidden grid gap-6 mt-8 max-w-7xl mx-auto px-4">
          {doctors.map((doc) => (
            <div
              key={doc.slug}
              className={`rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 ${
                doc.theme === "maroon" ? "bg-pink-50" : "bg-sky-50"
              }`}
            >
              <PlaceholderImage
                label={`${doc.name} portrait`}
                theme={doc.theme}
                className="w-28 h-32 sm:w-32 sm:h-40 rounded-xl shrink-0"
              />
              <div className="text-center sm:text-left">
                <h4 className={`font-display font-bold text-lg ${doc.theme === "maroon" ? "text-maroon" : "text-navy"}`}>{doc.name}</h4>
                <p className="text-sm font-semibold text-navy/80 mt-1">{doc.qualification}</p>
                <p className={`text-sm font-medium ${doc.theme === "maroon" ? "text-pink" : "text-teal"}`}>{doc.role}</p>
                <p className="text-sm text-slate leading-relaxed mt-3">&ldquo;{doc.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT OUR PATIENTS SAY */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading title="What Our Patients Say" />
        <div className="mt-8">
          <TestimonialGrid items={testimonials.general} />
        </div>
      </section>

      <CtaBanner theme="navy" heading="Need Medical Consultation?" sub="We are here to take care of your health with compassion and expertise." />
      <Footer />
    </>
  );
}