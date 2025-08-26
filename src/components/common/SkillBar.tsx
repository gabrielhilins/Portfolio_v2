// src/components/common/SkillBar.tsx
import { HardSkill } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface SkillBarProps {
  skill: HardSkill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avançado":
        return "bg-green-500";
      case "Intermediário":
        return "bg-yellow-500";
      case "Básico":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <i className={`${skill.icon} text-xl`}></i>
        <span className="font-medium">{skill.name}</span>
      </div>
      <Badge className={`${getLevelColor(skill.level)}`}>
        {skill.level}
      </Badge>
    </div>
  );
}