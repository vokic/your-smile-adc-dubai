import type { SubService } from "./types";

// Restorative sub-services (indirect ceramic restorations). Copy written
// in-house; reviewed against the owner's rules in ./types.ts (no prices,
// no invented stats).

export const RESTORATIVE: SubService[] = [
  {
    slug: "inlays-onlays",
    category: "restorative",
    name: "Inlays & Onlays",
    h1: "Dental Inlays & Onlays in Dubai",
    seoTitle: "Inlays & Onlays in Dubai - Ceramic Partial Crowns",
    seoDescription:
      "Ceramic inlays and onlays in Dubai JLT. A conservative alternative to crowns for damaged back teeth, digitally designed and bonded in two visits or same day.",
    heroSubtitle:
      "Precision-made ceramic restorations that repair a damaged back tooth while keeping as much of your natural tooth as possible.",
    intro: {
      heading: "Stronger than a filling, gentler than a crown",
      paragraphs: [
        "An inlay or onlay is a custom-made piece of ceramic or composite that replaces the damaged part of a back tooth. An inlay sits inside the tooth between the cusps, the raised points on the chewing surface. An onlay is larger and covers one or more of those cusps as well. Both are made outside the mouth, either in a dental laboratory or with our in-house CAD/CAM system, and then bonded firmly to the tooth. Because they are designed digitally to fit your tooth precisely, the seal is tighter and the surface more durable than a large filling shaped by hand in the mouth.",
        "We usually recommend an inlay or onlay when a cavity or an old filling has become too large for a reliable new filling, but the tooth still has enough healthy structure that a full crown would remove more than necessary. The aim is simple: repair what is broken and keep everything that is sound. At our JLT clinic we scan the tooth digitally rather than taking a mouthful of impression material, and for suitable cases the restoration can be milled and fitted on the same day. Otherwise it is fitted at a short second visit about a week later.",
      ],
    },
    highlights: [
      { title: "Large or failing fillings", desc: "Old amalgam or composite fillings that have cracked, leaked or no longer seal the tooth." },
      { title: "Cavities too big for a filling", desc: "Decay that has removed a large part of the chewing surface but left the walls of the tooth intact." },
      { title: "Chipped or fractured cusps", desc: "A broken corner of a molar or premolar that an onlay can rebuild without a full crown." },
      { title: "Protecting a root-treated tooth", desc: "Back teeth after root canal treatment can often be covered with an onlay instead of a crown when enough tooth remains." },
      { title: "Replacing metal fillings", desc: "Tooth-coloured ceramic in place of grey amalgam, matched to your natural shade." },
    ],
    steps: [
      { title: "Examination & digital scan", description: "We check the tooth, remove the decay or old filling and shape the tooth conservatively, then take a digital intraoral scan. No impression trays.", duration: "45–60 min" },
      { title: "Design & milling", description: "The restoration is designed on screen and milled from ceramic or zirconia. For same-day cases this happens while you wait; otherwise a temporary is placed.", duration: "Same day or about 1 week" },
      { title: "Try-in & bonding", description: "We check the fit, the contact with neighbouring teeth and the shade, then bond the inlay or onlay in place with adhesive cement.", duration: "30–45 min" },
      { title: "Bite check & polish", description: "The bite is fine-tuned and the edges polished so the restoration feels like part of your own tooth.", duration: "10 min" },
    ],
    benefits: [
      "Digital intraoral scanning instead of impression trays",
      "Designed with CAD/CAM and milled from lithium disilicate ceramic or zirconia",
      "Same-day milling available for suitable cases, so no temporary and no second visit",
      "Conservative preparation that keeps more of your natural tooth than a crown",
      "Shade matched to the neighbouring teeth so the repair is hard to spot",
    ],
    faqs: [
      { question: "What is the difference between an inlay and an onlay?", answer: "Both are custom-made restorations for back teeth. An inlay fits inside the tooth, between the cusps, and replaces a filling-sized area. An onlay extends over one or more cusps to rebuild part of the chewing surface. Which one you need depends on how much of the tooth is damaged. Your dentist will show you on the scan exactly where the restoration will sit." },
      { question: "Why not just have a filling or a crown?", answer: "A filling is shaped by hand inside the mouth, so for large cavities it is harder to seal well and more likely to crack. A crown solves that, but the whole tooth has to be reduced to make room for it. An inlay or onlay sits in between: it is made precisely outside the mouth for strength and fit, yet only the damaged part of the tooth is prepared." },
      { question: "How long does treatment take?", answer: "If your case suits same-day milling, the tooth is prepared and scanned, and the finished ceramic piece is bonded in a single appointment of roughly two to three hours including waiting time. If a laboratory is used, you leave with a temporary and return about a week later for a 30–45 minute fitting visit." },
      { question: "Which material will be used?", answer: "Most inlays and onlays are milled from lithium disilicate, a strong glass ceramic that bonds very well to enamel and matches tooth colour closely. Zirconia is chosen for heavier bite forces, and composite may be used where a smaller or more easily adjustable restoration is appropriate. We explain the choice for your tooth before we start." },
      { question: "How long do inlays and onlays last?", answer: "Ceramic inlays and onlays are long-lasting restorations when they are bonded to a healthy tooth and looked after with normal brushing, flossing and regular check-ups. Avoid using the tooth to crack nuts or ice, and tell us if you grind your teeth so we can consider a night guard. Their lifespan depends more on your habits and gum health than on the material itself." },
    ],
    cta: {
      title: "Repair the Tooth, Keep the Tooth",
      text: "Book a consultation at our JLT clinic and we will show you on a digital scan whether an inlay or onlay is right for you.",
    },
    related: ["/restorative/overlays", "/general-preventive/fillings", "/crowns-bridges/same-day-crowns", "/crowns-bridges/porcelain-crowns"],
  },
  {
    slug: "overlays",
    category: "restorative",
    name: "Overlays (Table Tops)",
    h1: "Overlays (Table Tops) in Dubai",
    seoTitle: "Overlays & Table Tops in Dubai - Rebuild Worn Teeth",
    seoDescription:
      "Ceramic overlays (table tops) in Dubai JLT to rebuild worn back teeth, restore bite height and protect remaining enamel, with minimal or no drilling.",
    heroSubtitle:
      "Thin ceramic caps that rebuild the chewing surface of worn teeth and restore your bite height with little or no drilling.",
    intro: {
      heading: "Rebuilding worn teeth without cutting them down",
      paragraphs: [
        "An overlay, often called a table top, is a thin ceramic restoration that covers the whole chewing surface of a back tooth. Unlike a crown, it does not wrap around the sides of the tooth, and in most cases little or no drilling is needed because the tooth has already lost height through wear. The overlay is designed digitally, milled from lithium disilicate ceramic or zirconia, and bonded to the enamel. It restores the shape and height of the tooth, protects the enamel that remains, and gives you a surface that chews comfortably again.",
        "Tooth wear has many causes: grinding or clenching at night, acid erosion from reflux or fizzy drinks, or simply years of a heavy bite. As back teeth flatten, the bite closes down, the front teeth start to take more load and the face can look shorter. Because our clinic specialises in complex full-mouth rehabilitation, table tops are one of our most used tools: we often place them on several back teeth at once to re-establish the correct bite height, then rebuild the front teeth to match. For a single worn tooth, one overlay is often all that is needed.",
      ],
    },
    highlights: [
      { title: "Grinding and clenching (bruxism)", desc: "Flattened molars and premolars with exposed dentine from night-time grinding." },
      { title: "Acid erosion", desc: "Enamel dissolved by reflux or frequent acidic drinks, leaving cupped, sensitive chewing surfaces." },
      { title: "Loss of bite height", desc: "A bite that has collapsed as the back teeth wore down, overloading the front teeth." },
      { title: "Full-mouth rehabilitation", desc: "Table tops on the back teeth as the foundation of a complete reconstruction of the bite." },
      { title: "Protecting remaining enamel", desc: "Sealing worn surfaces before the damage reaches the nerve or the tooth cracks." },
    ],
    steps: [
      { title: "Assessment & bite analysis", description: "We examine the wear, look for its cause, take photographs and a digital scan of both jaws, and check how your teeth meet.", duration: "45–60 min" },
      { title: "Digital design & trial", description: "The new bite height and tooth shapes are planned on screen. For larger cases we may first fit a temporary mock-up so you can test the new height.", duration: "1–2 weeks" },
      { title: "Minimal preparation & scan", description: "Any sharp edges are smoothed and the enamel is cleaned. Most worn teeth need no drilling. A final scan is taken for milling.", duration: "30–60 min" },
      { title: "Bonding", description: "The milled ceramic overlays are checked for fit and bonded to the enamel one by one, then the bite is balanced.", duration: "1–3 hours depending on the number of teeth" },
      { title: "Night guard & review", description: "If you grind, a custom night guard is made to protect the new surfaces. We review the bite after a couple of weeks.", duration: "2 short visits" },
    ],
    benefits: [
      "Minimal or no drilling in most cases, so healthy enamel is preserved",
      "Digital scanning and CAD/CAM design of the whole bite, not one tooth at a time",
      "Milled from lithium disilicate ceramic or zirconia, chosen for your bite force",
      "A clinic that specialises in full-mouth rehabilitation, where table tops are used routinely",
      "Custom night guard planned into treatment for patients who grind",
    ],
    faqs: [
      { question: "What is the difference between an overlay and a crown?", answer: "A crown covers the whole tooth and requires it to be cut down on every side to make room. An overlay covers only the chewing surface and is bonded to enamel, so the sides of the tooth stay untouched. For teeth that have worn down rather than broken, an overlay replaces exactly what has been lost without removing what is still healthy." },
      { question: "Will my teeth need to be drilled?", answer: "Usually very little or not at all. Worn teeth have already lost height, so the space for the ceramic already exists. We smooth any sharp edges and clean the enamel so the bond is strong, but the aim is to add material, not remove it. If a tooth has an old filling or decay, that is dealt with first." },
      { question: "Why raise the bite, and will it feel strange?", answer: "When back teeth wear down, the jaw closes further than it should and the front teeth take the load. Restoring the lost height rebalances the bite. The new height feels unfamiliar for a few days to a couple of weeks, and for larger changes we test it first with a temporary mock-up so you know how it feels before any ceramic is bonded." },
      { question: "Do I need a night guard afterwards?", answer: "If grinding or clenching caused the wear, yes. Ceramic is strong, but the forces that flattened your natural teeth will act on the new surfaces too. A custom-made night guard spreads that load and protects both the overlays and your remaining teeth. We usually make it shortly after the overlays are fitted." },
      { question: "Are table tops part of a full-mouth reconstruction?", answer: "Very often. In a complex rehabilitation the back teeth are rebuilt first with overlays to set the correct bite height, and the front teeth are then restored with veneers or crowns to match. Planning all of this digitally before any treatment starts lets us show you the intended result and stage the work across visits." },
    ],
    cta: {
      title: "Worn Teeth Can Be Rebuilt",
      text: "Book an assessment at our JLT clinic and see, on your own digital scan, how table tops could restore your bite.",
    },
    related: ["/restorative/inlays-onlays", "/crowns-bridges/zirconia-crowns", "/crowns-bridges/porcelain-crowns", "/veneers"],
  },
];
