'use client';
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Heart, Star, Sparkle } from '@/components/SVG';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    type: 'Game Development',
    title: 'Bob the Unicorn',
    description: 'A 2D platformer developed in Unity, where you embark on a quest to become the prettiest unicorn in unicorn land!',
    tags: ['Unity', 'C#', 'Procreate'],
    img: '/unicorn-img.png',
    link: '/unicorn',
    hoverCol: 'group-hover:text-[#5cc09f]',
  },
  {
    type: 'Software Development & UX Research',
    title: 'Study Tracker',
    description: 'Designed and implemented a self-tracking application to explore its impact on academic procrastination and study habits in university students.',
    tags: ['iOS Development', 'Swift'],
    img: '/studytracker-img.png',
    link: '/study-tracker',
    hoverCol: 'group-hover:text-[#9d97f8]',
  },
  {
    type: 'UX Design',
    title: 'Studybud',
    description: 'A mobile app that uses gamification and social features to help students plan, focus, and study.',
    tags: ['UX Design', 'Figma'],
    img: '/studybud-img.png',
    link: '/studybud',
    hoverCol: 'group-hover:text-[#5697f2]',
  },
]

export default function Projects() {
  const [scrolled, setScrolled] = useState(false);
  const [projectType, setProjectType] = useState('dev');

  const { ref: heartRef, inView: heartInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const { ref: starRef, inView: starInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const { ref: sparkleRef, inView: sparkleInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSwitchProjectType = (type: string) => {
    setProjectType(type);
  };

  return (
    <div id="projects" className="relative w-full md:w-[90%] lg:w-[95%] xl:w-[85%] m-auto flex flex-col items-center pt-[50px] pb-[100px] my-[50px] bg-lightbg md:rounded-xl">
      {/* SVGs */}
      <div ref={heartRef} className="absolute bottom-[-20px] right-[50px] md:top-[670px] md:right-[30px] lg:top-[500px] lg:right-[-15px]">
        {heartInView &&scrolled && (<Heart />)}
      </div>
      <div ref={starRef} className="absolute top-[-40px] md:top-[-30px] left-[20px]">
        {starInView && scrolled && (<Star />)}
      </div>
      <div ref={sparkleRef} className="absolute hidden md:inline-block bottom-[-30px] left-[25%]">
        {sparkleInView && scrolled && (<Sparkle />)}
      </div>
      {/* work section */}
      <div className="w-[80%] lg:w-[980px] lg:pl-[200px]">
        <div className="text-left">  
          {/* projects header - link to switch between dev and ux projects */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <h2 className="text-3xl font-medium font-poppins text-primary">Projects</h2>
            <div className="flex flex-row gap-8">
              <button
                onClick={() => handleSwitchProjectType('dev')}
                className={`text-base font-dm-mono text-primary ${projectType === 'dev' ? 'opacity-100 underline underline-offset-4' : 'opacity-70 hover:opacity-100'}`}
              >
                Software Development
              </button>
              <button 
                onClick={() => handleSwitchProjectType('ux')}
                className={`text-base font-dm-mono text-primary ${projectType === 'ux' ? 'opacity-100 underline underline-offset-4' : 'opacity-70 hover:opacity-100'}`}
              >
                UX Design
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-20 pt-[50px]">
            {projects
              .filter(proj => proj.type.toLowerCase().includes(projectType)) 
              .map((proj, index) => (
                <ProjectCard
                  key={index}
                  type={proj.type}
                  title={proj.title}
                  description={proj.description}
                  tags={proj.tags}
                  img={proj.img}
                  link={proj.link}
                  hoverCol={proj.hoverCol}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
