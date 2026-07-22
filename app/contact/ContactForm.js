"use client";
import { useState } from "react";
import { hospital } from "@/lib/site-data";

const DEPARTMENTS = ["Orthopedics", "Gynecology", "Diabetic Foot Clinic", "General"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", department: "General", message: "" });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to book an appointment at Wadhawan Hospital.`,
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Department: ${form.department}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/${hospital.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
      <h3 className="font-display font-bold text-lg text-navy">Book an Appointment</h3>
      <p className="text-xs text-slate -mt-2">We don&apos;t take bookings online yet — submitting this sends your details straight to us on WhatsApp so we can confirm your slot.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name">
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Enter your full name" />
        </Field>
        <Field label="Mobile Number">
          <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" placeholder="Enter your phone number" />
        </Field>
      </div>
      <Field label="Department">
        <select value={form.department} onChange={(e) => update("department", e.target.value)} className="input">
          {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </Field>
      <Field label="Your Message / Symptoms (optional)">
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={3} className="input" placeholder="Briefly describe your concern" />
      </Field>
      <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg py-3">
        Send via WhatsApp
      </button>
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
        }
        .input:focus {
          outline: 2px solid #0e9f9a;
          outline-offset: 1px;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-navy/80 mb-1">{label}</span>
      {children}
    </label>
  );
}
