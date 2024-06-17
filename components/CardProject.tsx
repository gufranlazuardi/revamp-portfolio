import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { works } from "@/lib/project-data";

const CardProject = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((project) => (
          <figure key={project.project} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.photo}
                  alt={`Photo by ${project.photo}`}
                  className="aspect-[6/3] hover:scale-95 hover:filter hover:  transition"
                  width={300}
                  height={400}
                  loading="lazy"
                />
              </a>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <div className="flex flex-col gap-2">
                <p className="text-lg text-black dark:text-white mt-3">
                  {project.project}
                </p>
                <div className="flex gap-2 ">
                  {project.techstack.map((tech, techIndex) => (
                    <p
                      key={techIndex}
                      className="px-2 py-1 border rounded text-black hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out dark:text-white "
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CardProject;
