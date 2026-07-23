import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, doctors, testimonials, waLink } from "@/lib/site-data";
import { PlaceholderImage, SectionHeading, StatCard, TestimonialCarousel, CtaBanner } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Header theme="navy" />

      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        <div className="relative w-full aspect-[1983/793]">
          <Image
            src="/images/hero-banner.png"
            alt="Dr. Piyush & Dr. Pritika Wadhawan outside Wadhawan Hospital"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="w-[42%] sm:w-[38%] pl-[3%] sm:pl-[5%]">
              <p className="text-teal font-bold uppercase tracking-widest text-[9px] sm:text-[11px] lg:text-xs mb-1 sm:mb-2">Welcome to Wadhawan Hospital</p>
              <h1 className="font-display font-extrabold text-navy leading-tight text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Advanced Orthopedics, Fertility &amp; Gyne Care
              </h1>
              <p className="text-teal font-semibold text-[9px] sm:text-sm mt-1 sm:mt-3">Compassion&nbsp;|&nbsp;Care&nbsp;|&nbsp;Cure</p>
              <div className="flex flex-wrap gap-1 sm:gap-2.5 mt-2 sm:mt-6">
                <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-md sm:rounded-lg px-2 py-1 sm:px-5 sm:py-2.5 text-[9px] sm:text-sm">
                  Book Appointment
                </Link>
                <a href={`tel:${hospital.phoneTel}`} className="border border-teal sm:border-2 text-teal font-semibold rounded-md sm:rounded-lg px-2 py-1 sm:px-5 sm:py-2.5 text-[9px] sm:text-sm bg-white/80">
                  Call Now
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-navy sm:border-2 text-navy font-semibold rounded-md sm:rounded-lg px-2 py-1 sm:px-5 sm:py-2.5 text-[9px] sm:text-sm bg-white/80"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          <StatCard icon={<IconUsersBadge />} value={hospital.happyPatients} label="Happy Patients" sub="Trusted by thousands of families" />
          <StatCard icon={<IconStarBadge />} value={hospital.googleRating} label="Google Rating" sub={`${hospital.googleReviews} Reviews from our patients`} />
          <StatCard icon={<Icon247Badge />} value="24×7" label="Emergency Care" sub="Always here when you need us" />
          <StatCard icon={<IconShieldBadge />} value={hospital.yearsExperience} label="Years of Experience" sub="Delivering excellence in healthcare" />
          <StatCard icon={<IconSpecialistsBadge />} value={hospital.specialists} label="Expert Specialists" sub="Orthopedics & Gynecology" />
        </div>
      </section>

      {/* WHY CHOOSE US strip */}
      <section className="bg-mist py-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="" title="Why Choose Wadhawan Hospital?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              ["Experienced Specialists", "Highly qualified & experienced doctors with proven expertise", <IconSpecialist key="i" />, "bg-teal/10"],
              ["Modern Technology", "Advanced medical equipment for accurate diagnosis & treatment", <IconMonitor key="i" />, "bg-sky-100"],
              ["24x7 Emergency", "Round-the-clock emergency care always available", <Icon247 key="i" />, "bg-pink-light"],
              ["Compassionate Care", "Patient-first approach with empathy and personal attention", <IconHeartHand key="i" />, "bg-emerald-50"],
              ["Affordable Treatment", "Quality healthcare with transparent & affordable pricing", <IconRupeeHand key="i" />, "bg-purple-50"],
              ["Patient-Centered Approach", "Your health, comfort and satisfaction are our priority", <IconGroup key="i" />, "bg-blue-50"],
            ].map(([t, d, icon, bg]) => (
              <div key={t} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex gap-3">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}>{icon}</div>
                <div>
                  <h3 className="font-semibold text-navy">{t}</h3>
                  <p className="text-sm text-slate mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALITIES strip */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Our Specialities" />
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 md:p-8 border border-slate-100">
            <h3 className="font-display text-xl font-bold text-navy">ORTHOPEDICS</h3>
            <p className="text-teal font-semibold text-sm mb-4">Restoring Mobility. Enhancing Lives.</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mb-5">
              {["Knee Pain Treatment", "Sports Injury Treatment", "Joint Replacement", "Arthroscopy", "Fracture Care", "Ligament Repair"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-teal">✓</span>{i}</li>
              ))}
            </ul>
            <Link href="/orthopedics" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white text-sm font-semibold rounded-lg px-5 py-2.5">Explore Orthopedics →</Link>
          </div>
          <div className="bg-gradient-to-br from-pink-light to-white rounded-2xl p-6 md:p-8 border border-slate-100">
            <h3 className="font-display text-xl font-bold text-maroon">GYNECOLOGY</h3>
            <p className="text-pink font-semibold text-sm mb-4">Women&apos;s Health. Our Priority.</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-navy/90 mb-5">
              {["Pregnancy & Maternity Care", "High-Risk Pregnancy Care", "PCOD / PCOS Treatment", "Laparoscopic Gynec Surgery", "Infertility & Fertility Care", "Menstrual Disorders"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-pink">✓</span>{i}</li>
              ))}
            </ul>
            <Link href="/gynecology" className="inline-flex items-center gap-2 bg-pink hover:bg-maroon text-white text-sm font-semibold rounded-lg px-5 py-2.5">Explore Gynecology →</Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 md:p-8 border border-slate-100 mt-6">
          <h3 className="font-display text-xl font-bold text-green">DIABETIC FOOT CLINIC</h3>
          <p className="text-emerald font-semibold text-sm mb-4">Expert Care. Healthy Feet. Better Tomorrows.</p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-navy/90 mb-5">
            {["Foot Ulcer Treatment", "Wound Care & Dressing", "Infection Management", "Limb Salvage Solutions", "Preventive Foot Care"].map((i) => (
              <li key={i} className="flex items-center gap-2"><span className="text-emerald">✓</span>{i}</li>
            ))}
          </ul>
          <Link href="/diabetic-foot-clinic" className="inline-flex items-center gap-2 bg-emerald hover:bg-green text-white text-sm font-semibold rounded-lg px-5 py-2.5">Explore Diabetic Foot Clinic →</Link>
        </div>
      </section>

      {/* DOCTORS strip */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <SectionHeading title="Meet Our Doctors" center={false} />
            <Link href="/doctors" className="text-teal font-semibold text-sm hidden sm:block">View All →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {doctors.map((doc) => (
              <div key={doc.slug} className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-5 ${doc.theme === "maroon" ? "border-t-4 border-t-pink" : "border-t-4 border-t-navy"}`}>
                <PlaceholderImage label={doc.name} theme={doc.theme} className="w-28 h-32 md:w-32 md:h-40 rounded-xl shrink-0" />
                <div>
                  <h3 className={`font-display font-bold text-lg ${doc.theme === "maroon" ? "text-maroon" : "text-navy"}`}>{doc.name}</h3>
                  <p className="text-sm font-semibold text-navy/70">{doc.qualification}</p>
                  <p className={`text-xs font-medium mb-2 ${doc.theme === "maroon" ? "text-pink" : "text-teal"}`}>{doc.role}</p>
                  <ul className="text-xs text-slate space-y-1 mb-3">
                    {doc.points.slice(0, 2).map((p) => <li key={p}>✓ {p}</li>)}
                  </ul>
                  <div className="flex gap-2">
                    <Link href={doc.theme === "maroon" ? "/gynecology" : "/orthopedics"} className={`text-xs font-semibold text-white rounded-lg px-3 py-2 ${doc.theme === "maroon" ? "bg-pink" : "bg-navy"}`}>View Profile →</Link>
                    <a href={waLink(`Hi, I'd like to consult ${doc.name}.`)} className="text-xs font-semibold rounded-lg px-3 py-2 border border-emerald-500 text-emerald-600">WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES strip */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Our Hospital Facilities" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {[
            ["24x7 Emergency", "Round-the-clock emergency care for all critical situations."],
            ["Operation Theatre", "Modern modular OT with advanced technology."],
            ["X-Ray", "Digital X-Ray for accurate and quick diagnosis."],
            ["Ultrasound", "High-resolution ultrasound for precise imaging."],
            ["Laboratory", "Fully equipped lab for all blood & diagnostic tests."],
            ["Pharmacy", "In-house pharmacy with genuine medicines."],
            ["Experienced Staff", "Dedicated doctors, nurses and support staff."],
            ["Comfortable Waiting", "Hygienic and comfortable waiting area for patients."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center">
              <PlaceholderImage label={t} theme="navy" className="h-16 rounded-lg mb-3" />
              <h4 className="font-semibold text-navy text-sm">{t}</h4>
              <p className="text-xs text-slate mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW strip */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Hospital Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {["Hospital Exterior", "Reception & Lobby", "Operation Theatre", "Patient Room", "Equipment", "Corridor", "X-Ray Room", "Our Team"].map((t) => (
              <PlaceholderImage key={t} label={t} theme="slate" className="aspect-square rounded-xl" />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/gallery" className="text-teal font-semibold text-sm">View More Photos →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS strip */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="What Our Patients Say" />
        <div className="grid md:grid-cols-2 gap-6 mt-8 items-start">
          <TestimonialCarousel items={testimonials.general} accent="teal" />
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="font-display text-4xl font-extrabold text-navy">{hospital.googleRating}</div>
            <div className="text-amber-400 text-lg my-1">★★★★★</div>
            <p className="text-sm text-slate mb-4">Based on {hospital.googleReviews} Google Reviews</p>
            <a href="#" className="text-teal font-semibold text-sm">Read More Reviews →</a>
          </div>
        </div>
      </section>

      <CtaBanner theme="navy" heading="Need Medical Consultation?" sub="We are here to take care of your health with compassion and expertise." />
      <Footer />
    </>
  );
}

function IconUsersBadge() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E9F9A" strokeWidth="2"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.3"/><path d="M15.5 14.3c2.7.4 5.5 2.4 5.5 5.7"/></svg>); }
function IconStarBadge() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7L2.2 9.2l7.1-.6z"/></svg>); }
function Icon247Badge() { return (<svg width="26" height="20" viewBox="0 0 40 24" fill="none"><text x="0" y="17" fontSize="15" fontWeight="700" fill="#DB2777" fontFamily="sans-serif">24/7</text></svg>); }
function IconShieldBadge() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconSpecialistsBadge() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2"><circle cx="8" cy="8" r="2.8"/><circle cx="16" cy="8" r="2.8"/><path d="M2 19c0-2.8 2.7-5 6-5s6 2.2 6 5M12 19c0-2.5 2.4-4.5 5.3-4.5S22.6 16.5 22.6 19" /></svg>); }

function IconSpecialist() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E9F9A" strokeWidth="2"><circle cx="12" cy="8" r="3.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>); }
function IconMonitor() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4" strokeLinecap="round"/><path d="M7 9l2.5 2.5L12 9l2 2 3-3" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function Icon247() { return (<svg width="26" height="20" viewBox="0 0 40 24" fill="none"><text x="0" y="17" fontSize="15" fontWeight="700" fill="#DB2777" fontFamily="sans-serif">24/7</text></svg>); }
function IconHeartHand() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2"><path d="M12 6c1.2-1.6 3.5-1.8 4.8-.5 1.4 1.4 1.4 3.6 0 5L12 15l-4.8-4.5c-1.4-1.4-1.4-3.6 0-5 1.3-1.3 3.6-1.1 4.8.5z"/><path d="M4 20c1.5-1.8 3.6-2 5.2-1l2 1.2c1 .6 2.3.4 3-.5l3-3.7" strokeLinecap="round"/></svg>); }
function IconRupeeHand() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2"><path d="M8 5h8M8 8h8M8 5c3 0 5 1.5 5 3.5S11 12 8 12h1l6 6" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 19c1.5-1.8 3.6-2 5.2-1l2 1.2c1 .6 2.3.4 3-.5" strokeLinecap="round"/></svg>); }
function IconGroup() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="8" cy="8" r="2.8"/><circle cx="16" cy="8" r="2.8"/><path d="M2 19c0-2.8 2.7-5 6-5s6 2.2 6 5M12 19c0-2.5 2.4-4.5 5.3-4.5S22.6 16.5 22.6 19"/></svg>); }