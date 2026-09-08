import type { SubService } from "./types";

// Crowns & Bridges sub-services. Copy written in-house; reviewed against the
// owner's rules in ./types.ts (no prices, no invented stats, no warranty claims
// on crowns or bridges — only the implant system carries a warranty).

export const CROWNS_BRIDGES: SubService[] = [
  {
    slug: "zirconia-crowns",
    category: "crowns-bridges",
    name: "Zirconia Crowns",
    h1: "Zirconia Crowns in Dubai",
    seoTitle: "Zirconia Crowns in Dubai - Strong, Natural-Looking",
    seoDescription:
      "Zirconia crowns in Dubai JLT: digitally scanned, CAD/CAM designed and built to last on back teeth and front teeth alike. Also used in full-mouth rehabilitation.",
    heroSubtitle:
      "The strongest metal-free crown we offer, designed digitally to protect a damaged tooth and blend in with the teeth around it.",
    intro: {
      heading: "Strength where your teeth need it most",
      paragraphs: [
        "Zirconia is a ceramic that is exceptionally strong, which makes it the material we reach for when a tooth has to take heavy chewing forces. It is metal-free, so there is no dark line at the gum, and modern translucent zirconia can be layered or stained to blend with your natural teeth. A zirconia crown covers the whole tooth, protecting what remains after a large filling, a root canal or a fracture, and restoring its shape so you can bite and chew normally again.",
        "We design every crown digitally. A small scanner records your prepared tooth in minutes, so there is no tray of impression material to hold in your mouth, and the crown is designed with CAD/CAM software to fit precisely. Zirconia is also our workhorse for larger cases: when several teeth need rebuilding, or a whole mouth needs restoring after years of wear, zirconia crowns and bridges give us a strong, predictable foundation for a complete smile transformation.",
      ],
    },
    highlights: [
      { title: "Back teeth under heavy load", desc: "Molars and premolars that carry most of the chewing force." },
      { title: "Teeth grinders (bruxism)", desc: "Zirconia resists the chipping that can affect weaker ceramics." },
      { title: "After root canal treatment", desc: "A root-treated tooth is more brittle and needs full coverage to prevent fracture." },
      { title: "Large or failing fillings", desc: "When too little healthy tooth remains to hold another filling." },
      { title: "Full-mouth rehabilitation", desc: "Rebuilding many worn or damaged teeth as part of a complete smile transformation." },
    ],
    steps: [
      { title: "Consultation & planning", description: "We examine the tooth, take an X-ray to check the root and bone, and agree on the type of zirconia and the shade that suits the position of the tooth.", duration: "30 min" },
      { title: "Preparation & digital scan", description: "Under local anaesthetic the tooth is reshaped to make room for the crown, then scanned. A temporary crown protects it while the final one is made.", duration: "60 min" },
      { title: "Design & manufacture", description: "The crown is designed with CAD/CAM software and milled from a block of zirconia, then finished and glazed to match your teeth.", duration: "1–2 weeks" },
      { title: "Fitting", description: "We check the fit, contact with neighbouring teeth and your bite, make any small adjustments and cement the crown permanently.", duration: "30–45 min" },
    ],
    benefits: [
      "Digital scanning instead of impression trays",
      "Crowns designed with CAD/CAM software for a precise fit",
      "Monolithic zirconia for maximum strength, layered zirconia for visible teeth",
      "Metal-free, so no grey line at the gum as the years pass",
      "The clinic specialises in complex full-mouth rehabilitation with crowns and bridges",
    ],
    faqs: [
      { question: "How long does a zirconia crown last?", answer: "Zirconia is one of the most durable materials in dentistry, and with good brushing, flossing and regular check-ups a crown can serve you for many years. How long depends mainly on the health of the tooth and gum underneath, your bite and habits such as grinding. We do not promise a fixed lifespan, but we will show you how to protect the crown and check it at every visit." },
      { question: "Will a zirconia crown look natural?", answer: "Yes. Older zirconia had a reputation for looking flat and white, but modern translucent zirconia lets light through much like enamel. For back teeth we usually use monolithic zirconia, which is a single strong piece. For front teeth we can layer porcelain over a zirconia core or use a more translucent grade, and we match the shade to your neighbouring teeth before it is made." },
      { question: "Does getting a crown hurt?", answer: "The tooth is fully numbed before preparation, so you should feel pressure but no pain. Afterwards the tooth may be sensitive to hot and cold for a few days while the gum settles, and the temporary crown can feel slightly different from your own tooth. Once the final crown is cemented most patients forget it is there." },
      { question: "Zirconia or porcelain, which is better for me?", answer: "Both are excellent ceramics with different strengths. Zirconia is the tougher of the two and is our first choice for molars, for patients who grind and for bridges. Lithium disilicate porcelain gives the most lifelike translucency and is often preferred for front teeth. We recommend the material based on where the tooth is, how much force it takes and how visible it is." },
      { question: "Can I have a zirconia crown in one visit?", answer: "In many cases, yes. We mill same-day crowns in the clinic, so a single tooth can be scanned, designed, milled and fitted in one appointment of around two to three hours. Larger cases, bridges and crowns that need complex shade work are still made over two visits so the result is right." },
    ],
    cta: {
      title: "Restore Your Tooth with Zirconia",
      text: "Book a consultation at our JLT clinic and we will tell you honestly whether a zirconia crown is the right choice for your tooth.",
    },
    related: ["/crowns-bridges/porcelain-crowns", "/crowns-bridges/same-day-crowns", "/crowns-bridges/traditional-bridges", "/restorative/inlays-onlays", "/implants"],
  },
  {
    slug: "porcelain-crowns",
    category: "crowns-bridges",
    name: "Porcelain Crowns",
    h1: "Porcelain Crowns in Dubai",
    seoTitle: "Porcelain Crowns in Dubai - Natural Front-Tooth Aesthetics",
    seoDescription:
      "Porcelain and lithium disilicate crowns in Dubai JLT for front teeth that need to look completely natural. Digitally scanned, shade matched and bonded in place.",
    heroSubtitle:
      "Lifelike ceramic crowns that are shade matched and bonded to your tooth, so nobody can tell where the tooth ends and the crown begins.",
    intro: {
      heading: "Crowns made to disappear into your smile",
      paragraphs: [
        "Porcelain crowns are chosen when appearance matters most. Modern dental porcelain, and in particular lithium disilicate ceramic, has a translucency and depth of colour very close to natural enamel, so a crown on a front tooth can be almost impossible to pick out. The ceramic is bonded to the tooth rather than simply cemented, which strengthens the whole restoration and allows us to keep the preparation of your tooth as conservative as possible.",
        "Where a tooth needs full coverage but sits in the front of your smile, a porcelain crown is usually the best choice. We also use porcelain-fused-to-metal crowns where a metal core is indicated, for example on some back teeth or when replacing an older crown of the same type. Whichever material we recommend, your tooth is scanned digitally, the crown is designed with CAD/CAM software, and the shade is matched to your neighbouring teeth in natural light before anything is made.",
      ],
    },
    highlights: [
      { title: "Front teeth", desc: "Incisors and canines where translucency and colour have to match perfectly." },
      { title: "Discoloured or misshapen teeth", desc: "A tooth too damaged for a veneer but still on show when you smile." },
      { title: "Replacing old crowns", desc: "Older crowns with a dark gum line or worn, opaque porcelain." },
      { title: "Cracked or heavily filled teeth", desc: "Full coverage protects a weakened tooth from splitting." },
    ],
    steps: [
      { title: "Consultation & shade matching", description: "We assess the tooth and your smile, photograph and shade match the neighbouring teeth, and choose between lithium disilicate and other ceramics.", duration: "30 min" },
      { title: "Preparation & digital scan", description: "The tooth is numbed and carefully shaped, then scanned. A temporary crown is fitted so you can smile and eat while the final crown is made.", duration: "60 min" },
      { title: "Ceramic manufacture & try-in", description: "The crown is designed digitally and made in ceramic. For front teeth we may try it in first to check colour and shape before final glazing.", duration: "1–2 weeks" },
      { title: "Bonding", description: "The tooth is cleaned and conditioned, and the crown is bonded with a resin cement chosen to keep the shade exactly right.", duration: "45 min" },
    ],
    benefits: [
      "Lithium disilicate ceramic for the most natural translucency",
      "Bonded to the tooth for strength and a tight seal",
      "Shade matched to your own teeth in natural light",
      "Digital scan and CAD/CAM design for a precise fit",
      "Porcelain-fused-to-metal available where a metal core is indicated",
    ],
    faqs: [
      { question: "What is the difference between a porcelain crown and a veneer?", answer: "A veneer is a thin ceramic shell bonded to the front surface of a tooth and needs a good amount of healthy enamel to hold onto. A crown covers the whole tooth. When a tooth has a large filling, a crack or a root canal, there is often not enough sound structure for a veneer and a crown is the safer choice. We will show you which applies to your tooth." },
      { question: "Will a porcelain crown chip?", answer: "Modern lithium disilicate is far stronger than the porcelain used a generation ago, and once bonded to the tooth it copes well with normal eating. Chipping usually comes from biting hard objects, opening packaging with the teeth or grinding at night. If you grind, we will recommend a night guard, and for molars under heavy force we may suggest zirconia instead." },
      { question: "Will the crown stain over time?", answer: "Glazed ceramic is very resistant to staining from coffee, tea and wine, more so than natural enamel. It will not, however, respond to whitening. If you are thinking about whitening your teeth, we recommend doing it first so the new crown can be matched to your brighter shade and the two stay in step for years to come." },
      { question: "Will I see a dark line at the gum?", answer: "Not with an all-ceramic crown. The grey line seen on older crowns comes from a metal core showing through at the edge. Lithium disilicate and zirconia crowns have no metal, so the edge stays tooth coloured even if the gum recedes slightly with age. Where we do use a metal core, we design the edge so it is hidden." },
      { question: "How do I look after a porcelain crown?", answer: "Exactly as you look after your own teeth: brush twice a day, clean between the teeth daily and keep up regular check-ups and hygiene visits. The crown itself cannot decay, but the tooth underneath can at the edge, so cleaning around the gum line matters. Avoid using the crowned tooth to bite very hard things such as ice or nut shells." },
    ],
    cta: {
      title: "A Crown Nobody Will Notice",
      text: "Book a consultation at our JLT clinic and see how natural a modern porcelain crown can look.",
    },
    related: ["/crowns-bridges/zirconia-crowns", "/crowns-bridges/same-day-crowns", "/veneers", "/cosmetic", "/restorative/overlays"],
  },
  {
    slug: "same-day-crowns",
    category: "crowns-bridges",
    name: "Same-Day Crowns",
    h1: "Same-Day Crowns in Dubai",
    seoTitle: "Same-Day Crowns in Dubai - Fitted in One Visit",
    seoDescription:
      "Same-day crowns in Dubai JLT: your tooth is scanned, the crown designed and milled in our clinic, and fitted in about 2–3 hours. No temporary, no second visit.",
    heroSubtitle:
      "Scanned, designed, milled and fitted in a single appointment, so you leave with your permanent crown the same day.",
    intro: {
      heading: "A permanent crown in one appointment",
      paragraphs: [
        "A same-day crown means exactly that: you arrive with a damaged tooth and leave with a permanent ceramic crown, usually within two to three hours. Instead of taking an impression, sending it to a laboratory and fitting a temporary crown while you wait, we scan your tooth digitally, design the crown on screen and mill it from a solid block of ceramic right here in the clinic. The crown is then checked, glazed and bonded in the same appointment.",
        "This saves you a second visit and the week or two of living with a temporary crown that can loosen or feel rough. Because the crown is designed from a scan of your own bite, the fit is precise. Same-day crowns suit most single back and front teeth, but they are not right for every situation: very demanding shade matching, some bridges and cases that need extra healing time are still better handled over two visits, and we will tell you honestly which applies to you.",
      ],
    },
    highlights: [
      { title: "Busy schedules", desc: "One appointment instead of two, with no return trip for the fitting." },
      { title: "A broken tooth that needs fixing today", desc: "A fractured or heavily filled tooth restored before you leave." },
      { title: "Travellers and visitors to Dubai", desc: "Complete treatment within a short stay." },
      { title: "No temporary crown", desc: "Nothing to loosen, chip or avoid chewing on while you wait." },
      { title: "After root canal treatment", desc: "Protect the tooth straight away rather than waiting for a laboratory." },
    ],
    steps: [
      { title: "Examination & preparation", description: "We confirm the tooth is suitable, numb it and shape it to receive the crown.", duration: "30–45 min" },
      { title: "Digital scan", description: "A small camera scans the prepared tooth and the teeth it bites against. No impression trays.", duration: "5–10 min" },
      { title: "Design & milling", description: "The crown is designed on screen and milled from a ceramic block in our in-clinic unit while you relax.", duration: "45–60 min" },
      { title: "Finishing & bonding", description: "We try the crown in, adjust the bite, glaze and polish it, then bond it permanently.", duration: "30–45 min" },
    ],
    benefits: [
      "Crown milled in our own clinic, not sent to an outside laboratory",
      "Digital scan replaces impression trays",
      "No temporary crown and no second appointment",
      "Ceramic materials including lithium disilicate and zirconia",
      "Honest advice when a two-visit crown will give a better result",
    ],
    faqs: [
      { question: "How long does a same-day crown take?", answer: "Plan for two to three hours in total. Preparation and scanning take under an hour, milling and finishing take roughly another hour, and bonding and bite checks finish the visit. You are welcome to wait in the clinic or step out for a coffee in JLT while the crown is being milled." },
      { question: "Is a same-day crown as strong as a laboratory crown?", answer: "Yes. The crown is milled from the same solid ceramic blocks, such as lithium disilicate or zirconia, that laboratories use. Because it is designed from a digital scan of your tooth and bite, the fit is precise and the margins are tight. The main difference is time, not quality." },
      { question: "Which materials are used?", answer: "We choose the ceramic to suit the tooth. Lithium disilicate gives excellent aesthetics for front teeth and premolars. Zirconia is used for molars and for patients who grind. Both are bonded to the tooth and finished to match the shade of your neighbouring teeth before you leave." },
      { question: "Can every tooth have a same-day crown?", answer: "Most single teeth can, but not all. Front teeth that need very fine shade layering, multi-unit bridges, crowns on implants and teeth where the gum needs time to heal are usually better made over two visits. We check your situation at the start and tell you which route we recommend." },
      { question: "What should I expect after the appointment?", answer: "Your mouth will stay numb for a few hours, so wait before eating anything hot. Some sensitivity to temperature for a few days is normal while the tooth settles. The crown is fully bonded before you leave, so you can brush, floss and chew on it as normal once the numbness has worn off." },
    ],
    cta: {
      title: "Fix Your Tooth in a Single Visit",
      text: "Book a same-day crown appointment at our JLT clinic and walk out with your permanent crown the same afternoon.",
    },
    related: ["/crowns-bridges/zirconia-crowns", "/crowns-bridges/porcelain-crowns", "/restorative/inlays-onlays", "/restorative/overlays", "/general-preventive/fillings"],
  },
  {
    slug: "traditional-bridges",
    category: "crowns-bridges",
    name: "Dental Bridges",
    h1: "Dental Bridges in Dubai",
    seoTitle: "Dental Bridges in Dubai - Fixed Tooth Replacement",
    seoDescription:
      "Fixed dental bridges in Dubai JLT to replace one or more missing teeth without surgery. Zirconia and porcelain bridges designed digitally for a natural fit.",
    heroSubtitle:
      "A fixed, natural-looking way to replace a missing tooth, anchored to the teeth on either side of the gap.",
    intro: {
      heading: "Fill the gap with teeth that stay in place",
      paragraphs: [
        "A dental bridge replaces a missing tooth with a false tooth that is anchored to the teeth on either side of the gap. In the most common design, a three-unit bridge, the two neighbouring teeth are prepared and crowned, and the replacement tooth is joined between them as one solid piece. The bridge is cemented permanently, so it does not come out at night and it feels and works much like your own teeth when you eat and speak.",
        "Bridges are a well-proven way to fill a gap without surgery, and they are often the right choice when the neighbouring teeth already have large fillings or crowns that need replacing anyway. Where those teeth are healthy and untouched, or where the gap is long, a dental implant or implant-supported bridge is usually the better long-term option because it does not rely on cutting down sound teeth. We go through both routes with you and explain honestly which we recommend and why.",
      ],
    },
    highlights: [
      { title: "One or two missing teeth in a row", desc: "A gap with a suitable anchor tooth on each side." },
      { title: "Anchor teeth already crowned or heavily filled", desc: "The neighbouring teeth benefit from new crowns anyway." },
      { title: "Patients who prefer not to have implant surgery", desc: "A fixed solution without a surgical stage or healing period." },
      { title: "Replacing an old or failing bridge", desc: "Worn, loose or unsightly bridges rebuilt in modern ceramics." },
    ],
    steps: [
      { title: "Assessment & planning", description: "We X-ray the gap and the anchor teeth, check the bite and gums, and discuss whether a bridge or an implant is the better choice for you.", duration: "30–45 min" },
      { title: "Preparation & digital scan", description: "Under local anaesthetic the anchor teeth are shaped, the area is scanned and a temporary bridge is fitted so you are never left with a gap.", duration: "60–90 min" },
      { title: "Design & manufacture", description: "The bridge is designed with CAD/CAM software as a single piece in zirconia or layered ceramic, and shaded to match your teeth.", duration: "1–2 weeks" },
      { title: "Fitting", description: "We try the bridge in, check the fit under the false tooth and your bite, then cement it permanently and show you how to clean beneath it.", duration: "45 min" },
    ],
    benefits: [
      "Fixed in place, nothing to take out at night",
      "Zirconia for strength or layered ceramic for gaps in the front of the smile",
      "Digital scan and CAD/CAM design for a precise, even fit",
      "Cantilever and Maryland (resin-bonded) designs available where suitable",
      "Clear advice on when an implant would serve you better",
    ],
    faqs: [
      { question: "Should I have a bridge or an implant?", answer: "A bridge is quicker, involves no surgery and works well when the neighbouring teeth need crowns anyway. An implant replaces the tooth on its own root, leaves the neighbouring teeth untouched and helps preserve the jawbone, which a bridge cannot do. If your anchor teeth are healthy or the gap is long, we will usually recommend an implant or implant-supported bridge. We explain both options and let you decide." },
      { question: "What are cantilever and Maryland bridges?", answer: "A cantilever bridge is supported by a tooth on one side of the gap only, which can work for small front teeth that take little biting force. A Maryland bridge has thin wings bonded to the back of the neighbouring teeth instead of full crowns, so very little tooth is removed. Both are useful in the right situation, and we will tell you if yours is one of them." },
      { question: "How long does a dental bridge last?", answer: "With good cleaning and regular check-ups a well-made ceramic bridge can serve for many years. The weak points are the anchor teeth, which can decay at the edge of the crown if plaque collects, and the gum under the false tooth. We do not quote a fixed number of years, but we will teach you how to clean under the bridge and check it at every visit." },
      { question: "Does getting a bridge hurt?", answer: "The anchor teeth are fully numbed before they are shaped, so you feel pressure but not pain. Afterwards the teeth may be sensitive for a few days, and the temporary bridge can feel bulky at first. Once the final bridge is cemented most patients adapt within a week and forget it is there when they eat and speak." },
      { question: "How do I clean under a bridge?", answer: "The false tooth sits on the gum, so food and plaque can collect underneath it. A floss threader or special bridge floss lets you pass floss under the false tooth, and many patients find a water flosser easier. Small interdental brushes also help. We show you the technique at the fitting and check it at your hygiene visits." },
    ],
    cta: {
      title: "Close the Gap in Your Smile",
      text: "Book a consultation at our JLT clinic and we will show you whether a bridge or an implant is the right way to replace your missing tooth.",
    },
    related: ["/crowns-bridges/implant-supported-bridges", "/crowns-bridges/zirconia-crowns", "/crowns-bridges/porcelain-crowns", "/implants"],
  },
  {
    slug: "implant-supported-bridges",
    category: "crowns-bridges",
    name: "Implant-Supported Bridges",
    h1: "Implant-Supported Bridges in Dubai",
    seoTitle: "Implant-Supported Bridges in Dubai - Fixed on Implants",
    seoDescription:
      "Implant-supported bridges in Dubai JLT: several missing teeth replaced on two or more implants, without cutting down healthy teeth. Full-arch options available.",
    heroSubtitle:
      "Several missing teeth replaced with a fixed ceramic bridge on dental implants, leaving your remaining teeth untouched.",
    intro: {
      heading: "Fixed teeth on implants, without touching your natural teeth",
      paragraphs: [
        "An implant-supported bridge replaces several missing teeth in a row using two or more dental implants as anchors, instead of the natural teeth on either side of the gap. Titanium implants are placed in the jaw, and once they have healed and fused with the bone, a fixed ceramic bridge is attached to them. Because nothing is cut down or loaded, your remaining teeth are left untouched, and the implants keep the jawbone stimulated so it does not shrink away as it does under a gap or a removable denture.",
        "This is the approach we use for longer gaps, for back teeth where a tooth-supported bridge would overload its anchors, and for patients who have lost most or all of their teeth and want a fixed full-arch bridge. Rebuilding a smile on implants is a core part of what we do: the clinic specialises in complex full-mouth rehabilitation, planning implants, crowns and bridges together so the final result looks natural and works as one bite. We use JD Evolution Plus implants, which carry a lifetime implant warranty.",
      ],
    },
    highlights: [
      { title: "Three or more missing teeth in a row", desc: "Gaps too long for a bridge on natural teeth." },
      { title: "Missing back teeth", desc: "Molars take heavy chewing forces that implants handle well." },
      { title: "Protecting healthy neighbouring teeth", desc: "No need to crown sound teeth just to anchor a bridge." },
      { title: "Full-arch replacement", desc: "A fixed alternative to a removable denture when most teeth are missing." },
      { title: "Full-mouth rehabilitation", desc: "Part of a complete rebuild of a worn or failing bite." },
    ],
    steps: [
      { title: "3D planning", description: "A CT scan and digital scan of your mouth let us plan the number and position of implants and design the final bridge before anything is placed.", duration: "45–60 min" },
      { title: "Implant placement", description: "The implants are placed under local anaesthetic. Where possible we fit temporary teeth so you are not left with a gap.", duration: "1–2 hours" },
      { title: "Healing", description: "The implants fuse with the bone. You wear temporary teeth and we review the healing along the way.", duration: "3–6 months" },
      { title: "Scan & bridge design", description: "The healed implants are scanned digitally and the bridge is designed with CAD/CAM software, with a try-in to confirm fit, bite and appearance.", duration: "2–3 weeks" },
      { title: "Final bridge fitted", description: "The finished ceramic bridge is secured to the implants and your bite is fine-tuned.", duration: "60 min" },
    ],
    benefits: [
      "Neighbouring teeth stay untouched",
      "Implants preserve jawbone that would otherwise shrink",
      "JD Evolution Plus implant system",
      "Digital scanning and CAD/CAM design of the final bridge",
      "Zirconia or layered ceramic, matched to your natural teeth",
    ],
    faqs: [
      { question: "How many implants will I need?", answer: "It depends on the length of the gap and the strength of your bone. A bridge replacing three or four teeth is usually supported by two implants, one at each end. Longer gaps may need a third. A full-arch bridge replacing all the teeth in one jaw typically rests on four to six implants. We plan the exact number from your CT scan." },
      { question: "How long does the whole process take?", answer: "Most patients are finished within four to eight months. The implants need three to six months to fuse with the bone before the final bridge can be fitted, then the bridge takes a few weeks to design and make. You are not left without teeth in the meantime: we fit temporary teeth wherever possible." },
      { question: "Is implant surgery painful?", answer: "The placement is done under local anaesthetic, so you feel pressure but not pain. Expect some swelling and tenderness for a few days afterwards, usually managed with ordinary painkillers. Most patients say the recovery is easier than they expected and are back to their normal routine within a day or two." },
      { question: "Why choose an implant bridge over a traditional bridge?", answer: "A traditional bridge relies on the teeth either side of the gap, which must be cut down to hold it and then carry the extra load. An implant bridge leaves those teeth alone, keeps the jawbone from shrinking under the gap and is not limited by how long the gap is. The trade-off is a surgical stage and a healing period before the final teeth." },
      { question: "Can all my teeth be replaced this way?", answer: "Yes. When most or all of the teeth in a jaw are missing or failing, a full-arch bridge fixed on implants replaces them with teeth that do not come out. This is a large part of our full-mouth rehabilitation work. You can read more about implant options, including full-arch treatment, on our implants page." },
    ],
    cta: {
      title: "Fixed Teeth You Can Rely On",
      text: "Book a consultation at our JLT clinic to find out whether an implant-supported bridge is the right way to rebuild your smile.",
    },
    related: ["/implants", "/crowns-bridges/traditional-bridges", "/crowns-bridges/zirconia-crowns", "/cosmetic"],
  },
];
