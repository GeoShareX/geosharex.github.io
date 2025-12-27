import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - GeoShareX",
  description: "Privacy Policy for GeoShareX location sharing application",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-xl font-semibold hover:text-muted-foreground transition-colors">
            GeoShareX
          </Link>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group underline"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2025</p>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to GeoShareX. We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you use our
                location-sharing application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Account Information:</strong> Username, email address (optional), and authentication credentials</li>
                <li><strong>Location Data:</strong> Real-time location coordinates when you choose to share your location with group members</li>
                <li><strong>Group Data:</strong> Information about groups you create or join, including group names and shared pins</li>
                <li><strong>Device Information:</strong> Device type, operating system, and app version for troubleshooting purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Your information is used to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and maintain our location-sharing services</li>
                <li>Enable real-time location sharing within your groups</li>
                <li>Display shared pins and routes on maps</li>
                <li>Authenticate your account and ensure security</li>
                <li>Improve and optimize our application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Location Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Location sharing is entirely opt-in. Your location is only shared with members of groups you explicitly
                join. You can stop sharing your location at any time by leaving a group or disabling location permissions
                on your device. We retain location data only while you are actively sharing and for a limited time afterward
                for service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal data. Your location information is only shared with other members of groups
                you have joined. We may share anonymized, aggregated data for analytics purposes. We use third-party
                services (such as map tile providers) that may have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data, including encrypted connections (TLS),
                secure token-based authentication, and regular security audits. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of location sharing at any time</li>
                <li>Export your data upon request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or your data, please contact us at{" "}
                <a href="mailto:privacy@geosharex.it" className="text-foreground underline hover:text-muted-foreground">
                  privacy@geosharex.it
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
