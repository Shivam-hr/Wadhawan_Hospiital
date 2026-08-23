import { Fragment } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, testimonials, diabeticFaqs, waLink } from "@/lib/site-data";
import { SectionHeading, TestimonialGrid, FaqAccordion, CtaBanner, IconCalendar, IconPhone, IconWhatsapp } from "@/components/ui";

export const metadata = { title: "Diabetic Foot Clinic | Wadhawan Hospital" };

/* ---------- small inline icons (no new image files needed) ---------- */
function IconTingling() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M6 6l3 3M18 6l-3 3M4 14h4M16 14h4M8 20l2-3M16 20l-2-3" /><circle cx="12" cy="14" r="3" /></svg>); }
function IconSore() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" /></svg>); }
function IconSwelling() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c3 4 6 6.5 6 10a6 6 0 01-12 0c0-3.5 3-6 6-10z" /></svg>); }
function IconBurning() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.5 6L18 4l-2 6 5 1-5 2 3 5-6-2 1 6-4-4-4 4 1-6-6 2 3-5-5-2 5-1-2-6 4.5 4z" /></svg>); }
function IconDrySkin() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h4M4 12h6M4 18h4M12 6h8M14 12h6M12 18h8" /></svg>); }
function IconColorChange() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="12" r="5" /><circle cx="15" cy="12" r="5" opacity="0.4" /></svg>); }
function IconSmell() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20c-3-1-4-4-3-7 1-2 3-2 3-4a3 3 0 116 0c0 2-2 3-1 5M16 8c1 1 2 3 1 5" /></svg>); }
function IconWarm() { return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14V5a2 2 0 114 0v9a4 4 0 11-4 0z" /></svg>); }

function IconUlcer() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></svg>); }
function IconInfection() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M18.5 5.5L17 7M7 17l-1.5 1.5" /></svg>); }
function IconNerve() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h3l2-6 4 12 2-6h5" /></svg>); }
function IconCirculation() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.4-9.5 9-9.5 9z" /></svg>); }
function IconDeformity() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3c-1 3 2 4 1 7s-4 2-4 6 3 5 6 5 5-2 5-5-3-3-2-6" /></svg>); }
function IconWound() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="9" width="16" height="6" rx="2" /><path d="M8 9v6M12 9v6M16 9v6" /></svg>); }
function IconCallus() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /></svg>); }
function IconAmputationRisk() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v9M9 8l3 3 3-3M5 21h14" strokeDasharray="2 2" /></svg>); }

function IconAssessment() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 9h6M9 13h6M9 17h3" /></svg>); }
function IconDiagnosisFoot() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6" /><path d="M14.5 14.5L20 20" /></svg>); }
function IconTreatmentFoot() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.4-9.5 9-9.5 9z" /><path d="M9 12h6M12 9v6" /></svg>); }
function IconPrevention() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /></svg>); }
function IconFollowup() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>); }

/* ---------- data ---------- */
const diabeticFeatures = [
  { name: "Prevent Complications", icon: "/images/diabetic-foot/feature-prevent-complications.png" },
  { name: "Promote Healing", icon: "/images/diabetic-foot/feature-promote-healing.png" },
  { name: "Improve Mobility & Comfort", icon: "/images/diabetic-foot/feature-improve-mobility.png" },
  { name: "Better Quality of Life", icon: "/images/diabetic-foot/feature-quality-of-life.png" },
];
const symptoms = [
  { name: "Numbness or Tingling", icon: <IconTingling /> },
  { name: "Non-healing Sores or Ulcers", icon: <IconSore /> },
  { name: "Redness or Swelling", icon: <IconSwelling /> },
  { name: "Foot Pain or Burning Sensation", icon: <IconBurning /> },
  { name: "Dry, Cracked Skin", icon: <IconDrySkin /> },
  { name: "Changes in Foot Color", icon: <IconColorChange /> },
  { name: "Foul Smell or Discharge", icon: <IconSmell /> },
  { name: "Foot is Warm or Hot", icon: <IconWarm /> },
];
const conditions = [
  { name: "Diabetic Foot Ulcers", desc: "Chronic wounds that need specialized care to heal.", icon: <IconUlcer /> },
  { name: "Foot Infections", desc: "Bacterial infections requiring prompt treatment.", icon: <IconInfection /> },
  { name: "Peripheral Neuropathy", desc: "Nerve damage causing numbness and tingling.", icon: <IconNerve /> },
  { name: "Poor Blood Circulation", desc: "Reduced blood flow slowing healing and recovery.", icon: <IconCirculation /> },
  { name: "Charcot Foot (Deformity)", desc: "Progressive weakening of bones and joints in the foot.", icon: <IconDeformity /> },
  { name: "Wounds & Tissue Damage", desc: "Injuries needing careful monitoring and dressing.", icon: <IconWound /> },
  { name: "Pre-ulcerative Callus & Corns", desc: "Thickened skin areas at risk of breaking down.", icon: <IconCallus /> },
  { name: "Risk of Amputation", desc: "Advanced cases needing urgent limb-saving care.", icon: <IconAmputationRisk /> },
];
const journey = [
  { title: "Assessment", desc: "Detailed foot examination & risk evaluation.", icon: <IconAssessment /> },
  { title: "Diagnosis", desc: "Advanced tests to identify the root cause.", icon: <IconDiagnosisFoot /> },
  { title: "Treatment", desc: "Personalized wound care & medical management.", icon: <IconTreatmentFoot /> },
  { title: "Prevention", desc: "Guidance for foot care, footwear & lifestyle modifications.", icon: <IconPrevention /> },
  { title: "Follow-up", desc: "Regular monitoring to ensure healing & prevent relapse.", icon: <IconFollowup /> },
];

