import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, doctors, testimonials } from "@/lib/site-data";
import {
  SectionHeading,
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
  { label: "Compassionate Care", icon: <IconHeartHand size={22} /> },
  { label: "Advanced Technology", icon: <IconMonitorPulse size={22} /> },
  { label: "Patient First Approach", icon: <IconUserShield size={22} /> },
];

const doctorPhotos = {
  "piyush-wadhawan": "/images/about/dr-piyush.jpg",
  "pritika-wadhawan": "/images/about/dr-pritika.jpg",
};

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

      {/* HERO — full-bleed, edge to edge, no page gutters. */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        {/* Mobile hero — same architecture as Home/Contact: CSS gradient background, image is object-contain anchored right in normal document flow (content height drives the box, image just fills to match) */}
        <div className="md:hidden relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #dce9f9 0%, #eef5fc 100%)" }}>
          <Image
            src="/images/about/about-banner-mobile.jpg"
            alt="Wadhawan Hospital building"
            fill
            priority
            className="object-contain object-right"
            sizes="100vw"
          />
          {/* soft fade blending the image's left edge into the page background */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#dce9f9_0%,rgba(220,233,249,0.75)_38%,transparent_62%)]" />

          <div className="relative px-5 py-9">
            <div className="w-[58%]">
              <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-2">About Us</p>
              <h1 className="font-display font-extrabold text-navy leading-tight text-2xl">About Wadhawan Hospital</h1>
              <p className="text-teal font-semibold text-sm mt-3">Compassion&nbsp;|&nbsp;Care&nbsp;|&nbsp;Cure</p>
              <p className="text-slate mt-3 leading-relaxed text-xs">
                We are committed to providing advanced, ethical and affordable healthcare with compassion and dignity. Your health is our priority.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-6">
                <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-3.5 py-2 text-sm flex items-center gap-1.5">
                  <IconCalendar size={15} /> Book Appointment
                </Link>
                <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-3.5 py-2 text-sm flex items-center gap-1.5 bg-white/80">
                  <IconPhone size={15} /> Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop / tablet hero — full width, no side gutters */}
        <div className="hidden md:block relative w-full aspect-[2172/724]">
          <Image
            src="/images/about/about-banner.jpg"
            alt="About Wadhawan Hospital"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <Link
            href="/contact"
            aria-label="Book Appointment"
            className="absolute rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 hover:brightness-110 transition"
            style={{ left: "6.6%", top: "76.2%", width: "13.5%", height: "10%" }}
          />
          <a
            href={`tel:${hospital.phoneTel}`}
            aria-label="Contact Us"
            className="absolute rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 hover:brightness-110 transition"
            style={{ left: "21.5%", top: "76.2%", width: "9.8%", height: "10%" }}
          />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-[1700px] px-6 py-14">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-3 md:px-6 md:py-6 mt-6">
          <div className="grid md:grid-cols-[1.45fr_1fr] gap-14 items-stretch">
          <div className="hidden md:grid md:grid-cols-3 gap-1.5 md:gap-3">
              <div className="relative aspect-square md:aspect-auto md:h-full md:min-h-[220px] rounded-2xl overflow-hidden">
                <Image src="/images/about/reception-desk.webp" alt="Reception desk at Wadhawan Hospital" fill className="object-cover" sizes="(min-width:768px) 22vw, 30vw" />
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-full md:min-h-[220px] rounded-2xl overflow-hidden">
                <Image src="/images/about/hospital-lobby.webp" alt="Patient waiting area at Wadhawan Hospital" fill className="object-cover" sizes="(min-width:768px) 22vw, 30vw" />
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-full md:min-h-[220px] rounded-2xl overflow-hidden">
                <Image src="/images/about/dr-piyush-pritika.jpg" alt="Dr. Piyush & Dr. Pritika Wadhawan" fill className="object-cover" sizes="(min-width:768px) 22vw, 30vw" />
              </div>
            </div>
            <div className="flex flex-col">
              <SectionHeading eyebrow="" title="Our Story" center={false} />
              <p className="text-slate leading-relaxed mt-4">
                Wadhawan Hospital was founded with a vision to bring world-class healthcare closer to the people of Panipat. Located in the heart of the city&apos;s medical hub, behind Civil Hospital, what started as a small healthcare center has today grown into a trusted multi-speciality destination for Orthopaedics and Women&apos;s Health. We are known for our conservative, patient-first philosophy &mdash; prioritizing non-surgical relief wherever possible &mdash; backed by advanced technology and a compassionate, experienced team.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {storyPoints.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0">{s.icon}</div>
                    <span className="text-base font-semibold text-navy leading-snug min-w-0">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION + WHY PATIENTS TRUST US — one compact row */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          <div className="lg:w-[23%] bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3 lg:mb-0 lg:block">
              <div className="w-14 h-14 rounded-xl bg-emerald text-white flex items-center justify-center shrink-0 lg:mb-3">
                <IconTarget size={26} />
              </div>
              <h3 className="font-display font-bold text-navy text-base lg:mb-2">Our Mission</h3>
            </div>
            <p className="text-sm text-slate leading-relaxed">
              To provide compassionate, ethical and affordable healthcare services with the highest standards of quality and safety.
            </p>
          </div>
          <div className="lg:w-[23%] bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center gap-3 mb-3 lg:mb-0 lg:block">
              <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 lg:mb-3">
                <IconEye size={26} />
              </div>
              <h3 className="font-display font-bold text-navy text-base lg:mb-2">Our Vision</h3>
            </div>
            <p className="text-sm text-slate leading-relaxed">
              To be the most trusted and preferred healthcare destination in Panipat, known for excellence and patient satisfaction.
            </p>
          </div>
          <div className="flex-1 bg-mist rounded-2xl p-6">
            <SectionHeading title="Why Patients Trust Us" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-6">
              {[
                { icon: <IconUsers size={20} />, color: "text-teal", value: hospital.happyPatients, label: "Happy Patients", sub: "Trusted by thousands of families" },
                { icon: <IconStar size={20} />, color: "text-amber-500", value: hospital.googleRating, label: "Google Rating", sub: `${hospital.googleReviews} Reviews from our patients` },
                { icon: <IconShieldCheck size={20} />, color: "text-navy", value: hospital.yearsExperience, label: "Years of Experience", sub: "Delivering excellence in healthcare" },
                { icon: <IconClock24 size={20} />, color: "text-pink", value: "24×7", label: "Emergency Care", sub: "Always here when you need us" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 sm:p-4 flex items-center gap-3 sm:block">
                  <div className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full sm:rounded-lg bg-mist flex items-center justify-center shrink-0 sm:mb-2 ${s.color}`}>{s.icon}</div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-lg text-navy leading-tight">{s.value}</div>
                    <div className="text-xs font-semibold text-navy/80">{s.label}</div>
                    <div className="text-[11px] text-slate mt-0.5 leading-snug">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR HOSPITAL FACILITIES */}
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

      {/* MESSAGE FROM OUR DOCTORS */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Message From Our Doctors" />
        </div>
        <div className="relative w-full mt-6 hidden md:block" style={{ aspectRatio: "1983 / 724" }}>
          <Image
            src="/images/about/doctors-banner.jpg"
            alt="Message from Dr. Piyush Wadhawan and Dr. Pritika Nijhara Wadhawan"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
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

        <div className="md:hidden grid gap-6 mt-8 max-w-7xl mx-auto px-4">
          {doctors.map((doc) => (
            <div
              key={doc.slug}
              className={`rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 ${
                doc.theme === "maroon" ? "bg-pink-50" : "bg-sky-50"
              }`}
            >
             <div className="relative w-28 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden shrink-0">
              <Image
                src={doctorPhotos[doc.slug]}
                alt={`${doc.name} portrait`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
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
          <TestimonialGrid items={testimonials.home} />
        </div>
      </section>

      <CtaBanner theme="navy" heading="Need Medical Consultation?" sub="We are here to take care of your health with compassion and expertise." />
      <Footer />
    </>
  );
}