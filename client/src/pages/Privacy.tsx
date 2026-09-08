import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import {
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_NAME,
  LEGAL_LAST_UPDATED,
  REGULAR_PHONE_DISPLAY,
} from "@/lib/constants";

/**
 * Privacy notice aligned with UAE Federal Decree-Law No. 45 of 2021 (PDPL)
 * and the Dubai Health Authority's patient-confidentiality expectations.
 * Standard template — not legal advice; the owner may have counsel review it.
 */
export default function Privacy() {
  const sections: Array<{ title: string; body: React.ReactNode }> = [
    {
      title: "1. Who we are",
      body: (
        <p>
          {CLINIC_NAME} ("we", "us", "the Clinic") operates this website and the dental clinic at {CLINIC_ADDRESS}. We are the data controller for personal data collected through this website and in the course of providing dental care. Contact: {CLINIC_EMAIL}, {REGULAR_PHONE_DISPLAY}.
        </p>
      ),
    },
    {
      title: "2. What personal data we collect",
      body: (
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-secondary">Contact and enquiry data</strong> — name, phone number, email address, the treatment you are interested in and the message you send us via the contact form, WhatsApp, phone or email.</li>
          <li><strong className="text-secondary">Newsletter data</strong> — your email address if you subscribe.</li>
          <li><strong className="text-secondary">Health data</strong> — information about your dental and medical history, X-rays and clinical photographs, collected only when you become a patient and processed under patient-confidentiality rules. This website itself does not ask for health data beyond what you choose to write in a message.</li>
          <li><strong className="text-secondary">Technical and usage data</strong> — IP address, device and browser type, pages visited and interactions such as clicking "Call" or "WhatsApp", collected through cookies and similar technologies only with your consent (see section 6).</li>
        </ul>
      ),
    },
    {
      title: "3. Why we process your data and on what basis",
      body: (
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your enquiry and schedule appointments — performance of a contract or steps at your request.</li>
          <li>To provide dental treatment and keep clinical records — provision of healthcare and our legal obligations under UAE health regulations.</li>
          <li>To send you appointment reminders and, with your consent, dental tips and clinic news — consent, which you can withdraw at any time.</li>
          <li>To understand how the website is used and to measure advertising — consent given via the cookie banner.</li>
          <li>To comply with legal obligations and protect our rights — legal obligation and legitimate interest.</li>
        </ul>
      ),
    },
    {
      title: "4. Who we share data with",
      body: (
        <>
          <p>We do not sell personal data. We share it only with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Service providers who host this website and process form submissions on our behalf (our hosting provider, Netlify, receives contact-form and newsletter submissions).</li>
            <li>Analytics and advertising providers (Google Analytics / Google Tag Manager and Meta) — only if you accept analytics and marketing cookies.</li>
            <li>Dental laboratories, imaging centres and specialists involved in your treatment, under confidentiality obligations.</li>
            <li>Insurance providers, where you ask us to bill your insurer.</li>
            <li>Authorities where required by UAE law.</li>
          </ul>
          <p className="mt-3">Some providers process data outside the UAE. Where that happens we rely on the safeguards permitted by the UAE Personal Data Protection Law.</p>
        </>
      ),
    },
    {
      title: "5. How long we keep data",
      body: (
        <p>
          Enquiry data is kept for as long as needed to handle your request and for up to 24 months afterwards unless you become a patient. Clinical records are retained for the periods required by UAE health regulations. Newsletter data is kept until you unsubscribe. Analytics data is retained according to the provider's settings (Google Analytics: up to 14 months).
        </p>
      ),
    },
    {
      title: "6. Cookies and tracking",
      body: (
        <>
          <p>
            Essential cookies keep the website working (for example, remembering your cookie choice and language). Analytics and marketing cookies (Google Analytics 4 via Google Tag Manager, Meta Pixel) are set <strong className="text-secondary">only after you click "Accept"</strong> in the cookie banner. They help us see which pages are useful and measure our advertising. You can change your choice at any time by clearing your browser's site data, after which the banner appears again.
          </p>
        </>
      ),
    },
    {
      title: "7. Your rights",
      body: (
        <>
          <p>Under the UAE Personal Data Protection Law you may ask us to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>access the personal data we hold about you and receive a copy;</li>
            <li>correct inaccurate or incomplete data;</li>
            <li>delete your data, where we have no legal duty to retain it (clinical records are subject to statutory retention);</li>
            <li>restrict or object to processing, including direct marketing;</li>
            <li>withdraw consent at any time, without affecting processing already carried out.</li>
          </ul>
          <p className="mt-3">To exercise any right, email {CLINIC_EMAIL}. We respond within the period required by law. You may also lodge a complaint with the UAE Data Office.</p>
        </>
      ),
    },
    {
      title: "8. Security",
      body: (
        <p>
          We use appropriate technical and organisational measures — encrypted connections (HTTPS), access controls and staff confidentiality obligations — to protect your data. No transmission over the internet is completely secure; please do not send detailed medical information through the contact form.
        </p>
      ),
    },
    {
      title: "9. Children",
      body: (
        <p>
          We treat children as patients with the consent of a parent or guardian. This website is not directed at children and we do not knowingly collect their data online.
        </p>
      ),
    },
    {
      title: "10. Changes to this notice",
      body: (
        <p>
          We may update this notice from time to time. The date below shows when it was last revised. Material changes will be highlighted on this page.
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
        title="Privacy Policy"
        description={`How ${CLINIC_NAME} in Dubai collects, uses and protects your personal data, in line with the UAE Personal Data Protection Law.`}
        path="/privacy"
      />
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">How we collect, use and protect your personal information.</p>
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
          <p className="text-muted-foreground mb-6">Questions about our privacy practices?</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
