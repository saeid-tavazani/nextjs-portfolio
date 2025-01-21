import { useEffect, useState } from 'react';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('');

  // Hook to track URL hash changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        setActiveLink(window.location.hash.replace('#', ''));
      }

      const onHashChange = () => {
        setActiveLink(window.location.hash);
      };

      window.addEventListener('hashchange', onHashChange);

      return () => window.removeEventListener('hashchange', onHashChange);
    }
  }, []);

  // Hook to track scroll position and update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
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

  // Update active link based on hash

  // Sync the active link with the URL hash, preventing an infinite loop
  useEffect(() => {
    if (activeLink && window.location.hash !== `#${activeLink.replace('#', '')}`) {
      window.history.pushState(null, '', `#${activeLink}`); // Update the URL hash without causing page refresh
    }
  }, [activeLink]);

  return activeLink;
};
