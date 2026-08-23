import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { Fragment } from "react";
import { hospital, testimonials, gynecFaqs, waLink } from "@/lib/site-data";
import { SectionHeading, TestimonialGrid, FaqAccordion, CtaBanner, IconCalendar, IconPhone, IconWhatsapp } from "@/components/ui";

export const metadata = { title: "Gynecology | Wadhawan Hospital" };

const services = [
  { title: "Pregnancy Care", desc: "Complete prenatal, antenatal and postnatal care for a healthy mother and baby.", icon: "/images/gynecology/service-pregnancy-care.png" },
  { title: "Infertility Treatment", desc: "Advanced evaluation and personalized treatment to help you start your family.", icon: "/images/gynecology/service-infertility-treatment.png" },
  { title: "PCOD / PCOS Care", desc: "Diagnosis and expert management for hormonal balance and wellness.", icon: "/images/gynecology/service-pcod-pcos-care.png" },
  { title: "High-Risk Pregnancy", desc: "Specialized care for high-risk pregnancies with expert monitoring.", icon: "/images/gynecology/service-high-risk-pregnancy.png" },
  { title: "Laparoscopic Surgery", desc: "Minimally invasive surgery for faster recovery and less pain.", icon: "/images/gynecology/service-laparoscopic-surgery.png" },
  { title: "Ultrasound & Imaging", desc: "Advanced 2D/3D/4D ultrasound for accurate diagnosis and fetal monitoring.", icon: "/images/gynecology/service-ultrasound-imaging.png" },
  { title: "Family Planning", desc: "Effective and safe options for a healthy and planned future.", icon: "/images/gynecology/service-family-planning.png" },
  { title: "Gynecological Checkups", desc: "Routine checkups, cervical screening, and preventive women's healthcare.", icon: "/images/gynecology/service-Checkups.jpg" },
  
];

const conditions = [
  { name: "Irregular Periods", icon: "/images/gynecology/condition-irregular-periods.png" },
  { name: "PCOD / PCOS", icon: "/images/gynecology/condition-pcod-pcos.png" },
  { name: "Endometriosis", icon: "/images/gynecology/condition-endometriosis.png" },
  { name: "Fibroids", icon: "/images/gynecology/condition-fibroids.jpg" },
  { name: "Ovarian Cysts", icon: "/images/gynecology/condition-ovarian-cysts.jpg" },
  { name: "Infertility", icon: "/images/gynecology/condition-infertility.png" },
  { name: "Pelvic Pain", icon: "/images/gynecology/condition-pelvic-pain.png" },
  { name: "Menopause Management", icon: "/images/gynecology/condition-menopause-management.png" },
];

const journey = [
  { title: "Consultation", desc: "Meet our expert and discuss your health in detail.", icon: "/images/gynecology/journey-consultation.png" },
  { title: "Diagnosis", desc: "Advanced tests and ultrasounds for accurate assessment.", icon: "/images/gynecology/journey-diagnosis.png" },
  { title: "Pregnancy Care", desc: "Regular check-ups, monitoring and guidance throughout pregnancy.", icon: "/images/gynecology/journey-pregnancy-care.png" },
  { title: "Delivery", desc: "Safe delivery with modern facilities and experienced care team.", icon: "/images/gynecology/journey-delivery.png" },
  { title: "Postnatal Care", desc: "Complete care and support for a healthy recovery for both mother and baby.", icon: "/images/gynecology/journey-postnatal-care.png" },
];

const facilities = [
  { name: "Advanced 4D Ultrasound", img: "/images/gynecology/facilities/advanced-4d-ultrasound.jpg" },
  { name: "Pregnancy Care & Antenatal Services", img: "/images/gynecology/facilities/pregnancy-antenatal-care.jpg" },
  { name: "Fully Equipped Laboratory", img: "/images/gynecology/facilities/laboratory.jpg" },
  { name: "Laparoscopic Surgery", img: "/images/gynecology/facilities/laparoscopic-surgery.jpg" },
  { name: "High-Risk Pregnancy Management", img: "/images/gynecology/facilities/high-risk-pregnancy.jpg" },
  { name: "Infertility Evaluation & Treatment", img: "/images/gynecology/facilities/infertility-evaluation.jpg" },
  { name: "24x7 Emergency Care", img: "/images/gynecology/facilities/emergency-care.jpg" },
  { name: "Comfortable IPD Rooms", img: "/images/gynecology/facilities/ipd-rooms.jpg" },
];

