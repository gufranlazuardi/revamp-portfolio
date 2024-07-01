import React from "react";
import Image from "next/image";
import { Works } from "@/lib/project-data";

interface ProjectProps {
  project: Works;
}

const CardProjectNew: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="w-50 flex flex-col h-50 border rounded-md">
      <Image
        src={project.photo}
        alt={project.project}
        width={350}
        height={200}
        className="p-4"
      />
      <div className="flex justify-between px-4 pb-4">
        <p>{project.project}</p>
        <div className="flex gap-2">
          {project.techstack.map((projects, projectsIndex) => (
            <p key={projectsIndex}>{projects}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProjectNew;
