'use client';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <section className="w-full h-screen flex flex-col gap-9 justify-center text-justify" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-bold text-4xl"
      >
        در باره من
      </motion.h2>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        من سعید توازانی هستم، برنامه‌نویس فرانت‌اند با تخصص در Node.js، React، Next.js، TypeScript، JavaScript، HTML و CSS. از ۶ سال پیش
        وارد دنیای برنامه‌نویسی شدم و در ۴ سال اخیر تمرکز ویژه‌ای بر روی توسعه فرانت‌اند داشته‌ام. فوق‌دیپلم خود را از دانشگاه شهید محسن
        محاجر دریافت کرده‌ام و هم‌اکنون در دانشگاه خوراسگان مشغول به تحصیل در رشته نرم‌افزار برای کسب مدرک لیسانس هستم. علاقه فراوانی به رشد
        شخصی دارم و همواره در تلاش هستم که مهارت‌های فنی‌ام را از طریق پروژه‌ها و چالش‌های مختلف تقویت کنم. هدفم این است که در مسیر توسعه
        نرم‌افزار به موفقیت‌های بیشتری دست یابم و تأثیر مثبتی در این حوزه داشته باشم.
      </motion.p>
    </section>
  );
};

export default About;
