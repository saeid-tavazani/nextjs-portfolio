'use client';
import { motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import { FlipWords } from './ui/flipWords';
const Hero = () => {
  const words = ['Next.js', 'React', 'TypeScript'];
  return (
    <section className="w-full h-screen" id="home">
      <article className="flex h-full justify-center pt-10 items-center flex-col gap-5 text-center">
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
          animate={{ y: [0, 25, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          href="#projects"
        >
          <FaAngleDown size={40} />
        </motion.a>
      </article>
    </section>
  );
};

export default Hero;
