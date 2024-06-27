"use client";

import React from "react";
import CardExperience from "@/components/CardExperience";
import CardIntro from "@/components/CardIntro";
import CardSkills from "@/components/CardSkills";
import { skills } from "@/lib/skills-data";
import CardProjectNew from "@/components/CardProjectNew";
import BlurEffects from "@/components/BlurEffects";

const Home = () => {
  return (
    <main className="flex relative flex-col">
      <BlurEffects />
      {/* Intro Section */}
      <div id="home" className="flex">
        <CardIntro />
      </div>

      {/* Project Section */}
      <div
        id="project"
        className="flex flex-col justify-center items-center w-fit mt-[5rem] gap-4"
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Project
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {"123288282".split("").map((i) => (
            <CardProjectNew key={i} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        className="flex flex-col justify-center items-center mt-[5rem] gap-4"
      >
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
      <div
        id="experience"
        className="flex flex-col items-center justify-center gap-4 mt-[5rem]"
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Experience
        </h2>
        <CardExperience />
      </div>
    </main>
  );
};

export default Home;
