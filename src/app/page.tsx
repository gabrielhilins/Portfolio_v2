"use client"

import { useState, useEffect } from "react"

// Importações dos componentes de layout e seção
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/sections/HeroSection"
import AboutSection from "@/sections/AboutSection"
import SkillsSection from "@/sections/SkillSection"
import ProjectsSection from "@/sections/ProjectsSection"
import ExperienceSection from "@/sections/ExperienceSection"
import CertificatesSection from "@/sections/CertificatesSection"
import GGABSSection from "@/sections/GGABSSection"
import ContactSection from "@/sections/ContactSection"
import { Tooltip } from "react-tooltip"
import { projectsWithIds } from "@/lib/projects-data"
import { ToastContainer } from "react-toastify"
import { useTheme } from "@/hooks/useTheme"

export default function Portfolio() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projectsWithIds}/>
      <ExperienceSection />
      <CertificatesSection />
      <GGABSSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />

      {/* Tooltips para Hero e Footer */}
      <Tooltip id="github-tooltip" />
      <Tooltip id="linkedin-tooltip" />
      <Tooltip id="resume-tooltip" />
      <Tooltip id="view-projects-tooltip" />
      <Tooltip id="connect-tooltip" />
      <Tooltip id="scroll-down-tooltip" />
      <Tooltip id="footer-github-tooltip" />
      <Tooltip id="footer-linkedin-tooltip" />
      <Tooltip id="footer-instagram-tooltip" />
    </div>
  )
}