import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import { ShootingStars } from '@/components/ui/shootingStars.tsx';
import { StarsBackground } from '@/components/ui/starsBackground';
const Home = () => {
  return (
    <main className="container overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default Home;
