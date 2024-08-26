import ProjectPage from '@/components/ProjectPage';
import { Project } from '@/types/Project';

export default function Home() {
    const nextProj: Project = {
        url: '/unicorn',
        img: '/unicorn-img.png',
        title: 'Bob the Unicorn',
        type: 'Game Development'
    }

    const prevProj: Project = {
        url: '/mood-garden',
        img: '/moodgarden-img.png',
        title: 'Mood Garden',
        type: 'Full-Stack'
    }

    return (
        <>
        <ProjectPage
            title={'SP Golf'}
            subtitle={'A responsive golf services website with interactive features and a clean design'}
            description={
                <p className="text-base text-medgrey my-6">
                    I created and deployed the SP Golf website for a client who wanted to showcase their golf services. 
                    The site was built with Next.js/TypeScript and styled using Tailwind CSS. I also implemented smooth animations with Framer Motion, 
                    ensuring the design is fully responsive across all devices.
                    <br /><br />
                    For features, I integrated the Instagram Basic Display API to show recent Instagram posts and built a contact form using the Web3Forms API, 
                    including form validation to ensure clean and accurate data entry.
                </p>
            }
            links={
                <div className="flex gap-4 text-center">
                        <a
                            href="https://thespgolf.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-button px-8 py-4 rounded-sm bg-primary tracking-wider font-dm-mono uppercase hover:bg-secondary hover:text-primary transition duration-300"
                        >
                            Live Site
                        </a>
                </div>
            }
            img={'/spgolf-header.gif'} 
            nextProj={nextProj}
            prevProj={prevProj}
        />
        </>
    );
    }
