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
    url: '/studybud',
    img: '/studybud-img.png',
    title: 'Studybud',
    type: 'UX Design'
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
        codeLink={'https://github.com/mayasarena/bob-the-unicorn'} 
        img={'/unicorn-header.gif'} 
        nextProj={nextProj}
        prevProj={prevProj}
      />
    </>
  );
}