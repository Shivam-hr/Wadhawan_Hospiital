import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, testimonials, gynecFaqs, waLink } from "@/lib/site-data";
import { PlaceholderImage, SectionHeading, TestimonialCarousel, FaqAccordion, CtaBanner, IconCalendar, IconPhone, IconWhatsapp } from "@/components/ui";

export const metadata = { title: "Gynecology | Wadhawan Hospital" };

const services = [
  ["Pregnancy Care", "Complete prenatal, antenatal and postnatal care for a healthy mother and baby."],
  ["Infertility Treatment", "Advanced evaluation and personalized treatment to help you start your family."],
  ["PCOD / PCOS Care", "Diagnosis and expert management for hormonal balance and wellness."],
  ["High-Risk Pregnancy", "Specialized care for high-risk pregnancies with expert monitoring."],
  ["Laparoscopic Surgery", "Minimally invasive surgery for faster recovery and less pain."],
  ["Ultrasound & Imaging", "Advanced 2D/3D/4D ultrasound for accurate diagnosis and fetal monitoring."],
  ["Family Planning", "Effective and safe options for a healthy and planned future."],
];
const conditions = ["Irregular Periods", "PCOD / PCOS", "Endometriosis", "Fibroids", "Ovarian Cysts", "Infertility", "Pelvic Pain", "Menopause Management"];
const journey = [
  ["Consultation", "Meet our expert and discuss your health in detail."],
  ["Diagnosis", "Advanced tests and ultrasounds for accurate assessment."],
  ["Pregnancy Care", "Regular check-ups, monitoring and guidance throughout pregnancy."],
  ["Delivery", "Safe delivery with modern facilities and experienced care team."],
  ["Postnatal Care", "Complete care and support for a healthy recovery for both mother and baby."],
];
const facilities = ["Advanced 4D Ultrasound", "Pregnancy Care & Antenatal Services", "Fully Equipped Laboratory", "Laparoscopic Surgery", "High-Risk Pregnancy Management", "Infertility Evaluation & Treatment", "24x7 Emergency Care", "Comfortable IPD Rooms"];

export default function GynecologyPage() {
  return (
    <>
      <Header theme="maroon" />

      <section className="bg-gradient-to-br from-pink-light to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-eyebrow text-pink font-bold text-xs uppercase tracking-widest mb-3">Gynecology & Women&apos;s Health</p>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Comprehensive Care for Every Stage of a <span className="text-pink">Woman&apos;s Life</span>
            </h1>
            <p className="text-slate mt-4 max-w-md leading-relaxed">
              From pregnancy care to advanced gynecological treatments, we provide expert care with compassion and advanced technology.
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mt-4">
              {["Pregnancy Care", "Infertility Treatment", "PCOD / PCOS", "High-Risk Pregnancy", "Laparoscopic Surgery", "Menstrual Disorders"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-pink">✓</span>{i}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/contact" className="bg-pink hover:bg-maroon text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
              <a href={`tel:${hospital.phoneTel}`} className="border-2 border-pink text-pink font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-pink/5"><IconPhone /> Call Now</a>
              <a href={waLink("Hi, I'd like to know more about Gynecology care.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
            </div>
          </div>
          <PlaceholderImage label="Gynecologist consulting a pregnant patient" theme="maroon" className="w-full aspect-[4/3] rounded-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Our Women's Health Services" accent="pink" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {services.map(([t, d]) => (
            <div key={t} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-pink-light text-pink flex items-center justify-center mb-3">♀</div>
              <h3 className="font-semibold text-navy text-sm">{t}</h3>
              <p className="text-xs text-slate mt-1">{d}</p>
              <span className="text-pink text-xs font-semibold mt-2 inline-block">Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Conditions We Treat" accent="pink" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {conditions.map((c) => (
              <div key={c} className="bg-white border border-slate-100 shadow-sm rounded-xl p-5 text-center">
                <div className="w-11 h-11 mx-auto rounded-full bg-pink-light text-pink flex items-center justify-center mb-2">♀</div>
                <p className="font-semibold text-navy text-xs">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Your Pregnancy Journey With Us" accent="pink" />
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {journey.map(([t, d], i) => (
            <div key={t} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-pink text-white font-bold flex items-center justify-center mb-3">{i + 1}</div>
              <h4 className="font-semibold text-navy text-sm">{t}</h4>
              <p className="text-xs text-slate mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <PlaceholderImage label="Dr. Pritika Nijhara Wadhawan" theme="maroon" className="w-full aspect-[4/3] rounded-2xl" />
          <div>
            <p className="text-pink font-bold text-xs uppercase tracking-widest mb-2">Meet Our Gynecology Specialist</p>
            <h3 className="font-display text-2xl font-bold text-maroon">Dr. Pritika Nijhara Wadhawan</h3>
            <p className="font-semibold text-navy/70 mt-1">MBBS, DNB (Obstetrics & Gynecology)</p>
            <p className="text-pink text-sm font-medium mb-3">Obstetrician & Laparoscopic Surgeon</p>
            <ul className="space-y-1.5 text-sm text-navy/90">
              {["10+ Years of Experience", "Expert in High-Risk Pregnancy Care", "Advanced Laparoscopic & Hysteroscopic Surgeries", "Infertility Evaluation & Treatment Specialist", "Compassionate, Ethical & Patient-Centered Care"].map((p) => (
                <li key={p} className="flex items-center gap-2"><span className="text-pink">✓</span>{p}</li>
              ))}
            </ul>
            <a href="/doctors" className="inline-flex mt-5 bg-pink hover:bg-maroon text-white font-semibold rounded-lg px-5 py-2.5">View Full Profile →</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="World-Class Facilities for Women's Health" accent="pink" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {facilities.map((f) => (
            <div key={f} className="text-center">
              <PlaceholderImage label={f} theme="maroon" className="aspect-square rounded-xl mb-2" />
              <p className="text-xs font-semibold text-navy">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What Our Patients Say" accent="pink" />
          <div className="max-w-2xl mx-auto mt-8">
            <TestimonialCarousel items={testimonials.gynecology} accent="pink" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Frequently Asked Questions" accent="pink" />
        <div className="mt-8">
          <FaqAccordion items={gynecFaqs} accent="pink" />
        </div>
      </section>

      <CtaBanner theme="maroon" heading="Your Health. Our Priority." sub="Trusted care for every stage of a woman's life." />
      <Footer />
    </>
  );
}
