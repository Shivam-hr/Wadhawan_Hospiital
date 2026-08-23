export const hospital = {
  name: "Wadhawan Hospital",
  tagline: "Compassion | Care | Cure",
  addressLine: "85-B, Wadhawan Hospital, Tehsil Road, Behind Civil Hospital, Sukhdev Nagar, Old Housing Board Colony, Panipat, Haryana 132103",
  phoneDisplay: "86501 00016",
  phoneTel: "+918650100016",
  whatsappNumber: "918650100016",
  email: "info@wadhawanhospital.com",
  website: "www.wadhawanhospital.com",
  hoursMorning: "9:00 AM - 2:00 PM",
  hoursEvening: "5:30 PM - 7:00 PM",
  sundayHours: "9:00 AM - 2:00 PM",
  googleRating: "4.9",
  googleReviews: "387+",
  happyPatients: "5000+",
  yearsExperience: "10+",
  specialists: "2",
  heroDescription: "Wadhawan Hospital is a multi-speciality healthcare center in Panipat providing advanced Orthopedic and Women's healthcare with compassionate care and modern technology.",
  facebook: "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100092044533441%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDh97qIfa2GmZXTgmhc3ZJ7O6Hv_JqKXMIjMV1Mwrt7klVJ430GoCyVPp5RKv30BVNnfBX4T5YGlAos1JOj2SqUFclvnEcv7nzs_dE_QbsbJHpLi7t0esS3730Qc9cGDhvgBH8",
  instagram: "https://www.instagram.com/wadhawan_hospital/?hl=en",
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
  { label: "Contact Us", href: "/contact" },
];

