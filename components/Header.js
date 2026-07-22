"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { hospital, navLinks, waLink } from "@/lib/site-data";

const THEMES = {
  navy: { bar: "bg-navy", accent: "text-teal", underline: "border-teal" },
  maroon: { bar: "bg-maroon", accent: "text-pink", underline: "border-pink" },
  green: { bar: "bg-green", accent: "text-emerald", underline: "border-emerald" },
};

export default function Header({ theme = "navy" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = THEMES[theme] || THEMES.navy;

  return (
    <>
      {/* Top utility bar */}
      <div className={`${t.bar} text-white text-xs md:text-sm`}>
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-y-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <IconTruck /> 24x7 Emergency Care
            </span>
            <span className="hidden sm:flex items-center gap-1.5 whitespace-nowrap">
              <IconClock /> {hospital.hoursMorning} | {hospital.hoursEvening}
            </span>
            <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
              <IconPin /> {hospital.addressLine}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href={hospital.facebook} aria-label="Facebook" className="opacity-90 hover:opacity-100"><IconFacebook /></a>
            <a href={hospital.instagram} aria-label="Instagram" className="opacity-90 hover:opacity-100"><IconInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <LogoMark theme={theme} />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-navy text-lg md:text-xl tracking-tight">
                WADHAWAN <span className={t.accent}>HOSPITAL</span>
              </div>
              <div className="text-[11px] text-slate tracking-wide">{hospital.tagline}</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-medium text-navy text-sm">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`pb-1 border-b-2 transition-colors ${active ? `${t.accent} ${t.underline}` : "border-transparent hover:text-slate"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${hospital.phoneTel}`} className={`flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-semibold border-slate-200 ${t.accent} hover:bg-slate-50`}>
              <IconPhone /> {hospital.phoneDisplay}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700">
              <IconWhatsapp /> WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-navy"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu />
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <nav className="flex flex-col px-4 py-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 border-b border-slate-50 font-medium ${pathname === l.href ? t.accent : "text-navy"}`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-3">
                <a href={`tel:${hospital.phoneTel}`} className="flex-1 text-center border border-slate-200 rounded-lg py-2 text-sm font-semibold text-navy">Call Us</a>
                <a href={waLink()} className="flex-1 text-center bg-emerald-600 text-white rounded-lg py-2 text-sm font-semibold">WhatsApp</a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function LogoMark({ theme }) {
  const ring = theme === "maroon" ? "#7A0E2E" : theme === "green" ? "#0B4A3A" : "#0E9F9A";
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="19" stroke={ring} strokeWidth="2.5" fill="white" />
      <path d="M21 10v22M10 21h22" stroke="#0B2E59" strokeWidth="4" strokeLinecap="round" />
      <circle cx="30" cy="12" r="3" fill="#DB2777" />
    </svg>
  );
}

function IconTruck() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" opacity=".9"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>); }
function IconClock() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>); }
function IconPin() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>); }
function IconFacebook() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-4H13V6.5c0-1.16.32-1.95 2-1.95H17V1.06C16.66 1.02 15.5 1 14.13 1 11.28 1 9.33 2.66 9.33 5.7V9H6v4h3.33v9z"/></svg>); }
function IconInstagram() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.34 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.34-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.34-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.97.4-2.43A4.9 4.9 0 013.82 3c.46-.46 1-.82 1.77-1.15.46-.16 1.26-.34 2.43-.4C9.29 1.4 9.67 1.4 12 1.4M12 6.9A5.1 5.1 0 1017.1 12 5.1 5.1 0 0012 6.9m0 8.4A3.3 3.3 0 1115.3 12 3.3 3.3 0 0112 15.3m5.3-8.6a1.2 1.2 0 111.2-1.2 1.2 1.2 0 01-1.2 1.2"/></svg>); }
function IconPhone() { return (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>); }
function IconWhatsapp() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.6 2 2.15 6.4 2.15 11.9c0 1.8.5 3.6 1.4 5.1L2 22l5.2-1.5c1.4.8 3 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9C21.9 6.4 17.5 2 12.04 2zm5.7 14c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2.1.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.4-.5.5-.2.2-.3.4-.1.7.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.3.2-.3.4-.3.7-.2l1.9.9c.2.1.4.2.5.3.1.2.1.9-.1 1.6z"/></svg>); }
function IconMenu() { return (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>); }
