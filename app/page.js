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

   
     {/* HERO — one integrated banner: the photo is the backdrop, not a
          separate boxed card next to text. On mobile it stacks (photo
          below the text) because overlaying text on a photo that short
          and that wide isn't readable at phone widths. */}
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-0">
          {/* Mobile: stacked */}
          <div className="md:hidden">
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
              <MiniStatMobile value={hospital.googleRating} label="Google Rating" />
              <MiniStatMobile value="Multi-Speciality" label="Healthcare" />
              <MiniStatMobile value="24×7" label="Emergency" />
            </div>
          </div>

          {/* Desktop / tablet: one true banner, image as backdrop */}
          <div className="hidden md:block relative w-full aspect-[1717/916] max-h-[620px]">
            <Image
              src="/images/doctors-hospital-hero.png"
              alt="Dr. Piyush & Dr. Pritika Wadhawan outside Wadhawan Hospital"
              fill
              priority
              className="object-cover object-[center_20%] rounded-2xl"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg pl-2 lg:pl-6">
                <HeroCopy />
              </div>
            </div>
            <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <MiniStat value={hospital.googleRating} label={`Google Rating (${hospital.googleReviews} Reviews)`} />
              <MiniStat value="Multi-Speciality" label="Healthcare" />
              <MiniStat value="24×7" label="Emergency Care" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard icon={<span className="text-teal">👥</span>} value={hospital.happyPatients} label="Happy Patients" sub="Trusted by thousands of families" />
        <StatCard icon={<span className="text-amber-500">★</span>} value={hospital.googleRating} label="Google Rating" sub={`${hospital.googleReviews} Reviews from our patients`} />
        <StatCard icon={<span className="text-pink">24/7</span>} value="24×7" label="Emergency Care" sub="Always here when you need us" />
        <StatCard icon={<span className="text-navy">🛡️</span>} value={hospital.yearsExperience} label="Years of Experience" sub="Delivering excellence in healthcare" />
        <StatCard icon={<span className="text-purple-600">👨‍⚕️</span>} value={hospital.specialists} label="Expert Specialists" sub="Orthopedics & Gynecology" />
      </section>

      {/* WHY CHOOSE US */}
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

      {/* SPECIALITIES */}
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

      {/* DOCTORS */}
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

      {/* FACILITIES */}
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

      {/* GALLERY PREVIEW */}
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

      {/* TESTIMONIALS */}
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

function MiniStat({ value, label }) {
  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 min-w-[190px]">
      <span className="text-amber-400 text-lg">★</span>
      <div>
        <p className="font-bold text-navy text-sm leading-tight">{value}</p>
        <p className="text-[11px] text-slate leading-tight">{label}</p>
      </div>
    </div>
  );
}
