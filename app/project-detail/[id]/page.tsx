import { works } from "@/lib/project-data";
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
    <div className="w-full h-screen">
      <p>{`id ${project.id}`}</p>
      <p>{`project ${project.project}`}</p>
      {project.techstack.map((tech) => (
        <p key={tech}>{tech}</p>
      ))}
    </div>
  );
};

export default ProjectDetail;
