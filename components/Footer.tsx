import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center mt-[4rem]">
      <p className="text-sm font-normal text-slate-400">
      © 2024 Gufran Lazuardi. All rights reserved
      </p>
      <div className="flex gap-4">
        <Github size={20}/>       
        <Linkedin size={20} />
        <Mail size={20} />
      </div>
    </div>
  );
};

export default Footer;
