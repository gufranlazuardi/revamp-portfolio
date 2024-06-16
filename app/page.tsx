import Role from "@/components/Role";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DribbbleIcon, Github, Linkedin } from "lucide-react";
import React from "react";

const Home = () => {
  const dribbleLink = "https://dribbble.com/gufranlazuardi";
  const githubLink = "https://www.github.com/gufranlazuardi";
  const linkedinLink = "https://www.linkedin.com/in/gufran-lazuardi";

  return (
    <main className="flex flex-col">
      <div className="flex pt-16 sm:px-5 md:px-1 lg:px-3 xl:px-23">
        <div className="flex flex-col gap-8 items-center">
          <Separator
            orientation="vertical"
            className="h-24 bg-black dark:bg-white"
          />
          <a
            href={dribbleLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbbleIcon className="hover:transition-colors duration-700 hover:text-pink-500" />
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:transition-colors duration-700 hover:text-blue-300" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:transition-colors duration-700 hover:text-slate-500" />
          </a>

          <Separator
            orientation="vertical"
            className="h-24 bg-black dark:bg-white"
          />
        </div>
        <div className="flex flex-col gap-10 ml-10">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Bonjour <span className="font-bold text-blue-500">.</span>
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-thin sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              I&apos;m{" "}
              <span className="font-bold">Gufran Lazuardi</span>
            </h2>

            <Role />
            <div className="flex flex-col mt-2">
              <p className="text-[25px]">
                I am Frontend Engineer based in Jakarta, Indonesia 🇮🇩{" "}
              </p>
              <p className="text-[23px] text-slate-400">
                I focus on building modern web applications using
                React.js, Next.js, and TypeScript
              </p>
            </div>
            <Button className="max-w-60 px-3 bg-blue-500 hover:bg-pink-500 text-white rounded-md  focus:outline-none transition shadow-2xl shadow-blue-500 hover:shadow-pink-600 duration-300 ease-in-out">
              Dowonload my resume
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
