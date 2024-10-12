import React, { useEffect } from "react";
import CardSkills from "./CardSkills";
import { skills } from "@/lib/skills-data";
import AOS from "aos";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 600, offset: 100 });
  }, []);

  return (
    <>
      <div className="flex flex-col pt-[4rem] mt-[4rem] gap-4">
        <h2 className="text-3xl ml-[1rem] font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Skills
        </h2>
        <h3 className="text-md mx-[1rem] dark:text-slate-300 text-slate-700">
          Discover the core technologies and tools that I excel in.
          From foundational web development skills to advanced
          frameworks, this section showcases the key proficiencies
          that enable me to deliver exceptional web experiences.
        </h3>
        <div className="flex flex-wrap justify-center gap-[2rem] mt-[2rem]">
          {skills.map((skill, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
            >
              <CardSkills key={index} skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
