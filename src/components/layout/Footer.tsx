"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span className="font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gabriel Henrique Lins
            </span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t("footer_slogan")}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://github.com/gabrielhilins"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="footer-github-tooltip"
            data-tooltip-content={t("tooltip_footer_github")}
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/gabriel-henrique-lins"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="footer-linkedin-tooltip"
            data-tooltip-content={t("tooltip_footer_linkedin")}
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/ggabstechdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="footer-instagram-tooltip"
            data-tooltip-content={t("tooltip_footer_instagram")}
          >
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm mb-2">
            {t("footer_copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}