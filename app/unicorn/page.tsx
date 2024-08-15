import ProjectPage from '@/components/ProjectPage';
import { Project } from '@/types/Project';

export default function Home() {
    const nextProj: Project = {
        url: '/study-tracker',
        img: '/studytracker-img.png',
        title: 'Study Tracker',
        type: 'Dev & UX'
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
                title={'Bob the Unicorn'}
                subtitle={'Become the prettiest unicorn in unicorn land'}
                description={
                <p className="text-base text-medgrey my-6">
                    Bob the Unicorn is a little 2-level game I developed with Unity and C# for a school project.
                    Eager to build a game entirely from the ground up, I challenged myself with designing all the game assets alongside the development of gameplay.
                    The game features camera and player control systems, menus, enemies, and powerups.
                    
                </p>
                }
                links={
                    <div className="flex gap-4 text-center">
                            <a
                                href="https://github.com/mayasarena/bob-the-unicorn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-button px-8 py-4 rounded-sm bg-primary tracking-wider font-dm-mono uppercase hover:bg-secondary hover:text-primary transition duration-300"
                            >
                                Source Code
                            </a>
                    </div>
                }
                img={'/unicorn-header.gif'}
                nextProj={nextProj}
                prevProj={prevProj}
            />
            </>
        );
    }