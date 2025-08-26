"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFileAlt } from "react-icons/fa";
import ResumeModal from "@/components/common/ResumeModal";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const curriculoPTURL =
    "https://docs.google.com/document/d/1sc9UWKLyZEcTQIUAUYoWo0BrBVBuwwtoE7-M7I8bxDk/pub?embedded=true";
  const pdfCurriculoPTURL =
    "https://docs.google.com/document/d/1sc9UWKLyZEcTQIUAUYoWo0BrBVBuwwtoE7-M7I8bxDk/export?format=pdf";

  const curriculoENURL =
    "https://docs.google.com/document/d/1sSgFU1u_diYgDnnpqVwuKLdlw5nwr7wee0tjY90Swsk/pub?embedded=true";
  const pdfCurriculoENURL =
    "https://docs.google.com/document/d/1sSgFU1u_diYgDnnpqVwuKLdlw5nwr7wee0tjY90Swsk/export?format=pdf";

  // Função para obter o URL do currículo com base no idioma
  const getCurriculoURL = () => {
    return i18n.language === "en" ? curriculoENURL : curriculoPTURL;
  };

  const getPdfCurriculoURL = () => {
    return i18n.language === "en" ? pdfCurriculoENURL : pdfCurriculoPTURL;
  };

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
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="footer-resume-tooltip"
            data-tooltip-content={t("tooltip_resume")}
          >
            <FaFileAlt className="h-5 w-5" />
          </button>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm mb-2">
            {t("footer_copyright")}
          </p>
        </div>

        {/* Modal reutilizável para exibir o currículo */}
        <ResumeModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          curriculumUrl={getCurriculoURL()}
          pdfUrl={getPdfCurriculoURL()}
          title={t("tooltip_resume")}
          downloadButtonText={t("hero_cta_download_resume", { defaultValue: "Download Resume as PDF" })}
        />
      </div>
    </footer>
  );
}