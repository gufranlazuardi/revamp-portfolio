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
    <div className="flex justify-center items-center justify-between px-[1rem]">
      <div className="flex text-slate-500 dark:text-slate-400 text-[15px] sm:text-[10px] md:text-[15px] lg:text-[15px] sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-center">
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
      </div>

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
  );
};

export default Navbar;
