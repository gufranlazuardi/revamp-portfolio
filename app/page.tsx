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
import { skills } from "@/lib/skills-data";
import { works } from "@/lib/project-data";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refresh();
  }, []);

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
      <div id="project" data-aos="fade-up">
        <Project />
      </div>

      {/* Skills Section */}
      <div id="skills" data-aos="fade-up">
        <Skills />
      </div>

      {/* Experience Section */}
      <div id="experience" data-aos="fade-up">
        <Experience />
      </div>
    </main>
  );
};

export default Home;
