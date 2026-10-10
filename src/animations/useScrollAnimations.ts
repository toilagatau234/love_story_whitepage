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
        // Animate text block smoothly
        const textBlock = section.querySelector('.chapter-text-block');
        if (textBlock) {
          gsap.fromTo(
            textBlock,
            { opacity: 0, y: 24, force3D: true },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Stagger photos softly with GPU acceleration
        const photos = section.querySelectorAll('.editorial-card-interactive');
        if (photos.length > 0) {
          gsap.fromTo(
            photos,
            { opacity: 0, y: 20, force3D: true },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 82%',
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
