"use client"

import { FaMoon, FaSun } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"

interface ThemeSwitcherProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function ThemeSwitcher({ darkMode, toggleDarkMode }: ThemeSwitcherProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const hour = new Date().getHours()
    const isDayTime = hour >= 6 && hour < 18
    // Only set initial theme if it hasn't been manually changed
    if (!localStorage.getItem('theme')) {
      if (isDayTime && darkMode) {
        toggleDarkMode()
      } else if (!isDayTime && !darkMode) {
        toggleDarkMode()
      }
    }
  }, [darkMode, toggleDarkMode])

  if (!isMounted) return null

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        toggleDarkMode()
        // Store user's manual theme preference
        localStorage.setItem('theme', darkMode ? 'light' : 'dark')
      }}
      className="hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FaSun className="h-4 w-4" />
      ) : (
        <FaMoon className="h-4 w-4" />
      )}
    </Button>
  )
}