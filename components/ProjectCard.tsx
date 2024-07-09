'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Link from 'next/link';

interface Props {
    type: string;
    title: string;
    description: string;
    tags: string[];
    img: string;
    link: string;
    hoverCol: string;
}

const arrowVariants = {
    rest: { 
        x: 0, 
        y: 0,
        transition: { 
            duration: 0.1
        } 
    },
    hover: { 
        x: 3,
        y: -3,
        transition: { 
            duration: 0.1
        } 
    },
};

export default function ProjectCard({ type, title, description, tags, img, link, hoverCol }: Props) {
  return (
    <Link href={link}>
        <motion.div 
        className="group w-full flex flex-col gap-4 lg:flex-row lg:gap-10 hover:cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
        >
            {/* img */}
            <div className="w-full h-[350px] lg:w-[400px] lg:h-[300px] rounded-lg overflow-clip flex items-center">
                <img src={img} alt="Project Image" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between gap-4">
                {/* project information */}
                <div className="text-left flex flex-col gap-2">  
                    <h4 className="text-base font-dm-mono text-primary">{type}</h4>
                    <div className="flex flex-row items-center gap-2">
                        <h3 className={`text-2xl font-bold font-poppins text-black ${hoverCol} transition duration-300`}>
                            {title}
                        </h3>
                        {/* on hover, arrow animates upwards */}
                        <motion.div
                            variants={arrowVariants}
                            className="text-black text-xl"
                        >
                            <HiMiniArrowUpRight />
                        </motion.div>
                    </div>
                    <p className="text-base text-medgrey pt-2">{description}</p>
                </div>
                {/* project tags */}
                <div className="flex flex-row flex-wrap gap-3">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="px-5 py-1 bg-secondary rounded-md font-dm-mono text-primary text-sm"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </Link>
  );
};
