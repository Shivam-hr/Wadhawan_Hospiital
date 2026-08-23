import { hospital } from "@/lib/site-data";

export default function sitemap() {
  const base = `https://${hospital.website.replace(/^www\./, "www.")}`;
  const routes = ["", "/about", "/orthopedics", "/gynecology", "/diabetic-foot-clinic", "/doctors", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}