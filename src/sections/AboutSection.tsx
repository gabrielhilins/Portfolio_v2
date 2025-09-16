"use client";

import type React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import GabrielHenriqueLins from '../../public/DSC_5688.jpg'

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t('about_title')}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t('about_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6 animate-slide-up text-justify">
            <p className="text-lg text-foreground leading-relaxed">
              {t('about_description')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about_passion')}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about_mission')}
            </p>
          </div>

          <div className="relative animate-fade-in">
            <div className="w-full min-h-full rounded-2xl relative overflow-hidden">
              {/* Imagem de fundo */}
              <Image
                src={GabrielHenriqueLins}
                alt="Background para a seção sobre mim"
                className="object-cover object-position-[40%_20%] absolute inset-0 w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}