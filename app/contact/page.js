import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hospital, waLink } from "@/lib/site-data";
import { IconPhone, IconWhatsapp, IconPin, IconMail, IconUsers, IconMonitorPulse, IconHeartHand, IconClock24 } from "@/components/ui";
import ContactForm from "./ContactForm";

export const metadata = { title: "Contact Us | Wadhawan Hospital" };

const whyChooseUs = [
  { title: "Experienced & Caring Doctors", desc: "Highly qualified and compassionate team", icon: <IconUsers size={22} /> },
  { title: "Advanced Medical Technology", desc: "State-of-the-art infrastructure and equipment", icon: <IconMonitorPulse size={22} /> },
  { title: "Patient-Centered Care", desc: "Your health and comfort are our priority", icon: <IconHeartHand size={22} /> },
  { title: "24x7 Emergency Services", desc: "Always here when you need us the most", icon: <IconClock24 size={22} /> },
];

export default function ContactPage() {
  const mapQuery = "Wadhawan Hospital, Tehsil Road, Panipat, Haryana 132103";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <>
      <Header theme="navy" />

      {/* HERO — real hospital photo goes here; buttons only, matching the reference layout */}
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-slate-100">
        {/* Desktop — full-bleed banner; the image already has the bottom
            icon strip and a faded left zone baked in, so text sits directly
            on top rather than in a separate boxed photo. */}
        <div className="relative w-full hidden md:block" style={{ aspectRatio: "2167 / 725" }}>
          <Image src="/images/contact/hero-hospital.jpg" alt="Wadhawan Hospital" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-[42%] pl-[2%]">
              <p className="text-emerald font-bold text-xs uppercase tracking-widest mb-3">Get In Touch</p>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold leading-tight">
                <span className="text-navy">We&apos;re Here to Help</span>
                <br />
                <span className="text-emerald">You &amp; Your Family</span>
              </h1>
              <p className="text-slate mt-4 max-w-md leading-relaxed text-sm lg:text-base">
                Have questions or need assistance? Our team is ready to assist you with the best care and support.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={`tel:${hospital.phoneTel}`} className="bg-emerald hover:bg-emerald-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center gap-2">
                  <IconPhone /> Call Us Now
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="border-2 border-emerald text-emerald font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-white bg-white/70">
                  <IconWhatsapp /> Chat on WhatsApp
                </a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-navy text-navy font-semibold rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-white bg-white/70">
                  <IconPin /> Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — overlay design (4:3, unchanged height), full artwork shown via object-contain (right-anchored) so nothing is cropped or zoomed */}
        <div className="md:hidden relative w-full aspect-[4/3] bg-gradient-to-br from-[#F8FCFD] via-[#F2FAFA] to-[#EAF7F8]">
          <Image src="/images/contact/hero-hospital-mobile.jpg" alt="Wadhawan Hospital" fill priority className="object-contain object-right" sizes="100vw" />
          {/* soft fade blending the left panel into the image instead of a hard split */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#F8FCFD_0%,#F2FAFA_38%,transparent_62%)]" />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="w-[52%] pl-[5%]">
              <p className="text-emerald font-bold text-xs uppercase tracking-widest mb-2">Contact Us</p>
              <h1 className="font-display text-2xl font-extrabold text-navy leading-tight">
                We&apos;re Here To Help You
              </h1>
              <p className="text-slate mt-3 leading-relaxed text-sm">
                Reach out to us for appointments, enquiries or any assistance.
              </p>
              <div className="grid grid-cols-3 gap-1 mt-8 -ml-5">
                <a href={`tel:${hospital.phoneTel}`} className="flex flex-col items-center gap-2 text-center">
                  <span className="w-11 h-11 rounded-full bg-white/92 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-emerald flex items-center justify-center shrink-0"><IconPhone size={18} /></span>
                  <span className="text-[11px] font-semibold text-navy leading-tight">Call</span>
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center">
                  <span className="w-11 h-11 rounded-full bg-white/92 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-emerald flex items-center justify-center shrink-0"><IconWhatsapp size={18} /></span>
                  <span className="text-[11px] font-semibold text-navy leading-tight">WhatsApp</span>
                </a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center">
                  <span className="w-11 h-11 rounded-full bg-white/92 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-emerald flex items-center justify-center shrink-0"><IconPin size={18} /></span>
                  <span className="text-[11px] font-semibold text-navy leading-tight">Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS — large, full-width row */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <InfoCard icon={<IconPhone size={26} />} title="Call Us" value={hospital.phoneDisplay} sub="Available 24x7" href={`tel:${hospital.phoneTel}`} />
          <InfoCard icon={<IconWhatsapp size={26} />} title="WhatsApp Us" value={hospital.phoneDisplay} sub="Chat with us anytime" href={waLink()} />
          <InfoCard icon={<IconMail size={26} />} title="Email Us" value={hospital.email} sub="We'll respond promptly" href={`mailto:${hospital.email}`} />
          <InfoCard icon={<IconPin size={26} />} title="Visit Us" value={hospital.addressLine} sub="" href={mapsUrl} />
        </div>
      </section>

      {/* BOOK AN APPOINTMENT — wide, with Why Choose Us panel */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid lg:grid-cols-[1fr_0.42fr] gap-8">
          <ContactForm />
          <div className="bg-mist rounded-2xl p-6 md:p-7">
            <h4 className="font-display font-bold text-navy text-lg mb-5">Why Choose Wadhawan Hospital?</h4>
            <div className="space-y-5">
              {whyChooseUs.map((w) => (
                <div key={w.title} className="flex items-start gap-3">
                  {/* Icon placeholder — swap in your own icon image/SVG here */}
                  <span className="w-11 h-11 rounded-full bg-emerald/10 text-emerald flex items-center justify-center shrink-0">
                    {w.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm">{w.title}</p>
                    <p className="text-xs text-slate mt-0.5">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP — full width, with floating info card */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-slate-100">
          <iframe
            title="Wadhawan Hospital location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-4 max-w-[240px]">
            <p className="font-display font-bold text-navy text-sm">Wadhawan Hospital</p>
            <p className="text-xs text-slate mt-1">{hospital.addressLine}</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-emerald text-xs font-semibold mt-2 inline-flex items-center gap-1">
              Directions →
            </a>
          </div>
        </div>
      </section>

      {/* HOSPITAL TIMINGS + MEDICAL EMERGENCY */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid lg:grid-cols-[1fr_0.42fr] gap-8">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-7">
            <div className="flex items-center gap-2 mb-5">
              <IconClock24 size={20} />
              <h4 className="font-display font-bold text-navy text-lg">Hospital Timings</h4>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-navy mb-2">OPD Timings</p>
                <p className="text-slate">Mon - Sat</p>
                <p className="text-navy">{hospital.hoursMorning}</p>
                <p className="text-slate mt-1">Sunday</p>
                <p className="text-navy">{hospital.sundayHours}</p>
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Emergency Services</p>
                <p className="text-slate">24x7</p>
                <p className="text-navy">Open All Days</p>
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Pharmacy</p>
                <p className="text-slate">Mon - Sat</p>
                <p className="text-navy">9:00 AM - 9:00 PM</p>
                <p className="text-slate mt-1">Sunday</p>
                <p className="text-navy">9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-red-600 text-white rounded-2xl p-6 md:p-7 flex flex-col justify-between">
            <div>
              <p className="font-display font-bold text-lg">Medical Emergency?</p>
              <p className="text-white/85 text-sm mt-1">Our emergency team is available 24x7 to provide immediate care.</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <span className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0"><IconPhone size={22} /></span>
              <div>
                <p className="text-xs text-white/80">24x7 Emergency</p>
                <p className="font-bold text-lg">{hospital.phoneDisplay}</p>
              </div>
            </div>
            <a href={`tel:${hospital.phoneTel}`} className="bg-white text-red-600 font-bold rounded-lg px-5 py-3 mt-5 text-center">Call Emergency Now</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function InfoCard({ icon, title, value, sub, href }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
      <span className="w-14 h-14 rounded-full bg-emerald/10 text-emerald flex items-center justify-center shrink-0">{icon}</span>
      <div className="min-w-0">
        <h4 className="font-semibold text-navy mb-1">{title}</h4>
        <p className="text-sm font-bold text-navy break-words">{value}</p>
        {sub && <p className="text-xs text-slate mt-0.5">{sub}</p>}
      </div>
    </a>
  );
}