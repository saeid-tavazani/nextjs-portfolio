'use client';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsCards = () => {
  return (
    <motion.div
      className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      {projects.map((item, i) => (
        <motion.div
          key={i}
          variants={{
            offscreen: { opacity: 0, scale: 0.8 },
            onscreen: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            },
          }}
          className={cn(
            'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4',
          )}
        >
          <Image src={item.image} alt={item.title} />
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold mb-2 mt-2">{item.title}</div>
            <div className="font-sans font-normal text-xs">{item.description}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default ProjectsCards;
