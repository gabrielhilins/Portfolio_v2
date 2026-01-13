"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToHomeButton from "@/components/common/BackHomeButton";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useTheme } from "@/hooks/useTheme";

export default function ContactPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const { darkMode, toggleDarkMode } = useTheme();

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = t("contact_form_name_required") || "Nome é obrigatório";
    }
    if (!email.trim()) {
      newErrors.email =
        t("contact_form_email_required") || "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t("contact_form_email_invalid") || "Email inválido";
    }
    if (!message.trim()) {
      newErrors.message =
        t("contact_form_message_required") || "Mensagem é obrigatória";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(
        t("contact_form_validation_error") ||
          "Por favor, corrija os erros no formulário"
      );
      return;
    }

    const subject = encodeURIComponent(`Contato via Portfólio - ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    );
    const mailtoLink = `mailto:gabrielhilins@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast.success(
      t("contact_form_success") || "Mensagem enviada com sucesso!"
    );
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-row justify-center space-x-4 mb-2">
        <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />{" "}
        <LanguageSwitcher />
      </div>
      <div className="w-full flex justify-center mb-8">
        <BackToHomeButton t={t} />
      </div>

      <div className="max-w-lg mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("contact_form_title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("contact_form_subtitle")}
          </p>
        </div>
        <Card className="p-8 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl">
          <CardContent className="p-0 w-full">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FaPaperPlane className="h-6 w-6 text-primary" />
              {t("contact_form_send")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact_form_name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("contact_form_name_placeholder")}
                  className="w-full border-2 border-muted hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact_form_email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact_form_email_placeholder")}
                  className="w-full border-2 border-muted hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact_form_message")}
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder={t("contact_form_message_placeholder")}
                  className="w-full border-2 border-muted hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <FaPaperPlane className="h-5 w-5 mr-2" />
                {t("contact_form_send")}
              </Button>
            </form>

            <div className="mt-6 flex flex-col items-center">
              <p className="text-center text-sm text-muted-foreground mb-4">
                {t("contact_whatsapp_option_text")}
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5581999034034"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm"
              >
                <Button
                  size="lg"
                  className="w-full flex items-center gap-2 bg-muted hover:bg-[#25D366] text-foreground hover:text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span className="font-medium">
                    {t("contact_whatsapp_button_text")}
                  </span>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
}
