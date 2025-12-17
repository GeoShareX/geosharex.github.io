"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/unnamed.jpg" alt="GeoShareX" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-lg text-white">GeoShareX</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/support" className="hover:text-white transition-colors">
              Support
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-gray-500">© 2025 GeoShareX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
