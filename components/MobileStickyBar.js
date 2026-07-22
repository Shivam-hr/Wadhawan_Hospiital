"use client";
import { hospital, waLink } from "@/lib/site-data";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 bg-navy-dark text-white text-xs font-semibold">
      <a href={`tel:${hospital.phoneTel}`} className="flex flex-col items-center justify-center gap-1 py-2.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>
        Call Us
      </a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 py-2.5 bg-emerald-600">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.6 2 2.15 6.4 2.15 11.9c0 1.8.5 3.6 1.4 5.1L2 22l5.2-1.5c1.4.8 3 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9C21.9 6.4 17.5 2 12.04 2z"/></svg>
        WhatsApp
      </a>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.addressLine)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-2.5"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>
        Directions
      </a>
    </div>
  );
}
