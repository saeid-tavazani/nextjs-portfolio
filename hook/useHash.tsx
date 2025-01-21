import { useEffect, useState } from 'react';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('');

  // Hook to track scroll position and update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        const sectionTop = sectionElement?.offsetTop || 0;
        const sectionHeight = sectionElement?.offsetHeight || 0;

        if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sync the active link with the URL hash, preventing an infinite loop
  useEffect(() => {
    if (activeLink && window.location.hash !== `#${activeLink}`) {
      window.history.pushState(null, '', `#${activeLink}`); // Update the URL hash without causing page refresh
    }
  }, [activeLink]);

  return activeLink;
};
