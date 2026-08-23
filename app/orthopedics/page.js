import { Fragment } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, testimonials, orthoFaqs, waLink } from "@/lib/site-data";
import { SectionHeading, TestimonialGrid, FaqAccordion, CtaBanner, IconCalendar, IconPhone, IconWhatsapp } from "@/components/ui";

export const metadata = { title: "Orthopedics | Wadhawan Hospital" };

const conditions = [
  { name: "Knee Pain", desc: "Relief from chronic knee pain and mobility issues.", icon: "/images/ortho/condition-knee-pain.png" },
  { name: "Arthritis", desc: "Treatment for osteoarthritis and inflammatory arthritis.", icon: "/images/ortho/condition-arthritis.jpg" },
  { name: "Fracture Care", desc: "Advanced care for all types of bone fractures.", icon: "/images/ortho/condition-fracture-care.png" },
  { name: "Back Pain", desc: "Diagnosis and treatment for back and spine problems.", icon: "/images/ortho/condition-back-pain.png" },
  { name: "Sports Injuries", desc: "Expert care for sports injuries and ligament tears.", icon: "/images/ortho/condition-sports-injuries.png" },
  { name: "Shoulder Pain", desc: "Treatment for rotator cuff and shoulder problems.", icon: "/images/ortho/condition-shoulder-pain.png" },
  { name: "Hip Pain", desc: "Effective solutions for hip pain and replacements.", icon: "/images/ortho/condition-hip-pain.png" },
  { name: "Diabetic Foot", desc: "Specialized care for diabetic foot and wound healing.", icon: "/images/ortho/condition-diabetic-foot.png" },
];
const services = [
  { title: "Joint Replacement", desc: "Knee, Hip & Shoulder replacement by orthopedist with advanced implants.", image: "/images/ortho/service-joint-replacement.jpg" },
  { title: "Arthroscopy Surgery", desc: "Minimally invasive surgery for joints and ligaments.", image: "/images/ortho/service-arthroscopy-surgery.jpg" },
  { title: "Spine Care", desc: "Treatment for slipped disc, sciatica, and spine disorders.", image: "/images/ortho/service-spine-care.jpg" },
  { title: "Trauma & Fracture Care", desc: "24x7 emergency care for fractures and accidents.", image: "/images/ortho/service-trauma-fracture-care.jpg" },
  { title: "Physiotherapy & Rehabilitation", desc: "Personalized rehab programs for faster recovery.", image: "/images/ortho/service-physiotherapy-rehab.jpg" },
];
const journey = [
  { title: "Consultation", desc: "Detailed evaluation by our orthopedic specialist.", icon: "/images/ortho/consultant.svg" },
  { title: "Diagnosis", desc: "Advanced imaging & tests for accurate diagnosis.", icon: "/images/ortho/diagnosis.svg" },
  { title: "Treatment Plan", desc: "Personalized treatment plan tailored to your condition.", icon: "/images/ortho/treatment-plan.svg" },
  { title: "Treatment", desc: "Advanced treatment or surgery using modern technology.", icon: "/images/ortho/treatment.svg" },
  { title: "Recovery & Rehabilitation", desc: "Guided physiotherapy and follow-up for complete recovery.", icon: "/images/ortho/recovery.svg" },
];
const facilities = [
  { name: "Advanced Operation Theatre", desc: "Modern modular OT with advanced technology.", image: "/images/ortho/facility-operation-theatre.jpg", icon: <IconOtBadge />, bg: "bg-emerald-600" },
  { name: "Digital X-Ray", desc: "Digital X-Ray for accurate and quick diagnosis.", image: "/images/ortho/facility-digital-xray.jpg", icon: <IconXrayBadge />, bg: "bg-navy" },
  { name: "High-Resolution Ultrasound", desc: "High-resolution ultrasound for precise imaging.", image: "/images/ortho/facility-ultrasound.jpg", icon: <IconUltrasoundBadge />, bg: "bg-purple-600" },
  { name: "Fully Equipped Laboratory", desc: "Fully equipped lab for all blood & diagnostic tests.", image: "/images/ortho/facility-laboratory.jpg", icon: <IconLabBadge />, bg: "bg-pink" },
  { name: "Physiotherapy & Rehabilitation", desc: "Guided physiotherapy programs for faster recovery.", image: "/images/ortho/facility-physiotherapy.jpg", icon: <IconPhysioBadge />, bg: "bg-blue-600" },
  { name: "24x7 Emergency Services", desc: "Round-the-clock emergency care for all critical situations.", image: "/images/ortho/facility-emergency.jpg", icon: <IconAmbulanceBadge />, bg: "bg-teal" },
  { name: "In-house Pharmacy", desc: "In-house pharmacy with genuine medicines.", image: "/images/ortho/facility-pharmacy.jpg", icon: <IconPharmacyBadge />, bg: "bg-amber-500" },
  { name: "Comfortable IPD Rooms", desc: "Clean, comfortable rooms for a restful recovery.", image: "/images/ortho/facility-ipd-rooms.jpg", icon: <IconBedBadge />, bg: "bg-emerald-600" },
];

function IconOtBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 20l6-6M8 8l8 8M14 4l6 6-3 3-6-6z" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconXrayBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 3v18M18 3v18M6 8h12M6 16h12" strokeLinecap="round"/></svg>); }
function IconUltrasoundBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="5" width="18" height="11" rx="1.5"/><path d="M6 14l2-4 2 6 2-8 2 5 2-3" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconLabBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 3h6M10 3v6l-5 9a1.5 1.5 0 001.3 2.2h11.4A1.5 1.5 0 0019 18l-5-9V3" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconPharmacyBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8" strokeLinecap="round"/></svg>); }
function IconAmbulanceBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 16V7a1 1 0 011-1h9v10"/><path d="M13 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/><path d="M7 8v4M5 10h4" strokeLinecap="round"/></svg>); }
function IconPhysioBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="5" r="2"/><path d="M9 7v6l-3 8M9 13l5 1 3 6M6 10l6 1 5-3" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconBedBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 18v-7a2 2 0 012-2h14a2 2 0 012 2v7M3 18v2M21 18v2M3 13h18" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="9" r="1.3" fill="white" stroke="none"/></svg>); }

export default function OrthopedicsPage() {
  return (
    <>
      <Header theme="navy" />

      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        {/* Desktop / tablet banner — full 2172x724 image, text overlaid on the clear left zone */}
        <div className="relative w-full aspect-[2172/724] hidden md:block">
          <Image
            src="/images/ortho/hero-banner.jpg"
            alt="Orthopedic consultation — doctor examining patient's knee"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-[55%] pl-[5%]">
              <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-3">Advanced Orthopedic Care</p>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                Expert Orthopedic Care for a Pain-Free Life
              </h1>
              <p className="text-slate mt-4 max-w-md leading-relaxed text-sm lg:text-base">
                From joint pain to complex surgeries, we provide comprehensive orthopedic solutions with advanced technology and compassionate care.
              </p>
              <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mt-4">
                {["Knee Care", "Joint Replacement", "Fracture Care", "Sports Injury", "Arthroscopy", "Spine Care"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-teal">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
                <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-teal/5 bg-white/70"><IconPhone /> Call Now</a>
                <a href={waLink("Hi, I'd like to know more about Orthopedic care.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile banner — same architecture as the Home/Contact mobile hero: CSS gradient
            background (color-matched to the image), auto-height container so text/buttons can
            never get clipped, image is a decorative object-contain element anchored bottom-right */}
        <div className="md:hidden relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #d9e7f8 0%, #eef5fc 100%)" }}>
          <Image
            src="/images/ortho/hero-banner-mobile.jpg"
            alt="Orthopedic care — knee illustration"
            fill
            priority
            className="object-contain object-right-bottom"
            sizes="100vw"
          />
          {/* soft fade blending the image's left edge into the page background — color matched to the photo's own sky tone */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#d9e7f8_0%,rgba(217,231,248,0.75)_40%,transparent_65%)]" />

          {/* normal document flow — this is what sets the section's height, so the image just
              fills to match it and text/buttons can never overlap or get clipped */}
          <div className="relative px-5 py-9">
            <div className="w-[62%]">
              <p className="text-teal font-bold text-xs uppercase tracking-widest mb-2">Orthopedics</p>
              <h1 className="font-display text-2xl font-extrabold text-navy leading-tight">Advanced Orthopedic Care</h1>
              <p className="text-teal-dark text-sm font-semibold mt-1">Restoring Mobility. Enhancing Lives.</p>
              <p className="text-slate mt-3 leading-relaxed text-xs">
                We provide expert care for bone, joint, muscle and spine conditions using advanced technology and a patient-first approach.
              </p>
              <ul className="flex flex-col gap-y-1.5 text-xs text-navy/90 mt-4">
                {["Expert Orthopedic Surgeons", "Advanced Technology", "Personalized Treatment Plans"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-teal shrink-0">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start gap-2 mt-7">
                <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center gap-2 bg-white/70"><IconPhone /> Call Now</a>
                <a href={waLink("Hi, I'd like to know more about Orthopedic care.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center gap-2"><IconWhatsapp /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-14">
        <SectionHeading title="Conditions We Treat" />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mt-8">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-4 sm:p-5 text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-teal/10 text-teal flex items-center justify-center mb-2 sm:mb-3 relative">
                <Image src={c.icon} alt={c.name} fill className="object-contain p-3" />
              </div>
              <p className="font-semibold text-navy text-xs sm:text-sm leading-snug">{c.name}</p>
              <p className="text-[11px] text-slate mt-1 leading-snug">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="w-full px-5">
          <SectionHeading title="Our Orthopedic Services" />
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex items-center gap-5 p-5 min-h-[180px]">
                <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-navy text-lg leading-snug break-words">{s.title}</h3>
                  <p className="text-sm text-slate mt-1.5 break-words">{s.desc}</p>
                  <a href="/contact" className="inline-flex items-center gap-1 text-teal text-sm font-semibold mt-3 whitespace-nowrap">
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-14">
        <SectionHeading title="Our Treatment Journey" />
        <div className="flex flex-row items-stretch gap-2 sm:gap-6 mt-8 overflow-x-auto lg:overflow-visible pb-2">
          {journey.map((step, i) => (
            <Fragment key={step.title}>
              <div className="flex-1 min-w-[120px] lg:min-w-0 bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-xl lg:rounded-2xl p-3 lg:p-6 text-center">
                <div className="relative w-10 h-10 lg:w-20 lg:h-20 mx-auto rounded-full bg-teal/10 flex items-center justify-center mb-2 lg:mb-3">
                  <Image src={step.icon} alt={step.title} fill className="object-contain p-2 lg:p-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-teal text-white text-[8px] lg:text-[11px] font-bold flex items-center justify-center border-2 border-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-semibold text-navy text-[11px] lg:text-sm leading-tight">{step.title}</h4>
                <p className="text-[9px] lg:text-xs text-slate mt-1 leading-snug">{step.desc}</p>
              </div>
              {i < journey.length - 1 && (
                <span className="flex items-center text-teal text-sm lg:text-2xl shrink-0" aria-hidden="true">→</span>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="w-full px-5 grid lg:grid-cols-5 gap-8 items-start">
          {/* Mobile — exact copy of the Diabetic Foot Clinic doctor card */}
          <div className="lg:hidden bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 shadow-lg p-5 md:p-6">
            <div className="grid md:grid-cols-[0.85fr_1fr] gap-8 items-center">
              <div className="relative w-full aspect-[1178/1013] rounded-xl overflow-hidden">
                <Image src="/images/diabetic-foot/dr-piyush.jpg" alt="Dr. Piyush Wadhawan" fill className="object-cover" sizes="(min-width:768px) 38vw, 90vw" />
              </div>
              <div>
                <p className="text-emerald font-bold text-sm uppercase tracking-widest mb-2">Meet Our Diabetic Foot Specialist</p>
                <h3 className="font-display text-3xl font-bold text-green">Dr. Piyush Wadhawan</h3>
                <p className="font-bold text-navy/80 text-lg mt-2">MS (Orthopedics), Diabetic Foot Care Specialist</p>
                <p className="text-emerald text-base font-semibold mb-4">Orthopedic & Joint Replacement Surgeon</p>
                <ul className="space-y-2.5 text-base font-medium text-navy/90">
                  {["10+ Years of Experience", "Expert in Diabetic Foot Ulcer Treatment", "Limb Salvage & Wound Management", "Peripheral Neuropathy & Infection Care", "Dedicated to Preventing Amputations"].map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald text-white text-xs flex items-center justify-center shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="/doctors" className="inline-flex mt-5 bg-emerald hover:bg-green text-white font-semibold rounded-lg px-5 py-2.5">View Full Profile →</a>
              </div>
            </div>
          </div>

          {/* Desktop — unchanged */}
          <div className="hidden lg:flex lg:col-span-2 bg-white rounded-2xl p-6 gap-6 items-stretch">
            <div className="relative w-full sm:w-2/5 max-w-[220px] aspect-[3/4] sm:aspect-auto  rounded-2xl overflow-hidden shrink-0">
              <Image src="/images/ortho/dr-piyush.jpg" alt="Dr. Piyush Wadhawan" fill className="object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-teal font-bold text-xs uppercase tracking-widest mb-2">Meet Our Orthopedic Specialist</p>
              <h3 className="font-display text-2xl font-bold text-navy">Dr. Piyush Wadhawan</h3>
              <p className="font-semibold text-navy/70 mt-1">MS (Orthopedics)</p>
              <p className="text-teal text-sm font-medium mb-3">Orthopedic & Joint Replacement Surgeon</p>
              <ul className="space-y-1.5 text-sm text-navy/90 text-left inline-block">
                {["10+ Years of Experience", "Specialist in Joint Replacement, Trauma & Arthroscopy", "Expert in Knee, Hip, Shoulder & Spine Care", "Hundreds of Successful Surgeries", "Patient-Centered & Evidence-Based Care"].map((p) => (
                  <li key={p} className="flex items-center gap-2"><span className="text-teal">✓</span>{p}</li>
                ))}
              </ul>
              <a href="/doctors" className="inline-flex mt-5 bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-5 py-2.5">View Full Profile →</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading title="World-Class Facilities for Advanced Care" center={false} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {facilities.map((f) => (
                <div key={f.name} className="bg-white rounded-xl border border-slate-100 shadow-sm text-center overflow-visible">
                  <div className="relative h-24 rounded-t-xl overflow-hidden">
                    <Image src={f.image} alt={f.name} fill className="object-cover" />
                  </div>
                  <div className="relative pt-6 pb-4 px-3">
                    <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${f.bg} text-white flex items-center justify-center shadow-md`}>
                      {f.icon}
                    </div>
                    <h4 className="font-semibold text-navy text-xs leading-snug">{f.name}</h4>
                    <p className="text-[11px] text-slate mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What Our Patients Say" />
          <div className="mt-8">
            <TestimonialGrid items={testimonials.orthopedics} />
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