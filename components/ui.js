"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <svg
        className={`heartbeat-line ${accentClass} mt-3 ${center ? "mx-auto" : ""}`}
        width="72" height="18" viewBox="0 0 72 18" fill="none"
        aria-hidden="true"
      >
        <path d="M0 9H22L27 2L33 16L39 9H72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
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
export function CtaBanner({ heading, sub }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: "2171 / 222" }}>
          <Image
            src="/images/cta-banner-bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 text-white">
          <div className="text-center md:text-left shrink-0">
            <p className="font-display font-bold text-base md:text-lg leading-tight">{heading}</p>
            <p className="text-white/80 text-xs md:text-sm mt-0.5">{sub}</p>
          </div>
          <div className="hidden md:flex items-stretch gap-6 lg:gap-8">
            <QuickAction href="/contact" icon={<IconCalendar />} label="Book Appointment" sub="Schedule your visit" />
            <QuickAction href={waLink()} icon={<IconWhatsapp />} label="Chat on WhatsApp" sub="Get instant assistance" external divider />
            <QuickAction href={`tel:${hospital.phoneTel}`} icon={<IconPhone />} label="Call Now" sub={hospital.phoneDisplay} divider />
            <QuickAction
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
              icon={<IconPin />}
              label="Get Directions"
              sub="Find us easily"
              external
              divider
            />
          </div>
        </div>
      </div>
      {/* Mobile — the compact photo strip has no room for 4 two-line
          actions, so mobile gets simple icon-only buttons below it. */}
      <div className="md:hidden flex justify-center gap-6 mt-4">
        <QuickActionMobile href="/contact" icon={<IconCalendar />} label="Book" />
        <QuickActionMobile href={waLink()} icon={<IconWhatsapp />} label="WhatsApp" external />
        <QuickActionMobile href={`tel:${hospital.phoneTel}`} icon={<IconPhone />} label="Call" />
        <QuickActionMobile
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
          icon={<IconPin />}
          label="Directions"
          external
        />
      </div>
    </div>
  );
}
function QuickAction({ href, icon, label, sub, external, divider }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-2.5 ${divider ? "border-l border-white/25 pl-6 lg:pl-8" : ""}`}
    >
      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">{icon}</span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block text-xs text-white/75">{sub}</span>
      </span>
    </a>
  );
}
function QuickActionMobile({ href, icon, label, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center gap-1 text-navy"
    >
      <span className="w-10 h-10 rounded-full bg-mist flex items-center justify-center">{icon}</span>
      <span className="text-[11px] font-semibold">{label}</span>
    </a>
  );
}

/* ---------- icons ---------- */
export function IconCalendar() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>); }
export function IconPhone() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>); }
export function IconWhatsapp() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.6 2 2.15 6.4 2.15 11.9c0 1.8.5 3.6 1.4 5.1L2 22l5.2-1.5c1.4.8 3 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9C21.9 6.4 17.5 2 12.04 2z"/></svg>); }
export function IconPin() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>); }

/* ---------- About-page icons ---------- */
export function IconHeartHand({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8.5c-1.1-1.5-3.6-1.9-5-.5-1.5 1.5-1.4 3.6.2 5.1L12 18l4.8-4.9c1.6-1.5 1.7-3.6.2-5.1-1.4-1.4-3.9-1-5 .5z" />
      <path d="M3 20c1.4-1.2 2.7-1.6 4.3-1.6h3.2c.9 0 1.5-.7 1.5-1.5S11.4 15.4 10.5 15.4H8" />
    </svg>
  );
}
export function IconUserShield({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5 1 0 1.9.2 2.7.6" />
      <path d="M16.5 10.5l3.5 1.3v2.4c0 2.4-1.5 4.3-3.5 5.3-2-1-3.5-2.9-3.5-5.3v-2.4l3.5-1.3z" />
    </svg>
  );
}
export function IconMonitorPulse({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
      <path d="M6 11l2.5-3 2 2 2.5-4 2.5 5H18" />
    </svg>
  );
}
export function IconTarget({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconEye({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
export function IconUsers({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3 3.1-5 7-5s7 2 7 5" />
      <path d="M16 5.5a3 3 0 010 5.8" />
      <path d="M18.5 15.3c2.2.5 3.5 1.9 3.5 4.7" />
    </svg>
  );
}
export function IconStar({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7L12 2.5z" />
    </svg>
  );
}
export function IconShieldCheck({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5.5c0 4.6-3 8-7 9.5-4-1.5-7-4.9-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
export function IconClock24({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

/* ---------- Facilities-grid icons ---------- */
export function IconAmbulance({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 16V7a1 1 0 011-1h8v10" />
      <path d="M12 10h4l3 3v3h-2" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
      <path d="M6 8.5v3.5M4.3 10.3h3.4" />
    </svg>
  );
}
export function IconSurgery({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16" />
      <path d="M6 18v-3a2 2 0 012-2h8a2 2 0 012 2v3" />
      <circle cx="8.5" cy="6" r="1.8" />
      <path d="M9.8 7.3L14 11.5M15.5 5l-4 4" />
    </svg>
  );
}
export function IconXray({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8c0 2 1 2 1 4s-1 2-1 4M12 7c0 2.3 1.2 2.3 1.2 4.5S12 16 12 18.3M16 8c0 2 1 2 1 4s-1 2-1 4" />
    </svg>
  );
}
export function IconFlask({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3h4M9.5 3v6.5L5 18a1.6 1.6 0 001.4 2.3h11.2A1.6 1.6 0 0019 18l-4.5-8.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}
export function IconPill({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" />
      <path d="M12 7l5 5" />
    </svg>
  );
}
export function IconQuote({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 6C4.5 7.6 3 10 3 12.8c0 2.4 1.5 4 3.4 4 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.3-1.5 1.5-2.9 3.2-3.7L7.5 6zm9 0C13.5 7.6 12 10 12 12.8c0 2.4 1.5 4 3.4 4 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.3-1.5 1.5-2.9 3.2-3.7L16.5 6z" />
    </svg>
  );
}
export function IconGoogleG({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.6a4.8 4.8 0 01-2.1 3.2v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z" />
      <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7A10 10 0 0012 22z" />
      <path fill="#FBBC05" d="M6.2 13.6a6 6 0 010-3.8V7.1H2.7a10 10 0 000 9.2l3.5-2.7z" />
      <path fill="#EA4335" d="M12 6.4c1.5 0 2.9.5 4 1.5l3-3A9.7 9.7 0 0012 2a10 10 0 00-9.3 5.1l3.5 2.7C7 7.8 9.3 6.4 12 6.4z" />
    </svg>
  );
}
export function IconChevronLeft({ size = 18 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>);
}
export function IconChevronRight({ size = 18 }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>);
}

/* ---------- Testimonial grid (4-up, horizontal scroll + arrows) ---------- */
export function TestimonialGrid({ items }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (idx) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[idx];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(el.children).forEach((child, idx) => {
      const dist = Math.abs(child.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (dist < closestDist) { closestDist = dist; closest = idx; }
    });
    setActive(closest);
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <div key={i} className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[24%] bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[0, 1, 2, 3, 4].map((s) => <IconStar key={s} size={15} />)}
              </div>
              {t.source === "google" ? (
                <IconGoogleG size={18} />
              ) : (
                <span className="text-[10px] font-semibold text-slate bg-mist px-2 py-1 rounded-full">Verified Patient</span>
              )}
            </div>
            <p className="text-sm text-navy/90 leading-relaxed mb-4">{t.text}</p>
            <p className="font-semibold text-navy text-sm">{t.name}</p>
            <p className="text-xs text-slate">{t.city}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          type="button"
          aria-label="Scroll testimonials left"
          onClick={() => scrollerRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
          className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center shrink-0"
        >
          <IconChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={`rounded-full transition-all ${idx === active ? "w-6 h-2 bg-navy" : "w-2 h-2 bg-slate-300"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Scroll testimonials right"
          onClick={() => scrollerRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
          className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center shrink-0"
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}