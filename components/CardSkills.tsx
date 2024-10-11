import { Skills } from "@/lib/skills-data";
import Image from "next/image";
import React from "react";

interface CardSkillProps {
  skill: Skills;
}

const CardSkills: React.FC<CardSkillProps> = ({ skill }) => {
  return (
    <div className="flex flex-col w-36 h-36 bg-slate-200 transition-all ease-in-out dark:bg-sky-950 p-8 gap-2 justify-center rounded-lg items-center hover:shadow-lg hover:shadow-sky-950 dark:hover:shadow-slate-200 duration-300 transform hover:-translate-y-1">
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
