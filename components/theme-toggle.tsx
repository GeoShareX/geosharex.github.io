"use client"

import * as React from "react"
import { Moon, Sun, Home } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    setIsAnimating(true)
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setTimeout(() => setIsAnimating(false), 500)
  }

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          className="p-3 rounded-full bg-secondary border border-border shadow-lg"
          aria-label="Toggle theme"
        >
          <div className="w-5 h-5" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {!isHomePage && (
        <Link
          href="/"
          className="p-3 rounded-full bg-secondary border border-border shadow-lg hover:bg-accent hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Go to home"
        >
          <Home className="w-5 h-5 text-foreground" />
        </Link>
      )}
      <button
        onClick={handleThemeChange}
        className="p-3 rounded-full bg-secondary border border-border shadow-lg hover:bg-accent hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Toggle theme"
      >
        <div className={`transform ${isAnimating ? "animate-spin" : ""}`} style={{ animationDuration: "0.5s" }}>
          {resolvedTheme === "dark" ? (
            <Sun className={`w-5 h-5 text-foreground transition-transform duration-300 ${isAnimating ? "scale-110" : ""}`} />
          ) : (
            <Moon className={`w-5 h-5 text-foreground transition-transform duration-300 ${isAnimating ? "scale-110" : ""}`} />
          )}
        </div>
      </button>
    </div>
  )
}
