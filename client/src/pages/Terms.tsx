import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg space-y-8">
            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Your Smile Advanced Dental Center website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Your Smile's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mt-3">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Your Smile's website are provided on an 'as is' basis. Your Smile makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Your Smile or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Your Smile's website.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Your Smile's website could include technical, typographical, or photographic errors. Your Smile does not warrant that any of the materials on our website are accurate, complete, or current. Your Smile may make changes to the materials contained on our website at any time without notice.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your Smile has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Your Smile of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your Smile may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">9. Appointment & Service Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-secondary">Cancellation Policy:</strong> Appointments should be cancelled or rescheduled at least 24 hours in advance to avoid cancellation fees.</p>
                <p><strong className="text-secondary">Payment Terms:</strong> Payment is due at the time of service unless alternative arrangements have been made.</p>
                <p><strong className="text-secondary">Medical Advice Disclaimer:</strong> Information on our website and provided during consultations is for educational purposes and should not be considered as medical advice. Always consult with our dentists for personalized treatment.</p>
              </div>
            </div>

            <div className="prose-section">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">10. Contact Information</h2>
              <div className="text-muted-foreground space-y-2">
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                <p><strong className="text-secondary">Email:</strong> info@yoursmileadcdubai.com</p>
                <p><strong className="text-secondary">Phone:</strong> +971 58 828 2432</p>
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
          <p className="text-muted-foreground mb-6">Need to speak with us?</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
