'use client';
import { useHash } from '@/hook/useHash';
import clsx from 'clsx';
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
    <motion.a className="text-gray-600 py-1 px-3 relative w-fit h-fit" href={`#${href}`} key={href}>
      {active && <motion.span layoutId="activeNavbarItem" className="bg-white rounded-full absolute inset-0 w-full h-full z-0" />}
      <span className={clsx('relative z-10 transition-all', active ? 'text-black' : null)}>{text}</span>
    </motion.a>
  );
};

export default NavbarItem;
