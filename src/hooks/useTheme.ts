"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check local storage for user preference, falling back to system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark

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