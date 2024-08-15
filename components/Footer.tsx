import React from 'react';
import { MdEmail } from "react-icons/md";
import SocialLinks from './SocialLinks';

export default function Footer() {
    return (
        <footer id="footer" className="bg-lightbg w-screen py-[50px] text-center">
        <div className="text-center flex flex-col gap-12 justify-between items-center w-[72%] m-auto">  
            {/* e-mail details */}
            <div className="flex flex-col gap-4 items-center">
            <MdEmail />
            <div>Email me at <a href="mailto:mayasarena7@gmail.com" className="text-primary font-dm-mono underline-offset-4 hover:underline">mayasarena7@gmail.com</a></div>
            </div>
            {/* social Links */}
            <SocialLinks />
            {/* footer details */}
            <p className="text-sm text-medgrey">Created by <a className="text-primary hover:underline" href='https://github.com/mayasarena' target="_blank" rel="noopener noreferrer">
            me
            </a>
            . Designed in Figma and built with Next.js & TailwindCSS. Best viewed on Desktop.</p>
        </div>
        </footer>
    );
    };
