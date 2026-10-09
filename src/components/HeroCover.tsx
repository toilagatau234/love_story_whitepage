import React from 'react';
import { storyData } from '../data/storyData';
import { ChevronDown } from 'lucide-react';

interface HeroCoverProps {
  onStartClick: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onStartClick }) => {
  const { hero } = storyData;

  return (
    <section className="relative min-h-[95svh] flex flex-col justify-between items-center text-center px-6 pt-16 pb-12 max-w-5xl mx-auto">
      {/* Top Editorial Kicker */}
      <div className="w-full flex justify-between items-center border-b border-border pb-4 text-xs font-sans uppercase tracking-[0.2em] text-muted">
        <span>{hero.eyebrow}</span>
        <span>{hero.dateText}</span>
      </div>

      {/* Main Title Block */}
      <div className="my-auto py-12 max-w-3xl flex flex-col items-center">
        <span className="text-primary font-serif italic text-lg sm:text-xl mb-3 tracking-wide">
          Chương mở đầu
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.12] text-ink mb-6 text-balance">
          {hero.title}
        </h1>
        <p className="font-sans text-muted text-base sm:text-lg max-w-lg font-light leading-relaxed mb-8">
          {hero.subtitle}
        </p>

        <button
          onClick={onStartClick}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-ink text-ink hover:bg-ink hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-[0.18em]"
        >
          <span>{hero.ctaText}</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>

      {/* Bottom Editorial Accent */}
      <div className="w-full flex justify-center text-xs font-sans tracking-widest text-muted/60 uppercase">
        Cuộn để lật từng trang ký ức
      </div>
    </section>
  );
};
