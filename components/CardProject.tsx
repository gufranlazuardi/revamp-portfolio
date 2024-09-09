"use client";

import React from "react";
import Image from "next/image";
import { Works } from "@/lib/project-data";
import Link from "next/link";

interface ProjectProps {
  project: Works;
}

const CardProject: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Link href={`/project-detail/${project.id}`}>
      <div className="w-full h-full justify-center flex flex-col border rounded-md shadow-lg hover:scale-105 transition-all">
        <Image
          src={project.photo}
          alt={project.project}
          width={350}
          height={600}
          className="p-2"
        />
        <div className="flex flex-col px-4 pb-4">
          <p className="dark:text-blue-300 text-blue-500 font-semibold">
            {project.project}
          </p>
          <div className="flex gap-2">
            {project.techstack.map((projects, projectsIndex) => (
              <p
                className="dark:text-slate-300 text-slate-700 text-sm"
                key={projectsIndex}
              >
                {projects}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
