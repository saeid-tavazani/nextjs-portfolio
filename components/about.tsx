'use client';
import loptop from '@/assets/laptop.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
const About = () => {
  return (
    <section
      className="w-full min-h-screen content-center grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-10 items-center justify-center text-justify"
      id="about"
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="col-span-1 lg:col-span-2 grid justify-center"
      >
        <Image src={loptop} alt="about" className="max-w-72 lg:w-full" />
      </motion.div>

      <div className="lg:col-span-4 col-span-1">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold text-4xl"
        >
          در باره من
        </motion.h2>
        <motion.p
          className="text-lg mt-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          من سعید توازانی هستم، برنامه‌نویس فرانت‌اند با تخصص در Node.js، React، Next.js، TypeScript، JavaScript، HTML و CSS. از ۶ سال پیش
          وارد دنیای برنامه‌نویسی شدم و در ۴ سال اخیر تمرکز ویژه‌ای بر روی توسعه فرانت‌اند داشته‌ام. فوق‌دیپلم خود را از دانشگاه شهید محسن
          محاجر دریافت کرده‌ام و هم‌اکنون در دانشگاه خوراسگان مشغول به تحصیل در رشته نرم‌افزار برای کسب مدرک لیسانس هستم. علاقه فراوانی به
          رشد شخصی دارم و همواره در تلاش هستم که مهارت‌های فنی‌ام را از طریق پروژه‌ها و چالش‌های مختلف تقویت کنم. هدفم این است که در مسیر
          توسعه نرم‌افزار به موفقیت‌های بیشتری دست یابم و تأثیر مثبتی در این حوزه داشته باشم.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
