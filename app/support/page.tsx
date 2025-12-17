import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Support - GeoShareX",
  description: "Get help and support for GeoShareX location sharing application",
}

export default function SupportPage() {
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
          <h1 className="text-4xl font-bold mb-4">Support</h1>
          <p className="text-gray-400 mb-12 text-lg">
            Need help? We&apos;re here to assist you with GeoShareX.
          </p>

          <div className="space-y-12">
            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">How do I create a group?</h3>
                  <p className="text-gray-400">
                    Open the app and tap the &quot;+&quot; button on the home screen. Enter a name for your group and
                    tap &quot;Create&quot;. You&apos;ll receive a unique 6-character code that you can share with friends
                    and family to invite them.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">How do I join an existing group?</h3>
                  <p className="text-gray-400">
                    Tap the &quot;Join Group&quot; button on the home screen and enter the 6-character invite code
                    shared by the group creator. The code is case-insensitive.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">How do I add a pin to the map?</h3>
                  <p className="text-gray-400">
                    In the map view, tap the pin button in the bottom right corner to enter &quot;add pin&quot; mode,
                    then tap anywhere on the map. You can also long-press on the map to quickly add a pin
                    at that location. Give your pin a name and optional description.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">Can I see other group members&apos; locations in real-time?</h3>
                  <p className="text-gray-400">
                    Yes! When you&apos;re in a group, you can see the real-time position of all group members who
                    have location sharing enabled. Each member appears as a marker on the map with their
                    username.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">How do I stop sharing my location?</h3>
                  <p className="text-gray-400">
                    You can leave a group to stop sharing your location with that group&apos;s members.
                    Alternatively, you can disable location permissions for the app in your device settings.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">What does &quot;Disappear on arrival&quot; mean?</h3>
                  <p className="text-gray-400">
                    When this setting is enabled in group settings, pins will automatically be marked as
                    reached when you arrive at their location. The group creator can toggle this feature
                    in the group settings.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-medium mb-2">Why is my location not updating?</h3>
                  <p className="text-gray-400">
                    Ensure location services are enabled on your device and that GeoShareX has permission
                    to access your location. Also check that you have a stable internet connection.
                    Location updates require both GPS and network connectivity.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Still Need Help?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium">Email Support</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Send us an email and we&apos;ll get back to you within 24-48 hours.
                  </p>
                  <a
                    href="mailto:support@geosharex.com"
                    className="text-white underline hover:text-gray-300"
                  >
                    support@geosharex.com
                  </a>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium">Documentation</h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Check out our detailed guides and documentation.
                  </p>
                  <span className="text-gray-500">
                    Coming soon
                  </span>
                </div>
              </div>
            </section>

            {/* Report a Bug */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Report a Bug</h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  Found a bug or issue? Help us improve GeoShareX by reporting it. Please include:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-4">
                  <li>A description of the issue</li>
                  <li>Steps to reproduce the problem</li>
                  <li>Your device model and OS version</li>
                  <li>App version (found in settings)</li>
                  <li>Screenshots if applicable</li>
                </ul>
                <a
                  href="mailto:bugs@geosharex.com"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Report Bug
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
