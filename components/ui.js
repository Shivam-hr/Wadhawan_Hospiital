"use client";
import { useState } from "react";
import Link from "next/link";
import { hospital, waLink } from "@/lib/site-data";

/* ---------- Placeholder image block (no real photo supplied yet) ---------- */
const THEME_BG = {
  navy: "from-navy/15 to-teal/10 text-navy",
  maroon: "from-maroon/15 to-pink/10 text-maroon",
  green: "from-green/15 to-emerald/10 text-green",
  slate: "from-slate-200 to-slate-100 text-slate-500",
};
export function PlaceholderImage({ label, theme = "slate", className = "", icon = null }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${THEME_BG[theme]} border border-black/5 ${className}`}
      role="img"
      aria-label={label}
    >
      {icon}
      <span className="text-xs md:text-sm font-medium text-center px-3 opacity-80">{label}</span>
    </div>
  );
}

/* ---------- Section eyebrow + heading ---------- */
export function SectionHeading({ eyebrow, title, accent = "teal", center = true }) {
  const accentClass = { teal: "text-teal", pink: "text-pink", emerald: "text-emerald" }[accent];
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && <p className={`section-eyebrow text-xs font-bold uppercase tracking-widest ${accentClass} mb-2`}>{eyebrow}</p>}
      <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">{title}</h2>
      <div className={`h-1 w-14 ${accent === "pink" ? "bg-pink" : accent === "emerald" ? "bg-emerald" : "bg-teal"} rounded-full ${center ? "mx-auto" : ""} mt-3`} />
    </div>
  );
}

/* ---------- CTA buttons ---------- */
export function CtaButtons({ theme = "navy", size = "md" }) {
  const primary = { navy: "bg-navy hover:bg-navy-dark", maroon: "bg-pink hover:bg-maroon", green: "bg-emerald hover:bg-green" }[theme];
  const pad = size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm";
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact" className={`${primary} ${pad} text-white font-semibold rounded-lg flex items-center gap-2 transition-colors`}>
        <IconCalendar /> Book Appointment
      </Link>
      <a href={`tel:${hospital.phoneTel}`} className={`${pad} border-2 border-slate-200 text-navy font-semibold rounded-lg flex items-center gap-2 hover:bg-slate-50`}>
        <IconPhone /> Call Now
      </a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${pad} bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center gap-2`}>
        <IconWhatsapp /> WhatsApp
      </a>
    </div>
  );
}

/* ---------- Stat strip ---------- */
export function StatCard({ icon, value, label, sub }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-3">
      <div className="shrink-0 w-11 h-11 rounded-xl bg-mist flex items-center justify-center">{icon}</div>
      <div>
        <div className="font-display font-bold text-xl text-navy leading-tight">{value}</div>
        <div className="text-sm font-semibold text-navy/80">{label}</div>
        {sub && <div className="text-xs text-slate">{sub}</div>}
      </div>
    </div>
  );
}

/* ---------- Testimonial carousel (simple, dot-based) ---------- */
export function TestimonialCarousel({ items, accent = "teal" }) {
  const [i, setI] = useState(0);
  const accentText = { teal: "text-teal", pink: "text-pink", emerald: "text-emerald" }[accent];
  const accentBg = { teal: "bg-teal", pink: "bg-pink", emerald: "bg-emerald" }[accent];
  const t = items[i];
  return (
    <div className="bg-mist rounded-2xl p-6 md:p-8 relative">
      <div className="flex items-center gap-1 mb-3 text-amber-400">
        {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
      </div>
      <p className="text-navy/90 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <p className={`font-semibold ${accentText}`}>{t.name}</p>
      <p className="text-xs text-slate">{t.city}</p>
      <div className="flex items-center gap-2 mt-5">
        <button
          aria-label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
          className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-navy"
        >‹</button>
        <div className="flex gap-1.5">
          {items.map((_, idx) => (
            <span key={idx} className={`w-2 h-2 rounded-full ${idx === i ? accentBg : "bg-slate-300"}`} />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % items.length)}
          className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-navy"
        >›</button>
      </div>
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
export function FaqAccordion({ items, accent = "teal" }) {
  const [open, setOpen] = useState(0);
  const accentText = { teal: "text-teal", pink: "text-pink", emerald: "text-emerald" }[accent];
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cols.map((col, ci) => (
        <div key={ci} className="space-y-3">
          {col.map((f, idx) => {
            const globalIdx = ci * half + idx;
            const isOpen = open === globalIdx;
            return (
              <div key={f.q} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left font-semibold text-navy bg-white hover:bg-mist"
                  onClick={() => setOpen(isOpen ? -1 : globalIdx)}
                >
                  <span>{f.q}</span>
                  <span className={`text-xl ${accentText}`}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div className="px-4 pb-4 text-sm text-slate leading-relaxed">{f.a}</div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ---------- Bottom CTA banner ---------- */
export function CtaBanner({ theme = "navy", heading, sub }) {
  const bg = { navy: "bg-navy", maroon: "bg-pink", green: "bg-emerald" }[theme];
  return (
    <div className={`${bg} text-white`}>
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <p className="font-display font-bold text-lg">{heading}</p>
          <p className="text-white/80 text-sm">{sub}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <QuickAction href="/contact" icon={<IconCalendar />} label="Book Appointment" />
          <QuickAction href={waLink()} icon={<IconWhatsapp />} label="Chat on WhatsApp" external />
          <QuickAction href={`tel:${hospital.phoneTel}`} icon={<IconPhone />} label={`Call ${hospital.phoneDisplay}`} />
          <QuickAction
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
            icon={<IconPin />}
            label="Get Directions"
            external
          />
        </div>
      </div>
    </div>
  );
}
function QuickAction({ href, icon, label, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 text-sm font-semibold"
    >
      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">{icon}</span>
      {label}
    </a>
  );
}

/* ---------- icons ---------- */
export function IconCalendar() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>); }
export function IconPhone() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>); }
export function IconWhatsapp() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.6 2 2.15 6.4 2.15 11.9c0 1.8.5 3.6 1.4 5.1L2 22l5.2-1.5c1.4.8 3 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9C21.9 6.4 17.5 2 12.04 2z"/></svg>); }
export function IconPin() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>); }
