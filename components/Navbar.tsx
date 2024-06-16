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

      <div className="flex text-[15px] gap-4 items-center">
        <p>Home</p>
        <p>Experience</p>
        <p>Project</p>
        <p>Contact</p>
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
