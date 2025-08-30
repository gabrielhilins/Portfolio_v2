import React from "react";
import { TFunction } from "i18next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";

interface BackToHomeButtonProps {
  t: TFunction;
}

const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({ t }) => {
  return (
    <Link href="/" passHref>
      <Button
        size="lg"
        className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <FaHome className="h-5 w-5" />
        <span className="hidden sm:inline">{t("contact_back_button")}</span>
      </Button>
    </Link>
  );
};

export default BackToHomeButton;