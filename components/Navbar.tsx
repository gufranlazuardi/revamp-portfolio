"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="flex items-center justify-between px-[1rem]">
      <Link href="/">
        <div className="w-10 h-10">
          <Image
            src="/science_color.png"
            alt="home-navbar"
            height={100}
            width={100}
            className="hover:scale-125 transition-all"
          />
        </div>
      </Link>

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
