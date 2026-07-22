"use client";
import { useState } from "react";
import { PlaceholderImage } from "@/components/ui";

const CATEGORIES = ["All", "Hospital Exterior", "Reception & Lobby", "Operation Theatre", "Patient Rooms", "Equipment", "Doctors & Team"];

const PHOTOS = [
  { label: "Hospital Building Exterior", cat: "Hospital Exterior" },
  { label: "Reception Desk", cat: "Reception & Lobby" },
  { label: "Waiting Lounge", cat: "Reception & Lobby" },
  { label: "Operation Theatre", cat: "Operation Theatre" },
  { label: "OT Equipment", cat: "Operation Theatre" },
  { label: "Patient Room", cat: "Patient Rooms" },
  { label: "IPD Room", cat: "Patient Rooms" },
  { label: "Digital X-Ray Machine", cat: "Equipment" },
  { label: "Ultrasound Machine", cat: "Equipment" },
  { label: "Hospital Corridor", cat: "Hospital Exterior" },
  { label: "Dr. Piyush & Dr. Pritika Wadhawan", cat: "Doctors & Team" },
  { label: "Hospital Staff Team", cat: "Doctors & Team" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              active === c ? "bg-teal text-white border-teal" : "bg-white text-navy border-slate-200 hover:bg-mist"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((p, i) => (
          <PlaceholderImage key={p.label + i} label={p.label} theme="navy" className="aspect-square rounded-xl" />
        ))}
      </div>
    </div>
  );
}
