import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_NAME, LEGAL_LAST_UPDATED, REGULAR_PHONE_DISPLAY } from "@/lib/constants";

/** Website terms for a UAE dental clinic. Standard template — not legal advice. */
export default function Terms() {
  const sections: Array<{ title: string; body: React.ReactNode }> = [
    {
      title: "1. About these terms",
      body: (
        <p>
          These terms govern your use of the website of {CLINIC_NAME} ("the Clinic", "we"). By using the website you accept them. Dental treatment itself is governed by the consent forms and treatment plan you sign at the clinic, not by these website terms.
        </p>
      ),
    },
    {
      title: "2. Information is not medical advice",
      body: (
        <p>
          The content of this website is for general information only. It does not replace a clinical examination and is not a diagnosis or a treatment recommendation for your individual case. Always consult a dentist. If you have a dental emergency, call our emergency line or go to the nearest emergency facility.
        </p>
      ),
    },
    {
      title: "3. Treatment results",
      body: (
        <p>
          Results described or shown on this website, including before-and-after photographs, are those of actual patients who consented to publication and are illustrative only. Individual results vary depending on your oral health, anatomy and aftercare. Durations and healing times are typical ranges, not guarantees.
        </p>
      ),
    },
    {
      title: "4. Enquiries and appointments",
      body: (
        <>
          <p>
            Sending a message, WhatsApp or form submission is a request for contact, not a confirmed appointment. An appointment is confirmed only when our team confirms the date and time with you. Please give at least 24 hours' notice to cancel or reschedule so that the slot can be offered to another patient.
          </p>
        </>
      ),
    },
    {
      title: "5. Packages and fees",
      body: (
        <p>
          We do not publish prices on this website. Fees and treatment packages are quoted individually in writing after a clinical examination and form part of your treatment plan. Any warranty (for example on dental implants) is described in the written warranty terms you receive with your treatment plan and is subject to the conditions stated there, including attending recommended check-ups.
        </p>
      ),
    },
    {
      title: "6. Intellectual property",
      body: (
        <p>
          All text, images, logos and design on this website belong to the Clinic or its licensors. You may view and print pages for personal, non-commercial use. Any other reproduction requires our written permission.
        </p>
      ),
    },
    {
      title: "7. Links to other websites",
      body: (
        <p>
          Links to third-party websites (for example Google Maps, Instagram or Facebook) are provided for convenience. We are not responsible for their content or privacy practices.
        </p>
      ),
    },
    {
      title: "8. Availability and accuracy",
      body: (
        <p>
          We aim to keep the website accurate and available but do not guarantee it will be error-free or uninterrupted. We may change content, services or these terms at any time; the date below shows the latest revision.
        </p>
      ),
    },
    {
      title: "9. Limitation of liability",
      body: (
        <p>
          To the extent permitted by UAE law, the Clinic is not liable for loss arising from reliance on website content or from inability to access the website. Nothing in these terms limits liability that cannot be limited under applicable law, including for clinical negligence.
        </p>
      ),
    },
    {
      title: "10. Governing law",
      body: (
        <p>
          These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai, and the courts of Dubai have jurisdiction over any dispute relating to them.
        </p>
      ),
    },
    {
      title: "11. Contact",
      body: (
        <div className="space-y-2">
          <p><strong className="text-secondary">Email:</strong> {CLINIC_EMAIL}</p>
          <p><strong className="text-secondary">Phone:</strong> {REGULAR_PHONE_DISPLAY}</p>
          <p><strong className="text-secondary">Address:</strong> {CLINIC_ADDRESS}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Terms & Conditions"
        description={`Terms of use for the ${CLINIC_NAME} website: information, appointments, packages and governing law (UAE).`}
        path="/terms"
      />
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">Please read these terms before using our website.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">{s.title}</h2>
                {s.body}
              </div>
            ))}
            <p className="text-sm"><em>Last updated: {LEGAL_LAST_UPDATED}</em></p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-6">Need to speak with us?</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
