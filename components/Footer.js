import Link from "next/link";
import { hospital, navLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <div className="font-display font-extrabold text-lg mb-2">
            WADHAWAN <span className="text-teal">HOSPITAL</span>
          </div>
          <p className="text-slate-300 mb-4">{hospital.tagline}</p>
          <p className="text-slate-400 max-w-xs">
            Multi-speciality healthcare center in Panipat providing advanced Orthopedic, Gynecology and Diabetic Foot care.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-teal">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            {navLinks.slice(0, 5).map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-teal">Our Services</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link href="/orthopedics" className="hover:text-white">Orthopedics</Link></li>
            <li><Link href="/gynecology" className="hover:text-white">Gynecology</Link></li>
            <li><Link href="/diabetic-foot-clinic" className="hover:text-white">Diabetic Foot Clinic</Link></li>
            <li><Link href="/contact" className="hover:text-white">Emergency Care</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-teal">Contact Info</h4>
          <ul className="space-y-2 text-slate-300">
            <li>{hospital.phoneDisplay}</li>
            <li>{hospital.email}</li>
            <li>{hospital.addressLine}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Wadhawan Hospital. All Rights Reserved.</p>
          <p>Mon-Sat: {hospital.hoursMorning} / {hospital.hoursEvening} &nbsp;|&nbsp; Sunday: {hospital.sundayHours} &nbsp;|&nbsp; 24x7 Emergency Services</p>
        </div>
      </div>
    </footer>
  );
}
