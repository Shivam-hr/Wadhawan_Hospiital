import { hospital } from "@/lib/site-data";

export default function robots() {
  const base = `https://${hospital.website.replace(/^www\./, "www.")}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}