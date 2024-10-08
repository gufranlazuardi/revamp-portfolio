"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlurEffects from "@/components/BlurEffects";
import CardSkills from "@/components/CardSkills";
import CardExperience from "@/components/CardExperience";
import HomeSkeleton from "@/components/HomeSkeleton";
import { skills } from "@/lib/skills-data";
import { works } from "@/lib/project-data";

const CardIntro = dynamic(() => import("@/components/CardIntro"), {
  ssr: false,
});

const CardProject = dynamic(
  () => import("@/components/CardProject"),
  {
    ssr: false,
  }
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refresh();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <HomeSkeleton />
      </div>
    );
  }

  return (
    <main className="flex relative flex-col">
      {/* Blur Effects */}
      <div className="hidden lg:flex xl:flex">
        <BlurEffects />
      </div>

      {/* Intro Section */}
      <div id="home" className="flex" data-aos="fade-up">
        <CardIntro />
      </div>

      {/* Project Section */}
      <div
        id="project"
        className="flex flex-col pt-[4rem] mt-[4rem] gap-4"
        data-aos="fade-up"
      >
        <h2 className="text-3xl ml-[1rem] font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Project
        </h2>
        <h3 className="text-md mx-[1rem] dark:text-slate-300 text-slate-700">
          Explore a selection of my most significant projects. Each
          project highlights my ability to tackle diverse challenges
          and create impactful solutions. From dynamic web
          applications to innovative tools, these projects demonstrate
          my technical skills, creativity, and dedication to
          delivering high-quality results.
        </h3>
        <div className="flex justify-center flex-wrap gap-2">
          {works.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}

          {/* Jump to my github section (open new tab) */}
          <Link
            href="https://github.com/gufranlazuardi"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 flex-col items-center justify-center w-[22rem] h-[248px] border rounded-md">
              <p className="dark:text-slate-300 text-slate-700 text-sm">
                Explore more on my github
              </p>
              <ArrowUpRight size={20} />
            </div>
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        className="flex flex-col pt-[4rem] mt-[4rem] gap-4"
        data-aos="fade-up"
      >
        <h2 className="text-3xl ml-[1rem] font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Skills
        </h2>
        <h3 className="text-md mx-[1rem] dark:text-slate-300 text-slate-700">
          Discover the core technologies and tools that I excel in.
          From foundational web development skills to advanced
          frameworks, this section showcases the key proficiencies
          that enable me to deliver exceptional web experiences.
        </h3>
        <div className="flex flex-wrap justify-center gap-[2rem]">
          {skills.map((skill, index) => (
            <CardSkills key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        className="flex flex-col gap-4 pt-[4rem] mt-[4rem]"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Experience
        </h2>
        <CardExperience />
      </div>
    </main>
  );
};

export default Home;
