"use client";

import React from "react";
import Role from "@/components/Role";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { DribbbleIcon, Github, Linkedin } from "lucide-react";

const CardIntro = () => {
  const dribbleLink = "https://dribbble.com/gufranlazuardi";
  const githubLink = "https://www.github.com/gufranlazuardi";
  const linkedinLink = "https://www.linkedin.com/in/gufran-lazuardi";
  const { toast } = useToast();

  const handleDownload = () => {
    const resumeUrl = "/gufran-lazuardi-resume-ats.pdf";

    try {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "gufran-lazuardi-resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download successful!",
        description: "You can see my resume now",
        variant: "default",
      });
    } catch (error: any) {
      toast({
        title: "Download failed",
        description: error.toString(),
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="flex pt-16 sm:px-5 md:px-1 lg:px-3 xl:px-23"
      data-aos="fade-left"
    >
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="flex flex-col gap-10 ml-10">
        <h1 className="text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Bonjour <span className="font-normal text-blue-500">.</span>
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            I&apos;m{" "}
            <span className="font-medium bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#1482ff]">
              Gufran Lazuardi
            </span>
          </h2>

          <Role />
          <div className="flex flex-col mt-2">
            <p className="sm:text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px]">
              I am a Frontend Engineer based in Jakarta, Indonesia 🇮🇩
            </p>
            <p className="sm:text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] text-slate-400">
              I focus on building modern web applications using
              React.js, Next.js, and TypeScript.
            </p>
          </div>
          <Button
            onClick={handleDownload}
            className="max-w-60 px-3 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#1482ff] text-white rounded-md focus:outline-none transition-all shadow-2xl shadow-blue-500"
          >
            Download my resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardIntro;
