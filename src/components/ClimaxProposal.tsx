import React, { useState } from 'react';
import { storyData } from '../data/storyData';
import { PhotoItem } from '../types/story';
import { Sparkles, Heart } from 'lucide-react';

interface ClimaxProposalProps {
  onPhotoClick: (photo: PhotoItem) => void;
}

export const ClimaxProposal: React.FC<ClimaxProposalProps> = ({ onPhotoClick }) => {
  const { climax } = storyData;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section id="climax-proposal" className="chapter-section relative py-20 sm:py-36 px-4 sm:px-6 max-w-4xl mx-auto text-center border-t border-border/60">
      {!isOpened ? (
        <div className="flex flex-col items-center max-w-lg mx-auto py-8 sm:py-12 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] text-primary font-medium">
              {climax.tag}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ink tracking-tight mb-4 text-balance">
            {climax.title}
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base font-light mb-8 max-w-md leading-relaxed">
            {climax.lead}
          </p>

          <button
            onClick={() => setIsOpened(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white shadow-paper-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] animate-pulse-glow"
          >
            <Sparkles className="w-4 h-4 text-accent animate-spin-slow" />
            <span>{climax.buttonText}</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] text-primary font-medium">
              {climax.openedTitle}
            </span>
          </div>

          {/* Real Bouquet Photo in untouched colors with tactile frame */}
          <div
            onClick={() => onPhotoClick(climax.bouquetImage)}
            className="editorial-card-interactive relative w-full max-w-sm sm:max-w-md my-6 sm:my-8 overflow-hidden rounded-2xl bg-white p-2 sm:p-2.5 shadow-paper-lg border border-border/80 cursor-pointer group tilt-left md:tilt-none"
          >
            <div className="overflow-hidden rounded-xl relative">
              <img
                src={climax.bouquetImage.url}
                alt={climax.bouquetImage.alt}
                className="w-full aspect-[4/3] object-cover editorial-photo transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'none' }}
              />
              <div className="sm:hidden absolute bottom-2.5 right-2.5 bg-black/45 backdrop-blur-sm text-[10px] text-white/90 px-2 py-0.5 rounded-full tracking-wider font-sans">
                Chạm để phóng lớn
              </div>
            </div>
          </div>

          {/* Confession Letter Card */}
          <div className="w-full max-w-xl mx-auto mt-4 sm:mt-6 p-6 sm:p-10 rounded-2xl bg-surface/90 border border-border/70 shadow-paper text-center">
            <div className="flex justify-center mb-5 text-primary">
              <Heart className="w-6 h-6 fill-primary animate-float-gentle" />
            </div>

            <div className="space-y-4 mb-6 sm:mb-8">
              {climax.confessionLines.map((line, idx) => (
                <p key={idx} className="font-serif text-lg sm:text-2xl font-normal text-ink leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Proposal Question */}
            <div className="py-5 sm:py-6 border-y border-border/60 my-6 sm:my-8">
              <h3 className="font-serif text-2xl sm:text-4xl font-medium text-primary tracking-tight">
                &ldquo;{climax.proposalQuestion}&rdquo;
              </h3>
            </div>

            {/* Real World Appointment */}
            <p className="font-sans text-sm sm:text-base text-muted font-light italic">
              {climax.epilogue}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
