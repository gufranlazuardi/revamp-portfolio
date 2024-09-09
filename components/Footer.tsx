import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-[2rem] justify-between items-center mt-[4rem]">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h2 className="text-lg">Reach me out</h2>
          <div className="flex gap-4">
            <Link
              href="https://github.com/gufranlazuardi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/gufran-lazuardi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </Link>
            <Link href="mailto:gufranlazuardi@gmail.com">
              <Mail size={20} />
            </Link>
          </div>
        </div>
        <p className="text-sm font-normal dark:text-slate-300 text-slate-700">
          © 2024 Gufran Lazuardi · All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
