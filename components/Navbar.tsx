'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const links =[
        {
        title: 'about',
        id: 'about'
        },
        {
        title: 'projects',
        id: 'projects'
        },
        {
        title: 'for fun',
        id: 'fun'
        },
    ]
    const [activeSection, setActiveSection] = useState('about');
    const [threshold, setThreshold] = useState(0.35);

    useEffect(() => {
        // Function to set the threshold based on screen width
        const updateThreshold = () => {
        if (window.innerWidth < 768) {
            setThreshold(0.3); // Mobile threshold
        } else {
            setThreshold(0.35); // Desktop threshold
        }
        };

        // Initial threshold update
        updateThreshold();

        window.addEventListener('resize', updateThreshold);

        return () => {
        window.removeEventListener('resize', updateThreshold);
        };
    }, []);

    useEffect(() => {
        const sections = links.map(link => document.getElementById(link.id));

        const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
        };

        const visibleSections: { [key: string]: number } = {};

        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            visibleSections[entry.target.id] = entry.intersectionRatio;
            } else {
            delete visibleSections[entry.target.id];
            }

            if (Object.keys(visibleSections).length > 0) {
            const mostVisibleSection = Object.keys(visibleSections).reduce((a, b) => visibleSections[a] > visibleSections[b] ? a : b);
            setActiveSection(mostVisibleSection);
            }
        });
        }, observerOptions);

        sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
        });

        return () => {
        sections.forEach(section => {
            if (section) {
            observer.unobserve(section);
            }
        });
        };
    }, [links, threshold]);

    return (
        <div className="flex justify-center items-start">
        {/* navbar */}
        <nav className="fixed w-screen flex justify-center mt-4 ml-0 lg:justify-start lg:mt-[160px] lg:w-[950px] z-10">
            <ul className="
                w-[80%] md:w-[50%] bg-white/60 backdrop-blur absolute py-2 px-6 md:px-12 rounded-lg
                font-dm-mono tracking-wide flex flex-row justify-between gap-4
                lg:bg-transparent lg:w-[150px] lg:gap-2 lg:flex-col lg:backdrop-blur-none lg:pl-4 xl:pl-0
                ">
                {links.map(link => (
                    <li key={link.id}><Link href={`#${link.id}`} className={`${activeSection === link.id ? 'text-primary' : 'text-black'} hover:text-primary transition duration-200 capitalize`}>{link.title}</Link></li>
                ))}
            </ul>
        </nav>
        </div>
    );
};
