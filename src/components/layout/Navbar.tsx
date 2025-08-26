/* eslint-disable @next/next/no-img-element */
// src/components/layout/Navbar.tsx
"use client";

import type React from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { FaMoon, FaSun} from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Button } from "@/components/ui/button";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

// Define the navigation keys in an array
const navKeys = ['about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

export default function Navbar({
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrolled,
  scrollToSection,
}: NavbarProps) {
  const { t, i18n } = useTranslation(); // Use the hook

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2"
          >
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GHL
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navKeys.map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-200 font-medium group cursor-pointer"
              >
                {t(`nav_${key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
            >
              {i18n.language === 'pt' ? (
                <img src="https://flagcdn.com/br.svg" alt="Bandeira do Brasil" className="h-4 w-auto rounded-sm" />
              ) : (
                <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="h-4 w-auto " />
              )}
              <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
            >
              {darkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
            >
              {mobileMenuOpen ? <IoMdClose className="h-5 w-5" /> : <IoMdMenu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navKeys.map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium rounded-lg cursor-pointer"
              >
                {t(`nav_${key}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
