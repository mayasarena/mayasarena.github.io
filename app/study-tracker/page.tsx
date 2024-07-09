import ProjectPage from '@/components/ProjectPage';
import { Project } from '@/types/Project';

export default function Home() {
  const nextProj: Project = {
    url: '/studybud',
    img: '/studybud-img.png',
    title: 'Studybud',
    type: 'UX Design'
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
        codeLink={'https://github.com/mayasarena/Study-Tracker'}
        caseStudyLink={'https://www.figma.com/proto/QBViX3IOCASPEEezAJnOzC/StudyTracker-Case-Study?page-id=0%3A1&node-id=3-3&viewport=617%2C148%2C0.04&t=E8tUkjyt0rpifKza-1&scaling=scale-down-width&content-scaling=fixed'}
        img={'/studytracker-img.png'} 
        nextProj={nextProj}
        prevProj={prevProj}   
      />
    </>
  );
}
