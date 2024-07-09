'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Link from 'next/link';

interface Props {
    title: string;
    img: string;
    link: string;
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

export default function FunCard({ title, img, link }: Props) {
  return (
    <Link href={link}>
        <motion.div 
        className="group flex flex-col gap-4 hover:cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
        >
            {/* img */}
            <div className="w-full h-[250px] md:h-[300px] rounded-lg overflow-clip flex items-center">
                <img src={img} alt="Project Image" className="w-full h-full object-cover" />
            </div>
            {/* title/link */}
            <div className="flex flex-row items-center gap-2 px-2">
                <h3 className="text-lg font-bold font-poppins text-black group-hover:text-primary transition duration-300">
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
        </motion.div>
    </Link>
  );
};