export default function GynecologyPage() {
  return (
    <>
      <Header theme="maroon" />

      <section className="bg-gradient-to-br from-pink-light to-white border-b border-slate-100">
        {/* Desktop / tablet banner — full 2172x724 image, text overlaid on the clear left zone */}
        <div className="relative w-full aspect-[2172/724] hidden md:block">
          <Image
            src="/images/gynecology/hero-banner.jpg"
            alt="Gynecologist consulting a pregnant patient"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-[50%] pl-[5%]">
              <p className="section-eyebrow text-pink font-bold text-xs uppercase tracking-widest mb-3">Gynecology &amp; Women&apos;s Health</p>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                Comprehensive Care for Every Stage of a <span className="text-pink">Woman&apos;s Life</span>
              </h1>
              <p className="text-slate mt-4 max-w-md leading-relaxed text-sm lg:text-base">
                From pregnancy care to advanced gynecological treatments, we provide expert care with compassion and advanced technology.
              </p>
              <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mt-4">
                {["Pregnancy Care", "Infertility Treatment", "PCOD / PCOS", "High-Risk Pregnancy", "Laparoscopic Surgery", "Menstrual Disorders"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-pink">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="/contact" className="bg-pink hover:bg-maroon text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
                <a href={`tel:${hospital.phoneTel}`} className="border-2 border-pink text-pink font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-pink/5 bg-white/70"><IconPhone /> Call Now</a>
                <a href={waLink("Hi, I'd like to know more about Gynecology care.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile banner — same content-flow architecture as Home/About/Contact: CSS gradient
            background, image is an object-contain element anchored right (never cropped), and
            the text column sits in normal document flow so it sets the hero's height and the
            image simply fills to match — buttons can never get clipped or cramped. */}
        <div className="md:hidden relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #FCE7F3 0%, #FFF9FB 100%)" }}>
          <Image
            src="/images/gynecology/gynecology-hero-banner-mobile.jpg"
            alt="Expectant mother — Gynecology & Women's Health care"
            fill
            priority
            className="object-contain object-right"
            sizes="100vw"
          />
          {/* soft fade blending the content column into the image — white / light pink / transparent pink, no hard split */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#FFFFFF_0%,#FCE7F3_38%,rgba(252,231,243,0.35)_62%,transparent_78%)]" />

          <div className="relative px-5 py-9">
            <div className="w-[60%]">
              <p className="section-eyebrow text-pink font-bold text-xs uppercase tracking-widest mb-2">Gynecology &amp; Women&apos;s Health</p>
              <h1 className="font-display text-2xl font-extrabold text-navy leading-tight">
                Comprehensive Care for Every Stage of a <span className="text-pink">Woman&apos;s Life</span>
              </h1>
              <p className="text-slate mt-3 leading-relaxed text-xs">
                From pregnancy care to advanced gynecological treatments, we provide expert care with compassion and advanced technology.
              </p>
              <ul className="flex flex-col gap-y-1.5 text-xs text-navy/90 mt-3">
                {["Pregnancy Care", "Infertility Treatment", "PCOD / PCOS", "High-Risk Pregnancy", "Laparoscopic Surgery", "Menstrual Disorders"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-pink">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                <a href="/contact" className="bg-pink hover:bg-maroon text-white font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center gap-2"><IconCalendar /> Book Appointment</a>
                <a href={waLink("Hi, I'd like to know more about Gynecology care.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WOMEN'S HEALTH SERVICES — vertical icon-on-top cards, matching the reference mockup */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Our Women's Health Services" accent="pink" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
              <div className="relative w-14 h-14 mx-auto rounded-full bg-pink-light mb-3">
                <Image src={s.icon} alt={s.title} fill className="object-contain p-3" />
              </div>
              <h3 className="font-semibold text-navy text-sm">{s.title}</h3>
              <p className="text-xs text-slate mt-1">{s.desc}</p>
              <a href="/contact" className="text-pink text-xs font-semibold mt-2 inline-block">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONDITIONS WE TREAT — full-width static grid, matching the Orthopedics page */}
      <section className="w-full px-5 py-14">
        <SectionHeading title="Conditions We Treat" accent="pink" />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-5 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-pink-light text-pink flex items-center justify-center mb-3 relative">
                <Image src={c.icon} alt={c.name} fill className="object-contain p-3" />
              </div>
              <p className="font-semibold text-navy text-sm">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YOUR PREGNANCY JOURNEY WITH US — matching the Diabetic Foot Clinic treatment slider */}
      <section className="w-full px-5 py-14">
  <SectionHeading title="Your Pregnancy Journey With Us" accent="pink" />
  <div className="flex flex-row items-stretch gap-2 sm:gap-6 mt-8 overflow-x-auto lg:overflow-visible pb-2">
    {journey.map((step, i) => (
      <Fragment key={step.title}>
        <div className="flex-1 min-w-[120px] lg:min-w-0 bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-xl lg:rounded-2xl p-3 lg:p-6 text-center">
          <div className="relative w-10 h-10 lg:w-20 lg:h-20 mx-auto rounded-full bg-pink/10 flex items-center justify-center mb-2 lg:mb-3">
            <Image
              src={step.icon}
              alt={step.title}
              fill
              className="object-contain p-2 lg:p-5"
            />
            <span className="absolute -top-1 -right-1 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-pink text-white text-[8px] lg:text-[11px] font-bold flex items-center justify-center border-2 border-white">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h4 className="font-semibold text-navy text-[11px] lg:text-sm leading-tight">{step.title}</h4>
          <p className="text-[9px] lg:text-xs text-slate mt-1 leading-snug">{step.desc}</p>
        </div>
        {i < journey.length - 1 && (
          <span className="flex items-center text-pink text-sm lg:text-2xl shrink-0" aria-hidden="true">→</span>
        )}
      </Fragment>
    ))}
  </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="bg-gradient-to-br from-pink-light to-white rounded-2xl border border-pink-light shadow-lg p-5 md:p-6">
          <div className="grid md:grid-cols-[0.85fr_1fr] gap-8 items-center">
            <div className="relative w-full aspect-[1105/950] rounded-xl overflow-hidden">
              <Image src="/images/gynecology/dr-image-upper.jpg" alt="Dr. Pritika Nijhara Wadhawan" fill className="object-cover" sizes="(min-width:768px) 38vw, 90vw" />
            </div>
            <div>
              <p className="text-pink font-bold text-sm uppercase tracking-widest mb-2">Meet Our Gynecology Specialist</p>
              <h3 className="font-display text-3xl font-bold text-maroon">Dr. Pritika Nijhara Wadhawan</h3>
              <p className="font-bold text-navy/80 text-lg mt-2">MBBS, MS (Obstetrics &amp; Gynecology)</p>
              <p className="text-pink text-base font-semibold mb-4">Obstetrician &amp; Laparoscopic Surgeon</p>
              <ul className="space-y-2.5 text-base font-medium text-navy/90">
                {["10+ Years of Experience", "Expert in High-Risk Pregnancy Care", "Advanced Laparoscopic & Hysteroscopic Surgeries", "Infertility Evaluation & Treatment Specialist", "Compassionate, Ethical & Patient-Centered Care"].map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-pink text-white text-xs flex items-center justify-center shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="/doctors" className="inline-flex mt-5 bg-pink hover:bg-maroon text-white font-semibold rounded-lg px-5 py-2.5">View Full Profile →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="World-Class Facilities for Women's Health" accent="pink" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {facilities.map((f) => (
            <div key={f.name} className="text-center">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                <Image src={f.img} alt={f.name} fill className="object-cover" sizes="(min-width:768px) 22vw, 45vw" />
              </div>
              <p className="text-xs font-semibold text-navy">{f.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What Our Patients Say" accent="pink" />
          <div className="mt-8">
            <TestimonialGrid items={testimonials.gynecology} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Frequently Asked Questions" accent="pink" />
        <div className="mt-8">
          <FaqAccordion items={gynecFaqs} accent="pink" />
        </div>
      </section>

      <CtaBanner theme="pink" heading="Your Health. Our Priority." sub="Trusted care for every stage of a woman's life." bg="/images/gynecology/bottom-banner.jpg" aspect="2080 / 239" textInset="pl-[15%] md:pl-[16%]" />
      <Footer />
    </>
  );
}