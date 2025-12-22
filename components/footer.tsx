"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/unnamed.jpg" alt="GeoShareX" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-lg text-foreground">GeoShareX</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="/support" className="hover:text-foreground transition-colors">
              Support
            </a>
            <a href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground/70">© 2025 GeoShareX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
