"use client";

import type React from "react";
import { useTranslation } from "react-i18next";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import Link from "next/link";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  scrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const navKeys = ["about", "skills", "projects", "experience", "certificates", "contact"];

export default function Navbar({
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrolled,
  scrollToSection,
}: NavbarProps) {
  const { t } = useTranslation();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GHL
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navKeys.map((key) =>
              key === "contact" ? (
                <Link
                  key={key}
                  href="/contact"
                  className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-200 font-medium group cursor-pointer"
                  aria-label={t(`nav_${key}`)}
                >
                  {t(`nav_${key}`)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-200 font-medium group cursor-pointer"
                  aria-label={t(`nav_${key}`)}
                >
                  {t(`nav_${key}`)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            )}
          </div>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <IoMdClose className="h-5 w-5" /> : <IoMdMenu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navKeys.map((key) =>
              key === "contact" ? (
                <Link
                  key={key}
                  href="/contact"
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium rounded-lg cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={t(`nav_${key}`)}
                >
                  {t(`nav_${key}`)}
                </Link>
              ) : (
                <button
                  key={key}
                  onClick={() => {
                    scrollToSection(key);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium rounded-lg cursor-pointer"
                  aria-label={t(`nav_${key}`)}
                >
                  {t(`nav_${key}`)}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}