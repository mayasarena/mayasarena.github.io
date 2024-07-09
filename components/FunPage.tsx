'use client';
import React from 'react';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import { Image } from '@/types/Image';

interface Props {
    images: Image[];
}

export default function FunPage({ images }: Props) {
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 mt-6 md:mt-12">
                {/* image grid */}
                {images.map((image, index) => (
                    <div key={index} className="relative group aspect-square rounded-lg overflow-clip">
                        {/* hover medium */}
                        <div className="absolute top-6 left-6 opacity-0 bg-white font-dm-mono uppercase text-button tracking-wider text-primary px-4 py-2 rounded-md 
                            transition duration-300
                            group-hover:inline-block group-hover:opacity-100
                        ">
                            {image.medium}
                        </div>
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
