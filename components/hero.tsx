'use client';
import { motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import { FlipWords } from './ui/flipWords';
const Hero = () => {
  const words = ['Next.js', 'React', 'TypeScript'];
  return (
    <section className="w-screen h-screen" id="home">
      <div className="container flex h-full justify-center pt-10 items-center flex-col gap-5 text-center">
        <motion.h2
          initial={{ opacity: 0.5, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-6xl text-5xl font-bold"
        >
          برنامه نویسی، هنر مورد علاقه من
        </motion.h2>
        <motion.span
          initial={{ opacity: 0.5, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0)' }}
          transition={{ delay: 0.15 }}
          className="max-w-[700px] text-xl"
        >
          سلام، من سعید هستم، یک برنامه‌نویس باتجربه <b>Front-end</b> که در طراحی رابط‌های کاربری مدرن و تعاملی با فناوری‌هایی مانند
          <FlipWords className="text-white font-bold" words={words} /> تخصص دارم.
        </motion.span>
        <motion.a
          className="mt-5"
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ repeatType: 'loop', type: 'tween', duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
          href="#projects"
        >
          <FaAngleDown size={40} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
