export const hospital = {
  name: "Wadhawan Hospital",
  tagline: "Compassion | Care | Cure",
  addressLine: "85-B, Tehsil Road, Behind Civil Hospital, Panipat, Haryana 132103",
  phoneDisplay: "86501 00016",
  phoneTel: "+918650100016",
  whatsappNumber: "918650100016",
  email: "info@wadhawanhospital.com",
  hoursMorning: "9:00 AM - 1:00 PM",
  hoursEvening: "4:00 PM - 8:00 PM",
  sundayHours: "9:00 AM - 1:00 PM",
  googleRating: "4.9",
  googleReviews: "387+",
  happyPatients: "5000+",
  yearsExperience: "10+",
  specialists: "2",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
};

export function waLink(message) {
  const text = encodeURIComponent(message || "Hi, I'd like to book an appointment at Wadhawan Hospital.");
  return `https://wa.me/${hospital.whatsappNumber}?text=${text}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Orthopedics", href: "/orthopedics" },
  { label: "Gynecology", href: "/gynecology" },
  { label: "Diabetic Foot Clinic", href: "/diabetic-foot-clinic" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const doctors = [
  {
    slug: "piyush-wadhawan",
    name: "Dr. Piyush Wadhawan",
    qualification: "MS (Orthopedics)",
    role: "Orthopedic & Joint Replacement Surgeon",
    theme: "navy",
    points: [
      "10+ Years of Experience",
      "Specialist in Joint Replacement, Trauma & Arthroscopy",
      "Expert in Knee, Hip, Shoulder & Spine Care",
      "Diabetic Foot Care & Limb Salvage Specialist",
    ],
    quote: "Our goal is to relieve pain, restore mobility and improve the quality of life with advanced care.",
  },
  {
    slug: "pritika-wadhawan",
    name: "Dr. Pritika Nijhara Wadhawan",
    qualification: "MBBS, DNB (Obstetrics & Gynecology)",
    role: "Obstetrician & Laparoscopic Surgeon",
    theme: "maroon",
    points: [
      "10+ Years of Experience",
      "Expert in High-Risk Pregnancy Care",
      "Advanced Laparoscopic & Hysteroscopic Surgeries",
      "Infertility Evaluation & Treatment Specialist",
    ],
    quote: "Women's health is our priority. We provide personalized care at every stage of life with empathy, respect and medical excellence.",
  },
];

export const testimonials = {
  general: [
    { name: "Rajesh Kumar", city: "Panipat", text: "Excellent hospital with experienced doctors. Dr. Piyush Wadhawan treated my knee pain very well. Staff is very supportive and caring." },
    { name: "Neha Sharma", city: "Panipat", text: "Dr. Pritika Wadhawan is amazing! She guided me through my pregnancy with so much care. Highly recommended hospital." },
    { name: "Sandeep Verma", city: "Panipat", text: "Clean environment, advanced facilities and very cooperative staff. Best orthopedic and gynecology hospital in Panipat." },
    { name: "Anita Rani", city: "Panipat", text: "Got excellent treatment for my mother's joint replacement. We are very happy with the results and care." },
  ],
  orthopedics: [
    { name: "Meena Sharma", city: "Panipat", text: "Had severe knee pain for years. Dr. Piyush Wadhawan performed my knee replacement surgery. I am walking pain-free now." },
    { name: "Amit Malik", city: "Panipat", text: "Excellent treatment for my shoulder injury. The arthroscopy was successful and recovery was smooth." },
    { name: "Rajesh Kumar", city: "Panipat", text: "Very transparent approach and explains everything in detail. Staff is cooperative and the hospital is very clean." },
    { name: "Pooja Rani", city: "Panipat", text: "My father had a hip replacement here. Everything from surgery to physiotherapy was excellent." },
  ],
  gynecology: [
    { name: "Neha Sharma", city: "Panipat", text: "Dr. Pritika mam is very calm and friendly. She explained everything clearly and made my pregnancy journey so smooth." },
    { name: "Ritu Verma", city: "Panipat", text: "Excellent care during my pregnancy. Every visit was comfortable and satisfying. The staff is also very cooperative." },
    { name: "Anjali Saini", city: "Panipat", text: "I had PCOD issues for years. With the right treatment and guidance, I am much better now. Thank you Dr. Pritika mam." },
    { name: "Pooja Rani", city: "Panipat", text: "Very hygienic hospital with modern facilities. My delivery experience was excellent. Thank you to the entire team." },
  ],
  diabeticFoot: [
    { name: "Ramesh Verma", city: "Panipat", text: "I had a severe foot ulcer for months. Dr. Piyush Wadhawan and his team treated me with great care. My wound healed completely and I avoided amputation." },
    { name: "Sunita Devi", city: "Panipat", text: "Best diabetic foot care in Panipat! Advanced treatment and proper guidance helped me recover fast." },
    { name: "Mahesh Kumar", city: "Panipat", text: "The team is very professional and the facilities are excellent. They saved my foot and improved my quality of life." },
    { name: "Suresh Yadav", city: "Panipat", text: "Very supportive staff and proper follow-up. The offloading and wound care plan worked wonders for my foot ulcer." },
  ],
};

export const orthoFaqs = [
  { q: "What are the common signs that I should see an orthopedic doctor?", a: "Persistent joint pain, swelling, stiffness, reduced range of motion, or pain after an injury that doesn't improve within a few days are all good reasons to get evaluated." },
  { q: "Do you perform joint replacement surgeries?", a: "Yes, Dr. Piyush Wadhawan performs knee, hip and shoulder replacement surgeries using modern implants and techniques." },
  { q: "How long is the recovery time for knee replacement?", a: "Most patients start walking with support within a day or two and return to normal activity over 6-12 weeks, depending on age and health." },
  { q: "What is arthroscopy and when is it needed?", a: "Arthroscopy is a minimally invasive keyhole surgery used to diagnose and treat joint problems like ligament tears and cartilage damage, with faster recovery than open surgery." },
  { q: "Do you provide physiotherapy after surgery?", a: "Yes, we have an in-house rehabilitation program with guided physiotherapy for faster and safer recovery." },
  { q: "Is emergency orthopedic care available 24x7?", a: "Yes, our emergency team is available round the clock for fractures, trauma and accident injuries." },
];

export const gynecFaqs = [
  { q: "When should I visit a gynecologist?", a: "It's recommended to have a routine gynecological check-up annually, or sooner if you notice irregular periods, pelvic pain, or are planning a pregnancy." },
  { q: "What is PCOD/PCOS and how is it treated?", a: "PCOD/PCOS is a hormonal condition affecting ovulation. Treatment includes lifestyle changes, medication and personalized hormonal management based on evaluation." },
  { q: "Do you provide high-risk pregnancy care?", a: "Yes, Dr. Pritika Wadhawan specializes in high-risk pregnancy management with close monitoring throughout." },
  { q: "What are the signs of infertility?", a: "Difficulty conceiving after a year of trying, irregular cycles, or a history of pelvic conditions are common signs that warrant an infertility evaluation." },
  { q: "Is normal delivery possible after a C-section?", a: "In many cases, yes. It depends on individual medical history and is assessed carefully by our specialist during antenatal visits." },
  { q: "Do you offer laparoscopic gynecological surgeries?", a: "Yes, we offer minimally invasive laparoscopic surgery for conditions like fibroids, cysts and endometriosis." },
];

export const diabeticFaqs = [
  { q: "What is diabetic foot and why is it important to treat?", a: "Diabetic foot refers to foot complications caused by nerve damage and poor circulation from diabetes. Left untreated, it can lead to infection, ulcers and amputation." },
  { q: "When should I see a diabetic foot specialist?", a: "See a specialist as soon as you notice numbness, non-healing sores, swelling, or changes in foot color or temperature." },
  { q: "Can a diabetic foot ulcer heal completely?", a: "Yes, with timely, proper wound care, infection control and offloading, most diabetic foot ulcers heal completely." },
  { q: "What tests are done for diabetic foot problems?", a: "We use Doppler and vascular assessment, foot pressure analysis, and imaging to evaluate nerve and blood supply." },
  { q: "Do you treat infected foot ulcers?", a: "Yes, we provide advanced wound care, infection management and, when needed, minor procedures for debridement." },
  { q: "Can diabetic foot be prevented?", a: "Yes, regular foot checks, proper footwear, blood sugar control and prompt attention to minor injuries can prevent most complications." },
];