export default function DiabeticFootClinicPage() {
  return (
    <>
      <Header theme="green" />

      {/* HERO — full-bleed banner, same pattern as Orthopedics/Gynecology */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-slate-100">
        <div className="relative w-full aspect-[2172/724] hidden md:block">
          <Image
            src="/images/diabetic-foot/hero-banner.jpg"
            alt="Diabetic foot examination with pressure mapping"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-[50%] pl-[5%]">
              <p className="section-eyebrow text-emerald font-bold text-xs uppercase tracking-widest mb-3">Expert Care. Healthy Feet. Better Tomorrows.</p>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-green leading-tight">Advanced Diabetic Foot Care</h1>
              <p className="text-slate mt-4 max-w-md leading-relaxed text-sm lg:text-base">
                Specialized care for diabetic foot problems to prevent complications, promote healing and improve quality of life.
              </p>
              <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mt-4">
                {["Foot Ulcers Treatment", "Wound Care & Dressing", "Infection Management", "Limb Salvage Solutions", "Preventive Foot Care"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-emerald">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="/contact" className="bg-emerald hover:bg-green text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
                <a href={`tel:${hospital.phoneTel}`} className="border-2 border-emerald text-emerald font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-emerald/5 bg-white/70"><IconPhone /> Call Now</a>
                <a href={waLink("Hi, I'd like to know more about the Diabetic Foot Clinic.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconWhatsapp /> WhatsApp Us</a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-6 right-[5%] bg-green text-white rounded-xl px-4 py-3 shadow-lg text-sm">
            <p className="font-bold">24 × 7 Foot Care Support</p>
            <p className="text-white/80 text-xs">We are here for your every step</p>
          </div>
        </div>

        {/* mobile — same architecture as Home/About/Contact: gradient background (dark navy, matched to this photo's own tone), image is object-contain anchored right in normal document flow */}
        <div className="md:hidden relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #011332 0%, #000A24 100%)" }}>
          <Image
            src="/images/diabetic-foot/hero-banner-mobile.jpg"
            alt="Diabetic foot X-ray highlighting an affected area"
            fill
            priority
            className="object-contain object-right"
            sizes="100vw"
          />
          {/* soft fade blending the image's left edge into the dark background */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#011332_0%,rgba(1,19,50,0.8)_38%,transparent_62%)]" />

          <div className="relative px-5 py-9">
            <div className="w-[62%]">
              <p className="text-emerald-300 font-bold text-xs uppercase tracking-widest mb-2">Diabetic Foot Care</p>
              <h1 className="font-display text-2xl font-extrabold text-white leading-tight">Advanced Diabetic Foot Care</h1>
              <p className="text-emerald-200 text-sm font-semibold mt-1">Protect. Heal. Prevent.</p>
              <p className="text-white/85 mt-3 leading-relaxed text-sm">
                Specialized care for diabetic foot complications to prevent infections, promote healing and avoid amputations.
              </p>
              <ul className="flex flex-col gap-y-1.5 text-sm text-white mt-4">
                {["Early Diagnosis", "Advanced Wound Care", "Infection Control", "Limb Saving Approach"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-emerald-300">✓</span>{i}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                <a href="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center gap-2"><IconCalendar /> Book Appointment</a>
                <a href={waLink("Hi, I'd like to know more about the Diabetic Foot Clinic.")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-4 py-2.5 text-sm flex items-center gap-2"><IconWhatsapp /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS DIABETIC FOOT — wide banner strip (2015x350), text + 4 icons overlaid on the clear right zone */}
      <section className="py-8 md:py-14">
        <div className="w-full px-5">
          <div className="relative w-full rounded-2xl overflow-hidden aspect-[2015/350] hidden md:block">
            <Image src="/images/diabetic-foot/diabetic-foot.jpg" alt="Diabetic foot illustration" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-[75%] ml-[24%] pl-6 flex items-center gap-8">
                <div className="max-w-sm shrink-0">
                  <h2 className="font-display text-2xl font-bold text-green mb-2">What is Diabetic Foot?</h2>
                  <div className="w-10 h-1 bg-emerald rounded-full mb-3" />
                  <p className="text-slate text-sm leading-relaxed">
                    Diabetic foot is a complication of diabetes that affects the feet. High blood sugar can damage nerves and reduce blood flow, making even small injuries serious.
                  </p>
                </div>
                <div className="flex items-stretch">
                  {diabeticFeatures.map((f, i) => (
                    <div key={f.name} className={`flex flex-col items-center text-center gap-2 px-5 ${i > 0 ? "border-l border-slate-300/60" : ""}`}>
                      <div className="relative w-15 h-15 rounded-full bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center shrink-0">
                        <Image src={f.icon} alt={f.name} fill className="object-contain p-2.5" />
                      </div>
                      <p className="text-navy text-xs font-semibold leading-snug w-24">{f.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* mobile: image on top, text and icons stacked below */}
          <div className="md:hidden">
            <div className="relative w-full h-40 rounded-2xl overflow-hidden">
              <Image src="/images/diabetic-foot/diabetic-foot.jpg" alt="Diabetic foot illustration" fill className="object-cover object-left" />
            </div>
            <div className="mt-6">
              <h2 className="font-display text-2xl font-bold text-green mb-2">What is Diabetic Foot?</h2>
              <p className="text-slate text-sm leading-relaxed mb-4">
                Diabetic foot is a complication of diabetes that affects the feet. High blood sugar can damage nerves and reduce blood flow, making even small injuries serious.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {diabeticFeatures.map((f) => (
                  <div key={f.name} className="flex flex-col items-center text-center gap-2">
                    <div className="relative w-11 h-11 rounded-full bg-white/70 backdrop-blur-sm shadow-sm flex items-center justify-center shrink-0">
                      <Image src={f.icon} alt={f.name} fill className="object-contain p-2.5" />
                    </div>
                    <p className="text-navy text-xs font-semibold leading-snug">{f.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS TO WATCH FOR */}
      <section className="bg-mist py-14">
        <div className="w-full px-5">
          <SectionHeading title="Symptoms to Watch For" accent="emerald" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {symptoms.map((s) => (
              <div key={s.name} className="bg-white border border-slate-100 shadow-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-3">{s.icon}</div>
                <p className="font-semibold text-navy text-base">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS WE TREAT — exact structure copied from Orthopedics (glass cards) */}
      <section className="w-full px-5 py-14">
        <SectionHeading title="Conditions We Treat" accent="emerald" />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
          {conditions.map((c) => (
            <div key={c.name} className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-5 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-3">
                {c.icon}
              </div>
              <p className="font-semibold text-navy text-sm">{c.name}</p>
              <p className="text-xs text-slate mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR TREATMENT PROCESS — exact structure copied from Orthopedics (full-width stretched cards + arrows) */}
      <section className="w-full px-5 py-14">
        <SectionHeading title="Our Treatment Process" accent="emerald" />
        <div className="flex flex-row items-stretch gap-2 sm:gap-6 mt-8 overflow-x-auto lg:overflow-visible pb-2">
          {journey.map((step, i) => (
            <Fragment key={step.title}>
              <div className="flex-1 min-w-[120px] lg:min-w-0 bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-xl lg:rounded-2xl p-3 lg:p-6 text-center">
                <div className="relative w-10 h-10 lg:w-20 lg:h-20 mx-auto rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-2 lg:mb-3">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-emerald text-white text-[8px] lg:text-[11px] font-bold flex items-center justify-center border-2 border-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-semibold text-navy text-[11px] lg:text-sm leading-tight">{step.title}</h4>
                <p className="text-[9px] lg:text-xs text-slate mt-1 leading-snug">{step.desc}</p>
              </div>
              {i < journey.length - 1 && (
                <span className="flex items-center text-emerald text-sm lg:text-2xl shrink-0" aria-hidden="true">→</span>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 shadow-lg p-5 md:p-6">
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
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Patient Success Stories" accent="emerald" />
          <div className="mt-8">
            <TestimonialGrid items={testimonials.diabeticFoot} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Frequently Asked Questions" accent="emerald" />
        <div className="mt-8">
          <FaqAccordion items={diabeticFaqs} accent="emerald" />
        </div>
      </section>

      <CtaBanner theme="green" heading="Healthy Feet, Better Life" sub="Early care can prevent serious complications. Don't wait, get expert care today." bg="/images/diabetic-foot/bottom-banner.jpg" aspect="2023 / 263" mobileBg="/images/diabetic-foot/bottom-banner-mobile.jpg" mobileAspect="1846 / 852" mobileTextInset="pl-[42%]" mobileTextDark showDirections={false} showMobileActions={false} />
      <Footer />
    </>
  );
}