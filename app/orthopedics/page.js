import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, testimonials, orthoFaqs, waLink } from "@/lib/site-data";
import { PlaceholderImage, SectionHeading, TestimonialCarousel, FaqAccordion, CtaBanner, IconCalendar, IconPhone, IconWhatsapp } from "@/components/ui";

export const metadata = { title: "Orthopedics | Wadhawan Hospital" };

const conditions = ["Knee Pain", "Arthritis", "Fracture Care", "Back Pain", "Sports Injuries", "Shoulder Pain", "Hip Pain", "Diabetic Foot"];
const services = [
  ["Joint Replacement", "Knee, Hip & Shoulder replacement by orthopedist with advanced implants."],
  ["Arthroscopy Surgery", "Minimally invasive surgery for joints and ligaments."],
  ["Spine Care", "Treatment for slipped disc, sciatica, and spine disorders."],
  ["Trauma & Fracture Care", "24x7 emergency care for fractures and accidents."],
  ["Physiotherapy & Rehabilitation", "Personalized rehab programs for faster recovery."],
  ["Sports Medicine", "Specialized care for athletes and sports-related injuries."],
];
const journey = [
  ["Consultation", "Detailed evaluation by our orthopedic specialist."],
  ["Diagnosis", "Advanced imaging & tests for accurate diagnosis."],
  ["Treatment Plan", "Personalized treatment plan tailored to your condition."],
  ["Treatment", "Advanced treatment or surgery using modern technology."],
  ["Recovery & Rehabilitation", "Guided physiotherapy and follow-up for complete recovery."],
];
const facilities = ["Advanced Operation Theatre", "Digital X-Ray", "High-Resolution Ultrasound", "Fully Equipped Laboratory", "Physiotherapy & Rehabilitation", "24x7 Emergency Services", "In-house Pharmacy", "Comfortable IPD Rooms"];

export default function OrthopedicsPage() {
  return (
    <>
      <Header theme="navy" />

      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-3">Advanced Orthopedic Care</p>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Expert Orthopedic Care for a Pain-Free Life
            </h1>
            <p className="text-slate mt-4 max-w-md leading-relaxed">
              From joint pain to complex surgeries, we provide comprehensive orthopedic solutions with advanced technology and compassionate care.
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mt-4">
              {["Knee Care", "Joint Replacement", "Fracture Care", "Sports Injury", "Arthroscopy", "Spine Care"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-teal">✓</span>{i}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
              <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-teal/5"><IconPhone /> Call Now</a>
              <a href={waLink("Hi, I'd like to know more about Orthopedic care.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
            </div>
          </div>
          <PlaceholderImage label="Orthopedic consultation — knee examination" theme="navy" className="w-full aspect-[4/3] rounded-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Conditions We Treat" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {conditions.map((c) => (
            <div key={c} className="bg-white border border-slate-100 shadow-sm rounded-xl p-5 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-teal/10 text-teal flex items-center justify-center mb-3">🦴</div>
              <p className="font-semibold text-navy text-sm">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Our Orthopedic Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <PlaceholderImage label={t} theme="navy" className="h-32" />
                <div className="p-4">
                  <h3 className="font-semibold text-navy">{t}</h3>
                  <p className="text-xs text-slate mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Our Treatment Journey" />
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {journey.map(([t, d], i) => (
            <div key={t} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-teal text-white font-bold flex items-center justify-center mb-3">{i + 1}</div>
              <h4 className="font-semibold text-navy text-sm">{t}</h4>
              <p className="text-xs text-slate mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <PlaceholderImage label="Dr. Piyush Wadhawan" theme="navy" className="w-full aspect-[4/3] rounded-2xl" />
          <div>
            <p className="text-teal font-bold text-xs uppercase tracking-widest mb-2">Meet Our Orthopedic Specialist</p>
            <h3 className="font-display text-2xl font-bold text-navy">Dr. Piyush Wadhawan</h3>
            <p className="font-semibold text-navy/70 mt-1">MS (Orthopedics)</p>
            <p className="text-teal text-sm font-medium mb-3">Orthopedic & Joint Replacement Surgeon</p>
            <ul className="space-y-1.5 text-sm text-navy/90">
              {["10+ Years of Experience", "Specialist in Joint Replacement, Trauma & Arthroscopy", "Expert in Knee, Hip, Shoulder & Spine Care", "Hundreds of Successful Surgeries", "Patient-Centered & Evidence-Based Care"].map((p) => (
                <li key={p} className="flex items-center gap-2"><span className="text-teal">✓</span>{p}</li>
              ))}
            </ul>
            <a href="/doctors" className="inline-flex mt-5 bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-5 py-2.5">View Full Profile →</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="World-Class Facilities for Advanced Care" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {facilities.map((f) => (
            <div key={f} className="text-center">
              <PlaceholderImage label={f} theme="navy" className="aspect-square rounded-xl mb-2" />
              <p className="text-xs font-semibold text-navy">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What Our Patients Say" />
          <div className="max-w-2xl mx-auto mt-8">
            <TestimonialCarousel items={testimonials.orthopedics} accent="teal" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-8">
          <FaqAccordion items={orthoFaqs} accent="teal" />
        </div>
      </section>

      <CtaBanner theme="navy" heading="Don't Let Pain Limit Your Life" sub="Consult our orthopedic expert today and take the first step toward a pain-free tomorrow." />
      <Footer />
    </>
  );
}
