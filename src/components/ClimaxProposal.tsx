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
    <section id="climax-proposal" className="relative py-24 sm:py-36 px-6 max-w-4xl mx-auto text-center border-t border-border/60">
      {!isOpened ? (
        <div className="flex flex-col items-center max-w-lg mx-auto py-12 animate-in fade-in duration-700">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary font-medium mb-3">
            {climax.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-ink tracking-tight mb-4">
            {climax.title}
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base font-light mb-8 max-w-md">
            {climax.lead}
          </p>

          <button
            onClick={() => setIsOpened(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-4 h-4 text-accent animate-spin-slow" />
            <span>{climax.buttonText}</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000">
          {/* Tag */}
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary font-medium mb-3">
            {climax.openedTitle}
          </span>

          {/* Real Bouquet Photo in untouched colors */}
          <div
            onClick={() => onPhotoClick(climax.bouquetImage)}
            className="relative w-full max-w-md my-8 overflow-hidden rounded-lg bg-surface shadow-2xl border border-border/80 cursor-pointer group"
          >
            <img
              src={climax.bouquetImage.url}
              alt={climax.bouquetImage.alt}
              className="w-full aspect-[4/3] object-cover editorial-photo transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'none' }}
            />
          </div>

          {/* Confession Letter Card */}
          <div className="max-w-xl mx-auto mt-6 p-8 sm:p-10 rounded-2xl bg-surface/80 border border-border/60 shadow-sm text-center">
            <div className="flex justify-center mb-6 text-primary">
              <Heart className="w-5 h-5 fill-primary" />
            </div>

            <div className="space-y-4 mb-8">
              {climax.confessionLines.map((line, idx) => (
                <p key={idx} className="font-serif text-lg sm:text-2xl font-normal text-ink leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Proposal Question */}
            <div className="py-6 border-y border-border/60 my-8">
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
