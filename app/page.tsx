import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
