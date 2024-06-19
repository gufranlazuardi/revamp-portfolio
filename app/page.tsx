"use client";

import React from "react";
import CardExperience from "@/components/CardExperience";
import CardProject from "@/components/CardProject";
import CardIntro from "@/components/CardIntro";
import CardSkills from "@/components/CardSkills";
import { skills } from "@/lib/skills-data";

const Home = () => {
  return (
    <main className="flex flex-col">
      {/* Intro Section */}
      <div className="flex">
        <CardIntro />
      </div>

      {/* Project Section */}
      <div className="flex flex-col justify-center items-center mt-[5rem] gap-4">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Project
        </h2>
        <CardProject />
      </div>

      {/* Skills Section */}
      <div className="flex flex-col justify-center items-center mt-[5rem] gap-4">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-[2rem]">
          {skills.map((skill, index) => (
            <CardSkills key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col items-center justify-center gap-4 mt-[5rem]">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Experience
        </h2>
        <CardExperience />
      </div>
    </main>
  );
};

export default Home;
