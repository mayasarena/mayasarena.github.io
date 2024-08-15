import ProjectPage from '@/components/ProjectPage';
import { Project } from '@/types/Project';

export default function Home() {
    const nextProj: Project = {
        url: '/mood-garden',
        img: '/moodgarden-img.png',
        title: 'Mood Garden',
        type: 'Full-Stack'
    }

    const prevProj: Project = {
        url: '/unicorn',
        img: '/unicorn-img.png',
        title: 'Bob the Unicorn',
        type: 'Game Development'
    }

    return (
        <>
        <ProjectPage
            title={'Study Tracker'}
            subtitle={'Academic procrastination and the quantified self'}
            description={<p className="text-base text-medgrey my-6">
            <span className="font-dm-mono text-primary">Research:</span> A 16-month thesis completed as a requirement for my Master's degree, where I designed and developed a study tracking application.
            My research was focused on the impact that self-tracking and data visualizations had on procrastination and study habits in university students.
            My research resulted in valuable design implications for self-tracking applications.
            <br /><br />
            <span className="font-dm-mono text-primary">Development:</span> The application was developed in Swift and tested by 15 students over the course of a school semester.
            The app allows users to track their study sessions and receive visual feedback. Persistent data storage was incorporated to save and retrieve study session data.
            </p>}
            links={
                <div className="flex gap-4 text-center">
                        <a
                            href="https://github.com/mayasarena/Study-Tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-button px-8 py-4 rounded-sm bg-primary tracking-wider font-dm-mono uppercase hover:bg-secondary hover:text-primary transition duration-300"
                        >
                            Source Code
                        </a>
                        <a
                            href="https://www.figma.com/proto/QBViX3IOCASPEEezAJnOzC/StudyTracker-Case-Study?page-id=0%3A1&node-id=3-3&viewport=617%2C148%2C0.04&t=E8tUkjyt0rpifKza-1&scaling=scale-down-width&content-scaling=fixed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-button px-8 py-4 rounded-sm bg-primary tracking-wider font-dm-mono uppercase hover:bg-secondary hover:text-primary transition duration-300"
                        >
                            Case Study
                        </a>
                </div>
            }
            img={'/studytracker-img.png'}
            nextProj={nextProj}
            prevProj={prevProj}
        />
        </>
    );
}
