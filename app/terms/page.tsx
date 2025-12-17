import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service - GeoShareX",
  description: "Terms of Service for GeoShareX location sharing application",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-xl font-semibold hover:text-gray-300 transition-colors">
            GeoShareX
          </Link>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: December 2025</p>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using GeoShareX, you agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed">
                GeoShareX is a location-sharing application that allows users to create groups, share location pins
                on a map, view real-time positions of group members, and navigate routes together. The service is
                provided &quot;as is&quot; and may be modified or discontinued at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">To use GeoShareX, you must:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Create an account with accurate information</li>
                <li>Be at least 13 years of age</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You agree not to use GeoShareX to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Track or monitor individuals without their consent</li>
                <li>Harass, stalk, or harm others</li>
                <li>Share inappropriate, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to the service or other users&apos; accounts</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use the service for any illegal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Location Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                Location sharing is a core feature of GeoShareX. By joining a group, you consent to sharing your
                real-time location with other group members. You can leave a group at any time to stop sharing
                your location. You are responsible for ensuring you have appropriate permissions from individuals
                whose locations may be shared.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Group Conduct</h2>
              <p className="text-gray-300 leading-relaxed">
                Group creators are responsible for managing their groups appropriately. All group members must
                respect each other&apos;s privacy and use the service in good faith. Inappropriate conduct may result
                in account suspension or termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                GeoShareX and its content, features, and functionality are owned by GeoShareX and are protected
                by international copyright, trademark, and other intellectual property laws. You may not copy,
                modify, distribute, or create derivative works without our explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                GeoShareX uses third-party services including map providers and routing APIs. Your use of these
                features is also subject to the terms and conditions of those third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                GeoShareX is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the service
                will be uninterrupted, secure, or error-free. Location accuracy depends on various factors including
                your device and network conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, GeoShareX shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms of Service from time to time. We will notify users of significant changes.
                Continued use of GeoShareX after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@geosharex.com" className="text-white underline hover:text-gray-300">
                  legal@geosharex.com
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
