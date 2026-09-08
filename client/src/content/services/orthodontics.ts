import type { SubService } from "./types";

// Orthodontics sub-services. Copy written in-house; reviewed against the
// owner's rules in ./types.ts (no prices, no invented stats, no doctor names,
// no unverifiable provider-tier claims).

export const ORTHODONTICS: SubService[] = [
  {
    slug: "invisalign",
    category: "orthodontics",
    name: "Invisalign",
    h1: "Invisalign in Dubai",
    seoTitle: "Invisalign in Dubai - Clear Aligner Treatment in JLT",
    seoDescription:
      "Invisalign clear aligners in Dubai JLT. Digital scan, 3D treatment preview and orthodontist-led care to straighten your teeth discreetly in 6–18 months.",
    heroSubtitle:
      "Straighten your teeth with removable, nearly invisible Invisalign aligners planned digitally by our orthodontist.",
    intro: {
      heading: "The clear aligner brand most patients ask for by name",
      paragraphs: [
        "Invisalign is a system of clear, removable aligners made from a smooth, flexible plastic. Each aligner is worn for about one to two weeks and moves your teeth a small, planned amount before you switch to the next one. Because the aligners are custom-made from a digital scan of your mouth, they fit closely and are hard to notice in conversation. You take them out to eat, brush and floss, so there are no food restrictions and cleaning your teeth stays simple.",
        "At our JLT clinic your Invisalign journey starts with a digital intraoral scan instead of messy impression trays. Our orthodontist, who holds a Master's degree and a PhD in orthodontics, plans every tooth movement on screen and shows you a preview of the expected result before you commit. Small tooth-coloured attachments may be bonded to some teeth to help the aligners grip, and a short refinement stage at the end fine-tunes the final position. Most treatments take between six and eighteen months.",
      ],
    },
    highlights: [
      { title: "Crowded or overlapping teeth", desc: "Front teeth that twist or overlap because there is not quite enough room." },
      { title: "Gaps between teeth", desc: "Spacing between the front teeth or where a tooth is small or missing." },
      { title: "Mild to moderate bite problems", desc: "Overbites, small crossbites and open bites caused by tooth position." },
      { title: "Adults and teens who want discretion", desc: "Nearly invisible in meetings, photographs and daily life." },
      { title: "Teeth that have moved after braces", desc: "Bringing back a result that drifted when retainers were forgotten." },
    ],
    steps: [
      { title: "Consultation & digital scan", description: "We examine your teeth, gums and bite, take an intraoral scan and X-rays, and confirm that Invisalign suits your case.", duration: "30–40 min" },
      { title: "Treatment plan & preview", description: "Your orthodontist maps every movement on screen. You see a simulation of the expected result and approve the plan before anything is made.", duration: "1–2 weeks" },
      { title: "Fitting & attachments", description: "Your first aligners are fitted, any attachments are bonded, and we show you how to insert, remove and clean them.", duration: "45–60 min" },
      { title: "Aligner changes & reviews", description: "You change aligners at home every one to two weeks and visit us every six to ten weeks so we can check progress against the plan.", duration: "6–18 months" },
      { title: "Refinements & retainers", description: "A final scan confirms the result. If needed, a short refinement series fine-tunes it, then retainers are made to hold your new smile.", duration: "2–4 weeks" },
    ],
    benefits: [
      "Planned and supervised by an orthodontist with a Master's degree and PhD in orthodontics",
      "Digital intraoral scan instead of impression trays",
      "3D preview of the expected result before you start",
      "Progress reviewed in person at our JLT clinic, not by app alone",
      "Whitening and veneers available afterwards for a complete smile makeover",
    ],
    faqs: [
      { question: "How many hours a day do I need to wear Invisalign?", answer: "For Invisalign to work as planned, the aligners need to be in your mouth for 20 to 22 hours every day. In practice that means you take them out only to eat, drink anything other than water, and brush. Wearing them less slows treatment and can make the next aligner feel tight or not fit properly. Most patients find the routine becomes automatic within the first week or two." },
      { question: "Does Invisalign hurt?", answer: "You will feel pressure for a day or two each time you move to a new aligner. That is the sign the teeth are moving, and it usually fades quickly. It is generally milder than the soreness after a braces adjustment, and there are no wires or brackets to rub against your cheeks. A simple painkiller on the first evening is normally all that is needed." },
      { question: "What are the attachments on my teeth?", answer: "Attachments are small bumps of tooth-coloured composite bonded to certain teeth. They give the aligner something to push against so that rotations and vertical movements happen as planned. Not everyone needs them, and where possible we place them on teeth that are less visible. They are polished off at the end of treatment without damaging the enamel." },
      { question: "What is a refinement?", answer: "Teeth do not always follow the digital plan exactly. When the first series of aligners is finished, we scan again and compare the result with the original plan. If some teeth need a little more movement, a short extra set of aligners, called a refinement, is made to finish the job. Refinements are a normal part of Invisalign treatment rather than a sign that something went wrong." },
      { question: "Will I need retainers afterwards?", answer: "Yes. Teeth have a natural tendency to drift back towards their old positions, so retainers are essential after any orthodontic treatment. We usually provide clear removable retainers that look much like your last aligner, sometimes combined with a thin fixed wire behind the front teeth. Full-time wear for the first few months is followed by night-time wear for as long as you want your teeth to stay straight." },
    ],
    cta: {
      title: "Start Your Invisalign Journey in JLT",
      text: "Book a consultation and digital scan at our JLT clinic to see a preview of your new smile before you begin.",
    },
    related: ["/orthodontics/clear-aligners", "/orthodontics/retainers", "/whitening/laser", "/veneers"],
  },
  {
    slug: "clear-aligners",
    category: "orthodontics",
    name: "Clear Aligners",
    h1: "Clear Aligners in Dubai",
    seoTitle: "Clear Aligners in Dubai - Are They Right for You?",
    seoDescription:
      "Clear aligner treatment in Dubai JLT explained: how aligners move teeth, who they suit, and how they compare with braces. Orthodontist-led planning and care.",
    heroSubtitle:
      "Understand how clear aligners work, who they are suitable for, and whether they are the right choice for your teeth.",
    intro: {
      heading: "Straighter teeth without anyone noticing you are in treatment",
      paragraphs: [
        "Clear aligners are thin, transparent trays that fit snugly over your teeth and move them gradually into a better position. Instead of a single appliance adjusted over months, you receive a series of aligners, each slightly different from the last, and change them at home on a schedule set by your orthodontist. Invisalign is the best-known brand, but the principle is the same across systems: precise digital planning, controlled tooth movement, and an appliance you can remove for meals and cleaning.",
        "Aligners are not right for everyone, and an honest assessment matters more than the brand. They work very well for crowding, spacing and mild to moderate bite issues, and they depend on you wearing them for 20 to 22 hours a day. Severe crowding, large jaw discrepancies or teeth that need to be moved a long way are often better treated with braces. At our JLT clinic we take a digital scan and X-rays, then explain clearly whether aligners, braces or a combination will give you the best result.",
      ],
    },
    highlights: [
      { title: "Working professionals", desc: "Adults who meet clients every day and want treatment that does not show." },
      { title: "Teenagers in sport or music", desc: "Removable trays are easier to manage with mouthguards and wind instruments." },
      { title: "Mild to moderate crowding and gaps", desc: "The cases where aligners are most predictable." },
      { title: "Small bite corrections", desc: "Overbites and crossbites that stem from tooth position rather than jaw size." },
      { title: "Frequent travellers", desc: "Several aligners are issued at a time, so fewer clinic visits than braces." },
    ],
    steps: [
      { title: "Assessment & suitability check", description: "We scan your teeth, take OPG and cephalometric X-rays in-clinic and discuss openly whether aligners or braces suit your case.", duration: "30–40 min" },
      { title: "Digital planning", description: "Your orthodontist designs the tooth movements stage by stage and shows you the planned end result before the aligners are made.", duration: "1–2 weeks" },
      { title: "Delivery & instructions", description: "We fit your first aligners, bond any attachments and explain wear time, cleaning and what to expect in the first days.", duration: "30–45 min" },
      { title: "Home wear & reviews", description: "You change trays on schedule and come in every six to ten weeks so we can confirm the teeth are tracking as planned.", duration: "6–18 months" },
      { title: "Finishing & retention", description: "Any final refinements are completed, attachments are polished off and retainers are fitted the same week.", duration: "2–4 weeks" },
    ],
    benefits: [
      "Honest advice on aligners versus braces before you commit",
      "Every case planned by an orthodontist with a Master's degree and PhD in orthodontics",
      "Digital intraoral scanning, so no impression trays",
      "OPG and cephalometric X-rays taken in-clinic during your assessment",
      "Preview of the planned result shown before treatment starts",
    ],
    faqs: [
      { question: "How are clear aligners different from braces?", answer: "Braces are fixed to your teeth and adjusted by the orthodontist at each visit; aligners are removable and you change them yourself at home. Aligners are almost invisible and easier to clean around, but they only work while they are in your mouth. Braces do not rely on your discipline and can handle more complex movements. Both straighten teeth effectively when used for the right case." },
      { question: "Can I eat and drink with aligners in?", answer: "Only plain water. Food can crack or stain the trays, and sugary or acidic drinks get trapped between the aligner and your teeth, raising the risk of decay. Take the aligners out for meals and drinks, brush or at least rinse before putting them back, and store them in their case rather than a napkin, which is how most aligners get lost." },
      { question: "Will aligners affect my speech?", answer: "Some people notice a slight lisp for the first day or two while the tongue gets used to the trays. It almost always disappears within a week. Reading aloud for a few minutes speeds up the adjustment. If a particular edge feels sharp or is catching your tongue, we can smooth it at the clinic in a few minutes." },
      { question: "Are clear aligners suitable for teenagers?", answer: "Yes, provided the teenager is motivated to wear them for 20 to 22 hours a day. Systems designed for teens often include small wear indicators that fade with use, so parents and the orthodontist can see whether the trays are being worn enough. If we have doubts about compliance, we will say so and may suggest braces instead, because an aligner sitting in a pocket does nothing." },
      { question: "What happens if I lose or break an aligner?", answer: "Contact us the same day. Depending on where you are in the sequence, we may ask you to go back to the previous aligner or move on to the next one early so your teeth do not drift while a replacement is made. Never leave a gap of several days with no aligner in, and keep your previous set until we tell you it is safe to discard it." },
    ],
    cta: {
      title: "Find Out If Aligners Are Right for You",
      text: "Book an orthodontic assessment at our JLT clinic and get a clear answer on aligners, braces or both.",
    },
    related: ["/orthodontics/invisalign", "/orthodontics/metal-braces", "/orthodontics/retainers", "/xray-opg"],
  },
  {
    slug: "metal-braces",
    category: "orthodontics",
    name: "Metal Braces",
    h1: "Metal Braces in Dubai",
    seoTitle: "Metal Braces in Dubai - Reliable Fixed Orthodontics",
    seoDescription:
      "Traditional metal braces in Dubai JLT for children, teens and adults. Suitable for all cases including severe crowding, with orthodontist-led adjustments.",
    heroSubtitle:
      "The most versatile way to straighten teeth, handling everything from mild crowding to complex bite problems.",
    intro: {
      heading: "Proven, precise and suitable for every kind of case",
      paragraphs: [
        "Metal braces are small stainless steel brackets bonded to each tooth and connected by a thin wire. The wire is gently tightened or replaced at regular visits, applying steady pressure that moves the teeth into alignment. The design has been refined for decades: today's brackets are smaller and smoother than the ones many parents remember, and modern wires deliver lighter, more constant forces. Because the orthodontist controls every movement directly, metal braces can correct problems that removable appliances struggle with.",
        "They remain the first choice for severe crowding, large gaps, rotated teeth, impacted canines and significant bite problems, and they do not depend on remembering to wear anything. Treatment typically takes 18 to 24 months, with adjustment visits every four to eight weeks. At our JLT clinic every case is planned by an orthodontist using digital scans and in-clinic X-rays, and you see a simulation of the planned result before the first bracket is placed. Children, teenagers and adults are all treated.",
      ],
    },
    highlights: [
      { title: "Severe crowding", desc: "Teeth that overlap heavily or sit far outside the arch." },
      { title: "Complex bite problems", desc: "Deep overbites, underbites and crossbites that need firm, continuous control." },
      { title: "Children and teenagers", desc: "Reliable results without depending on a young patient to wear an appliance." },
      { title: "Impacted or rotated teeth", desc: "Canines stuck in the gum or teeth turned far out of position." },
      { title: "Nothing to remember", desc: "Braces work around the clock, whatever the day brings." },
    ],
    steps: [
      { title: "Consultation, scan & X-rays", description: "We examine your bite, take a digital scan and in-clinic OPG and cephalometric X-rays, and discuss all suitable options.", duration: "45–60 min" },
      { title: "Treatment plan & simulation", description: "Your orthodontist plans the tooth movements and shows you the expected result before treatment starts.", duration: "1–2 weeks" },
      { title: "Bonding the braces", description: "Brackets are bonded to each tooth and the first wire is fitted. We explain cleaning, food and how to handle sore spots.", duration: "60–90 min" },
      { title: "Adjustment visits", description: "The wire is changed or tightened and elastics adjusted at each visit as the teeth move through the plan.", duration: "Every 4–8 weeks for 18–24 months" },
      { title: "Removal & retainers", description: "Brackets come off, the teeth are polished and retainers are fitted to keep the result.", duration: "45–60 min" },
    ],
    benefits: [
      "Effective for every type of case, including severe crowding and bite problems",
      "Planned and adjusted by an orthodontist with a Master's degree and PhD in orthodontics",
      "OPG, cephalometric and CBCT imaging available in-clinic, no separate referral",
      "Digital scan and treatment simulation before bonding",
      "Coloured or neutral elastic ties to suit your taste",
    ],
    faqs: [
      { question: "Do braces hurt?", answer: "Having braces fitted is not painful, but your teeth will feel tender for three to five days afterwards and for a day or two after each adjustment. Soft food and an over-the-counter painkiller are usually enough. The brackets can rub the inside of your lips at first; orthodontic wax covers any sharp spots until your mouth adapts, which normally takes a week or two." },
      { question: "What can I not eat with braces?", answer: "Avoid anything very hard, sticky or chewy: nuts, hard sweets, popcorn, toffee, chewing gum and ice. Cut apples, carrots and crusty bread into small pieces rather than biting into them. These foods bend wires and knock brackets off, which means extra visits and slower progress. Everything else is fine, and most patients adjust their habits within the first few weeks." },
      { question: "How do I keep my teeth clean with braces?", answer: "Brush after every meal, angling the brush above and below each bracket, and use a small interdental brush to clean under the wire. Floss threaders or a water flosser make flossing manageable. Good cleaning matters because plaque left around brackets can leave permanent white marks on the enamel once the braces come off. We check your hygiene at every adjustment visit and recommend professional cleanings during treatment." },
      { question: "What is the best age for braces?", answer: "There is no single best age. We like to see children around age seven for a first orthodontic check, because some jaw and bite problems are easier to guide while the child is still growing. Most full treatments start once the permanent teeth are through, usually between 11 and 14. Adults can have braces at any age as long as the teeth and gums are healthy." },
      { question: "What if a bracket comes loose or a wire pokes?", answer: "It happens, and it is rarely an emergency. Press orthodontic wax over the loose bracket or the end of the wire to protect your cheek, and call us so we can fit you in for a quick repair. If a wire is long enough to reach, you can gently bend it away from the cheek with the rubber end of a pencil. Try not to leave a broken brace unrepaired for more than a week or two, because it slows your progress." },
    ],
    cta: {
      title: "Book a Braces Consultation in JLT",
      text: "Bring the whole family: we assess children, teens and adults and explain every option before you decide.",
    },
    related: ["/orthodontics/ceramic-braces", "/orthodontics/bite-correction", "/orthodontics/retainers", "/general-preventive/kids-dentistry"],
  },
  {
    slug: "ceramic-braces",
    category: "orthodontics",
    name: "Ceramic Braces",
    h1: "Ceramic Braces in Dubai",
    seoTitle: "Ceramic Braces in Dubai - Discreet Tooth-Coloured Braces",
    seoDescription:
      "Ceramic braces in Dubai JLT: tooth-coloured brackets that blend with your smile while giving the control of fixed braces. Planned by our orthodontist.",
    heroSubtitle:
      "Fixed braces with clear or tooth-coloured brackets that blend in, for patients who want results with less visibility.",
    intro: {
      heading: "The control of fixed braces, with far less metal on show",
      paragraphs: [
        "Ceramic braces work exactly like metal braces: brackets are bonded to each tooth, a wire runs through them, and the orthodontist adjusts the system every few weeks to guide the teeth into position. The difference is the material. Ceramic brackets are made from a translucent or tooth-coloured material that takes on the shade of the tooth behind it, so from a normal speaking distance the braces are much less noticeable. A frosted or white-coated wire can reduce the visible metal even further.",
        "They suit adults and older teenagers who need the reliability of fixed braces, perhaps because their case is too complex for aligners, but who would rather not have a mouth full of metal at work or in photographs. Ceramic brackets are a little more brittle than steel and slightly bulkier, and the clear elastic ties that hold the wire can pick up stains from coffee, tea or curry between visits. We explain these trade-offs honestly at your consultation at our JLT clinic and, if it makes sense, can combine ceramic brackets on the front teeth with metal ones at the back.",
      ],
    },
    highlights: [
      { title: "Adults in client-facing roles", desc: "Fixed-brace results without the obvious metal look in meetings." },
      { title: "Cases too complex for aligners", desc: "Severe crowding or bite problems that still need the control of a wire." },
      { title: "Older teenagers", desc: "A discreet option once the permanent teeth are through." },
      { title: "Front teeth in focus", desc: "Ceramic brackets on the visible teeth, metal at the back where nobody sees." },
      { title: "Patients who prefer nothing removable", desc: "No trays to remember, lose or leave in a pocket." },
    ],
    steps: [
      { title: "Consultation, scan & X-rays", description: "We assess your bite with a digital scan and in-clinic X-rays and confirm that ceramic brackets suit your case.", duration: "45–60 min" },
      { title: "Plan & bracket choice", description: "Your orthodontist plans the movements, shows you the simulated result and matches bracket shade to your teeth.", duration: "1–2 weeks" },
      { title: "Bonding", description: "Ceramic brackets are bonded and the first wire fitted. We go through care, food and cleaning.", duration: "60–90 min" },
      { title: "Adjustments", description: "Wires and elastic ties are changed at each visit; stained ties are simply replaced.", duration: "Every 4–8 weeks for 18–24 months" },
      { title: "Removal, polish & retainers", description: "Brackets are removed carefully, the enamel polished and retainers fitted.", duration: "45–60 min" },
    ],
    benefits: [
      "Brackets matched to your tooth shade so they blend in",
      "The same precise control and treatment range as metal braces",
      "Planned by an orthodontist with a Master's degree and PhD in orthodontics",
      "Digital scan and simulation shown before bonding",
      "Whitening available once the braces come off, for an even brighter finish",
    ],
    faqs: [
      { question: "Are ceramic braces as effective as metal braces?", answer: "Yes. The wire and the mechanics are the same, so the teeth move in the same way and the treatment time is similar. Because ceramic brackets are a little more fragile, the orthodontist may use slightly gentler forces in some situations, and very heavy bite corrections are sometimes better managed with metal brackets on the back teeth. For most cases the result is identical." },
      { question: "Do ceramic brackets stain?", answer: "The brackets themselves are stain-resistant and keep their colour. What can discolour are the small clear elastic ties that hold the wire in place, especially with coffee, tea, red wine, curry and smoking. Because the ties are replaced at every adjustment visit, any staining is temporary. Rinsing after strongly coloured food and drink keeps them clearer between appointments." },
      { question: "Are they more fragile than metal braces?", answer: "Slightly. Ceramic is hard but brittle, so a bracket can chip or break if you bite into something very hard or take a knock to the mouth. In practice breakages are uncommon when patients follow the same food advice given to every braces wearer. If a bracket does break, we replace it at a short visit. We recommend a mouthguard for contact sports with any type of braces." },
      { question: "Ceramic braces or clear aligners: which is more discreet?", answer: "Aligners are the least visible option because there is nothing bonded to the teeth. Ceramic braces are the next most discreet and have the advantage of working around the clock without relying on you to wear them. If your case is suitable for both, the choice comes down to lifestyle and preference; if it is not, ceramic braces let you treat a complex problem without a fully metal look." },
      { question: "Can I whiten my teeth after ceramic braces?", answer: "Yes, and many patients do. Once the brackets are removed and the teeth polished, we recommend waiting a few weeks for the enamel to settle and any sensitivity to pass. Whitening then brightens the newly straightened teeth evenly. If a tooth is chipped, worn or unusually shaped, a ceramic veneer can complete the transformation. Retainers are still essential afterwards." },
    ],
    cta: {
      title: "See Ceramic Braces Up Close",
      text: "Book a consultation at our JLT clinic to compare ceramic and metal brackets and preview your planned result.",
    },
    related: ["/orthodontics/metal-braces", "/orthodontics/clear-aligners", "/whitening/laser", "/veneers"],
  },
  {
    slug: "retainers",
    category: "orthodontics",
    name: "Retainers",
    h1: "Orthodontic Retainers in Dubai",
    seoTitle: "Orthodontic Retainers in Dubai - Keep Teeth Straight",
    seoDescription:
      "Fixed and removable retainers in Dubai JLT to keep teeth straight after braces or aligners. Replacement retainers, repairs and advice from our orthodontist.",
    heroSubtitle:
      "Straightening your teeth is only half the job; retainers make sure they stay where your orthodontist put them.",
    intro: {
      heading: "Protect the result you worked so hard for",
      paragraphs: [
        "Teeth are held in bone that keeps remodelling throughout life, and after orthodontic treatment they have a strong tendency to drift back towards their original positions. This is called relapse, and it can happen months or many years after braces or aligners come off. A retainer is a simple appliance that holds the teeth exactly where the treatment left them while the bone and gums stabilise, and then keeps guarding against the slow shifts that come with age.",
        "There are two main types. A fixed retainer is a thin wire bonded to the back of the front teeth, invisible from the outside and working all the time. A removable retainer is either a clear Essix tray, similar to an aligner, or a Hawley plate with a wire across the front, and is worn mostly at night. Many patients have both. At our JLT clinic we make retainers from a digital scan, replace lost or worn ones, and repair fixed wires that have come loose, whether or not you had your original treatment with us.",
      ],
    },
    highlights: [
      { title: "Finishing braces or aligners", desc: "Retainers fitted the same week your active treatment ends." },
      { title: "Lost or broken retainer", desc: "A replacement made from a fresh scan before your teeth start to move." },
      { title: "Fixed wire has come loose", desc: "Re-bonding or replacing a bonded retainer that has detached from a tooth." },
      { title: "Teeth starting to shift again", desc: "Catching early relapse before it needs full treatment." },
      { title: "Treated somewhere else", desc: "We make retainers for patients who had their braces or aligners at another clinic or abroad." },
    ],
    steps: [
      { title: "Check & digital scan", description: "We confirm your teeth are stable and take an intraoral scan; no impression trays needed.", duration: "15–20 min" },
      { title: "Fitting", description: "A removable retainer is checked for fit and comfort; a fixed retainer is bonded behind the front teeth and polished smooth.", duration: "20–45 min" },
      { title: "Wear schedule", description: "Removable retainers are worn full-time at first, then nights only. We give you a clear written schedule and cleaning instructions.", duration: "Full-time for 3–6 months, then nightly" },
      { title: "Retainer checks", description: "We check fit, wear and any fixed wire at your routine visits and replace retainers as they age.", duration: "Every 6–12 months" },
    ],
    benefits: [
      "Made from a digital scan for a precise, comfortable fit",
      "Fixed, removable or both, chosen for your original problem",
      "Replacements made without repeating treatment, provided the teeth have not moved",
      "Advice from an orthodontist with a Master's degree and PhD in orthodontics",
      "Retainer checks combined with your routine dental visits",
    ],
    faqs: [
      { question: "How long do I need to wear a retainer?", answer: "Indefinitely, at night. For the first few months after treatment a removable retainer is usually worn full-time except for eating and brushing, then it moves to nights only. After that, the honest answer is for as long as you want your teeth to stay straight, because the tendency to drift never fully disappears. Night-time wear quickly becomes as routine as brushing." },
      { question: "Fixed or removable: which is better?", answer: "Each has strengths. A fixed wire cannot be forgotten or lost and is invisible, but it needs careful flossing and can come unstuck without you noticing. A removable retainer is easy to clean and lets you floss normally, but only works if you wear it. Many orthodontists recommend a fixed wire on the lower front teeth plus a removable retainer on top, or both types together. We advise based on your original problem." },
      { question: "My retainer no longer fits. What should I do?", answer: "Do not force it. A retainer that feels very tight or will not seat fully means the teeth have moved. Book a visit promptly: if the shift is small, a new retainer or a short course of aligners can bring the teeth back. Leaving it longer allows more movement and makes the fix bigger. Never wear a cracked or warped retainer, as it can push teeth the wrong way." },
      { question: "How do I clean my retainer?", answer: "Rinse a removable retainer with cool water every time you take it out and brush it gently with a soft toothbrush and mild soap, not toothpaste, which is abrasive and clouds clear plastic. Soak it in a retainer cleaning tablet once or twice a week. Keep it away from hot water, which warps it. For a fixed retainer, floss under the wire daily using a floss threader or a water flosser." },
      { question: "Can you make a retainer if I was treated elsewhere?", answer: "Yes. We take a digital scan of your teeth as they are now and make a new fixed or removable retainer to hold that position. If your teeth have already drifted a little and you would like them back where they were, we can discuss a short realignment with aligners first. You do not need your old records, although bringing them is helpful." },
    ],
    cta: {
      title: "Need a New or Replacement Retainer?",
      text: "Book a quick scan at our JLT clinic and keep your smile exactly where it should be.",
    },
    related: ["/orthodontics/invisalign", "/orthodontics/clear-aligners", "/orthodontics/metal-braces"],
  },
  {
    slug: "space-maintainers",
    category: "orthodontics",
    name: "Space Maintainers",
    h1: "Space Maintainers for Children in Dubai",
    seoTitle: "Space Maintainers for Children in Dubai - Kids Orthodontics",
    seoDescription:
      "Space maintainers for children in Dubai JLT. A small appliance that holds space after a baby tooth is lost early so the adult tooth can come through straight.",
    heroSubtitle:
      "A small, comfortable appliance that keeps the gap open when a baby tooth is lost too soon, so the adult tooth has room to erupt.",
    intro: {
      heading: "Why a lost baby tooth sometimes needs a placeholder",
      paragraphs: [
        "Baby teeth do more than help children chew and speak. Each one holds a space in the jaw for the permanent tooth developing underneath it. When a baby tooth is lost early, through decay, an accident or an extraction, the neighbouring teeth begin to tilt and drift into the empty space within months. By the time the adult tooth is ready to come through there may be no room left, and it can erupt crooked, get stuck in the bone or push other teeth out of line.",
        "A space maintainer prevents this. It is a small, custom-made appliance, usually a metal band around a neighbouring tooth with a loop that spans the gap, or a thin wire running behind the lower teeth when several are missing. It does not move teeth; it simply holds the space until the permanent tooth appears. At our JLT clinic we confirm with an X-ray that a permanent tooth is present and estimate when it will erupt, fit the maintainer in a single short visit, and check it at regular intervals until it can be removed.",
      ],
    },
    highlights: [
      { title: "Early loss of a baby molar", desc: "The most common reason: back baby teeth normally stay until age 10–12." },
      { title: "Extraction due to decay or infection", desc: "When a baby tooth cannot be saved and the adult tooth is still years away." },
      { title: "Knocked-out baby tooth", desc: "Falls and sports accidents that remove a tooth before its time." },
      { title: "Several missing baby teeth", desc: "A lingual arch holds space across more than one gap." },
      { title: "Reducing the chance of crowding later", desc: "Keeping room so the adult teeth can erupt where they belong." },
    ],
    steps: [
      { title: "Examination & X-ray", description: "We check the gap and take an in-clinic X-ray to confirm the permanent tooth is present and estimate when it will erupt.", duration: "20–30 min" },
      { title: "Band selection & scan", description: "A band is sized on the neighbouring tooth and a digital scan is taken so the appliance can be made to fit precisely.", duration: "20–30 min" },
      { title: "Cementing the maintainer", description: "The finished band-and-loop or lingual arch is checked for fit and cemented in place. No injections are needed.", duration: "15–20 min" },
      { title: "Monitoring visits", description: "We check the appliance, the gums and the erupting tooth, adjusting or repairing as your child grows.", duration: "Every 3–6 months" },
      { title: "Removal", description: "Once the permanent tooth shows through the gum, the maintainer is removed in a few minutes.", duration: "10–15 min" },
    ],
    benefits: [
      "Gentle, child-friendly care in a clinic that treats whole families",
      "Planned by an orthodontist with a Master's degree and PhD in orthodontics",
      "OPG X-rays taken in-clinic to confirm the developing tooth",
      "Digital scan instead of impression trays, which many children find unpleasant",
      "Regular monitoring so the appliance is removed at the right moment",
    ],
    faqs: [
      { question: "Does every child who loses a baby tooth early need one?", answer: "No. It depends on which tooth was lost, the child's age and how close the permanent tooth is to erupting. If the X-ray shows the adult tooth is only a few months away, a maintainer is usually unnecessary. Front baby teeth rarely need one, while early loss of a baby molar often does. We assess each case individually and will tell you if watching and waiting is the better option." },
      { question: "Is fitting a space maintainer painful?", answer: "No. There are no injections and no drilling. The band is tried on the tooth, a digital scan is taken, and at the next visit the finished appliance is cemented in place. Children may feel a little pressure while the band is seated and notice the appliance with their tongue for a few days. Most forget it is there within a week." },
      { question: "How long does it stay in?", answer: "Until the permanent tooth begins to come through the gum, which can be anywhere from a few months to a few years depending on the child's age and the tooth involved. We monitor progress at check-ups, usually every three to six months, sometimes with a follow-up X-ray. Once the new tooth is visible the maintainer is removed in a few minutes." },
      { question: "How do we look after it at home?", answer: "Brush around the band and loop as part of normal brushing, paying attention to the gum line. Avoid sticky sweets, chewing gum and very hard foods, which can loosen the cement or bend the wire. Ask your child not to push or wiggle it with their tongue or fingers. If it feels loose or comes off, keep it and call us; a loose maintainer can usually be re-cemented the same week." },
      { question: "Will my child still need braces later?", answer: "Possibly, but a space maintainer makes any later treatment simpler. Holding the space helps prevent the crowding and impacted teeth that early tooth loss can cause, which are among the harder problems to fix. Some children will still need braces for reasons unrelated to the lost tooth, such as jaw size or inherited crowding. We usually suggest an orthodontic check around age seven to plan ahead." },
    ],
    cta: {
      title: "Has Your Child Lost a Baby Tooth Early?",
      text: "Book a gentle check-up at our JLT clinic and we will tell you whether a space maintainer is needed.",
    },
    related: ["/general-preventive/kids-dentistry", "/orthodontics/metal-braces", "/orthodontics/bite-correction", "/xray-opg"],
  },
  {
    slug: "bite-correction",
    category: "orthodontics",
    name: "Bite Correction",
    h1: "Bite Correction in Dubai",
    seoTitle: "Bite Correction in Dubai - Overbite, Underbite & Crossbite",
    seoDescription:
      "Bite correction in Dubai JLT for overbite, underbite, crossbite and open bite. Orthodontist-led diagnosis with in-clinic X-rays and CBCT for kids and adults.",
    heroSubtitle:
      "Correcting how your upper and lower teeth meet, for a jaw that works comfortably as well as a smile that looks right.",
    intro: {
      heading: "More than straight teeth: how your jaws fit together",
      paragraphs: [
        "A bite problem, or malocclusion, means the upper and lower teeth do not meet properly when you close your mouth. In an overbite the upper front teeth sit too far in front of the lower ones; in an underbite the lower teeth sit ahead of the upper; in a crossbite some upper teeth bite inside the lower teeth; and in an open bite the front teeth do not touch at all. Beyond appearance, an uncorrected bite can cause uneven tooth wear, chipped edges, jaw joint discomfort, difficulty chewing and speech issues.",
        "Treatment depends on the cause and your age. Many bite problems come from the position of the teeth and respond to braces or aligners combined with small elastics that guide the jaws together. When the cause lies in the size or position of the jaws themselves, children who are still growing can be treated with functional appliances or expanders that guide jaw growth, so an early assessment matters. In adults with severe jaw discrepancies, orthodontics is sometimes combined with jaw surgery, and we will refer you to a maxillofacial surgeon when needed. Diagnosis at our JLT clinic uses digital scans plus in-clinic OPG, cephalometric and CBCT imaging.",
      ],
    },
    highlights: [
      { title: "Overbite", desc: "Upper front teeth sitting too far forward or covering too much of the lower teeth." },
      { title: "Underbite", desc: "Lower teeth or jaw positioned ahead of the upper teeth." },
      { title: "Crossbite", desc: "Upper teeth biting inside the lower teeth on one or both sides." },
      { title: "Open bite", desc: "Front teeth that do not meet, often linked to thumb-sucking or tongue habits." },
      { title: "Wear, chipping or jaw pain", desc: "Damage and discomfort caused by teeth meeting unevenly." },
    ],
    steps: [
      { title: "Assessment & imaging", description: "We examine your teeth, jaws and jaw joints, take a digital scan and in-clinic OPG and cephalometric X-rays, with CBCT where jaw position needs a 3D view.", duration: "45–60 min" },
      { title: "Diagnosis & treatment plan", description: "Your orthodontist identifies whether the problem is in the teeth, the jaws or both, and presents the options with a simulated result.", duration: "1–2 weeks" },
      { title: "Growth guidance or active treatment", description: "Children may start with an expander or functional appliance; teens and adults move to braces or aligners with elastics.", duration: "6–24 months" },
      { title: "Elastics & fine-tuning", description: "In the final months small elastics settle the bite so the upper and lower teeth meet evenly.", duration: "2–6 months" },
      { title: "Retention", description: "Retainers hold the corrected bite, with checks at routine visits.", duration: "Ongoing" },
    ],
    benefits: [
      "Diagnosis by an orthodontist with a Master's degree and PhD in orthodontics",
      "OPG, cephalometric and CBCT imaging in-clinic, so no separate imaging centre visit",
      "Early assessment for children while jaw growth can still be guided",
      "Braces, aligners and functional appliances available under one roof",
      "Referral to a maxillofacial surgeon coordinated by us when surgery is needed",
    ],
    faqs: [
      { question: "What is the best age to check a child's bite?", answer: "Around age seven. By then the first permanent molars and front teeth are through, and the orthodontist can see how the jaws are developing. Most children need nothing at this stage, but for crossbites, severe overbites or underbites, a short course with an expander or functional appliance while the child is growing can prevent a much bigger problem later. Waiting until all adult teeth are through can close that window." },
      { question: "Can clear aligners fix a bite problem?", answer: "Often, yes. Clear aligners combined with small elastics can correct mild to moderate overbites, some crossbites and many open bites caused by tooth position. Larger corrections, particularly underbites and problems caused by jaw size, are usually more predictable with braces. After examining you and reviewing your X-rays we will tell you honestly which option suits your bite." },
      { question: "What are the elastics for?", answer: "Elastics are small rubber bands hooked between the upper and lower braces or aligners. They apply a light, constant pull that brings the jaws into the correct relationship while the wires or trays straighten the teeth. They only work when worn as instructed, usually all day except for meals, and are changed daily. Skipping them is the most common reason bite correction runs late." },
      { question: "Will I need jaw surgery?", answer: "Most people do not. Surgery is considered only for adults whose jaws are significantly out of proportion, where moving the teeth alone would not create a stable, comfortable bite. In those cases orthodontics before and after surgery is combined with a maxillofacial surgeon's work. If your case falls into this category we will explain why, show you the X-rays and imaging behind that recommendation, and coordinate the referral." },
      { question: "Can a bad bite cause headaches or jaw pain?", answer: "It can contribute. When the teeth do not meet evenly, the jaw muscles work harder to find a comfortable position, which can lead to tension, clicking or aching around the jaw joint, and sometimes headaches. Correcting the bite is one part of managing these symptoms; night guards and muscle relaxation advice may also help. We examine the joint and muscles as part of every bite assessment." },
    ],
    cta: {
      title: "Get Your Bite Assessed in JLT",
      text: "Book an orthodontic assessment with in-clinic imaging and find out exactly what is causing your bite problem and how to fix it.",
    },
    related: ["/orthodontics/metal-braces", "/orthodontics/clear-aligners", "/orthodontics/space-maintainers", "/xray-opg"],
  },
];
