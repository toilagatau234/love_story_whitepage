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
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Stagger photos softly with subtle scale & float
        const photos = section.querySelectorAll('.editorial-card-interactive');
        if (photos.length > 0) {
          gsap.fromTo(
            photos,
            { opacity: 0, scale: 0.95, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Subtle Parallax effect on scroll for primary photos
          const primaryPhotos = section.querySelectorAll('.parallax-subtle');
          primaryPhotos.forEach((el) => {
            gsap.fromTo(
              el,
              { y: 15 },
              {
                y: -15,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);
};
