"use client";

import { Moon, Slack, Sun } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="flex justify-between">
      <Link href="/">
        <div className="cursor-pointer transform-gpu transition-transform hover:scale-110">
          <Slack size={40} />
        </div>
      </Link>

      <div className="flex text-[15px] sm:text-[10px] md:text-[15px] lg:text-[15px] sm:gap-6 md:gap-2 lg:gap-1 xl:gap-4 items-center">
        <Link href="#home">
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link href="#experience">
          <p className="cursor-pointer">Experience</p>
        </Link>
        <Link href="#project">
          <p className="cursor-pointer">Project</p>
        </Link>
        <Link href="contact">
          <p className="cursor-pointer">Contact</p>
        </Link>
        <Button
          type="button"
          variant="outline"
          aria-label="change theme"
          onClick={handleTheme}
          className={`w-fit h-fit p-2 border-none ${
            theme === "light" ? "btn-theme" : "btn-theme-dark"
          }`}
        >
          {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
