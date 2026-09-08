import type { SubService } from "./types";

// General & Preventive Dentistry sub-services. Copy written in-house; reviewed
// against the owner's rules in ./types.ts (no prices, no invented stats).

export const GENERAL_PREVENTIVE: SubService[] = [
  {
    slug: "check-ups",
    category: "general-preventive",
    name: "Dental Check-Ups",
    h1: "Dental Check-Ups in Dubai",
    seoTitle: "Dental Check-Up in Dubai - Exam, X-Rays & Advice",
    seoDescription:
      "Routine dental check-ups in Dubai JLT. A thorough examination, digital low-radiation X-rays when needed and clear advice on keeping your teeth healthy.",
    heroSubtitle:
      "A relaxed, thorough examination every six months so small problems are caught while they are still small.",
    intro: {
      heading: "The simplest way to avoid big dental problems",
      paragraphs: [
        "A dental check-up is a careful look at your whole mouth, not just your teeth. We examine every tooth for early decay, check existing fillings and crowns, assess your gums, look at your bite and jaw joints, and screen the soft tissues of your mouth for anything unusual. Where we need to see between or beneath the teeth, we take digital low-radiation X-rays in the clinic, so nothing is missed and nothing is guessed.",
        "We recommend a check-up every six months for most adults and children. Problems such as decay and gum inflammation rarely hurt at first, which is why they are often found late. Seen early, most can be treated simply and comfortably. If you would prefer not to come to the clinic, we also offer private at-home visits for check-ups, cleanings and fillings within Dubai.",
      ],
    },
    highlights: [
      { title: "New patients", desc: "A full baseline examination so we understand your mouth before any treatment." },
      { title: "Six-monthly reviews", desc: "Routine monitoring for adults and children with healthy mouths." },
      { title: "Something feels different", desc: "A tooth that is sensitive, a rough edge or gums that bleed when brushing." },
      { title: "Before other treatment", desc: "Whitening, veneers and orthodontics all start with a healthy, checked mouth." },
      { title: "Busy families", desc: "Book parents and children back to back in one visit." },
    ],
    steps: [
      { title: "Conversation & history", description: "We ask about your general health, medications, any concerns and what you would like from your smile.", duration: "5–10 min" },
      { title: "Examination", description: "Tooth-by-tooth check for decay and wear, gum measurements, bite assessment and a soft-tissue screen of your tongue, cheeks and palate.", duration: "15 min" },
      { title: "Digital X-rays if needed", description: "Low-radiation digital X-rays, or an OPG for a full-mouth overview, taken in the clinic and reviewed with you on screen.", duration: "5–10 min" },
      { title: "Findings & plan", description: "We explain what we found in plain language, show you the images and agree on any next steps, or simply see you again in six months.", duration: "10 min" },
    ],
    benefits: [
      "Digital low-radiation X-rays, OPG and CBCT available in the clinic",
      "Findings explained on screen in plain language",
      "Multilingual team: English, Arabic, Russian, Serbian and Italian",
      "No pressure: we only recommend treatment you actually need",
      "Private at-home check-ups available across Dubai",
    ],
    faqs: [
      { question: "How often should I have a dental check-up?", answer: "For most people, every six months. This interval lets us catch decay and gum problems while they are small and easy to treat. If you have a history of gum disease, many fillings, a dry mouth or diabetes, we may suggest coming more often. Children benefit from the same six-monthly rhythm." },
      { question: "Will I need X-rays at every visit?", answer: "No. We take X-rays only when the examination suggests we need to see between or beneath the teeth, or at intervals to monitor known areas. Our digital sensors use a very low radiation dose compared with older film, and images appear on screen immediately so we can go through them with you." },
      { question: "What happens if you find a problem?", answer: "We show you what we have found, explain your options and give you time to decide. Nothing is done on the spot without your agreement unless you are in pain and want it dealt with immediately. Most early problems need only a small filling or a cleaning." },
      { question: "Does a check-up include a cleaning?", answer: "The check-up itself is an examination. Many patients book a professional cleaning in the same appointment, which we are happy to arrange, so you leave with both a clear picture of your oral health and freshly cleaned teeth. If it has been a while since your last visit, we usually recommend doing both." },
      { question: "Can you come to my home for a check-up?", answer: "Yes. We offer private at-home visits across Dubai for check-ups, cleanings and simple fillings, using portable equipment. This suits patients with limited mobility, parents with young children and anyone who finds it hard to get to the clinic. Anything that needs X-rays or more complex care is best done at the clinic in JLT." },
    ],
    cta: {
      title: "Book Your Check-Up in JLT",
      text: "A thorough examination at our Jumeirah Lake Towers clinic, or at home if you prefer. Message us to choose a time.",
    },
    related: ["/general-preventive/cleanings", "/xray-opg", "/at-home", "/general-preventive/fillings"],
  },
  {
    slug: "cleanings",
    category: "general-preventive",
    name: "Professional Teeth Cleaning",
    h1: "Professional Teeth Cleaning in Dubai",
    seoTitle: "Professional Teeth Cleaning in Dubai - Scale & Polish",
    seoDescription:
      "Professional teeth cleaning in Dubai JLT. Gentle removal of plaque, tartar and surface stains with ultrasonic scaling and polishing to keep gums healthy.",
    heroSubtitle:
      "Gentle scaling and polishing that removes what brushing cannot and leaves your teeth smooth, clean and fresh.",
    intro: {
      heading: "Cleaner teeth, healthier gums, fresher breath",
      paragraphs: [
        "Even with excellent brushing and flossing, plaque hardens into tartar in the places a toothbrush cannot reach: between the teeth, along the gum line and behind the lower front teeth. Tartar is rough, holds bacteria and irritates the gums, and no amount of home care will remove it. A professional cleaning uses fine ultrasonic and hand instruments to lift it away, then polishes the enamel so plaque has a harder time sticking again.",
        "Most patients benefit from a cleaning every six months, often combined with their check-up. If your gums bleed when you brush, your breath is not as fresh as you would like, or you drink a lot of coffee or tea, a cleaning is usually the first step. We also provide private at-home cleanings across Dubai for patients who cannot easily come to the clinic.",
      ],
    },
    highlights: [
      { title: "Six-monthly maintenance", desc: "Routine plaque and tartar removal to keep gums healthy." },
      { title: "Bleeding or tender gums", desc: "Early gum inflammation (gingivitis) is usually reversed with a cleaning and better home care." },
      { title: "Surface stains", desc: "Coffee, tea, red wine and tobacco staining polished away." },
      { title: "Before whitening", desc: "Clean enamel lets whitening gel work evenly across every tooth." },
      { title: "Braces & aligners", desc: "Extra help keeping teeth clean around brackets and attachments." },
    ],
    steps: [
      { title: "Gum & plaque check", description: "We look at your gums, note any bleeding or deposits and check for sensitive areas before starting.", duration: "5 min" },
      { title: "Ultrasonic scaling", description: "A fine vibrating tip with a water spray breaks up tartar above and just below the gum line, without scratching the teeth.", duration: "15–20 min" },
      { title: "Hand scaling & flossing", description: "Small hand instruments finish the tight spaces between teeth and along the gum line.", duration: "10 min" },
      { title: "Polish & advice", description: "A gentle polishing paste removes stains and smooths the enamel. We then show you the brushing and flossing technique that suits your mouth.", duration: "10 min" },
    ],
    benefits: [
      "Ultrasonic scaling with hand finishing for a thorough, gentle result",
      "Numbing gel available for sensitive gums",
      "Personalised brushing and flossing advice, not generic leaflets",
      "Multilingual team who can explain everything in your language",
      "At-home cleaning visits available across Dubai",
    ],
    faqs: [
      { question: "Does a professional cleaning hurt?", answer: "For most people it is comfortable, with a feeling of vibration and water spray rather than pain. If your gums are inflamed they may be tender, and teeth with exposed roots can be sensitive to cold. Tell us and we can apply a numbing gel or adjust the technique. Any sensitivity settles within a day or two." },
      { question: "Does cleaning damage the enamel?", answer: "No. Ultrasonic and hand scalers are designed to remove tartar, which is much softer than enamel, and the polishing paste is very fine. Teeth can feel different afterwards simply because rough deposits are gone and you notice the smooth surfaces again. Nothing is taken from the tooth itself." },
      { question: "Why do my gums bleed when you clean them?", answer: "Bleeding is a sign of inflammation caused by plaque and tartar, not of damage from the cleaning. Once the deposits are removed and you brush and floss well at home, the gums tighten and the bleeding usually stops within a week or two. If it persists, we assess you for gum disease." },
      { question: "How often should I have my teeth cleaned?", answer: "Every six months suits most people and fits neatly with the check-up. If you build up tartar quickly, wear braces, smoke or have had gum disease, we may recommend every three to four months. We will suggest an interval based on what we see in your mouth, not a fixed rule." },
      { question: "Will cleaning whiten my teeth?", answer: "Cleaning removes surface stains, so teeth often look brighter afterwards, but it does not change the natural colour of the enamel. If you want a noticeably whiter shade, professional whitening after a cleaning is the effective route, and the clean surface helps the gel work evenly." },
    ],
    cta: {
      title: "Book a Professional Cleaning",
      text: "Freshly cleaned teeth and healthier gums in about 45 minutes at our JLT clinic. Message us to book a time.",
    },
    related: ["/general-preventive/check-ups", "/general-preventive/gum-care", "/whitening/in-office", "/at-home"],
  },
  {
    slug: "fillings",
    category: "general-preventive",
    name: "Tooth-Coloured Fillings",
    h1: "Tooth-Coloured Fillings in Dubai",
    seoTitle: "Tooth-Coloured Fillings in Dubai - Composite Resin",
    seoDescription:
      "Tooth-coloured composite fillings in Dubai JLT. Cavities and chips repaired in one visit with resin matched to your tooth, usually under local anaesthetic.",
    heroSubtitle:
      "Decay and small chips repaired in a single visit with composite resin matched to the shade of your own tooth.",
    intro: {
      heading: "Repairs that blend in with your natural teeth",
      paragraphs: [
        "A filling repairs a tooth after decay has been removed, or restores a small chip or worn edge. We use composite resin, a tooth-coloured material that is bonded directly to the tooth in layers and shaped to match its natural contours. Because it bonds to enamel and dentine, less healthy tooth needs to be removed than with older silver amalgam fillings, and the result is virtually invisible when you smile or talk.",
        "Most fillings are completed in one appointment under local anaesthetic, and you can eat normally once the numbness wears off. Where decay is found early at a check-up, the filling is small and quick. Larger cavities may be better served by an inlay, onlay or crown, and we will explain the options honestly. Simple fillings can also be done during our private at-home visits in Dubai.",
      ],
    },
    highlights: [
      { title: "Cavities", desc: "Decay found at a check-up or on an X-ray, before it reaches the nerve." },
      { title: "Chipped or worn edges", desc: "Small fractures and wear on front and back teeth." },
      { title: "Replacing old amalgam", desc: "Worn or leaking silver fillings replaced with a tooth-coloured alternative." },
      { title: "Sensitivity at the gum line", desc: "Exposed root surfaces or wear notches covered and protected." },
      { title: "Small shape corrections", desc: "Minor adjustments to the edges of front teeth with bonded composite." },
    ],
    steps: [
      { title: "Diagnosis & shade", description: "We confirm the extent of the decay, with a digital X-ray if needed, and choose a resin shade to match your tooth.", duration: "10 min" },
      { title: "Numbing & decay removal", description: "Local anaesthetic is given, decay is removed and the tooth is cleaned and shaped for bonding.", duration: "10–15 min" },
      { title: "Layered composite", description: "The tooth is isolated and kept dry, a bonding agent is applied and composite is built up in thin layers, each hardened with a blue light.", duration: "15–20 min" },
      { title: "Shaping & polish", description: "The filling is shaped to your bite, checked for high spots and polished so it feels like part of the tooth.", duration: "10 min" },
    ],
    benefits: [
      "Composite resin matched to the shade of your natural tooth",
      "Bonded technique preserves more healthy tooth structure",
      "Completed in a single visit for most cavities",
      "Digital low-radiation X-rays in the clinic to see the full extent of decay",
      "Simple fillings available during private at-home visits",
    ],
    faqs: [
      { question: "Will the filling hurt?", answer: "The tooth is numbed with local anaesthetic before we start, so you should feel pressure and vibration but not pain. Afterwards the tooth may be a little sensitive to cold or pressure for a few days while it settles. If sensitivity lasts longer or the filling feels high when you bite, we adjust it." },
      { question: "How long do composite fillings last?", answer: "Many years with good care, though this depends on the size of the filling, where it is in the mouth and how you look after it. Small fillings in low-stress areas last longest. Regular check-ups let us spot any wear or leakage early and repair rather than replace the whole filling." },
      { question: "Can I eat straight after a filling?", answer: "Composite is fully hardened by the curing light before you leave, so the filling itself is ready to use. We suggest waiting until the numbness has worn off, usually two to three hours, so you do not accidentally bite your cheek, lip or tongue while you cannot feel them." },
      { question: "Should I replace my old silver fillings?", answer: "Not necessarily. Sound amalgam fillings can stay in place. We recommend replacement when a filling is cracked, leaking, has decay underneath or when you want a tooth-coloured result for cosmetic reasons. We assess each filling individually rather than suggesting wholesale replacement." },
      { question: "What if the cavity is too big for a filling?", answer: "When a large part of the tooth is missing, a filling may not be strong enough on its own. In that case we may recommend a ceramic inlay or onlay, which is made in a lab to fit the tooth precisely, or a crown for heavily broken-down teeth. We explain the options and the reasoning before anything is decided." },
    ],
    cta: {
      title: "Fix That Tooth in One Visit",
      text: "Book a filling appointment at our JLT clinic and leave with a repaired tooth that looks like it was never damaged.",
    },
    related: ["/general-preventive/check-ups", "/restorative/inlays-onlays", "/xray-opg", "/at-home"],
  },
  {
    slug: "gum-care",
    category: "general-preventive",
    name: "Gum Disease Treatment",
    h1: "Gum Disease Treatment in Dubai",
    seoTitle: "Gum Disease Treatment in Dubai - Scaling & Root Planing",
    seoDescription:
      "Gum disease treatment in Dubai JLT. Deep cleaning (scaling and root planing) and periodontal maintenance to stop bleeding gums and protect your teeth.",
    heroSubtitle:
      "Deep cleaning and ongoing periodontal care to stop bleeding gums, bad breath and bone loss around your teeth.",
    intro: {
      heading: "Healthy gums are the foundation of every smile",
      paragraphs: [
        "Gum disease begins as gingivitis: red, swollen gums that bleed when you brush. At this stage it is fully reversible with a professional cleaning and better home care. Left untreated it can progress to periodontitis, where bacteria below the gum line cause the bone that supports the teeth to shrink. Teeth may become loose or drift, and eventually can be lost. Because it is usually painless, many people do not know they have it.",
        "Treatment starts with a full gum assessment, measuring the pockets around each tooth and taking digital X-rays to check bone levels. Deep cleaning, known as scaling and root planing, removes tartar and bacteria from beneath the gums so the tissue can heal. Afterwards, periodontal maintenance visits every three to four months keep the disease under control. Periodontitis cannot be reversed, but it can be stopped.",
      ],
    },
    highlights: [
      { title: "Bleeding or swollen gums", desc: "The earliest sign, often noticed when brushing or flossing." },
      { title: "Persistent bad breath", desc: "Bacteria trapped below the gum line are a common cause." },
      { title: "Receding gums", desc: "Teeth that look longer or feel sensitive at the gum line." },
      { title: "Loose or shifting teeth", desc: "A sign that the supporting bone may already be affected." },
      { title: "Diabetes or smoking", desc: "Both raise the risk of gum disease and slow healing." },
    ],
    steps: [
      { title: "Periodontal assessment", description: "We measure the gum pocket depth around every tooth, record bleeding and mobility, and take digital X-rays to see the bone level.", duration: "30 min" },
      { title: "Scaling & root planing", description: "Under local anaesthetic, tartar and bacterial deposits are removed from the root surfaces below the gum, usually treating one half or one quarter of the mouth per visit.", duration: "45–60 min per visit" },
      { title: "Healing & review", description: "After four to six weeks we re-measure the pockets to see how the gums have responded and identify any areas that need more attention.", duration: "20 min" },
      { title: "Periodontal maintenance", description: "Ongoing professional cleanings every three to four months to keep bacteria below the level that causes damage.", duration: "45 min" },
    ],
    benefits: [
      "Full pocket charting and digital X-rays before any treatment",
      "Scaling and root planing under local anaesthetic for comfort",
      "Structured periodontal maintenance programme after treatment",
      "Honest guidance on smoking, diabetes and other factors that affect healing",
      "Surgical gum treatment available in the same clinic when deep cleaning alone is not enough",
    ],
    faqs: [
      { question: "Is gum disease treatment painful?", answer: "Scaling and root planing is done under local anaesthetic, so the treatment itself should be comfortable. Afterwards, gums may feel tender and teeth can be sensitive to cold for a week or two as the tissue heals and tightens into a healthier position. Over-the-counter pain relief is usually enough." },
      { question: "Can gum disease be cured?", answer: "Gingivitis, the early stage, can be fully reversed. Periodontitis, where bone has been lost, cannot be cured in the sense of regrowing all the bone, but it can be halted and kept stable for life with treatment and regular maintenance. The earlier it is caught, the more support is preserved around your teeth." },
      { question: "Why do I need maintenance visits every three to four months?", answer: "Bacteria recolonise the gum pockets within about three months of a deep cleaning. Regular maintenance removes them before they can cause more damage. Patients who keep to their maintenance schedule keep their teeth far more reliably than those who return only when something hurts or feels loose." },
      { question: "Will my gums grow back after treatment?", answer: "Gum tissue that has receded because of bone loss generally does not regrow, although healthy gums become firmer and stop bleeding. In some cases grafting or regenerative procedures can rebuild lost tissue, and we will discuss this if it applies to you. The main aim of treatment is to stop further loss." },
      { question: "Does gum disease affect the rest of my health?", answer: "Research links periodontitis with diabetes control, heart disease and complications in pregnancy. The exact relationships are still being studied, but inflammation in the mouth is not isolated from the rest of the body. Treating gum disease is worthwhile for your teeth and is likely to help your general health too." },
    ],
    cta: {
      title: "Stop Bleeding Gums Before They Cost You Teeth",
      text: "Book a periodontal assessment at our JLT clinic and find out exactly where your gums stand.",
    },
    related: ["/general-preventive/cleanings", "/general-preventive/check-ups", "/xray-opg", "/emergency"],
  },
  {
    slug: "kids-dentistry",
    category: "general-preventive",
    name: "Children's Dentistry",
    h1: "Children's Dentistry in Dubai",
    seoTitle: "Children's Dentist in Dubai - Gentle Kids Dentistry in JLT",
    seoDescription:
      "Children's dentistry in Dubai JLT. Gentle first visits, check-ups, fluoride varnish, fissure sealants and fillings for kids, with a patient multilingual team.",
    heroSubtitle:
      "Gentle, unhurried dental care that helps children feel safe in the chair and grow up with healthy teeth.",
    intro: {
      heading: "Happy first visits build a lifetime of healthy teeth",
      paragraphs: [
        "We recommend a child's first dental visit by their first birthday, or when the first tooth appears. Early visits are short and relaxed: your child sits on your lap or in the chair, we count their teeth, look at how they are coming through and talk with you about brushing, bottles, dummies and snacks. The goal is for the clinic to feel familiar long before any treatment is ever needed.",
        "As children grow, check-ups every six months let us spot decay early, apply fluoride varnish to strengthen enamel and place fissure sealants on the permanent molars when they erupt. If a filling is needed, we use gentle behaviour management, plain explanations and plenty of praise so children stay calm and in control. Our team speaks English, Arabic, Russian, Serbian and Italian, which helps many families feel at ease.",
      ],
    },
    highlights: [
      { title: "First visit (age 1 or first tooth)", desc: "A gentle introduction to the clinic and practical advice for parents." },
      { title: "Six-monthly check-ups", desc: "Monitoring growth, tooth eruption and early signs of decay." },
      { title: "Fluoride varnish & sealants", desc: "Simple, painless protection against cavities." },
      { title: "Fillings for baby & adult teeth", desc: "Tooth-coloured repairs with gentle numbing and distraction." },
      { title: "Early loss of a baby tooth", desc: "Space maintainers to hold room for the adult tooth coming through." },
    ],
    steps: [
      { title: "Welcome & getting comfortable", description: "We introduce the room, the chair and the little mirror, and let your child set the pace.", duration: "5–10 min" },
      { title: "Examination", description: "We count and check every tooth, look at the gums and bite, and take a small digital X-ray only when there is a good reason.", duration: "10–15 min" },
      { title: "Cleaning & fluoride varnish", description: "A gentle polish followed by a thin coat of fluoride varnish painted onto the teeth.", duration: "10 min" },
      { title: "Parent chat & plan", description: "We explain what we saw, demonstrate brushing for your child's age and agree any treatment or the next check-up date.", duration: "10 min" },
    ],
    benefits: [
      "First visits kept short, playful and pressure-free",
      "Gentle behaviour management: tell, show, then do",
      "Fluoride varnish and fissure sealants to prevent cavities before they start",
      "Digital low-radiation X-rays used only when there is a clear need",
      "Multilingual team: English, Arabic, Russian, Serbian and Italian",
    ],
    faqs: [
      { question: "When should my child first see a dentist?", answer: "By their first birthday, or within six months of the first tooth appearing, whichever comes first. This may seem early, but it lets us check that teeth are coming through normally, give you advice on bottles, feeding and brushing, and helps your child see the dentist as a normal, friendly part of life." },
      { question: "Do baby teeth really need fillings if they fall out anyway?", answer: "Yes. Baby molars stay in place until around age ten to twelve. Untreated decay causes pain, infection and difficulty eating, and can damage the adult tooth developing underneath. Losing a baby tooth early can also let neighbouring teeth drift into the gap, which is why space maintainers are sometimes needed." },
      { question: "What if my child is scared of the dentist?", answer: "That is completely normal, and we plan for it. We take things slowly, explain each step in child-friendly words, show the instruments before using them and stop whenever your child needs a break. Many anxious children relax after a visit or two where nothing uncomfortable happens. Parents are welcome in the room." },
      { question: "Is fluoride varnish safe for young children?", answer: "Yes. Fluoride varnish is painted onto the teeth in a very small amount and sets on contact with saliva, so very little is swallowed. It is a standard preventive measure for children from the time their first teeth appear, and it is one of the most effective ways to reduce cavities in childhood." },
      { question: "How can I protect my child's teeth at home?", answer: "Brush twice a day with a fluoride toothpaste appropriate for their age, with an adult helping until around age seven or eight. Limit sugary drinks and snacks to mealtimes, avoid putting juice or milk in a bedtime bottle, and keep up six-monthly visits so we can catch problems while they are small." },
    ],
    cta: {
      title: "Book Your Child's Visit",
      text: "A gentle, unhurried appointment at our JLT clinic that sets your child up for a lifetime of healthy smiles.",
    },
    related: ["/general-preventive/sealants", "/general-preventive/check-ups", "/orthodontics/space-maintainers", "/general-preventive/fillings"],
  },
  {
    slug: "sealants",
    category: "general-preventive",
    name: "Fluoride & Sealants",
    h1: "Fluoride Treatment & Fissure Sealants in Dubai",
    seoTitle: "Fluoride & Fissure Sealants in Dubai - Cavity Prevention",
    seoDescription:
      "Fluoride varnish and fissure sealants in Dubai JLT. Quick, painless protection against cavities for children's molars and adults prone to decay, in one visit.",
    heroSubtitle:
      "Two quick, painless treatments that make teeth more resistant to decay, for children and adults alike.",
    intro: {
      heading: "Preventing cavities is easier than fixing them",
      paragraphs: [
        "Fluoride varnish and fissure sealants are the two most effective preventive treatments we offer, and both take only minutes. Fluoride varnish is a concentrated coating painted onto the teeth. It strengthens enamel, helps early soft spots to re-harden and makes teeth more resistant to acid from sugar and bacteria. It is used mainly for children, but also for adults with sensitive teeth, a dry mouth, exposed roots or a history of frequent cavities.",
        "Fissure sealants tackle a different problem. The chewing surfaces of back teeth have deep grooves that toothbrush bristles cannot reach, and this is where most childhood cavities begin. A sealant is a thin protective coating flowed into these grooves and hardened with a light, sealing them off from food and bacteria. We usually recommend sealing the permanent molars soon after they erupt, around ages six and twelve.",
      ],
    },
    highlights: [
      { title: "Newly erupted permanent molars", desc: "The first (around age 6) and second (around age 12) adult molars, sealed soon after they appear." },
      { title: "Children with early decay", desc: "Fluoride varnish at each check-up to re-harden early enamel changes." },
      { title: "Deep grooves in adult teeth", desc: "Adults with pitted molars that trap food can benefit from sealants too." },
      { title: "Sensitive or exposed roots", desc: "Fluoride varnish reduces sensitivity along receding gum lines." },
      { title: "Dry mouth or high sugar intake", desc: "Extra protection when saliva or diet leaves teeth at higher risk." },
    ],
    steps: [
      { title: "Examination", description: "We check the teeth to be treated and confirm the grooves are free of decay, with a small X-ray only if needed.", duration: "5–10 min" },
      { title: "Cleaning & drying", description: "The chewing surface is cleaned, lightly conditioned with a gel and rinsed, then kept dry.", duration: "5 min" },
      { title: "Sealant placement", description: "The liquid sealant is flowed into the grooves and set hard with a blue light. We check the bite so it does not feel high.", duration: "5 min per tooth" },
      { title: "Fluoride varnish", description: "Varnish is painted over the teeth and sets on contact with saliva. Soft food is fine straight away and normal brushing resumes the next morning.", duration: "5 min" },
    ],
    benefits: [
      "Painless and needle-free, with no drilling involved",
      "Usually completed within a routine check-up appointment",
      "Sealants checked at every six-monthly visit and touched up if needed",
      "Fluoride varnish suitable from the first teeth through to adulthood",
      "Advice tailored to your child's age, diet and brushing habits",
    ],
    faqs: [
      { question: "Are fissure sealants necessary if my child brushes well?", answer: "Brushing is essential, but toothbrush bristles are too wide to reach the bottom of the deep grooves on molars. Sealants physically fill those grooves so food and bacteria cannot lodge there. They are a supplement to good brushing, not a replacement, and they protect the most cavity-prone surfaces during the years children are still learning to brush well." },
      { question: "How long do sealants last?", answer: "Several years in most cases. We check them at every six-monthly visit, and if a sealant has chipped or worn we can simply add more material. A partly lost sealant does not harm the tooth, but the exposed groove is no longer protected, so regular checks matter." },
      { question: "Is fluoride varnish safe?", answer: "Yes, when applied professionally. Only a small amount is used, it sets quickly on the teeth and very little is swallowed. It has been used in children's dentistry for decades. We ask your child not to eat hard or hot food for a few hours and to skip brushing until the next morning so the fluoride has time to work." },
      { question: "Can adults have sealants and fluoride?", answer: "Yes. Adults with deep grooves in their molars, frequent cavities, gum recession, dry mouth from medication or teeth that are sensitive to cold often benefit. We will suggest it when we see a clear reason at your check-up rather than offering it as a routine add-on." },
      { question: "Does placing a sealant involve drilling?", answer: "No. The tooth surface is cleaned and lightly conditioned with a gel, then the sealant is flowed in and hardened with a light. Nothing is removed from the tooth. If we find early decay in a groove, we may clean it out first with a very small preparation before sealing, and we will tell you if that applies." },
    ],
    cta: {
      title: "Protect Your Child's Teeth Before Cavities Start",
      text: "Ask about fluoride varnish and fissure sealants at your next check-up at our JLT clinic.",
    },
    related: ["/general-preventive/kids-dentistry", "/general-preventive/check-ups", "/general-preventive/fillings", "/general-preventive/cleanings"],
  },
];
