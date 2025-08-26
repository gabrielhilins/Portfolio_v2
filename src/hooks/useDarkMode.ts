// src/hooks/useDarkMode.ts
"use client";

import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isLocalStorageEnabled = typeof window !== 'undefined' && window.localStorage;
    
    if (isLocalStorageEnabled) {
      const savedMode = localStorage.getItem('darkMode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedMode) {
        const isDark = savedMode === 'true';
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
      } else {
        setDarkMode(systemPrefersDark);
        document.documentElement.classList.toggle('dark', systemPrefersDark);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newMode.toString());
      document.documentElement.classList.toggle('dark', newMode);
    }
  };

  return { darkMode, toggleDarkMode };
}
