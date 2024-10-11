import React from "react";
import Image from "next/image";
import { Works } from "@/lib/project-data";
import Link from "next/link";

interface ProjectProps {
  project: Works;
}

const CardProject: React.FC<ProjectProps> = ({ project }) => {
  return (
    <>
      <Link href={`/project-detail/${project.id}`}>
        <div className="w-[20rem] h-full justify-center flex flex-col border rounded-md shadow-lg hover:scale-105 transition-all dark:shadow-slate-800">
          <div className="h-full w-full">
            <Image
              src={project.photo}
              alt={project.project}
              width={300}
              height={150}
              className="p-2 w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col px-4 pb-4">
            <p className="dark:text-blue-300 text-blue-500 font-semibold">
              {project.project}
            </p>
            <div className="flex gap-2">
              {project.techstack.map((tech, index) => (
                <p
                  className="dark:text-slate-300 text-slate-700 text-sm"
                  key={index}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProject;
