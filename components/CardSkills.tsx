import { Skills } from "@/lib/skills-data";
import Image from "next/image";
import React from "react";

interface CardSkillProps {
  skill: Skills;
}

const CardSkills: React.FC<CardSkillProps> = ({ skill }) => {
  return (
    <div className="flex flex-col p-4 gap-2 border rounded-lg items-center hover:bg-slate-600 hover:transition">
      <Image
        src={skill.image}
        alt={skill.language}
        width={120}
        height={120}
      />
      <p>{skill.language}</p>
    </div>
  );
};

export default CardSkills;
