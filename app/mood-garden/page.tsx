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
        url: '/study-tracker',
        img: '/studytracker-img.png',
        title: 'Study Tracker',
        type: 'Dev & UX'
    }

    return (
        <>
        <ProjectPage
            title={'Mood Garden'}
            subtitle={'Create a cute garden while tracking mood'}
            description={
                <p className="text-base text-medgrey my-6">
                    Mood Garden is a mood-tracking concept I've been thinking about for a while; I set out to create a lightweight, cute, and fun mood-tracking application using a visualization technique commonly seen in productivity-tracking apps, but lacking in mood-tracking apps: gardens!
                    Mood Garden is a charming desktop app that allows users to visualize their moods through a cute garden. The app is kept simple, focusing only on five moods: Very Happy, Happy, Neutral, Sad, and Very Sad. Users can keep
                    a journal along with their moods, and the app of course provides a variety of data visualizations for the mood data.
                    <br /><br />
                    I developed Mood Garden using React and React Three Fiber, with data persistence handled by a PostgreSQL relational database. The application's backend was built with Node.js and Express, 
                    and I implemented an API for seamless communication between the front-end and the database. Styling was done with Tailwind CSS and Framer Motion.
                </p>
            }
            links={
                <div className="flex gap-4 text-center">
                        <a
                            href="https://github.com/mayasarena/mood-garden"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-button px-8 py-4 rounded-sm bg-primary tracking-wider font-dm-mono uppercase hover:bg-secondary hover:text-primary transition duration-300"
                        >
                            Source Code
                        </a>
                </div>
            }
            img={'/moodgarden-header.gif'} 
            nextProj={nextProj}
            prevProj={prevProj}
        />
        </>
    );
    }
