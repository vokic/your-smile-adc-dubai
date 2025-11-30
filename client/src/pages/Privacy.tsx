import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Your privacy is important to us. Learn how we protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg space-y-8">
            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your Smile Advanced Dental Center ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">2. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-secondary">Personal Information:</strong> When you book an appointment, contact us, or use our services, we may collect your name, email address, phone number, date of birth, and dental health information.</p>
                <p><strong className="text-secondary">Payment Information:</strong> We securely process payment details through encrypted payment gateways. We do not store complete credit card information on our servers.</p>
                <p><strong className="text-secondary">Usage Data:</strong> We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</p>
              </div>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>To provide and improve our dental services</li>
                <li>To schedule and manage your appointments</li>
                <li>To send appointment reminders and follow-up communications</li>
                <li>To process payments and invoices</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">5. Third-Party Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell or share your personal information with third parties for marketing purposes. We may share information with:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mt-3">
                <li>Healthcare providers for treatment purposes</li>
                <li>Payment processors to process your payments</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience. You can control cookie settings in your browser preferences. Disabling cookies may affect some website functionality.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@yoursmileadcdubai.com.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">8. Contact Us</h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong className="text-secondary">Email:</strong> info@yoursmileadcdubai.com</p>
                <p><strong className="text-secondary">Phone:</strong> +971 58 828 2432</p>
                <p><strong className="text-secondary">Address:</strong> HDS Business Centre, Jumeirah Lake Towers, Dubai, UAE</p>
              </div>
            </div>

            <div className="prose-section">
              <p className="text-muted-foreground text-sm">
                <em>Last Updated: November 2024</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
