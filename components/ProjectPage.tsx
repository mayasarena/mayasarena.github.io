'use client';
import React from 'react';
import Link from 'next/link';
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { Project } from '@/types/Project';

interface Props {
    title: string;
    subtitle: string;
    description: React.ReactNode;
    links: React.ReactNode;
    img: string;
    nextProj: Project;
    prevProj: Project;
}

export default function ProjectPage({ title, subtitle, description, links, img, nextProj, prevProj }: Props) {
    return (
        <div className="py-[70px] md:py-[100px] flex items-center justify-center">
            <div className="flex flex-col w-[90%] xl:w-[70%] gap-6 mt-[-50px]">
                {/* link to go back home */}
                <div className="flex justify-start">
                    <Link href={'/'} className="bg-black text-button text-white px-4 py-2 rounded-sm flex gap-2 items-center uppercase tracking-wider font-dm-mono hover:gap-4 transition-all ease-in-out duration-300">
                        <IoChevronBack />
                        back home
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-6 md:flex-row lg:gap-12">
                    {/* project img */}
                    <div className="md:w-[50%] aspect-[4/3] rounded-lg overflow-clip">
                        <img src={img} alt="Header Image" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative md:w-[50%] flex flex-col gap-2">
                        {/* ray background img */}
                        <div className="absolute w-[500px] top-[-150px] left-[-230px] z-[-10]">
                            <img src="/rays-bgwhite.png" alt="Background Image" />
                        </div>
                        <div className="flex flex-col gap-6 justify-between h-full">
                            <div>
                                {/* description and links */}
                                <h1 className="text-4xl font-bold font-poppins text-black">{title}</h1>
                                <h2 className="text-2xl font-medium font-poppins text-darkgrey">{subtitle}</h2>
                                {description}
                            </div>
                            {/* links */}
                            {links}
                        </div>
                    </div>
                </div>
                {/* prev and next project links */}
                <div className="flex justify-between mt-16">
                    <Link href={prevProj.url}>
                        <div className="group flex flex-col text-right">
                            <div className="flex flex-row gap-2 items-center">
                                <IoChevronBack />
                                <img src={prevProj.img} alt="Previous Project Image" className="rounded-sm w-24 md:w-36 mb-[5px]" />
                            </div>
                            <h5 className="text-sm font-dm-mono text-primary">{prevProj.type}</h5>
                            <h3 className="text-base font-bold font-poppins text-black underline-offset-4 group-hover:underline">{prevProj.title}</h3>
                        </div>
                    </Link>
                    <Link href={nextProj.url}>
                        <div className="group flex flex-col text-left">
                            <div className="flex flex-row gap-2 items-center">
                                <img src={nextProj.img} alt="Previous Project Image" className="rounded-sm w-24 md:w-36 mb-[5px]" />
                                <IoChevronForward />
                            </div>
                            <h5 className="text-sm font-dm-mono text-primary">{nextProj.type}</h5>
                            <h3 className="text-base font-bold font-poppins text-black underline-offset-4 group-hover:underline">{nextProj.title}</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
