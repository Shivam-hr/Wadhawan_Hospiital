import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, waLink } from "@/lib/site-data";
import { PlaceholderImage, IconPhone, IconWhatsapp, IconPin } from "@/components/ui";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact Us | Wadhawan Hospital" };

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`;
  return (
    <>
      <Header theme="navy" />

      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-navy leading-tight">We&apos;re Here to Help You</h1>
            <p className="text-slate mt-4 max-w-md leading-relaxed">Reach out to us for appointments, enquiries or any assistance.</p>
            <div className="flex gap-6 mt-6">
              <a href={`tel:${hospital.phoneTel}`} className="flex flex-col items-center gap-1.5 text-navy">
                <span className="w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center"><IconPhone /></span>
                <span className="text-xs font-semibold">Call</span>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-navy">
                <span className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><IconWhatsapp /></span>
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 text-navy">
                <span className="w-11 h-11 rounded-full bg-slate-100 text-navy flex items-center justify-center"><IconPin /></span>
                <span className="text-xs font-semibold">Directions</span>
              </a>
            </div>
          </div>
          <PlaceholderImage label="Wadhawan Hospital exterior" theme="navy" className="w-full aspect-[4/3] rounded-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <InfoCard title="Call Us" lines={[hospital.phoneDisplay, "Available 24x7"]} />
          <InfoCard title="WhatsApp Us" lines={[hospital.phoneDisplay, "Quick Response"]} />
          <InfoCard title="Email Us" lines={[hospital.email, "We reply within 24 hrs"]} />
          <InfoCard title="Visit Us" lines={[hospital.addressLine]} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="bg-mist rounded-2xl p-6 flex flex-col gap-4">
            <PlaceholderImage label="Calendar / booking illustration" theme="navy" className="aspect-video rounded-xl" />
            <h4 className="font-display font-bold text-navy">Walk-ins Welcome!</h4>
            <p className="text-sm text-slate">You can also visit us directly at the hospital.</p>
            <a href="/doctors" className="bg-navy hover:bg-navy-dark text-white text-sm font-semibold rounded-lg px-4 py-2.5 text-center">View Doctors</a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2">
            <PlaceholderImage label="Map — 85-B, Tehsil Road, Behind Civil Hospital, Panipat" theme="slate" className="w-full aspect-video rounded-2xl" />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-teal text-sm font-semibold mt-2 inline-block">View on Google Maps →</a>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6">
            <h4 className="font-display font-bold text-navy mb-3">Hospital Timings</h4>
            <div className="text-sm text-slate space-y-2">
              <p><span className="font-semibold text-navy">Monday - Saturday</span><br />{hospital.hoursMorning}<br />{hospital.hoursEvening}</p>
              <p><span className="font-semibold text-navy">Sunday</span><br />{hospital.sundayHours}</p>
              <p className="text-red-600 font-semibold">24x7 Emergency Services Available</p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 text-white rounded-2xl p-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold">Medical Emergency?</p>
            <p className="text-white/85 text-sm">Our emergency team is available 24x7 for your care.</p>
          </div>
          <a href={`tel:${hospital.phoneTel}`} className="bg-white text-red-600 font-bold rounded-lg px-6 py-3">Call Now: {hospital.phoneDisplay}</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

function InfoCard({ title, lines }) {
  return (
    <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5">
      <h4 className="font-semibold text-navy mb-2">{title}</h4>
      {lines.map((l) => <p key={l} className="text-sm text-slate">{l}</p>)}
    </div>
  );
}
