import About from '@/components/About';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import ForFun from '@/components/ForFun';
import { Heart } from '@/components/SVG';

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <ForFun />
    </>
  );
}
