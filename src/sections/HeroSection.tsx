"use client";

import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn, FaInstagram, FaChevronDown, FaFileAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import ResumeModal from "./ResumeModal";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Fundo animado para um efeito visual suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>

      {/* Conteúdo principal da seção Hero */}
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        {/* Saudação inicial */}
        <p className="text-lg text-muted-foreground mb-4 font-light animate-slide-up">
          {t("hero_greeting")}
        </p>

        {/* Nome do usuário com gradiente e animação */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
          {t("hero_name")}
        </h1>

        {/* Título/cargo do usuário */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8 animate-slide-up">
          {t("hero_title")}
        </h2>

        {/* Subtítulo ou breve descrição */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 animate-slide-up">
          {t("hero_subtitle")}
        </p>

        {/* Links para redes sociais e currículo */}
        <div className="flex items-center justify-center gap-6 mb-12 animate-slide-up">
          {/* Link para o GitHub */}
          <a
            href="https://github.com/gabrielhilins"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="github-tooltip"
            data-tooltip-content={t("tooltip_github")}
          >
            <FaGithub className="h-5 w-5" />
          </a>
          {/* Link para o LinkedIn */}
          <a
            href="https://linkedin.com/in/gabriel-henrique-lins"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content={t("tooltip_linkedin")}
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          {/* Botão para abrir o modal do currículo */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
            data-tooltip-id="resume-tooltip"
            data-tooltip-content={t("tooltip_resume")}
          >
            <FaFileAlt className="h-5 w-5" />
          </button>
        </div>

        {/* Botões de CTA (Chamada para Ação) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
          {/* Botão para ver os projetos, com o ícone GrProjects */}
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2"
            data-tooltip-id="view-projects-tooltip"
            data-tooltip-content={t("tooltip_viewProjects")}
          >
            <GrProjects className="h-5 w-5" /> {/* Ícone para Projetos */}
            {t("hero_cta1")}
          </Button>
          {/* Botão para conectar, com o ícone FaRegHandshake */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2"
            data-tooltip-id="connect-tooltip"
            data-tooltip-content={t("tooltip_connect")}
          >
            <FaRegHandshake className="h-5 w-5" /> {/* Ícone para Conectar */}
            {t("hero_cta2")}
          </Button>
        </div>

        {/* Botão para rolar para baixo, com animação de pulsação */}
        <div className="flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            data-tooltip-id="scroll-down-tooltip"
            data-tooltip-content={t("tooltip_scrollDown")}
          >
            <span className="text-sm mb-2">{t("hero_scrollDown")}</span>
            <FaChevronDown className="h-5 w-5" />
          </button>
        </div>

        <ResumeModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          curriculumUrl={getCurriculoURL()}
          pdfUrl={getPdfCurriculoURL()}
          title={t("tooltip_resume")}
          downloadButtonText={t("hero_cta_download_resume", { defaultValue: "Download Resume as PDF" })}
        />
      </div>
    </section>
  );
}