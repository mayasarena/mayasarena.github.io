import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

export default function SociaLinks() {
  return (
    <>
    {/* Social Links */}
    <div className="flex gap-8 items-center">
        <a href="https://github.com/mayasarena" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-[30px] h-[30px] text-black hover:text-primary transition duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/mayasmurad/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-[30px] h-[30px] text-black hover:text-primary transition duration-200" />
        </a>
        <a href="https://codepen.io/mayasarena" target="_blank" rel="noopener noreferrer">
          <FaCodepen className="w-[30px] h-[30px] text-black hover:text-primary transition duration-200" />
        </a>
    </div>
    </>
  );
};
