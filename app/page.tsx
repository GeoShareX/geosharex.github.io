import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
