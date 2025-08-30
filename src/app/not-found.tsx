"use client";

import BackToHomeButton from "@/components/common/BackHomeButton";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-8">
      <div className="w-full flex flex-row justify-center space-x-4 mb-2">
        <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />{" "}
        <LanguageSwitcher />
      </div>
      <h1 className="text-9xl font-bold text-foreground">404</h1>
      <h2 className="text-4xl font-semibold text-foreground/70 mt-2 mb-4">
        {t("not_found_title")}
      </h2>
      <p className="text-lg text-foreground/60 mt-2 mb-4">
        {t("not_found_text")}
      </p>
      <BackToHomeButton t={t} />
    </div>
  );
}
