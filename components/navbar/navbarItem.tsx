'use client';
import { useHash } from '@/hook/useHash';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  href: string;
  text: ReactNode;
};

const NavbarItem = ({ href, text }: Props) => {
  const hash = useHash();
  const active = hash.replace('#', '') === href || (hash === '' && href === 'home');

  return (
    <motion.a
      className="text-gray-600 py-1 px-2 lg:px-3 relative w-fit h-fit whitespace-nowrap md:text-base text-xs"
      href={`#${href}`}
      key={href}
    >
      {active && <motion.span layoutId="activeNavbarItem" className="bg-white rounded-full absolute inset-0 md:w-full h-full z-0" />}
      <motion.span animate={active ? { color: '#000' } : {}} className="relative z-10">
        {text}
      </motion.span>
    </motion.a>
  );
};

export default NavbarItem;