export const doctors = [
  {
    slug: "piyush-wadhawan",
    name: "Dr. Piyush Wadhawan",
    qualification: "MBBS, MS (Orthopaedics)",
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
    qualification: "MBBS, MS (Obstetrics & Gynecology)",
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
  orthopedics: [
    { name: "Ramesh Kumar", city: "Panipat", source: "google", text: "Dr. Piyush Wadhawan is hands down the best orthopedic doctor in Panipat. My mother suffered severe knee pain for over three years. After undergoing knee joint treatment under Dr. Wadhawan, she is walking comfortably without support. Highly recommend!" },
    { name: "Suresh Verma", city: "Panipat", source: "google", text: "Got my ACL tear and knee treatment done here. Dr. Piyush explains every detail calm and patiently before recommending any procedure. Very professional staff and affordable treatment." },
    { name: "Pooja Sharma", city: "Panipat", source: "google", text: "Extremely grateful to Dr. Piyush Wadhawan! I had a complex leg fracture after a road accident. His quick intervention and surgery restored my mobility smoothly. Excellent care and follow-up." },
    { name: "Deepak Saini", city: "Panipat", source: "google", text: "Best hospital in Panipat for chronic back pain and knee pain treatment. The physiotherapy department and postoperative guidance were top-notch." },
    { name: "Amit Malik", city: "Panipat", source: "google", text: "Visited for severe arthritis in both knees. Dr. Piyush suggested non-surgical therapies first, which brought immense relief. Very genuine doctor who doesn't rush into unnecessary surgeries." },
    { name: "Vikram Dahiya", city: "Panipat", source: "google", text: "My father underwent knee replacement surgery here. Within weeks he resumed his daily walks. The hospital is very clean, and nursing staff is attentive 24/7." },
    { name: "Rajesh Goel", city: "Panipat", source: "google", text: "Prompt emergency service for fracture treatment. They handled my brother's wrist plaster and alignment with great precision." },
    { name: "Sunil Chaudhry", city: "Panipat", source: "google", text: "Dr. Piyush Wadhawan is highly skilled and soft-spoken. Took my grandmother for chronic hip and joint pain, and the prescribed treatment worked wonders." },
    { name: "Manoj Juneja", city: "Panipat", source: "google", text: "Excellent orthopedic consultation. Honest advice, accurate diagnosis, and minimal wait times if you book an appointment beforehand." },
    { name: "Karan Jaglan", city: "Panipat", source: "google", text: "Top-class orthopedic care in Old Housing Board Colony. Dr. Wadhawan's expertise in joint care is unmatched in Panipat." },
  ],
  diabeticFoot: [
    { name: "Harish Narang", city: "Panipat", source: "google", text: "Finding specialized diabetic foot treatment in Panipat was tough until we visited Wadhawan Hospital. They saved my father's foot from severe ulcer complications." },
    { name: "Satish Tyagi", city: "Panipat", source: "google", text: "Great expertise in diabetic wound care and infection control. Proper dressing, antibiotic management, and regular monitoring healed my foot ulcer completely." },
    { name: "Baljit Singh", city: "Panipat", source: "google", text: "The doctors and staff pay special attention to diabetic patients. Excellent foot hygiene guidelines and advanced wound dressing techniques used here." },
    { name: "Naveen Kheterpal", city: "Panipat", source: "google", text: "Saved my diabetic uncle from foot amputation! The team managed the deep infection with utmost care and dedication. Highly thankful to Wadhawan Hospital." },
    { name: "Gurmeet Randhawa", city: "Panipat", source: "google", text: "Best hospital for diabetic neuropathy and foot ulcer management. Their systematic approach to controlling blood sugar alongside local wound care gives quick results." },
    { name: "Praveen Ahlawat", city: "Panipat", source: "google", text: "Very knowledgeable medical team for diabetic foot complications. Regular cleaning and specialized dressing helped heal my non-healing wound within weeks." },
    { name: "Vinod Chawla", city: "Panipat", source: "google", text: "Comprehensive diabetic care under one roof. Blood tests, vascular assessment, and foot care are handled smoothly by experienced professionals." },
    { name: "Ashok Garg", city: "Panipat", source: "google", text: "Had a severe foot infection due to uncontrolled diabetes. The doctor's timely treatment prevented further tissue damage. Highly recommended." },
    { name: "Subhash Mittal", city: "Panipat", source: "google", text: "Very hygienic environment and dedicated nursing staff for daily dressing change of diabetic foot ulcers." },
    { name: "Tarun Bhatia", city: "Panipat", source: "google", text: "Clear guidance provided regarding diabetic footwear and daily foot care to prevent recurring ulcers. Excellent patient education." },
  ],
  gynecology: [
    { name: "Priya Kamboj", city: "Panipat", source: "google", text: "The gynaecology department at Wadhawan Hospital is outstanding. The doctor provided continuous guidance throughout my pregnancy, resulting in a safe normal delivery." },
    { name: "Ananya Gupta", city: "Panipat", source: "google", text: "Very compassionate and polite gynaecologist. Listens to all patient queries patiently and ensures maximum comfort during OPD visits." },
    { name: "Meenakshi Rani", city: "Panipat", source: "google", text: "Visited for PCOS treatment and hormonal issues. The prescribed medication and lifestyle guidance yielded positive results within two months." },
    { name: "Sunita Devi", city: "Panipat", source: "google", text: "Best hospital in Panipat for maternity and high-risk pregnancy care. The labor room setup and postoperative care were excellent." },
    { name: "Kavita Joshi", city: "Panipat", source: "google", text: "Felt very comfortable discussing personal health issues. The female medical team and nurses are soft-spoken, respectful, and supportive." },
    { name: "Ritu Arora", city: "Panipat", source: "google", text: "Excellent care during my delivery. The hospital staff managed all newborn care and maternal health monitoring seamlessly." },
    { name: "Neha Chaudhary", city: "Panipat", source: "google", text: "Clean rooms, polite staff, and reasonable charges for maternity packages. Highly recommended for couples planning family care in Panipat." },
    { name: "Rekha Saini", city: "Panipat", source: "google", text: "Got my ovarian cyst treated here successfully. Proper ultrasound evaluation and clear communication at every stage of the treatment." },
    { name: "Shalini Bajaj", city: "Panipat", source: "google", text: "Very professional approach towards women's health checkups, prenatal care, and postnatal recovery. A trustworthy hospital for families." },
    { name: "Swati Dhingra", city: "Panipat", source: "google", text: "Grateful for the personal care and quick response during late-night emergency pregnancy pain. Excellent service by doctors and nurses." },
  ],
  // Home page — a mix drawn from all three specialities, weighted toward Orthopedics/Gynecology first
  home: [
    { name: "Ramesh Kumar", city: "Panipat", source: "google", text: "Dr. Piyush Wadhawan is hands down the best orthopedic doctor in Panipat. My mother suffered severe knee pain for over three years. After undergoing knee joint treatment under Dr. Wadhawan, she is walking comfortably without support. Highly recommend!" },
    { name: "Harish Narang", city: "Panipat", source: "google", text: "Finding specialized diabetic foot treatment in Panipat was tough until we visited Wadhawan Hospital. They saved my father's foot from severe ulcer complications." },
    { name: "Priya Kamboj", city: "Panipat", source: "google", text: "The gynaecology department at Wadhawan Hospital is outstanding. The doctor provided continuous guidance throughout my pregnancy, resulting in a safe normal delivery." },
    { name: "Suresh Verma", city: "Panipat", source: "google", text: "Got my ACL tear and knee treatment done here. Dr. Piyush explains every detail calm and patiently before recommending any procedure. Very professional staff and affordable treatment." },
    { name: "Satish Tyagi", city: "Panipat", source: "google", text: "Great expertise in diabetic wound care and infection control. Proper dressing, antibiotic management, and regular monitoring healed my foot ulcer completely." },
    { name: "Ananya Gupta", city: "Panipat", source: "google", text: "Very compassionate and polite gynaecologist. Listens to all patient queries patiently and ensures maximum comfort during OPD visits." },
    { name: "Pooja Sharma", city: "Panipat", source: "google", text: "Extremely grateful to Dr. Piyush Wadhawan! I had a complex leg fracture after a road accident. His quick intervention and surgery restored my mobility smoothly. Excellent care and follow-up." },
    { name: "Baljit Singh", city: "Panipat", source: "google", text: "The doctors and staff pay special attention to diabetic patients. Excellent foot hygiene guidelines and advanced wound dressing techniques used here." },
    { name: "Meenakshi Rani", city: "Panipat", source: "google", text: "Visited for PCOS treatment and hormonal issues. The prescribed medication and lifestyle guidance yielded positive results within two months." },
    { name: "Deepak Saini", city: "Panipat", source: "google", text: "Best hospital in Panipat for chronic back pain and knee pain treatment. The physiotherapy department and postoperative guidance were top-notch." },
    { name: "Naveen Kheterpal", city: "Panipat", source: "google", text: "Saved my diabetic uncle from foot amputation! The team managed the deep infection with utmost care and dedication. Highly thankful to Wadhawan Hospital." },
    { name: "Sunita Devi", city: "Panipat", source: "google", text: "Best hospital in Panipat for maternity and high-risk pregnancy care. The labor room setup and postoperative care were excellent." },
    { name: "Amit Malik", city: "Panipat", source: "google", text: "Visited for severe arthritis in both knees. Dr. Piyush suggested non-surgical therapies first, which brought immense relief. Very genuine doctor who doesn't rush into unnecessary surgeries." },
    { name: "Gurmeet Randhawa", city: "Panipat", source: "google", text: "Best hospital for diabetic neuropathy and foot ulcer management. Their systematic approach to controlling blood sugar alongside local wound care gives quick results." },
    { name: "Kavita Joshi", city: "Panipat", source: "google", text: "Felt very comfortable discussing personal health issues. The female medical team and nurses are soft-spoken, respectful, and supportive." },
    { name: "Vikram Dahiya", city: "Panipat", source: "google", text: "My father underwent knee replacement surgery here. Within weeks he resumed his daily walks. The hospital is very clean, and nursing staff is attentive 24/7." },
    { name: "Praveen Ahlawat", city: "Panipat", source: "google", text: "Very knowledgeable medical team for diabetic foot complications. Regular cleaning and specialized dressing helped heal my non-healing wound within weeks." },
    { name: "Ritu Arora", city: "Panipat", source: "google", text: "Excellent care during my delivery. The hospital staff managed all newborn care and maternal health monitoring seamlessly." },
    { name: "Rajesh Goel", city: "Panipat", source: "google", text: "Prompt emergency service for fracture treatment. They handled my brother's wrist plaster and alignment with great precision." },
    { name: "Neha Chaudhary", city: "Panipat", source: "google", text: "Clean rooms, polite staff, and reasonable charges for maternity packages. Highly recommended for couples planning family care in Panipat." },
  ],
  // About Us page — a different mix/order from Home, weighted toward Diabetic Foot/Gynecology first
  about: [
    { name: "Sunil Chaudhry", city: "Panipat", source: "google", text: "Dr. Piyush Wadhawan is highly skilled and soft-spoken. Took my grandmother for chronic hip and joint pain, and the prescribed treatment worked wonders." },
    { name: "Vinod Chawla", city: "Panipat", source: "google", text: "Comprehensive diabetic care under one roof. Blood tests, vascular assessment, and foot care are handled smoothly by experienced professionals." },
    { name: "Rekha Saini", city: "Panipat", source: "google", text: "Got my ovarian cyst treated here successfully. Proper ultrasound evaluation and clear communication at every stage of the treatment." },
    { name: "Manoj Juneja", city: "Panipat", source: "google", text: "Excellent orthopedic consultation. Honest advice, accurate diagnosis, and minimal wait times if you book an appointment beforehand." },
    { name: "Ashok Garg", city: "Panipat", source: "google", text: "Had a severe foot infection due to uncontrolled diabetes. The doctor's timely treatment prevented further tissue damage. Highly recommended." },
    { name: "Shalini Bajaj", city: "Panipat", source: "google", text: "Very professional approach towards women's health checkups, prenatal care, and postnatal recovery. A trustworthy hospital for families." },
    { name: "Karan Jaglan", city: "Panipat", source: "google", text: "Top-class orthopedic care in Old Housing Board Colony. Dr. Wadhawan's expertise in joint care is unmatched in Panipat." },
    { name: "Subhash Mittal", city: "Panipat", source: "google", text: "Very hygienic environment and dedicated nursing staff for daily dressing change of diabetic foot ulcers." },
    { name: "Swati Dhingra", city: "Panipat", source: "google", text: "Grateful for the personal care and quick response during late-night emergency pregnancy pain. Excellent service by doctors and nurses." },
    { name: "Deepak Saini", city: "Panipat", source: "google", text: "Best hospital in Panipat for chronic back pain and knee pain treatment. The physiotherapy department and postoperative guidance were top-notch." },
    { name: "Tarun Bhatia", city: "Panipat", source: "google", text: "Clear guidance provided regarding diabetic footwear and daily foot care to prevent recurring ulcers. Excellent patient education." },
    { name: "Neha Chaudhary", city: "Panipat", source: "google", text: "Clean rooms, polite staff, and reasonable charges for maternity packages. Highly recommended for couples planning family care in Panipat." },
    { name: "Amit Malik", city: "Panipat", source: "google", text: "Visited for severe arthritis in both knees. Dr. Piyush suggested non-surgical therapies first, which brought immense relief. Very genuine doctor who doesn't rush into unnecessary surgeries." },
    { name: "Praveen Ahlawat", city: "Panipat", source: "google", text: "Very knowledgeable medical team for diabetic foot complications. Regular cleaning and specialized dressing helped heal my non-healing wound within weeks." },
    { name: "Ritu Arora", city: "Panipat", source: "google", text: "Excellent care during my delivery. The hospital staff managed all newborn care and maternal health monitoring seamlessly." },
    { name: "Vikram Dahiya", city: "Panipat", source: "google", text: "My father underwent knee replacement surgery here. Within weeks he resumed his daily walks. The hospital is very clean, and nursing staff is attentive 24/7." },
    { name: "Gurmeet Randhawa", city: "Panipat", source: "google", text: "Best hospital for diabetic neuropathy and foot ulcer management. Their systematic approach to controlling blood sugar alongside local wound care gives quick results." },
    { name: "Kavita Joshi", city: "Panipat", source: "google", text: "Felt very comfortable discussing personal health issues. The female medical team and nurses are soft-spoken, respectful, and supportive." },
    { name: "Rajesh Goel", city: "Panipat", source: "google", text: "Prompt emergency service for fracture treatment. They handled my brother's wrist plaster and alignment with great precision." },
    { name: "Baljit Singh", city: "Panipat", source: "google", text: "The doctors and staff pay special attention to diabetic patients. Excellent foot hygiene guidelines and advanced wound dressing techniques used here." },
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