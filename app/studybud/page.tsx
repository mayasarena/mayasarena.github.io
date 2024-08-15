import ProjectPage from '@/components/ProjectPage';
import Link from 'next/link';
import { Project } from '@/types/Project';

export default function Home() {
  const nextProj: Project = {
    url: '/unicorn',
    img: '/unicorn-img.png',
    title: 'Bob the Unicorn',
    type: 'Dev & UX'
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
        title={'Studybud'}
        subtitle={'Helping students focus through planning and gamification.'}
        description={<p className="text-base text-medgrey my-6">
          Using the insights that I gained from my <Link href="/study-tracker" target="_blank" className="text-primary hover:underline underline-offset-4">thesis</Link>, I designed an application to
          help students improve their study habits using a design thinking process. Without my research goals restricting the application design, I was able to better address the concerns of my users
          and incorporate feedback from the app developed for my thesis into a new and improved application.
          <br /><br />
          Note: Case study under construction.
        </p>}
        links={''}
        img={'/studybud-img.png'} 
        nextProj={nextProj} 
        prevProj={prevProj}    
      />
    </>
  );
}