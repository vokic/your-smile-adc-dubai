import type { SubService } from "./types";

// Teeth Whitening sub-services. Copy written in-house; reviewed against the
// owner's rules in ./types.ts (no prices, no invented stats).

export const WHITENING: SubService[] = [
  {
    slug: "laser",
    category: "whitening",
    name: "Laser Teeth Whitening",
    h1: "Laser Teeth Whitening in Dubai",
    seoTitle: "Laser Teeth Whitening in Dubai - Results in One Visit",
    seoDescription:
      "Professional laser teeth whitening in Dubai JLT. Visibly brighter teeth in a single 45–60 minute session, enamel-safe and performed by our dentists.",
    heroSubtitle:
      "A visibly brighter smile in one visit, with a dentist-controlled system that protects your enamel and gums.",
    intro: {
      heading: "Fast, controlled whitening for people who want results today",
      paragraphs: [
        "Laser whitening uses a professional-strength whitening gel activated by a focused light. The light speeds up the reaction that lifts stains out of the enamel, which is why a single appointment can achieve what weeks of home strips cannot. Because the whole process is supervised by a dentist, the concentration, timing and protection of your gums are all controlled.",
        "Before we start, we check that your teeth and gums are healthy, note your current shade and agree on a realistic target. Whitening works best on yellow and brown staining from coffee, tea, wine and smoking. Grey discolouration or stains inside the tooth may respond less, and we will tell you honestly if ceramic veneers would give you a better result.",
      ],
    },
    highlights: [
      { title: "Coffee, tea & wine stains", desc: "Surface and sub-surface staining that has built up over years." },
      { title: "Smoking discolouration", desc: "Nicotine and tar staining on the front teeth." },
      { title: "Age-related yellowing", desc: "Enamel naturally thins with age and shows more of the yellow dentine beneath." },
      { title: "Special occasions", desc: "Weddings, interviews and events where you want a brighter smile in one appointment." },
      { title: "Before cosmetic work", desc: "Setting a brighter baseline shade before new crowns or veneers are matched." },
    ],
    steps: [
      { title: "Consultation & shade check", description: "We examine your teeth and gums, clean away surface plaque, record your starting shade and confirm you are a good candidate.", duration: "15 min" },
      { title: "Gum protection", description: "A protective barrier is placed over your gums and lips so only the teeth are exposed to the whitening gel.", duration: "10 min" },
      { title: "Gel & laser cycles", description: "Whitening gel is applied and activated with the laser in short cycles. We monitor comfort and shade change between cycles.", duration: "30–45 min" },
      { title: "Final shade & aftercare", description: "We compare the result with your starting shade and explain how to keep it: avoid strongly coloured food and drink for 48 hours.", duration: "10 min" },
    ],
    benefits: [
      "Performed by a dentist, not a beauty salon technician",
      "Gums and lips fully protected during treatment",
      "Desensitising gel available for sensitive teeth",
      "Honest advice if whitening is not the right treatment for your stains",
      "Optional take-home trays to maintain the result",
    ],
    faqs: [
      { question: "Is laser whitening safe for my enamel?", answer: "Yes. Professional whitening gels break down stain molecules without removing or thinning enamel. The most common side effect is temporary sensitivity, which usually settles within 24–48 hours. We use a desensitising gel and can adjust the strength if you are prone to sensitivity." },
      { question: "How many shades whiter will my teeth get?", answer: "Most patients see a noticeable change after one session, but the exact result depends on your starting shade and the type of stain. We show you the before-and-after shade at the end of the appointment rather than promising a fixed number of shades." },
      { question: "How long does the result last?", answer: "Typically 6–12 months, sometimes longer with good habits. Coffee, tea, red wine and smoking shorten this. Occasional top-ups with a take-home kit keep the shade stable without repeating the full session." },
      { question: "Does it whiten crowns, veneers or fillings?", answer: "No. Whitening only works on natural enamel. Existing restorations keep their colour, which is why we recommend whitening before new cosmetic work so that the new restorations can be matched to your brighter shade." },
      { question: "Who should not have laser whitening?", answer: "We do not whiten during pregnancy or breastfeeding, for children, or when there are untreated cavities, gum disease or very worn enamel. In those cases we treat the underlying issue first or suggest an alternative." },
    ],
    cta: {
      title: "Ready for a Brighter Smile Today?",
      text: "Book your laser whitening session at our JLT clinic and leave with a visibly brighter smile in about an hour.",
    },
    related: ["/whitening/in-office", "/whitening/take-home-kits", "/veneers"],
  },
  {
    slug: "in-office",
    category: "whitening",
    name: "In-Office Whitening",
    h1: "In-Office Teeth Whitening in Dubai",
    seoTitle: "In-Office Teeth Whitening in Dubai - Dentist Supervised",
    seoDescription:
      "Chairside professional teeth whitening in Dubai JLT. Dentist-supervised gel treatment with gum protection for a safe, predictable, brighter result.",
    heroSubtitle:
      "Professional chairside whitening with dentist-controlled gel strength for a safe, even, predictable result.",
    intro: {
      heading: "Professional whitening, supervised from start to finish",
      paragraphs: [
        "In-office whitening is the classic chairside treatment: a professional-concentration gel is applied to the teeth in controlled cycles while your gums are protected. Unlike shop-bought products, the dentist decides the concentration and exposure time based on your enamel, sensitivity and target shade, so the result is even across all teeth.",
        "It is a good option for patients who prefer a gentler protocol than laser activation, who have some sensitivity, or who simply want the whole process done in the clinic without a home routine. The appointment takes about an hour and you see the difference before you leave.",
      ],
    },
    highlights: [
      { title: "Even whitening across all teeth", desc: "Gel is applied tooth by tooth, so no patchy results." },
      { title: "Sensitive teeth", desc: "Concentration and cycle length adjusted, with desensitising gel between cycles." },
      { title: "Stained front teeth", desc: "Discolouration from food, drink and smoking on the visible smile zone." },
      { title: "Maintenance after laser", desc: "A gentler refresh for patients who whitened before." },
    ],
    steps: [
      { title: "Examination & cleaning", description: "We check for cavities or gum inflammation, polish away surface deposits and record your shade.", duration: "15 min" },
      { title: "Isolation", description: "Lips and gums are protected with a barrier so the gel only touches enamel.", duration: "10 min" },
      { title: "Whitening cycles", description: "Professional gel is applied in two to three cycles, checked and refreshed each time.", duration: "40–50 min" },
      { title: "Shade comparison & aftercare", description: "We compare against the starting shade and go through the 48-hour 'white diet' and long-term care.", duration: "10 min" },
    ],
    benefits: [
      "Gel strength chosen by your dentist, not a one-size kit",
      "Full gum and lip protection throughout",
      "Suitable for patients with mild sensitivity",
      "Result visible at the end of the same appointment",
      "Take-home top-up trays available",
    ],
    faqs: [
      { question: "What is the difference between in-office and laser whitening?", answer: "Both use professional whitening gel applied in the clinic. Laser whitening adds light activation to speed up the reaction and is usually a little faster. In-office whitening without light is gentler and often preferred for sensitive teeth. Your dentist will recommend one based on your enamel and goals." },
      { question: "Will it hurt?", answer: "Most patients feel nothing during treatment. Some notice brief 'zings' of sensitivity during or shortly after the appointment. This is temporary and we use desensitising gel to reduce it." },
      { question: "How white will my teeth be?", answer: "Results vary with your starting shade and the type of staining. We agree on a realistic target at the consultation and show you the change with a shade guide afterwards." },
      { question: "Can I eat and drink normally afterwards?", answer: "For the first 48 hours, avoid strongly coloured food and drink such as coffee, tea, red wine, curry and berries. After that, normal habits are fine, although limiting staining drinks keeps the result longer." },
      { question: "How often can I repeat it?", answer: "Most people refresh once a year, or use a take-home kit for occasional top-ups. We will advise a schedule that keeps your enamel healthy." },
    ],
    cta: {
      title: "Book Your In-Office Whitening",
      text: "One appointment at our JLT clinic, one visibly brighter smile. Message us to reserve your session.",
    },
    related: ["/whitening/laser", "/whitening/take-home-kits", "/general-preventive/cleanings"],
  },
  {
    slug: "take-home-kits",
    category: "whitening",
    name: "Take-Home Whitening Kits",
    h1: "Take-Home Teeth Whitening Kits in Dubai",
    seoTitle: "Take-Home Teeth Whitening Kits in Dubai - Custom Trays",
    seoDescription:
      "Custom-fitted take-home whitening trays with professional gel from our Dubai JLT dentists. Gradual, controlled whitening in 1–2 weeks at your own pace.",
    heroSubtitle:
      "Custom-made trays and professional gel so you can whiten gradually at home, with your dentist's guidance.",
    intro: {
      heading: "Professional whitening on your own schedule",
      paragraphs: [
        "A take-home kit from a dentist is very different from a strip bought in a pharmacy. We take a digital scan or impression of your teeth and make trays that fit precisely, so the gel stays on the enamel and away from your gums. You then wear the trays for a short period each day, usually for one to two weeks, and the shade improves gradually.",
        "Because the change is gradual, sensitivity is usually lower than with a single in-clinic session. Kits are also the best way to maintain a result after laser or in-office whitening: a few days of trays every few months keeps the shade stable.",
      ],
    },
    highlights: [
      { title: "Gradual, gentle whitening", desc: "Lower daily exposure suits sensitive teeth." },
      { title: "Maintenance after in-clinic whitening", desc: "Keep your laser or in-office result bright for longer." },
      { title: "Busy schedules", desc: "Whiten at home in the evening instead of booking clinic time." },
      { title: "Precise fit", desc: "Custom trays keep gel off the gums, unlike one-size strips." },
    ],
    steps: [
      { title: "Check-up & scan", description: "We confirm your teeth and gums are healthy and take a digital scan for your custom trays.", duration: "20 min" },
      { title: "Tray fitting", description: "At the second visit we check the fit, show you exactly how much gel to use and record your starting shade.", duration: "15 min" },
      { title: "Home whitening", description: "Wear the trays as instructed, typically 30–60 minutes a day or overnight depending on the gel.", duration: "1–2 weeks" },
      { title: "Review", description: "We compare your shade, advise on top-ups and answer any questions.", duration: "10 min" },
    ],
    benefits: [
      "Trays made from a digital scan of your teeth",
      "Professional-strength gel not available over the counter",
      "Dentist-checked before you start, so no whitening over hidden problems",
      "Trays can be reused for years of top-ups",
      "Lower sensitivity than single-session whitening for many patients",
    ],
    faqs: [
      { question: "How long until I see results?", answer: "Most patients notice a change after three to five days and reach their target shade within one to two weeks, depending on the gel strength and how consistently the trays are worn." },
      { question: "Is a dentist kit better than pharmacy strips?", answer: "Yes. The trays fit your teeth exactly, so the gel covers every tooth evenly and does not leak onto the gums. The gel is also stronger and more predictable. Just as importantly, we check your mouth first — whitening over an undiagnosed cavity or gum problem can be painful." },
      { question: "Can I combine a kit with laser whitening?", answer: "That is the most effective approach for many patients: a laser session for an immediate boost, then trays to fine-tune and maintain the shade." },
      { question: "What if my teeth become sensitive?", answer: "Reduce wear time or skip a day, and use the desensitising toothpaste we recommend. Sensitivity settles quickly and does not damage the teeth." },
      { question: "How long do the trays last?", answer: "With care, custom trays last for years. You only need to buy new gel for top-ups, unless your teeth move or you have new dental work." },
    ],
    cta: {
      title: "Get Your Custom Whitening Kit",
      text: "Book a quick check-up and scan at our JLT clinic and start whitening at home within days.",
    },
    related: ["/whitening/laser", "/whitening/in-office", "/general-preventive/check-ups"],
  },
];
