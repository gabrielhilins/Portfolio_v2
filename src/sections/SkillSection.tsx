"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCodeBranch, FaEllipsisH, FaVial } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { HardSkill, SoftSkill } from "@/lib/types";
import { IoCodeSlash } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { CgColorPicker, CgScreen } from "react-icons/cg";
import { BsStack } from "react-icons/bs";
import { FaPalette, FaInfinity } from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { hardSkillsData, softSkillsData } from "@/lib/skills-data";
import { RiFlowChart } from "react-icons/ri";

export default function SkillsSection() {
  const { t } = useTranslation();
  const [skillType, setSkillType] = useState<"hard" | "soft">("hard");

  const getLevelClass = (levelKey: string) => {
    switch (levelKey) {
      case "skill_level_advanced":
        return "text-green-500";
      case "skill_level_intermediate":
        return "text-yellow-500";
      case "skill_level_basic":
        return "text-blue-500";
      default:
        return "";
    }
  };

  const getProficiencyClass = (proficiencyKey: string) => {
    switch (proficiencyKey) {
      case "skill_proficiency_developed":
        return "text-green-500";
      case "skill_proficiency_in_development":
        return "text-blue-500";
      default:
        return "";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t("skills_title")}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t("skills_subtitle")}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <RadioGroup
            defaultValue="hard"
            onValueChange={(value: "hard" | "soft") => setSkillType(value)}
            className="flex space-x-4 p-2 bg-background rounded-full shadow-sm"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hard" id="hard-skills" className="peer sr-only" />
              <Label
                htmlFor="hard-skills"
                className={`py-2 px-6 rounded-full cursor-pointer transition-colors duration-300 text-foreground hover:bg-muted ${
                  skillType === "hard"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }`}
              >
                <IoCodeSlash className="inline-block h-5 w-5 mr-2" />
                {t("skills_hardSkills")}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="soft" id="soft-skills" className="peer sr-only" />
              <Label
                htmlFor="soft-skills"
                className={`py-2 px-6 rounded-full cursor-pointer transition-colors duration-300 text-foreground hover:bg-muted ${
                  skillType === "soft"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                <HiUserGroup className="inline-block h-5 w-5 mr-2" />
                {t("skills_softSkills")}
              </Label>
            </div>
          </RadioGroup>
        </div>

        {skillType === "hard" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(hardSkillsData).map(([category, skills]) => (
              <Card key={category} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    {(() => {
                      switch (category) {
                        case "backend":
                          return <BsStack className="text-primary text-xl mr-1" />;
                        case "frontend":
                          return <CgScreen className="text-primary text-xl mr-1" />;
                        case "styling":
                          return <CgColorPicker className="text-primary text-xl mr-1" />;
                        case "design":
                          return <FaPalette className="text-primary text-xl mr-1" />;
                        case "devops":
                          return <FaInfinity className="text-primary text-xl mr-1" />;
                        case "databases":
                          return <HiCircleStack className="text-primary text-xl mr-1" />;
                        case "methodologies":
                          return <RiFlowChart className="text-primary text-xl mr-1" />;
                        case "tests":
                          return <FaVial className="text-primary text-xl mr-1" />;
                        case "versioning":
                          return <FaCodeBranch className="text-primary text-xl mr-1" />;
                        case "others":
                          return <FaEllipsisH className="text-primary text-xl mr-1" />;
                        default:
                          return null;
                      }
                    })()}
                    {t(`skills_cat_${category}`)}
                  </h4>
                  <div className="space-y-3">
                    {(skills as unknown as HardSkill[]).map((skill: HardSkill) => (
                      <div key={skill.nameKey} className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          {skill.icon && <i className={`${skill.icon} text-lg`} />}
                          {t(skill.nameKey)}
                        </span>
                        <span
                          className={`text-sm font-medium ${getLevelClass(skill.levelKey)}`}
                        >
                          {t(skill.levelKey)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(softSkillsData as unknown as SoftSkill[]).map((skill) => (
              <Card
                key={skill.nameKey}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <skill.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-medium text-foreground">{t(skill.nameKey)}</span>
                  </div>
                  <span
                    className={`text-sm font-medium ${getProficiencyClass(skill.proficiencyKey)}`}
                  >
                    {t(skill.proficiencyKey)}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}