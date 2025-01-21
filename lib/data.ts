import image2 from '@/assets/Card - Element-desktop (1).png';
import image3 from '@/assets/Card - Element-desktop (2).png';
import image4 from '@/assets/Card - Element-desktop (3).png';
import image1 from '@/assets/Card - Element-desktop.png';
import { FaGithub, FaPhone, FaSkype, FaTelegram } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';

export const projects = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    image: image1,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    image: image2,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    image: image3,
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    image: image4,
  },
];

export const links = [
  {
    slug: 'https://github.com/saeid-tavazani',
    icon: FaGithub,
    size: 40,
  },
  {
    slug: 'https://join.skype.com/invite/HfZKgk1gjISo',
    icon: FaSkype,
    size: 40,
  },
  {
    slug: 'https://www.instagram.com/saeed.tavazani/',
    icon: FaInstagram,
    size: 40,
  },
  {
    slug: 'https://t.me/saeidIRs',
    icon: FaTelegram,
    size: 40,
  },
  {
    slug: 'mailto:saeidtavazani@gmail.com',
    icon: MdAlternateEmail,
    size: 40,
  },
  {
    slug: 'https://www.linkedin.com/in/saeidtavazani/',
    icon: FaLinkedinIn,
    size: 40,
  },
  {
    slug: 'tel:09911561251',
    icon: FaPhone,
    size: 32,
  },
];
