"use client";

import { useState } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { RiSpeakFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import GabrielPhoto from "../../../public/DSC_5650.jpg";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useTheme } from "@/hooks/useTheme";
import ResumeModal from "@/components/common/ResumeModal";

const linkVariants = cva(
  "flex items-center space-x-4 w-full p-4 rounded-md shadow-lg transition-all transform hover:translate-y-[-2px] hover:scale-[1.03] hover:shadow-xl",
  {
    variants: {
      highlight: {
        true: "bg-primary text-white border-0",
        false: "bg-card text-foreground",
      },
    },
    defaultVariants: {
      highlight: false,
    },
  }
);

interface LinkItem {
  id: number;
  title: string;
  url: string | null;
  icon: React.ElementType;
  highlight?: boolean;
}

interface TranslationLink {
  id: number;
  title: string;
  url: string | null;
  highlight?: boolean;
}

const LinksPage = () => {
  const { t, i18n } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { darkMode, toggleDarkMode } = useTheme();
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

  const iconMap: { [key: number]: React.ElementType } = {
    1: MdWork,
    2: TbFileCv,
    3: FaLinkedin,
    4: FaGithub,
    5: FaGlobe,
    6: RiSpeakFill,
  };

  const agencyLinks: LinkItem[] = (
    i18n.t("links", { returnObjects: true }) as TranslationLink[]
  ).map((link) => ({
    ...link,
    icon: iconMap[link.id],
  }));

  const handleLinkClick = (url: string | null) => {
    if (!url) {
      setIsModalOpen(true);
    }
  };

  return (
    <div
      className={`bg-background min-h-screen flex flex-col items-center justify-center p-4 animate-slide-up ${
        darkMode ? "dark" : ""
      }`}
    >
      <div
        className={twMerge(
          "bg-card text-foreground w-full max-w-sm sm:max-w-md lg:max-w-lg p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl flex flex-col items-center animate-floating"
        )}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 mt-8">
          <div className="w-24 h-24 relative mb-4">
            <Image
              src={GabrielPhoto}
              alt={t("links_title")}
              fill
              className="rounded-full object-cover object-top"
            />
          </div>
          <div className="flex flex-row items-center space-x-4 mt-2 mb-4">
            <ThemeSwitcher
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <LanguageSwitcher />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-4">
            {t("links_title")}
          </h1>
          <p
            className="text-sm sm:text-base text-muted-foreground mt-1 text-center"
            dangerouslySetInnerHTML={{ __html: t("links_description") }}
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-4 w-full">
          {agencyLinks.map((link) => {
            const IconComponent = link.icon;
            const LinkOrAnchor =
              link.url && !link.url.startsWith("http") ? Link : "a";
            return (
              <LinkOrAnchor
                key={link.id}
                href={link.url || "#"}
                target={link.url?.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.url?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => handleLinkClick(link.url)}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={twMerge(
                  linkVariants({ highlight: link.highlight }),
                  !link.highlight && "border-gradient-blue"
                )}
              >
                <div
                  className={twMerge(
                    "flex items-center justify-center w-12 h-12 rounded-full transition-all",
                    hoveredId === link.id ? "scale-110" : "scale-100",
                    link.highlight ? "bg-white/20" : "bg-secondary"
                  )}
                >
                  <IconComponent size={30} className="text-white" />
                </div>
                <span
                  className={`text-base sm:text-lg ${
                    link.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {link.title}
                </span>
              </LinkOrAnchor>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground text-xs sm:text-sm">
          {t("links_footer", { year: new Date().getFullYear() })}
        </div>
      </div>

      <ResumeModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        curriculumUrl={getCurriculoURL()}
        pdfUrl={getPdfCurriculoURL()}
        title={t("tooltip_resume")}
        downloadButtonText={t("hero_cta_download_resume", {
          defaultValue: "Download Resume as PDF",
        })}
      />
    </div>
  );
};

export default LinksPage;
