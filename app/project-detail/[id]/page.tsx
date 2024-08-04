import { Button } from "@/components/ui/button";
import { works } from "@/lib/project-data";
import { Github, ScreenShare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectDetailProps {
  params: { id: string };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ params }) => {
  const project = works.find(
    (work) => work.id.toString() === params.id
  );

  if (!project) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center p-[2rem] gap-[2rem]">
        <p className="text-[30px] font-semibold">{`${project.project}`}</p>
        <Image
          src={project.photo}
          alt={project.project}
          height={100}
          width={300}
          className="w-full px-[4rem]"
        />
      </div>

      <div className="pl-[3rem]">
        <h2 className="border-b-2 w-fit mb-4 ">TechStack</h2>
      </div>
      <div className="flex pl-[3rem] gap-2">
        {project.techstack.map((tech) => (
          <p
            key={tech}
            className="border text-[14px] border-blue-400 rounded-md px-4 py-1"
          >
            {tech}
          </p>
        ))}
      </div>

      <div className="px-[3rem] mt-[2rem] gap-[0.5rem] flex flex-col">
        <h2 className="border-b-2 w-fit mb-4 cursor-pointer">
          Description
        </h2>

        <p className="text-sm text-justify">{project.description}</p>
      </div>

      <div className="pl-[3rem] mt-[2rem] gap-[0.5rem] flex">
        <Link href={project.github}>
          <div className="flex items-center">
            <Button className="dark:bg-gray-700 gap-2 dark:text-white text-sm font-light">
              <Github size={18} />
              <p>Github</p>
            </Button>
          </div>
        </Link>
        <Link href={project.web}>
          <Button className="bg-blue-900 gap-2 dark:text-white text-sm font-light">
            <ScreenShare size={18} />
            <p>Web</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
