"use client";

import { works } from "@/lib/project-data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardProject from "./CardProject";
import ProjectSkeleton from "./skeleton/ProjectSkeleton";

const Project = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    loadProjects();
  }, []);

  return (
    <>
      {isLoading ? (
        <ProjectSkeleton />
      ) : (
        <div className="flex flex-col pt-[4rem] mt-[4rem] gap-4">
          <h2 className="text-3xl ml-[1rem] font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
            Project
          </h2>
          <h3 className="text-md mx-[1rem] dark:text-slate-300 text-slate-700">
            Explore a selection of my most significant projects. Each
            project highlights my ability to tackle diverse challenges
            and create impactful solutions. From dynamic web
            applications to innovative tools, these projects
            demonstrate my technical skills, creativity, and
            dedication to delivering high-quality results.
          </h3>
          <div className="flex justify-center flex-wrap gap-2">
            {works.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}

            {/* Jump to my GitHub section (open new tab) */}
            <Link
              href="https://github.com/gufranlazuardi"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2 flex-col items-center justify-center w-[22rem] h-[248px] border rounded-md">
                <p className="dark:text-slate-300 text-slate-700 text-sm">
                  Explore more on my GitHub
                </p>
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
