// src/components/sections/ContactSection.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Seção de Título e Subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t("contact_title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-4 animate-fade-in">
            {t("contact_subtitle")}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in text-justify">
            {t("contact_description")}
          </p>
        </div>

        {/* Div principal para os dois cards em linha */}
        <div className="flex flex-col md:flex-row md:justify-center gap-8 mb-12">
          {/* Card de Informações de Contato */}
          <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl flex-1">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t("contact_info_title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:bg-accent/10 p-2 rounded-lg transition-colors duration-300">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MdMail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">{t("contact_info_email")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:bg-accent/10 p-2 rounded-lg transition-colors duration-300">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <FaPhoneAlt className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground">{t("contact_info_phone")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:bg-accent/10 p-2 rounded-lg transition-colors duration-300">
                  <div className="p-2 rounded-full bg-primary/10">
                    <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t("contact_info_location_label")}
                    </p>
                    <p className="text-muted-foreground">{t("contact_info_location")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de Redes Sociais */}
          <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl flex-1">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t("contact_social")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/gabrielhilins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent hover:bg-[#181717] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/gabriel-henrique-lins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/ggabstechdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent hover:bg-[#E4405F] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5581999034034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span className="font-medium">Whatsapp</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card do CTA - Call-to-Action - Abaixo dos dois primeiros */}
        <div className="flex justify-center mt-12">
          <Card className="w-full max-w-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl flex items-center justify-center text-center">
            <CardContent className="p-0 w-full">
              <FaPaperPlane className="h-16 w-16 mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t("contact_form_cta_title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("contact_form_cta_subtitle")}
              </p>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {t("contact_form_cta_button")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}