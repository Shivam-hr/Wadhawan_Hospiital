import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, doctors, testimonials, waLink } from "@/lib/site-data";
import { PlaceholderImage, SectionHeading, StatCard, TestimonialCarousel, CtaBanner, IconCalendar, IconPhone, IconPin } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Header theme="navy" />

      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        <div className="md:hidden mx-auto max-w-7xl px-4 py-6">
          <HeroCopy />
          <div className="relative w-full aspect-[1717/916] rounded-2xl overflow-hidden mt-6">
            <Image
              src="/images/doctors-hospital-hero.png"
              alt="Dr. Piyush & Dr. Pritika Wadhawan outside Wadhawan Hospital"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <MiniStatMobile icon={<IconStar />} value={hospital.googleRating} label="Google Rating" />
            <MiniStatMobile icon={<IconUsers />} value="Multi-Speciality" label="Healthcare" />
            <MiniStatMobile icon={<IconAmbulance />} value="24×7" label="Emergency" />
          </div>
        </div>

        <div className="hidden md:block relative w-full h-[300px] lg:h-[380px] xl:h-[430px] overflow-hidden">
          <Image
            src="/images/doctors-hospital-hero.png"
            alt="Dr. Piyush & Dr. Pritika Wadhawan outside Wadhawan Hospital"
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl w-full px-4 flex items-center justify-between">
              <div className="max-w-lg">
                <HeroCopy compact />
              </div>
              {/* <div className="hidden lg:flex flex-col gap-2.5 shrink-0">
                <MiniStat icon={<IconStar />} value={hospital.googleRating} label={`Google Rating (${hospital.googleReviews} Reviews)`} />
                <MiniStat icon={<IconUsers />} value="Multi-Speciality" label="Healthcare" />
                <MiniStat icon={<IconAmbulance />} value="24×7" label="Emergency Care" />
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          <StatCard icon={<span className="text-teal">👥</span>} value={hospital.happyPatients} label="Happy Patients" sub="Trusted by thousands of families" />
          <StatCard icon={<span className="text-amber-500">★</span>} value={hospital.googleRating} label="Google Rating" sub={`${hospital.googleReviews} Reviews from our patients`} />
          <StatCard icon={<span className="text-pink">24/7</span>} value="24×7" label="Emergency Care" sub="Always here when you need us" />
          <StatCard icon={<span className="text-navy">🛡️</span>} value={hospital.yearsExperience} label="Years of Experience" sub="Delivering excellence in healthcare" />
          <StatCard icon={<span className="text-purple-600">👨‍⚕️</span>} value={hospital.specialists} label="Expert Specialists" sub="Orthopedics & Gynecology" />
        </div> */}
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="" title="Why Choose Wadhawan Hospital?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              ["Experienced Specialists", "Highly qualified & experienced doctors with proven expertise"],
              ["Modern Technology", "Advanced medical equipment for accurate diagnosis & treatment"],
              ["24x7 Emergency", "Round-the-clock emergency care always available"],
              ["Compassionate Care", "Patient-first approach with empathy and personal attention"],
              ["Affordable Treatment", "Quality healthcare with transparent & affordable pricing"],
              ["Patient-Centered Approach", "Your health, comfort and satisfaction are our priority"],
            ].map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-navy">{t}</h3>
                  <p className="text-sm text-slate mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

function HeroCopy({ compact = false }) {
  return (
    <>
      <p className={`section-eyebrow text-teal font-bold uppercase tracking-widest ${compact ? "text-[11px] mb-1.5" : "text-xs mb-3"}`}>Welcome to Wadhawan Hospital</p>
      <h1 className={`font-display font-extrabold text-navy leading-tight ${compact ? "text-2xl lg:text-3xl xl:text-4xl" : "text-3xl md:text-4xl lg:text-5xl"}`}>
        Advanced Orthopedics, Fertility &amp; Gyne Care
      </h1>
      <p className={`text-teal font-semibold ${compact ? "mt-1.5 text-sm" : "mt-3"}`}>Compassion &nbsp;|&nbsp; Care &nbsp;|&nbsp; Cure</p>
      {!compact && (
        <p className="text-slate mt-4 max-w-md leading-relaxed">
          Wadhawan Hospital is a multi-speciality healthcare center in Panipat providing advanced Orthopedic and Women&apos;s healthcare with compassionate care and modern technology.
        </p>
      )}
      <div className={`flex flex-wrap gap-2.5 ${compact ? "mt-3" : "mt-6"}`}>
        <Link href="/contact" className={`bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg flex items-center gap-2 ${compact ? "px-4 py-2 text-sm" : "px-6 py-3"}`}><IconCalendar /> Book Appointment</Link>
        <a href={`tel:${hospital.phoneTel}`} className={`border-2 border-teal text-teal font-semibold rounded-lg flex items-center gap-2 bg-white/80 backdrop-blur hover:bg-white ${compact ? "px-4 py-2 text-sm" : "px-6 py-3"}`}><IconPhone /> Call Now</a>
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`} target="_blank" rel="noopener noreferrer" className={`border-2 border-navy text-navy font-semibold rounded-lg flex items-center gap-2 bg-white/80 backdrop-blur hover:bg-white ${compact ? "px-4 py-2 text-sm" : "px-6 py-3"}`}><IconPin /> Get Directions</a>
      </div>
    </>
  );
}

function MiniStat({ icon, value, label }) {
  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5 min-w-[200px]">
      <span className="shrink-0 w-8 h-8 rounded-full bg-mist flex items-center justify-center">{icon}</span>
      <div>
        <p className="font-bold text-navy text-sm leading-tight">{value}</p>
        <p className="text-[11px] text-slate leading-tight">{label}</p>
      </div>
    </div>
  );
}

function MiniStatMobile({ icon, value, label }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-2 py-3 text-center">
      <span className="inline-flex w-6 h-6 rounded-full bg-mist items-center justify-center">{icon}</span>
      <p className="font-bold text-navy text-xs leading-tight mt-1">{value}</p>
      <p className="text-[10px] text-slate leading-tight">{label}</p>
    </div>
  );
}

function IconStar() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7L2.2 9.2l7.1-.6z"/></svg>); }
function IconUsers() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E9F9A" strokeWidth="2"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.3c2.8.4 5.5 2.4 5.5 5.7"/></svg>); }
function IconAmbulance() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2"><path d="M3 16V7a1 1 0 011-1h9v10"/><path d="M13 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M7 8v4M5 10h4" strokeLinecap="round"/></svg>); }