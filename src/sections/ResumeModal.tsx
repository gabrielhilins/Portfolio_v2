"use client";

import type React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ResumeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  curriculumUrl: string;
  pdfUrl: string;
  title: string;
  downloadButtonText: string;
}

export default function ResumeModal({
  isOpen,
  onOpenChange,
  curriculumUrl,
  pdfUrl,
  title,
  downloadButtonText,
}: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {/* Embed do currículo */}
          <iframe
            src={curriculumUrl}
            className="w-full h-[60vh] border rounded-lg"
            title="Curriculum"
          />
          {/* Botão para baixar o PDF */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            {downloadButtonText}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}