import { Skills } from "@/lib/skills-data";
import Image from "next/image";
import React from "react";

interface CardSkillProps {
  skill: Skills;
}

const CardSkills: React.FC<CardSkillProps> = ({ skill }) => {
  return (
    <div className="flex flex-col bg-blue-950 p-8 gap-2 justify-center border rounded-lg items-center hover:shadow-lg hover:shadow-blue-950 transition-shadow duration-300 transform transition-transform hover:-translate-y-1">
      <Image
        src={skill.image}
        alt={skill.language}
        width={70}
        height={70}
      />
    </div>
  );
};

export default CardSkills;
