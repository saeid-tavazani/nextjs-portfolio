'use client';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center gap-9 h-screen justify-center">
      <motion.h2
        initial={{ y: 20, opacity: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        className="font-bold text-4xl"
      >
        راه های ارتباطی با من
      </motion.h2>
      <motion.p
        initial={{ opacity: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-[500px] text-center"
      >
        از اینکه به وب‌سایت من سر زدید، بسیار خوشحالم! اگر سوالی دارید، نیاز به مشاوره فنی دارید، یا می‌خواهید در مورد پروژه‌ای صحبت کنید،
        می‌توانید از راه‌های زیر با من در ارتباط باشید
      </motion.p>
      <motion.div
        className="flex items-center gap-3"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {links.map(item => (
          <motion.a
            variants={{
              offscreen: {
                scale: 0,
              },
              onscreen: {
                scale: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.1,
                  duration: 0.7,
                },
              },
            }}
            href={item.slug}
            key={item.slug}
            target="_blank"
          >
            <item.icon size={item.size} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
