import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, testimonials, diabeticFaqs, waLink } from "@/lib/site-data";
import { PlaceholderImage, SectionHeading, TestimonialCarousel, FaqAccordion, CtaBanner, IconCalendar, IconPhone, IconWhatsapp } from "@/components/ui";

export const metadata = { title: "Diabetic Foot Clinic | Wadhawan Hospital" };

const symptoms = ["Numbness or Tingling", "Non-healing Sores or Ulcers", "Redness or Swelling", "Foot Pain or Burning Sensation", "Dry, Cracked Skin", "Changes in Foot Color", "Foul Smell or Discharge", "Foot is Warm or Hot"];
const conditions = ["Diabetic Foot Ulcers", "Foot Infections", "Peripheral Neuropathy", "Poor Blood Circulation", "Charcot Foot (Deformity)", "Wounds & Tissue Damage", "Pre-ulcerative Callus & Corns", "Risk of Amputation"];
const process = [
  ["Assessment", "Detailed foot examination & risk evaluation."],
  ["Diagnosis", "Advanced tests to identify the root cause."],
  ["Treatment", "Personalized wound care & medical management."],
  ["Prevention", "Guidance for foot care, footwear & lifestyle modifications."],
  ["Follow-up", "Regular monitoring to ensure healing & prevent relapse."],
];
const facilities = ["Advanced Wound Care Unit", "Doppler & Vascular Assessment", "In-house Pathology Lab", "Minor OT for Debridement", "Physiotherapy & Offloading Support", "Foot Pressure Analysis", "24x7 Emergency Support", "Private & Hygienic Rooms"];

export default function DiabeticFootClinicPage() {
  return (
    <>
      <Header theme="green" />

      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-eyebrow text-emerald font-bold text-xs uppercase tracking-widest mb-3">Expert Care. Healthy Feet. Better Tomorrows.</p>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-green leading-tight">Advanced Diabetic Foot Care</h1>
            <p className="text-slate mt-4 max-w-md leading-relaxed">
              Specialized care for diabetic foot problems to prevent complications, promote healing and improve quality of life.
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mt-4">
              {["Foot Ulcers Treatment", "Wound Care & Dressing", "Infection Management", "Limb Salvage Solutions", "Preventive Foot Care"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-emerald">✓</span>{i}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/contact" className="bg-emerald hover:bg-green text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
              <a href={`tel:${hospital.phoneTel}`} className="border-2 border-emerald text-emerald font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-emerald/5"><IconPhone /> Call Now</a>
              <a href={waLink("Hi, I'd like to know more about the Diabetic Foot Clinic.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
            </div>
          </div>
          <div className="relative">
            <PlaceholderImage label="Diabetic foot examination" theme="green" className="w-full aspect-[4/3] rounded-2xl" />
            <div className="hidden md:block absolute -bottom-4 -right-4 bg-green text-white rounded-xl px-4 py-3 shadow-lg text-sm">
              <p className="font-bold">24 × 7 Foot Care Support</p>
              <p className="text-white/80 text-xs">We are here for your every step</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <PlaceholderImage label="Diabetic foot illustration" theme="green" className="w-full aspect-square rounded-2xl" />
        <div>
          <h2 className="font-display text-2xl font-bold text-green mb-3">What is Diabetic Foot?</h2>
          <p className="text-slate leading-relaxed mb-5">
            Diabetic foot is a complication of diabetes that affects the feet. High blood sugar can damage nerves and reduce blood flow, making even small injuries serious. Without proper care, it can lead to infections, ulcers and even amputation.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Prevent Complications", "Promote Healing", "Improve Mobility & Comfort", "Better Quality of Life"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-navy/90"><span className="text-emerald">✓</span>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Symptoms to Watch For" accent="emerald" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {symptoms.map((s) => (
              <div key={s} className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-2">⚠</div>
                <p className="font-semibold text-navy text-xs">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeading title="Conditions We Treat" accent="emerald" center={false} />
          <div className="grid grid-cols-2 gap-3 mt-6">
            {conditions.map((c) => (
              <div key={c} className="bg-white border border-slate-100 shadow-sm rounded-xl p-3 text-center text-xs font-semibold text-navy">{c}</div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Our Treatment Process" accent="emerald" center={false} />
          <div className="space-y-4 mt-6">
            {process.map(([t, d], i) => (
              <div key={t} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-green text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                <div>
                  <h4 className="font-semibold text-navy text-sm">{t}</h4>
                  <p className="text-xs text-slate">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <PlaceholderImage label="Dr. Piyush Wadhawan — Diabetic Foot Specialist" theme="green" className="w-full aspect-[4/3] rounded-2xl" />
          <div>
            <p className="text-emerald font-bold text-xs uppercase tracking-widest mb-2">Meet Our Diabetic Foot Specialist</p>
            <h3 className="font-display text-2xl font-bold text-green">Dr. Piyush Wadhawan</h3>
            <p className="font-semibold text-navy/70 mt-1">MS (Orthopedics), Diabetic Foot Care Specialist</p>
            <p className="text-emerald text-sm font-medium mb-3">Orthopedic & Joint Replacement Surgeon</p>
            <ul className="space-y-1.5 text-sm text-navy/90">
              {["10+ Years of Experience", "Expert in Diabetic Foot Ulcer Treatment", "Limb Salvage & Wound Management", "Peripheral Neuropathy & Infection Care", "Dedicated to Preventing Amputations"].map((p) => (
                <li key={p} className="flex items-center gap-2"><span className="text-emerald">✓</span>{p}</li>
              ))}
            </ul>
            <a href="/doctors" className="inline-flex mt-5 bg-emerald hover:bg-green text-white font-semibold rounded-lg px-5 py-2.5">View Full Profile →</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Advanced Facilities for Diabetic Foot Care" accent="emerald" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {facilities.map((f) => (
            <div key={f} className="text-center">
              <PlaceholderImage label={f} theme="green" className="aspect-square rounded-xl mb-2" />
              <p className="text-xs font-semibold text-navy">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Patient Success Stories" accent="emerald" />
          <div className="max-w-2xl mx-auto mt-8">
            <TestimonialCarousel items={testimonials.diabeticFoot} accent="emerald" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Frequently Asked Questions" accent="emerald" />
        <div className="mt-8">
          <FaqAccordion items={diabeticFaqs} accent="emerald" />
        </div>
      </section>

      <CtaBanner theme="green" heading="Healthy Feet, Better Life" sub="Early care can prevent serious complications. Don't wait, get expert care today." />
      <Footer />
    </>
  );
}
