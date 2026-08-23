import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, doctors, testimonials, waLink } from "@/lib/site-data";
import { SectionHeading, StatCard, TestimonialGrid, CtaBanner } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Header theme="navy" />

      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        {/* Mobile / tablet — same architecture as the Contact page hero: CSS gradient background,
            image is a decorative object-contain element anchored right (not a card, not baked-in text) */}
        <div className="lg:hidden relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #dce9f9 0%, #eef5fc 100%)" }}>
          <Image
            src="/images/home/hero-orthopedics-mobile.jpg"
            alt="Dr. Piyush & Dr. Pritika Wadhawan outside Wadhawan Hospital"
            fill
            priority
            className="object-contain object-right"
            sizes="100vw"
          />
          {/* soft fade blending the image's left edge into the page background — color matched to the photo's own sky tone */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#dce9f9_0%,rgba(220,233,249,0.75)_38%,transparent_62%)]" />

          {/* normal document flow (not absolutely centered) — this is what sets the section's height,
              so the image just fills to match it and text/buttons can never get clipped */}
          <div className="relative px-5 py-9">
            <div className="w-[58%]">
              <p className="text-teal font-bold uppercase tracking-widest text-xs mb-2">Welcome to Wadhawan Hospital</p>
              <h1 className="font-display font-extrabold text-navy leading-tight text-2xl">
                Advanced Orthopedics, Fertility &amp; Gyne Care
              </h1>
              <p className="text-teal font-semibold text-sm mt-3">Compassion&nbsp;|&nbsp;Care&nbsp;|&nbsp;Cure</p>
              <p className="text-slate mt-3 leading-relaxed text-xs">{hospital.heroDescription}</p>
              <div className="flex flex-wrap items-start gap-2 mt-7">
                <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-4 py-2.5 text-sm text-center">
                  Book Appointment
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-navy text-navy font-semibold rounded-lg px-4 py-2.5 text-sm text-center bg-white/80"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: image with overlaid text */}
        <div className="hidden lg:block relative w-full aspect-[1983/793]">
          <Image
            src="/images/home/hero-banner.jpg"
            alt="Dr. Piyush & Dr. Pritika Wadhawan outside Wadhawan Hospital"
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="w-[38%] pl-[5%]">
              <p className="text-teal font-bold uppercase tracking-widest text-xs mb-2">Welcome to Wadhawan Hospital</p>
              <h1 className="font-display font-extrabold text-navy leading-tight text-3xl xl:text-5xl">
                Advanced Orthopedics, Fertility &amp; Gyne Care
              </h1>
              <p className="text-teal font-semibold text-sm mt-3">Compassion&nbsp;|&nbsp;Care&nbsp;|&nbsp;Cure</p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-5 py-2.5 text-sm">
                  Book Appointment
                </Link>
                <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-5 py-2.5 text-sm bg-white/80">
                  Call Now
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-navy text-navy font-semibold rounded-lg px-5 py-2.5 text-sm bg-white/80"
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-8">
            {[
              ["Experienced Specialists", "Highly qualified & experienced doctors with proven expertise", <IconSpecialist key="i" />, "bg-teal/10"],
              ["Modern Technology", "Advanced medical equipment for accurate diagnosis & treatment", <IconMonitor key="i" />, "bg-sky-100"],
              ["24x7 Emergency", "Round-the-clock emergency care always available", <Icon247 key="i" />, "bg-pink-light"],
              ["Compassionate Care", "Patient-first approach with empathy and personal attention", <IconHeartHand key="i" />, "bg-emerald-50"],
              ["Affordable Treatment", "Quality healthcare with transparent & affordable pricing", <IconRupeeHand key="i" />, "bg-purple-50"],
              ["Patient-Centered Approach", "Your health, comfort and satisfaction are our priority", <IconGroup key="i" />, "bg-blue-50"],
            ].map(([t, d, icon, bg]) => (
              <div key={t} className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}>{icon}</div>
                <div>
                  <h3 className="font-semibold text-navy text-sm sm:text-base">{t}</h3>
                  <p className="text-xs sm:text-sm text-slate mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALITIES */}
      <section className="w-full px-5 py-14">
        <SectionHeading title="Our Specialities" />
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <div className="flex rounded-2xl overflow-hidden border border-slate-100 bg-sky-50/60">
            <div className="relative w-24 sm:w-40 md:w-52 shrink-0">
              <Image
                src="/images/ortho/condition-knee-pain.png"
                alt="Orthopedics — knee joint illustration"
                fill
                className="object-contain p-3 sm:p-4"
                sizes="(min-width: 768px) 210px, 96px"
              />
            </div>
            <div className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-navy">ORTHOPEDICS</h3>
              <p className="text-teal font-semibold text-[11px] sm:text-sm mb-2 sm:mb-4">Restoring Mobility. Enhancing Lives.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 sm:gap-y-2 text-[10px] sm:text-sm text-navy/90 mb-3 sm:mb-5">
                {["Knee Pain Treatment", "Sports Injury Treatment", "Joint Replacement", "Arthroscopy", "Fracture Care", "Ligament Repair"].map((i) => (
                  <li key={i} className="flex items-center gap-1.5 sm:gap-2"><span className="text-teal shrink-0">✓</span>{i}</li>
                ))}
              </ul>
              <Link href="/orthopedics" className="self-start inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white text-[11px] sm:text-sm font-semibold rounded-lg px-3 py-1.5 sm:px-5 sm:py-2.5">Explore Orthopedics →</Link>
            </div>
          </div>

          <div className="flex rounded-2xl overflow-hidden border border-slate-100 bg-pink-50/60">
            <div className="relative w-24 sm:w-40 md:w-52 shrink-0">
              <Image
                src="/images/gynecology/journey-pregnancy-care.png"
                alt="Gynecology — pregnancy illustration"
                fill
                className="object-contain p-3 sm:p-4"
                sizes="(min-width: 768px) 210px, 96px"
              />
            </div>
            <div className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-maroon">GYNECOLOGY</h3>
              <p className="text-pink font-semibold text-[11px] sm:text-sm mb-2 sm:mb-4">Women&apos;s Health. Our Priority.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 sm:gap-y-2 text-[10px] sm:text-sm text-navy/90 mb-3 sm:mb-5">
                {["Pregnancy & Maternity Care", "High-Risk Pregnancy Care", "PCOD / PCOS Treatment", "Laparoscopic Gynec Surgery", "Infertility & Fertility Care", "Menstrual Disorders"].map((i) => (
                  <li key={i} className="flex items-center gap-1.5 sm:gap-2"><span className="text-pink shrink-0">✓</span>{i}</li>
                ))}
              </ul>
              <Link href="/gynecology" className="self-start inline-flex items-center gap-2 bg-pink hover:bg-maroon text-white text-[11px] sm:text-sm font-semibold rounded-lg px-3 py-1.5 sm:px-5 sm:py-2.5">Explore Gynecology →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="bg-mist py-14">
        <div className="w-full px-5">
          <div className="flex items-center justify-between">
            <SectionHeading title="Meet Our Doctors" center={false} />
            <Link href="/doctors" className="text-teal font-semibold text-sm hidden sm:block">View All →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {doctors.map((doc) => {
              const isMaroon = doc.theme === "maroon";
              return (
                <div
                  key={doc.slug}
                  className={`flex rounded-2xl overflow-hidden border-t-4 shadow-sm bg-white ${isMaroon ? "border-t-pink" : "border-t-navy"}`}
                >
                  <div className="relative w-28 sm:w-36 md:w-40 shrink-0">
                    <Image
                      src={isMaroon ? "/images/gynecology/dr-image-upper.jpg" : "/images/ortho/dr-piyush.jpg"}
                      alt={doc.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center p-4 sm:p-5">
                    <h3 className={`font-display font-bold text-sm sm:text-lg leading-snug ${isMaroon ? "text-maroon" : "text-navy"}`}>{doc.name}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-navy/70">{doc.qualification}</p>
                    <p className={`text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2 ${isMaroon ? "text-pink" : "text-teal"}`}>{doc.role}</p>
                    <ul className="text-[10px] sm:text-xs text-slate space-y-0.5 sm:space-y-1 mb-2.5 sm:mb-3">
                      {doc.points.slice(0, 2).map((p) => <li key={p}>✓ {p}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Link href={isMaroon ? "/gynecology" : "/orthopedics"} className={`text-[11px] sm:text-xs font-semibold text-white rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 ${isMaroon ? "bg-pink" : "bg-navy"}`}>View Profile →</Link>
                      <a href={waLink(`Hi, I'd like to consult ${doc.name}.`)} className="text-[11px] sm:text-xs font-semibold rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-emerald-500 text-emerald-600 bg-white">WhatsApp</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS strip */}
      {/* <section className="bg-mist py-14">
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
      </section> */}

      {/* FACILITIES strip */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading title="Our Hospital Facilities" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {[
            { title: "24x7 Emergency", desc: "Round-the-clock emergency care for all critical situations.", icon: <IconAmbulanceBadge />, bg: "bg-teal", photo:"/images/about/facilities/facility-emergency.jpg" },
            { title: "Operation Theatre", desc: "Modern modular OT with advanced technology.", icon: <IconOtBadge />, bg: "bg-emerald-600", photo: "/images/about/facilities/operation-theatre.jpg" },
            { title: "X-Ray", desc: "Digital X-Ray for accurate and quick diagnosis.", icon: <IconXrayBadge />, bg: "bg-navy", photo: "/images/about/facilities/xray.jpg" },
            { title: "Ultrasound", desc: "High-resolution ultrasound for precise imaging.", icon: <IconUltrasoundBadge />, bg: "bg-purple-600", photo: "/images/about/facilities/ultrasound.jpg" },
            { title: "Laboratory", desc: "Fully equipped lab for all blood & diagnostic tests.", icon: <IconLabBadge />, bg: "bg-pink", photo: "/images/about/facilities/laboratory.jpg" },
            { title: "Pharmacy", desc: "In-house pharmacy with genuine medicines.", icon: <IconPharmacyBadge />, bg: "bg-amber-500", photo: "/images/about/facilities/pharmacy.jpg" },
            { title: "Experienced Staff", desc: "Dedicated doctors, nurses and support staff.", icon: <IconStaffBadge />, bg: "bg-emerald-600", photo:"/images/about/facilities/staff.jpg" },
            { title: "Comfortable Waiting", desc: "Hygienic and comfortable waiting area for patients.", icon: <IconChairBadge />, bg: "bg-blue-600", photo: "/images/about/facilities/opd-waiting-area.jpg" },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-slate-100 shadow-sm text-center overflow-visible">
              <div className="relative h-28 rounded-t-xl overflow-hidden">
                {f.photo ? (
                  <Image src={f.photo} alt={f.title} fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-50" role="img" aria-label={f.title} />
                )}
              </div>
              <div className="relative pt-6 pb-4 px-3">
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${f.bg} text-white flex items-center justify-center shadow-md`}>
                  {f.icon}
                </div>
                <h4 className="font-semibold text-navy text-sm">{f.title}</h4>
                <p className="text-xs text-slate mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS strip */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What Our Patients Say" />
          <div className="mt-8">
            <TestimonialGrid items={testimonials.about} />
          </div>
        </div>
      </section>

      {/* VISIT / CONTACT / MAP / TIMINGS strip */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <h4 className="flex items-center gap-2 font-display font-bold text-navy text-sm mb-2">
              <IconPinSmall /> VISIT US
            </h4>
            <p className="text-sm font-bold text-slate-900 leading-relaxed">{hospital.addressLine}</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <h4 className="font-display font-bold text-navy text-sm mb-2 text-center">GET IN TOUCH</h4>
            <ul className="space-y-2 text-sm font-bold text-slate-900">
              <li className="flex items-center gap-2"><IconPhoneSmall /> {hospital.phoneDisplay}</li>
              <li className="flex items-center gap-2"><IconMailSmall /> {hospital.email}</li>
              <li className="flex items-center gap-2"><IconGlobeSmall /> {hospital.website}</li>
            </ul>
          </div>

          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-slate-100 shadow-sm min-h-[180px]">
            <iframe
              title="Wadhawan Hospital location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(hospital.addressLine)}&output=embed`}
              className="w-full h-full min-h-[180px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <h4 className="flex items-center gap-2 font-display font-bold text-navy text-sm mb-2">
              <IconClockSmall /> HOSPITAL TIMINGS
            </h4>
            <p className="text-sm font-bold text-slate-900"><span className="text-navy">Monday - Saturday</span><br />{hospital.hoursMorning}<br />{hospital.hoursEvening}</p>
            <p className="text-sm font-bold text-slate-900 mt-2"><span className="text-navy">Sunday</span><br />{hospital.sundayHours}</p>
            <p className="text-xs font-semibold text-red-600 mt-2">24×7 Emergency Services Available</p>
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
/* Facility badge icons — white on a solid colored circle */
function IconAmbulanceBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 16V7a1 1 0 011-1h9v10"/><path d="M13 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/><path d="M7 8v4M5 10h4" strokeLinecap="round"/></svg>); }
function IconOtBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 20l6-6M8 8l8 8M14 4l6 6-3 3-6-6z" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconXrayBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 3v18M18 3v18M6 8h12M6 16h12" strokeLinecap="round"/></svg>); }
function IconUltrasoundBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="5" width="18" height="11" rx="1.5"/><path d="M6 14l2-4 2 6 2-8 2 5 2-3" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconLabBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 3h6M10 3v6l-5 9a1.5 1.5 0 001.3 2.2h11.4A1.5 1.5 0 0019 18l-5-9V3" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconPharmacyBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8" strokeLinecap="round"/></svg>); }
function IconStaffBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="8" cy="8" r="2.8"/><circle cx="16" cy="8" r="2.8"/><path d="M2 19c0-2.8 2.7-5 6-5s6 2.2 6 5M12 19c0-2.5 2.4-4.5 5.3-4.5S22.6 16.5 22.6 19"/></svg>); }
function IconChairBadge() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 4v9a2 2 0 002 2h8a2 2 0 002-2V4M6 20v-3M18 20v-3M6 17h12" strokeLinecap="round" strokeLinejoin="round"/></svg>); }

/* Small inline icons for the Visit/Contact/Timings strip */
function IconPinSmall() { return (<svg width="15" height="15" viewBox="0 0 24 24" fill="#0E9F9A"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>); }
function IconClockSmall() { return (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9F9A" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>); }
function IconPhoneSmall() { return (<svg width="15" height="15" viewBox="0 0 24 24" fill="#0E9F9A"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>); }
function IconMailSmall() { return (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9F9A" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function IconGlobeSmall() { return (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9F9A" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" strokeLinecap="round"/></svg>); }