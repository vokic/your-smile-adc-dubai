import type { SubService } from "./types";

// Dental Surgery sub-services. Copy written in-house; reviewed against the
// owner's rules in ./types.ts (no prices, no invented stats, no named doctors).

export const DENTAL_SURGERY: SubService[] = [
  {
    slug: "wisdom-tooth",
    category: "dental-surgery",
    name: "Wisdom Tooth Extraction",
    h1: "Wisdom Tooth Extraction in Dubai",
    seoTitle: "Wisdom Tooth Extraction in Dubai - Gentle Oral Surgery",
    seoDescription:
      "Wisdom tooth removal in Dubai JLT by an oral surgeon. 3D CBCT planning, local anaesthesia or sedation, and clear aftercare for a smooth 3–7 day recovery.",
    heroSubtitle:
      "Planned on a 3D scan and carried out by an oral surgeon, so an impacted wisdom tooth comes out safely and heals quickly.",
    intro: {
      heading: "When a wisdom tooth has nowhere to go",
      paragraphs: [
        "Wisdom teeth are the last molars to arrive, usually between the ages of 17 and 25. In many people there simply is not enough room at the back of the jaw, so the tooth comes through at an angle, only partly breaks the gum, or stays trapped in the bone. This is called impaction. An impacted wisdom tooth can trap food and bacteria, cause repeated gum infections, damage the neighbouring molar or form a cyst around its crown. When that happens, removing the tooth is usually the kindest long-term option.",
        "Not every wisdom tooth needs to come out. If it has fully erupted, is easy to clean and is not pressing on anything, we will simply keep an eye on it at your check-ups. To decide, we take an OPG or a 3D CBCT scan in the clinic, which shows the roots, the nerve that runs through the lower jaw and the sinus above the upper teeth. Our oral and maxillofacial surgeon then plans the safest way to remove the tooth, whether that is a straightforward extraction or a surgical one under local anaesthesia, with sedation available if you are anxious.",
      ],
    },
    highlights: [
      { title: "Impacted or angled teeth", desc: "Wisdom teeth trapped in bone or growing sideways into the molar in front." },
      { title: "Repeated gum infections", desc: "Swollen, sore gum around a partly erupted tooth (pericoronitis)." },
      { title: "Decay you cannot reach", desc: "Cavities in a wisdom tooth or its neighbour that are impossible to clean or fill properly." },
      { title: "Cysts and pressure", desc: "Fluid-filled sacs around the crown, or crowding that threatens orthodontic results." },
      { title: "Before orthodontics or implants", desc: "Clearing space when your treatment plan needs it." },
    ],
    steps: [
      { title: "Consultation & 3D scan", description: "We examine the area, take an OPG or CBCT scan to see the roots, nerve and sinus, and explain exactly what the removal involves.", duration: "30 min" },
      { title: "Anaesthesia", description: "The area is fully numbed with local anaesthesia. If you have chosen sedation, it is started first so you stay relaxed throughout.", duration: "10–15 min" },
      { title: "Removal", description: "For an impacted tooth the surgeon lifts a small flap of gum, removes any bone covering the tooth, and takes it out, sometimes in sections, before placing stitches.", duration: "20–45 min per tooth" },
      { title: "Recovery & review", description: "You rest briefly, receive written aftercare and pain relief, and we check the healing at a follow-up visit about a week later.", duration: "3–7 days at home" },
    ],
    benefits: [
      "Performed by an oral and maxillofacial surgeon",
      "3D CBCT imaging in-clinic to locate the nerve and sinus before surgery",
      "Local anaesthesia as standard, with sedation options for anxious patients",
      "Clear written aftercare and a follow-up check included",
      "Emergency line if you have concerns after hours",
    ],
    faqs: [
      { question: "Does wisdom tooth removal hurt?", answer: "The procedure itself should not hurt. The area is fully numbed with local anaesthesia, and you will feel pressure rather than pain. If the thought of surgery makes you anxious, sedation options are available so you stay relaxed throughout. Some soreness and swelling are normal for the first two to three days afterwards and are managed with the pain relief we prescribe, cold packs and rest." },
      { question: "How long is the recovery?", answer: "Most people feel back to normal within three to seven days. Swelling peaks around day two or three and then settles. Stick to soft, cool food for the first few days, keep the area clean with gentle salt-water rinses from the second day and avoid strenuous exercise for the first 48 hours. If a tooth was deeply impacted, the gum may take a little longer to close over completely." },
      { question: "What is dry socket and how do I avoid it?", answer: "After an extraction, a blood clot forms in the socket and protects the bone while it heals. If the clot is lost too early, the bone is exposed and becomes very painful a few days after surgery. This is a dry socket. To avoid it, do not smoke, do not use straws, do not spit forcefully or rinse hard in the first 24 hours, and follow the aftercare sheet we give you. If pain gets worse instead of better, call us and we will dress the socket." },
      { question: "Do I have to remove all four at once?", answer: "No. Some patients prefer to have all four removed in one appointment, often under sedation, so there is a single recovery period. Others choose one side at a time so they can still chew comfortably on the other side. Both approaches are safe. We will discuss which suits your situation after looking at your scan and how many teeth actually need to come out." },
      { question: "Is there any risk to the nerve in my lower jaw?", answer: "The nerve that gives feeling to your lower lip and chin runs close to the roots of lower wisdom teeth. This is exactly why we take a 3D CBCT scan before surgery: it shows the position of the nerve so the surgeon can plan around it. Temporary numbness is uncommon and usually resolves on its own; permanent change is rare. We will explain your individual risk honestly before you decide." },
    ],
    cta: {
      title: "Troubled by a Wisdom Tooth?",
      text: "Book a consultation and 3D scan at our JLT clinic and find out whether your wisdom tooth needs to come out.",
    },
    related: ["/dental-surgery/extractions", "/xray-opg", "/emergency", "/general-preventive/gum-care"],
  },
  {
    slug: "extractions",
    category: "dental-surgery",
    name: "Tooth Extractions",
    h1: "Tooth Extractions in Dubai",
    seoTitle: "Tooth Extraction in Dubai - Simple & Surgical Removal",
    seoDescription:
      "Gentle tooth extractions in Dubai JLT. Simple and surgical removal under local anaesthesia, socket preservation to protect the bone, and home visits available.",
    heroSubtitle:
      "When a tooth cannot be saved, we remove it gently, protect the bone beneath it and plan its replacement from day one.",
    intro: {
      heading: "A last resort, done carefully",
      paragraphs: [
        "Nobody wants to lose a tooth, and saving it is always our first choice. Sometimes, though, a tooth is too badly decayed, cracked below the gum line, loosened by advanced gum disease or simply in the way of orthodontic treatment. In those cases a careful, planned extraction removes the source of pain and infection and lets us talk about the best way to replace the tooth, whether with an implant, a bridge or nothing at all if it is a wisdom tooth.",
        "There are two kinds of extraction. A simple extraction is used when the tooth is visible and can be loosened and lifted out with instruments under local anaesthesia. A surgical extraction is needed when the tooth is broken at gum level, has curved roots or is still partly in the bone; a small incision is made in the gum and the tooth is sometimes divided into pieces to remove it gently. Both are routine for our team, and sedation is available if you are nervous.",
      ],
    },
    highlights: [
      { title: "Teeth too damaged to restore", desc: "Deep decay or fractures that a filling, root canal or crown can no longer fix." },
      { title: "Advanced gum disease", desc: "Teeth that have lost their bone support and become loose." },
      { title: "Baby teeth that will not fall out", desc: "Retained milk teeth blocking the adult tooth beneath." },
      { title: "Orthodontic space", desc: "Planned removal to make room when teeth are crowded." },
      { title: "Infection and abscess", desc: "A tooth that keeps flaring up despite treatment." },
    ],
    steps: [
      { title: "Examination & X-ray", description: "A digital X-ray, or a CBCT scan for complex roots, shows the shape of the tooth and what lies around it. We confirm the tooth cannot be saved and discuss replacement options.", duration: "20 min" },
      { title: "Numbing", description: "Local anaesthesia is placed around the tooth and we wait until the area is fully numb before starting.", duration: "10 min" },
      { title: "Extraction", description: "The tooth is gently loosened and lifted out. For a surgical extraction, a small gum flap is raised and the tooth is sectioned so it comes out with minimal force.", duration: "15–45 min" },
      { title: "Socket care", description: "If you are considering an implant, bone graft material can be placed in the socket to preserve the ridge. Gauze and, where needed, stitches finish the visit.", duration: "5–15 min" },
      { title: "Aftercare & follow-up", description: "You leave with written instructions and pain relief. We review the socket at about one week and plan the next step.", duration: "7 days" },
    ],
    benefits: [
      "Tooth saved whenever it is realistically possible; extraction only when it is not",
      "Digital X-ray and CBCT imaging in-clinic for complex roots",
      "Socket preservation offered when an implant is planned",
      "Local anaesthesia as standard, with sedation for anxious patients",
      "Simple extractions available as a private at-home visit",
    ],
    faqs: [
      { question: "Will the extraction be painful?", answer: "You should feel pressure and movement but not pain. The tooth and surrounding gum are fully numbed before we start, and we check the numbness before touching the tooth. Afterwards, expect some tenderness for two to three days, which ordinary pain relief usually controls well. If you feel anxious about the procedure itself, tell us and we can arrange sedation." },
      { question: "What is socket preservation and do I need it?", answer: "When a tooth is removed, the bone that held it starts to shrink within weeks. Socket preservation means filling the empty socket with a bone graft material and covering it with a membrane at the time of extraction. This keeps the height and width of the ridge, so that an implant can be placed later without a bigger grafting procedure. We recommend it whenever you are considering an implant, particularly for front teeth where the gum line is visible." },
      { question: "How soon can I replace the missing tooth?", answer: "It depends on the tooth and the health of the bone. In some cases an implant can be placed on the same day as the extraction. More often we let the socket heal for two to four months, or longer if a graft was placed, and then place the implant. A temporary denture or bonded tooth can fill the gap in the meantime so you are never left with a visible space." },
      { question: "What should I do after an extraction?", answer: "Bite gently on the gauze for about 30 minutes, then leave the area alone. Do not rinse, spit forcefully, smoke or drink through a straw for the first 24 hours, as this can dislodge the clot. Eat soft, cool food and chew on the other side. From the next day, rinse gently with warm salt water after meals. Mild swelling and bruising are normal; severe or worsening pain is not, so call us if that happens." },
      { question: "Can I have a tooth taken out at home?", answer: "Yes, for straightforward cases. Our at-home dental service can carry out simple extractions at your residence in Dubai for patients who find it difficult to travel, such as elderly or bed-bound family members. Surgical extractions, or any case that needs X-ray imaging first, are done in the clinic where we have the full equipment. Contact us and we will advise which option is right for you." },
    ],
    cta: {
      title: "Need a Tooth Removed?",
      text: "Book an assessment at our JLT clinic; we will tell you honestly whether the tooth can be saved and, if not, plan a gentle extraction and its replacement.",
    },
    related: ["/dental-surgery/wisdom-tooth", "/dental-surgery/bone-grafting", "/implants", "/at-home", "/emergency"],
  },
  {
    slug: "bone-grafting",
    category: "dental-surgery",
    name: "Bone Grafting",
    h1: "Bone Grafting in Dubai",
    seoTitle: "Dental Bone Grafting in Dubai - Rebuild Bone for Implants",
    seoDescription:
      "Dental bone grafting in Dubai JLT to rebuild lost jawbone before implants. Ridge preservation and augmentation planned on 3D CBCT by our surgical team.",
    heroSubtitle:
      "Rebuilding the jawbone where it has shrunk, so a dental implant has the solid foundation it needs to last.",
    intro: {
      heading: "Giving your implant something solid to hold on to",
      paragraphs: [
        "A dental implant needs a solid foundation of bone to hold it firmly, just as a post needs firm ground. When a tooth has been missing for a while, or was lost to infection or gum disease, the jawbone in that area shrinks because it is no longer being used. The result is a ridge that is too thin or too short for an implant. Bone grafting rebuilds that volume by placing graft material where the bone is missing, giving your body a scaffold on which to grow new, healthy bone.",
        "The graft can come from several sources: your own bone taken from another part of the jaw (autograft), processed human donor bone (allograft), animal-derived bone mineral, usually bovine (xenograft), or a synthetic material. Each has its place, and our surgeon will explain which is best for your situation. Over the following months your own bone cells grow into the graft and replace it. Once a 3D CBCT scan confirms the new bone is mature, typically after three to six months, the implant can be placed with confidence.",
      ],
    },
    highlights: [
      { title: "Ridge preservation", desc: "Graft placed into the socket at the time of extraction to stop the bone shrinking." },
      { title: "Thin or short ridges", desc: "Adding width or height where a tooth has been missing for years." },
      { title: "Bone lost to gum disease", desc: "Rebuilding support after periodontitis has destroyed bone around teeth." },
      { title: "Around an implant", desc: "Covering exposed implant threads or repairing small defects at placement." },
      { title: "After trauma or cysts", desc: "Restoring bone after an injury or the removal of a cyst." },
    ],
    steps: [
      { title: "Assessment & 3D scan", description: "A CBCT scan measures the bone in three dimensions. We agree on the graft type, the amount needed and how it fits your implant timeline.", duration: "30 min" },
      { title: "Graft placement", description: "Under local anaesthesia (with sedation if you wish), the gum is opened, the graft material is placed and shaped, usually covered with a protective membrane, and the gum is stitched closed.", duration: "45–90 min" },
      { title: "Healing", description: "Your own bone gradually grows into and replaces the graft. You attend short reviews to check the gum is healing well.", duration: "3–6 months" },
      { title: "Implant placement", description: "Once a follow-up scan confirms the bone is dense enough, your implant is placed into the new bone.", duration: "Next stage" },
    ],
    benefits: [
      "Planned and placed by our oral and maxillofacial surgeon and implantologists",
      "3D CBCT imaging in-clinic before and after grafting, so nothing is guessed",
      "Choice of autograft, allograft, xenograft or synthetic material explained plainly",
      "Local anaesthesia as standard, with sedation options for anxious patients",
      "Prepares the site for JD Evolution Plus implants, which carry a lifetime implant warranty",
    ],
    faqs: [
      { question: "Is bone grafting painful?", answer: "The procedure is done under local anaesthesia, so you will not feel pain during it, and sedation is available if you prefer to be more relaxed. Afterwards, expect swelling and some discomfort for a few days, similar to a tooth extraction. Most patients manage well with the pain relief we prescribe and are back to normal activities within a few days, although we ask you to avoid pressure on the area while it heals." },
      { question: "Where does the graft material come from?", answer: "There are four options. An autograft uses a small amount of your own bone, usually from elsewhere in the jaw. An allograft uses sterilised, processed human donor bone from a regulated tissue bank. A xenograft uses purified bone mineral of animal origin, most often bovine. Synthetic grafts are man-made minerals that mimic bone. All are widely used and well tolerated; the choice depends on how much bone is needed and where." },
      { question: "How long before I can have my implant?", answer: "It depends on the size of the graft. A small ridge preservation graft placed at the time of extraction usually matures in three to four months. Larger grafts that add width or height to the jaw may need up to six months, sometimes a little longer. We take a 3D CBCT scan before implant surgery to confirm the bone is dense enough, rather than working to a fixed date." },
      { question: "Can the graft be rejected or fail?", answer: "Because the graft acts as a scaffold for your own bone rather than a transplanted organ, rejection in the usual sense does not happen. A graft can fail to integrate if it becomes infected, if the wound opens early or if the area is disturbed during healing. Smoking is the biggest risk factor. Following the aftercare instructions, keeping the area clean and attending review appointments gives the graft the best chance of turning into solid bone." },
      { question: "Can I avoid a graft by having the implant sooner?", answer: "Sometimes, yes. If a tooth is being removed and the surrounding bone is healthy, placing a graft into the socket on the same day (ridge preservation) or, in selected cases, placing the implant immediately can avoid a separate grafting procedure later. This is why we prefer to plan the replacement before the tooth is removed. If the bone has already shrunk, grafting first is the safer route to a long-lasting implant." },
    ],
    cta: {
      title: "Told You Do Not Have Enough Bone for an Implant?",
      text: "Book a CBCT assessment at our JLT clinic and let our surgical team show you how bone grafting can make an implant possible.",
    },
    related: ["/implants", "/dental-surgery/sinus-lift", "/dental-surgery/extractions", "/xray-opg"],
  },
  {
    slug: "sinus-lift",
    category: "dental-surgery",
    name: "Sinus Lift",
    h1: "Sinus Lift Surgery in Dubai",
    seoTitle: "Sinus Lift in Dubai - Bone for Upper Jaw Implants",
    seoDescription:
      "Sinus lift surgery in Dubai JLT to create bone for implants in the upper back jaw. Lateral window or crestal approach, planned on 3D CBCT by our oral surgeon.",
    heroSubtitle:
      "Creating enough bone beneath the sinus so implants can replace your upper back teeth securely.",
    intro: {
      heading: "Why the upper back jaw often needs extra bone",
      paragraphs: [
        "The upper back teeth sit directly beneath the maxillary sinuses, the air-filled spaces on either side of your nose. When a molar or premolar is lost here, two things happen: the jawbone shrinks from below, and the sinus floor gradually drops down into the space the roots once occupied. Between them, they can leave only a few millimetres of bone, far too little to anchor an implant safely. A sinus lift solves this by gently raising the sinus membrane and filling the space beneath it with bone graft material.",
        "There are two ways to do it. When only a small amount of height is needed, the crestal approach lifts the membrane through the same small opening used for the implant, and the implant is often placed in the same visit. When more bone is required, the lateral window approach opens a small window in the side wall of the sinus so the surgeon can lift the membrane and place a larger graft; the implant then follows once the graft has matured. Our oral and maxillofacial surgeon plans both on a 3D CBCT scan taken in the clinic.",
      ],
    },
    highlights: [
      { title: "Missing upper molars or premolars", desc: "Teeth lost some time ago where the bone beneath the sinus has thinned." },
      { title: "Large sinuses", desc: "Some people naturally have sinuses that sit low, leaving little bone even with teeth present." },
      { title: "Bone lost to infection", desc: "Abscesses or gum disease that have eaten away the bone under the sinus." },
      { title: "Full-arch implant plans", desc: "Securing back implants when rebuilding a complete upper set of teeth." },
    ],
    steps: [
      { title: "CBCT assessment", description: "A 3D scan shows exactly how much bone remains, the shape of the sinus and whether the crestal or lateral window approach suits you. We also check the sinus itself is healthy.", duration: "30 min" },
      { title: "Sinus lift surgery", description: "Under local anaesthesia, with sedation if you choose, the surgeon gently lifts the sinus membrane and places bone graft beneath it. In a crestal lift the implant is often placed at the same time.", duration: "45–90 min" },
      { title: "Healing", description: "The graft matures into solid bone while you follow simple precautions to protect the sinus. Short reviews check progress.", duration: "4–9 months" },
      { title: "Implant placement or restoration", description: "If the implant was not placed on the day, it is placed once a follow-up scan confirms the bone is ready; the crown follows after the implant integrates.", duration: "Next stage" },
    ],
    benefits: [
      "Performed by an oral and maxillofacial surgeon",
      "3D CBCT imaging in-clinic to plan the safest approach and check sinus health",
      "Crestal approach used where possible so lift and implant happen in one visit",
      "Local anaesthesia as standard, with sedation options for anxious patients",
      "Prepares the site for JD Evolution Plus implants with a lifetime implant warranty",
    ],
    faqs: [
      { question: "Is a sinus lift a major operation?", answer: "It sounds dramatic, but a sinus lift is a routine procedure carried out in the dental chair under local anaesthesia, with sedation available if you would like it. A crestal lift adds only a few minutes to implant placement. A lateral window lift takes longer, usually around an hour, and involves a little more swelling afterwards. You go home the same day and most people return to work within two or three days." },
      { question: "How long does it take to heal before implants?", answer: "If the implant was placed at the same time as the lift, it heals alongside the graft and can usually be restored after four to six months. If the graft was placed on its own, we wait for it to mature into solid bone before placing the implant, which typically takes four to nine months depending on how much bone was added. A follow-up CBCT scan tells us when it is ready." },
      { question: "What should I avoid after a sinus lift?", answer: "For about two weeks, protect the sinus from pressure changes. Do not blow your nose; if you must sneeze, do so with your mouth open. Avoid drinking through straws, smoking, flying and scuba diving, and skip heavy exercise for the first week. Take the antibiotics and any decongestant we prescribe as directed. Slight nosebleeds or a feeling of fullness are normal in the first days; call us if you notice graft granules in your nose." },
      { question: "Will it affect my breathing or cause sinus problems?", answer: "No. The graft sits beneath the sinus membrane, on the floor of the sinus, and does not reduce the space you breathe through. The membrane itself stays intact in most cases; if a small tear occurs during surgery it is repaired on the spot. Before we operate, we check your CBCT scan for existing sinus infection or polyps, and if we find any we treat them first, sometimes with an ENT colleague." },
      { question: "Are there alternatives to a sinus lift?", answer: "Sometimes. If there is enough bone slightly further forward, the implant can be angled to avoid the sinus altogether. Shorter implants can work where the bone is a few millimetres thicker than the minimum. In some situations a bridge supported by neighbouring teeth or implants is a reasonable option. We go through every alternative with you after reviewing your scan, and we only recommend a sinus lift when it gives the most predictable long-term result." },
    ],
    cta: {
      title: "Missing Upper Back Teeth?",
      text: "Book a CBCT consultation at our JLT clinic and find out whether a sinus lift can make implants possible for you.",
    },
    related: ["/implants", "/dental-surgery/bone-grafting", "/dental-surgery/extractions", "/xray-opg"],
  },
  {
    slug: "apicoectomy",
    category: "dental-surgery",
    name: "Apicoectomy",
    h1: "Apicoectomy in Dubai",
    seoTitle: "Apicoectomy in Dubai - Root-End Surgery to Save a Tooth",
    seoDescription:
      "Apicoectomy (root-end surgery) in Dubai JLT to save a tooth when root canal retreatment is not possible. Done under local anaesthesia by our oral surgeon.",
    heroSubtitle:
      "A small surgical procedure that removes infection at the tip of the root so you can keep a tooth that would otherwise be lost.",
    intro: {
      heading: "Saving a root-treated tooth from the other end",
      paragraphs: [
        "A root canal treatment removes infected tissue from inside a tooth and seals the canals. Occasionally, infection persists or returns at the very tip of the root, where tiny side canals, a crack or a fragment of tissue can shelter bacteria. The usual answer is to redo the root canal from the top. But if the tooth already carries a crown and a post, or the canal is blocked or unusually curved, going in from above may not be possible without damaging the tooth. An apicoectomy approaches the problem from the other end.",
        "Under local anaesthesia, the surgeon makes a small incision in the gum near the affected tooth, removes the infected tissue around the root tip, trims off the last few millimetres of the root and seals the end with a biocompatible filling. The gum is then stitched back into place. The whole procedure usually takes 45 to 90 minutes, and because it targets only the root tip, the crown and the rest of the tooth are left untouched. A 3D CBCT scan beforehand shows us the exact size and position of the infection.",
      ],
    },
    highlights: [
      { title: "Infection after a root canal", desc: "Persistent tenderness, swelling or a gum boil near a tooth that has already been root-treated." },
      { title: "Crowned teeth with posts", desc: "When drilling through the crown to retreat the canal would destroy the restoration." },
      { title: "Blocked or curved canals", desc: "Calcified canals, broken instruments or roots too curved to clean from above." },
      { title: "Cysts at the root tip", desc: "A fluid-filled lesion that keeps growing on X-ray despite treatment." },
      { title: "Failed retreatment", desc: "A second root canal has been tried and the infection still has not cleared." },
    ],
    steps: [
      { title: "Diagnosis & CBCT scan", description: "A 3D scan pinpoints the infection, the shape of the root tip and nearby structures such as the sinus or nerve. We confirm the tooth is worth saving.", duration: "30 min" },
      { title: "Anaesthesia", description: "The area is fully numbed with local anaesthesia. Sedation can be arranged if you are anxious.", duration: "10 min" },
      { title: "Root-end surgery", description: "Through a small gum incision the surgeon removes the infected tissue, trims the root tip, cleans and seals the canal end with a biocompatible material, and stitches the gum.", duration: "45–90 min" },
      { title: "Healing & follow-up", description: "Stitches come out after about a week. A follow-up X-ray at around six months confirms new bone is filling in around the root.", duration: "6–12 months to full bone healing" },
    ],
    benefits: [
      "Performed by an oral and maxillofacial surgeon",
      "3D CBCT imaging in-clinic to locate the lesion precisely before surgery",
      "Keeps your existing crown and post intact",
      "Local anaesthesia as standard, with sedation options for anxious patients",
      "Honest advice when extraction and an implant would be the better choice",
    ],
    faqs: [
      { question: "Is an apicoectomy painful?", answer: "The surgery itself is done under local anaesthesia, so you should feel no pain, only some pressure. Sedation is available if you are anxious. Afterwards, mild to moderate soreness and swelling are normal for two to three days and respond well to the pain relief we recommend. Because the incision is small and the crown of the tooth is not involved, most patients find recovery easier than they expected." },
      { question: "Why not just redo the root canal?", answer: "Retreatment through the crown is usually the first choice and we recommend it whenever it is practical. An apicoectomy is chosen when retreatment is not possible or has already failed: for example, when the tooth has a well-fitting crown and post that would be destroyed by drilling through it, when the canal is blocked by a broken instrument or calcification, or when the root tip has a persistent cyst that only surgery can remove." },
      { question: "How long does healing take?", answer: "The gum heals quickly: stitches are removed or dissolve within about a week, and the area feels normal within two weeks. The bone around the root tip takes much longer to fill in, usually several months. We take a follow-up X-ray after about six months, and sometimes again at a year, to confirm the infection has cleared and new bone has formed. In the meantime you can eat and brush normally, taking care around the site at first." },
      { question: "Will the tooth be weaker afterwards?", answer: "Only the last two or three millimetres of the root are removed, so the tooth keeps most of its root length and its crown is untouched. In everyday use you should not notice any difference. The tooth has already had a root canal, so it is no longer alive, but a root-filled tooth with a good crown can function for many years. We will check it at your routine visits like any other tooth." },
      { question: "What if the apicoectomy does not work?", answer: "In most cases the infection clears and the tooth is saved. If the follow-up X-ray shows the infection has not resolved, the remaining options are to repeat the surgery or to remove the tooth and replace it, usually with an implant. We are honest about this from the start: an apicoectomy is worth attempting when the tooth is otherwise sound and valuable to keep, and we will tell you if extraction and an implant would be more predictable." },
    ],
    cta: {
      title: "Root Canal Tooth Still Causing Trouble?",
      text: "Book a CBCT assessment at our JLT clinic and find out whether an apicoectomy can save the tooth.",
    },
    related: ["/dental-surgery/extractions", "/implants", "/xray-opg", "/emergency"],
  },
];
