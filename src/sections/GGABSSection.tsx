/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/sections/GGABSSection.tsx
"use client";

import type React from "react";
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GGABS from "../../public/GGABSLogo.png";

export default function GGABSSection() {
  const { t } = useTranslation();

  return (
    <section id="ggabs" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t('ggabs_title')}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t('ggabs_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up text-justify">
            <p className="text-lg text-foreground leading-relaxed">
              {t('ggabs_description')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('ggabs_mission')}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t('ggabs_services')}
            </p>

            <a 
              href="https://www.ggabstechdesign.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#111D3E] via-[#2E4377] to-[#A1C4FF] hover:from-[#111D3E]/90 hover:via-[#2E4377]/90 hover:to-[#A1C4FF]/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <FaExternalLinkAlt className="h-5 w-5 mr-2" />
                {t('ggabs_cta')}
              </Button>
            </a>
          </div>

          <div className="relative animate-fade-in flex justify-center items-center">
            <div
              className="w-full h-96 rounded-2xl p-6 flex items-center justify-center border border-[#5A7CFF]/20"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #111D3E, #2E4377, #5A7CFF, #A1C4FF)",
              }}
            >
              <Image
                src={GGABS}
                alt="GGABS Logo"
                width={320}
                height={320}
                className="w-full h-auto max-h-80 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
