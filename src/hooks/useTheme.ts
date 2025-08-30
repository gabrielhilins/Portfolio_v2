"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check local storage for user preference
    const savedTheme = localStorage.getItem("theme")
    const hour = new Date().getHours()
    const isNight = hour >= 18 || hour < 6

    // Set initial theme: use saved preference if available, otherwise use time-based
    const initialDarkMode = savedTheme ? savedTheme === "dark" : isNight
    setDarkMode(initialDarkMode)
    if (initialDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark")
    // Save user preference to local storage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  return { darkMode, toggleDarkMode }
}