"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Certificate } from "@/lib/types";
import { certificatesData } from "@/lib/certificates-data";
import Image from "next/image";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export default function CertificatesSection() {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t('certificates_title')}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t('certificates_subtitle')}
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="pb-12 custom-swiper"
        >
          {certificatesData.map((certificate: Certificate) => (
            <SwiperSlide key={certificate.id}>
              <Card className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card flex flex-col h-full border border-transparent dark:border-gradient-red">
                <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={certificate.image}
                    alt={t(certificate.titleKey)}
                    className="object-cover w-full h-full rounded-t-xl"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-1">{t(certificate.titleKey)}</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <FaBuilding className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium">{t('certificates_issuedBy')}:</span>
                    <span className="ml-1">{t(certificate.issuerKey)}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <FaCalendarAlt className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium">{t('certificates_issueDate')}:</span>
                    <span className="ml-1">{certificate.issueDate}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4 text-justify">
                    {t(certificate.descriptionKey)}
                  </p>

                  <div className="flex justify-center mt-auto">
                    {certificate.pdfUrl && (
                      <a href={certificate.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-primary hover:bg-primary-600 text-white cursor-pointer">
                          <PiCertificateFill className="h-4 w-4 mr-2" />
                          {t('certificates_viewCertificate')}
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
