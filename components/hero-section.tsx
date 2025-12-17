"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-black">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/unnamed.jpg"
            alt="GeoShareX Logo"
            width={120}
            height={120}
            className="mx-auto rounded-2xl"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
        >
          GeoShare<span className="text-gray-500">X</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed"
        >
          Share your location. Connect with your people.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Create groups, share location pins on a map, and collaborate seamlessly with friends and family.
        </motion.p>

        <div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
