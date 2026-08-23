import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CtaBanner } from "@/components/ui";
import GalleryGrid from "./GalleryGrid";

export const metadata = { title: "Gallery | Wadhawan Hospital" };

export default function GalleryPage() {
  return (
    <>
      <Header theme="navy" />
      <section className="bg-navy text-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-teal font-bold text-xs uppercase tracking-widest mb-3">Our Gallery</p>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold">A Glimpse of Care, Compassion &amp; Excellence</h1>
          <p className="text-white/70 mt-3 max-w-xl">Take a look at our world-class infrastructure, advanced technology, and the compassionate care we provide every day.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <GalleryGrid />
      </section>

      <CtaBanner theme="navy" heading="Experience Our World-Class Facilities Firsthand" sub="Visit us today and experience compassionate care in a comfortable environment." />
      <Footer />
    </>
  );
}
