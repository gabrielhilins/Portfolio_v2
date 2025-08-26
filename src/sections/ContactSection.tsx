"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaSpinner,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Initialize EmailJS with public key
  React.useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    });
  }, []);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = t("contact_form_name_required") || "Nome é obrigatório";
    }
    if (!email.trim()) {
      newErrors.email = t("contact_form_email_required") || "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t("contact_form_email_invalid") || "Email inválido";
    }
    if (!message.trim()) {
      newErrors.message = t("contact_form_message_required") || "Mensagem é obrigatória";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("contact_form_validation_error") || "Por favor, corrija os erros no formulário");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          user_name: name,
          user_email: email,
          message: message,
        }
      );
      toast.success(t("contact_form_success") || "Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast.error(t("contact_form_error") || "Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl flex items-center min-h-[400px]">
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
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
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
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
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
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  disabled={isSending}
                >
                  {isSending ? (
                    <FaSpinner className="h-5 w-5 mr-2 animate-spin" />
                  ) : (
                    <FaPaperPlane className="h-5 w-5 mr-2" />
                  )}
                  {isSending ? "Enviando..." : t("contact_form_send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl">
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

            <Card className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl">
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
        </div>
      </div>
      
    </section>
  );
}