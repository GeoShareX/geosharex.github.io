"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.svg" alt="GeoShareX" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-lg text-foreground">GeoShareX</span>
          </Link>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/support" className="hover:text-foreground transition-colors">
              Support
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-sm text-muted-foreground/70">© 2025 GeoShareX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
