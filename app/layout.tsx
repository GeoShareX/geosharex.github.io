import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "GeoShareX - Share Location with Friends & Family",
    template: "%s | GeoShareX",
  },
  description:
    "GeoShareX is a location-sharing app that lets users create groups, share location pins on a map, and collaborate with friends and family.",
  keywords: [
    "location sharing",
    "GPS tracking",
    "family locator",
    "friends location",
    "map sharing",
    "group location",
    "real-time location",
    "geolocation app",
  ],
  authors: [{ name: "GeoShareX Team" }],
  creator: "GeoShareX",
  publisher: "GeoShareX",
  metadataBase: new URL("https://geosharex.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geosharex.it",
    siteName: "GeoShareX",
    title: "GeoShareX - Share Location with Friends & Family",
    description:
      "Share your location in real-time with friends and family. Create groups, drop pins on maps, and stay connected.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "GeoShareX - Location Sharing App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoShareX - Share Location with Friends & Family",
    description:
      "Share your location in real-time with friends and family. Create groups, drop pins on maps, and stay connected.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LGXSYZHBT3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LGXSYZHBT3');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
