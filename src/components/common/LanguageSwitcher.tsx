"use client";

import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import React from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
    >
      {i18n.language === 'pt' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="https://flagcdn.com/br.svg" alt="Bandeira do Brasil" className="h-4 w-auto rounded-sm" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="h-4 w-auto " />
      )}
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </Button>
  );
}