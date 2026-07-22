import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital } from "@/lib/site-data";
import { PlaceholderImage, SectionHeading, StatCard, CtaBanner, IconCalendar, IconPhone } from "@/components/ui";

export const metadata = { title: "About Us | Wadhawan Hospital" };

export default function AboutPage() {
  return (
    <>
      <Header theme="navy" />

      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-3">About Us</p>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-navy leading-tight">About Wadhawan Hospital</h1>
            <p className="text-teal font-semibold mt-2">Compassion &nbsp;|&nbsp; Care &nbsp;|&nbsp; Cure</p>
            <p className="text-slate mt-4 max-w-md leading-relaxed">
              We are committed to providing advanced, ethical and affordable healthcare with compassion and dignity. Your health is our priority.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/contact" className="bg-navy hover:bg-navy-dark text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2"><IconCalendar /> Book Appointment</a>
              <a href={`tel:${hospital.phoneTel}`} className="border-2 border-teal text-teal font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-teal/5"><IconPhone /> Contact Us</a>
            </div>
          </div>
          <PlaceholderImage label="Wadhawan Hospital building" theme="navy" className="w-full aspect-[4/3] rounded-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="" title="Our Story" center={false} />
        <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">
          <div className="grid grid-cols-3 gap-3">
            <PlaceholderImage label="Reception desk" theme="navy" className="aspect-square rounded-xl" />
            <PlaceholderImage label="Waiting lounge" theme="navy" className="aspect-square rounded-xl" />
            <PlaceholderImage label="Dr. Piyush & Dr. Pritika" theme="navy" className="aspect-square rounded-xl" />
          </div>
          <div>
            <p className="text-slate leading-relaxed">
              Wadhawan Hospital was founded with a vision to bring world-class healthcare closer to the people of Panipat. What started as a small healthcare center has today grown into a trusted multi-speciality hospital known for quality care, advanced technology and a patient-first approach.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6 text-sm">
              {["Compassionate Care", "Advanced Technology", "Patient First Approach"].map((t) => (
                <div key={t} className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center">✓</div>
                  <span className="font-semibold text-navy">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <div className="w-11 h-11 rounded-xl bg-emerald text-white flex items-center justify-center mb-3">🎯</div>
          <h3 className="font-display font-bold text-navy mb-2">Our Mission</h3>
          <p className="text-sm text-slate leading-relaxed">To provide compassionate, ethical and affordable healthcare services with the highest standards of quality and safety.</p>
        </div>
        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
          <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3">👁️</div>
          <h3 className="font-display font-bold text-navy mb-2">Our Vision</h3>
          <p className="text-sm text-slate leading-relaxed">To be the most trusted and preferred healthcare destination in Panipat, known for excellence and patient satisfaction.</p>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Why Patients Trust Us" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard icon={<span className="text-teal">👥</span>} value={hospital.happyPatients} label="Happy Patients" sub="Trusted by thousands of families" />
            <StatCard icon={<span className="text-amber-500">★</span>} value={hospital.googleRating} label="Google Rating" sub={`${hospital.googleReviews} Reviews from our patients`} />
            <StatCard icon={<span className="text-navy">🛡️</span>} value={hospital.yearsExperience} label="Years of Experience" sub="Delivering excellence in healthcare" />
            <StatCard icon={<span className="text-pink">24/7</span>} value="24×7" label="Emergency Care" sub="Always here when you need us" />
          </div>
        </div>
      </section>

      <CtaBanner theme="navy" heading="Need Medical Consultation?" sub="We are here to take care of your health with compassion and expertise." />
      <Footer />
    </>
  );
}
