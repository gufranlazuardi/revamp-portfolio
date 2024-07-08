"use client";

import { Moon, Sun } from "lucide-react";
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
    <div className="flex items-center justify-between px-[1rem]">
      <div className="flex text-slate-500 dark:text-slate-400 text-[15px] gap-5 items-center">
        <Link href="#home">
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link href="#project">
          <p className="cursor-pointer">Project</p>
        </Link>
        <Link href="#skills">
          <p className="cursor-pointer">Skills</p>
        </Link>
        <Link href="#experience">
          <p className="cursor-pointer">Experience</p>
        </Link>
      </div>

      <div className="border border-slate-700   rounded-md p-0.5">
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
