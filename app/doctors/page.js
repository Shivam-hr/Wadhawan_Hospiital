import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctors, waLink } from "@/lib/site-data";
import { PlaceholderImage, CtaBanner } from "@/components/ui";

export const metadata = { title: "Our Doctors | Wadhawan Hospital" };

export default function DoctorsPage() {
  return (
    <>
      <Header theme="navy" />
      <section className="bg-gradient-to-br from-sky-50 to-white border-b border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="section-eyebrow text-teal font-bold text-xs uppercase tracking-widest mb-3">Our Team</p>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-navy">Meet Our Doctors</h1>
          <p className="text-slate mt-3 max-w-xl mx-auto">Experienced specialists dedicated to compassionate, evidence-based care for the whole family.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-8">
        {doctors.map((doc) => {
          const isMaroon = doc.theme === "maroon";
          return (
            <div key={doc.slug} className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 border-t-4 ${isMaroon ? "border-t-pink" : "border-t-navy"}`}>
              <PlaceholderImage label={doc.name} theme={doc.theme} className="w-full aspect-[4/3] rounded-xl mb-5" />
              <h3 className={`font-display font-bold text-xl ${isMaroon ? "text-maroon" : "text-navy"}`}>{doc.name}</h3>
              <p className="text-sm font-semibold text-navy/70">{doc.qualification}</p>
              <p className={`text-sm font-medium mb-3 ${isMaroon ? "text-pink" : "text-teal"}`}>{doc.role}</p>
              <ul className="space-y-1.5 text-sm text-navy/90 mb-4">
                {doc.points.map((p) => (
                  <li key={p} className="flex items-center gap-2"><span className={isMaroon ? "text-pink" : "text-teal"}>✓</span>{p}</li>
                ))}
              </ul>
              <blockquote className="text-sm italic text-slate border-l-4 pl-3 mb-5" style={{ borderColor: isMaroon ? "#DB2777" : "#0E9F9A" }}>
                &ldquo;{doc.quote}&rdquo;
              </blockquote>
              <div className="flex gap-3">
                <a href={isMaroon ? "/gynecology" : "/orthopedics"} className={`text-sm font-semibold text-white rounded-lg px-4 py-2.5 ${isMaroon ? "bg-pink hover:bg-maroon" : "bg-navy hover:bg-navy-dark"}`}>
                  View {isMaroon ? "Gynecology" : "Orthopedics"} Page
                </a>
                <a href={waLink(`Hi, I'd like to consult ${doc.name}.`)} className="text-sm font-semibold border border-emerald-500 text-emerald-600 rounded-lg px-4 py-2.5">WhatsApp</a>
              </div>
            </div>
          );
        })}
      </section>

      <CtaBanner theme="navy" heading="Need Medical Consultation?" sub="We are here to take care of your health with compassion and expertise." />
      <Footer />
    </>
  );
}
