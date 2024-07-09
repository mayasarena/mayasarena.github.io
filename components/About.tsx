import React from 'react';
import SocialLinks from './SocialLinks';

export default function About() {
  return (
    <header id="about" className="w-full flex flex-col items-center pt-[150px] pb-[100px]">
        {/* about section */}
        <div className="relative w-[72%] lg:w-[980px] lg:pl-[200px]">
            <div className="absolute w-[500px] top-[-200px] left-[-100px] lg:top-[-190px] lg:left-0 z-[-10]">
                <img src="/rays-bgwhite.png" alt="Background Image" />
            </div>
            <div className="text-left">  
                <h1 className="text-4xl font-bold font-poppins text-black">Hi, I'm <span className="text-primary">Maya</span></h1>
                <h2 className="text-3xl font-medium font-poppins text-darkgrey">Software Developer</h2>
                <p className="text-base text-medgrey my-8">
                  I enjoy creating fun, beautiful user experiences from start to finish. With a BSc in Computer Science and a Master of Computer Science in HCI, I bring a comprehensive outlook into all stages of the development cycle. I have a diverse skillset in software development and UX design.
                  <br /><br />
                  Outside of coding, I love to do art in all sorts of mediums, from digital drawing to traditional painting to scultping with polymore clay. I also like hiking up mountains!
                </p>
                <SocialLinks />
            </div>
        </div>
    </header>
  );
};
