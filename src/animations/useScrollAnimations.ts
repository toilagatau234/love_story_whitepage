import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const sections = document.querySelectorAll('.chapter-section');
    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        // Animate text block
        const textBlock = section.querySelector('.chapter-text-block');
        if (textBlock) {
          gsap.fromTo(
            textBlock,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Stagger photos softly
        const photos = section.querySelectorAll('.editorial-photo');
        if (photos.length > 0) {
          gsap.fromTo(
            photos,
            { opacity: 0, scale: 0.97, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.1,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);
};
