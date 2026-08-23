"use client";
import { useState } from "react";
import { hospital, doctors } from "@/lib/site-data";

const DEPARTMENTS = ["Orthopedics", "Gynecology", "Diabetic Foot Clinic", "General"];
const TIME_SLOTS = ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "", message: "" });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to book an appointment at Wadhawan Hospital.`,
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      form.email ? `Email: ${form.email}` : null,
      `Department: ${form.department || "-"}`,
      form.doctor ? `Preferred Doctor: ${form.doctor}` : null,
      form.date ? `Preferred Date: ${form.date}` : null,
      form.time ? `Preferred Time: ${form.time}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/${hospital.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-5">
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></svg>
        </span>
        <div>
          <h3 className="font-display font-bold text-lg text-navy">Book an Appointment</h3>
          <p className="text-xs text-slate">Fill in the details below and our team will get in touch to confirm your appointment.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Full Name">
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Enter your full name" />
        </Field>
        <Field label="Phone Number">
          <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" placeholder="Enter your phone number" />
        </Field>
        <Field label="Email Address">
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="Enter your email" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Department">
          <select value={form.department} onChange={(e) => update("department", e.target.value)} className="input">
            <option value="">Select Department</option>
            {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </Field>
        <Field label="Preferred Doctor (Optional)">
          <select value={form.doctor} onChange={(e) => update("doctor", e.target.value)} className="input">
            <option value="">Select Doctor</option>
            {doctors.map((d) => <option key={d.slug} value={d.name}>{d.name}</option>)}
          </select>
        </Field>
        <Field label="Preferred Date">
          <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="input" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Preferred Time">
          <select value={form.time} onChange={(e) => update("time", e.target.value)} className="input">
            <option value="">Select Time</option>
            {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Your Message (Optional)">
          <input value={form.message} onChange={(e) => update("message", e.target.value)} className="input" placeholder="Write your message" />
        </Field>
      </div>

      <p className="text-xs text-slate">We don&apos;t take bookings online yet — submitting this sends your details straight to us on WhatsApp so we can confirm your slot.</p>

      <button type="submit" className="w-full bg-emerald hover:bg-emerald-700 text-white font-semibold rounded-lg py-4 text-base flex items-center justify-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></svg>
        Book Appointment
      </button>
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 0.75rem 0.9rem;
          font-size: 0.92rem;
        }
        .input:focus {
          outline: 2px solid #0D7A5F;
          outline-offset: 1px;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-navy/80 mb-1.5">{label}</span>
      {children}
    </label>
  );
}