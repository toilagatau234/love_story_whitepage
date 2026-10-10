import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface GrandAlbumProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const GrandAlbum: React.FC<GrandAlbumProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, photos } = chapter;

  return (
    <section id={chapter.id} className="chapter-section relative py-16 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/40">
      {/* Header */}
      <div className="text-left sm:text-center max-w-xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] text-primary font-medium">
            {tag}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-ink tracking-tight mb-3.5 text-balance">
          {title}
        </h2>
        <p className="font-sans text-muted text-sm sm:text-base font-light max-w-md sm:mx-auto leading-relaxed">
          {lead}
        </p>
      </div>

      {/* The Grand Photobook Container - Mobile Tactile Gallery */}
      <div className="relative rounded-2xl bg-[#FAF6F0] border border-border/80 shadow-paper-lg p-3 sm:p-8 lg:p-12 transition-all duration-700">
        {/* Subtle Album Spine Line (Center Binding on Desktop) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border/80" />

        {/* Dual Page Grid inside Album */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-14">
          {/* Left Page (3 Photos) */}
          <div className="flex flex-col gap-3.5 sm:gap-6 justify-between">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {photos[0] && (
                <div
                  onClick={() => onPhotoClick(photos[0])}
                  className="editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded bg-white p-1.5 sm:p-2 shadow-paper hover:shadow-paper-lg transition-all border border-border/60 tilt-left md:tilt-none"
                >
                  <img
                    src={photos[0].url}
                    alt={photos[0].alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover editorial-photo rounded-lg sm:rounded-[2px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
              {photos[1] && (
                <div
                  onClick={() => onPhotoClick(photos[1])}
                  className="editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded bg-white p-1.5 sm:p-2 shadow-paper hover:shadow-paper-lg transition-all border border-border/60 tilt-right md:tilt-none sm:translate-y-2"
                >
                  <img
                    src={photos[1].url}
                    alt={photos[1].alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] sm:aspect-[4/3] object-cover editorial-photo rounded-lg sm:rounded-[2px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
            </div>

            {photos[2] && (
              <div
                onClick={() => onPhotoClick(photos[2])}
                className="editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded bg-white p-1.5 sm:p-2.5 shadow-paper hover:shadow-paper-lg transition-all border border-border/60"
              >
                <img
                  src={photos[2].url}
                  alt={photos[2].alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] sm:aspect-[4/3] object-cover editorial-photo rounded-lg sm:rounded-[2px] transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'none' }}
                />
              </div>
            )}
          </div>

          {/* Right Page (3 Photos) */}
          <div className="flex flex-col gap-3.5 sm:gap-6 justify-between">
            {photos[3] && (
              <div
                onClick={() => onPhotoClick(photos[3])}
                className="editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded bg-white p-1.5 sm:p-2.5 shadow-paper hover:shadow-paper-lg transition-all border border-border/60"
              >
                <img
                  src={photos[3].url}
                  alt={photos[3].alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] sm:aspect-[4/3] object-cover editorial-photo rounded-lg sm:rounded-[2px] transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'none' }}
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {photos[4] && (
                <div
                  onClick={() => onPhotoClick(photos[4])}
                  className="editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded bg-white p-1.5 sm:p-2 shadow-paper hover:shadow-paper-lg transition-all border border-border/60 tilt-right md:tilt-none"
                >
                  <img
                    src={photos[4].url}
                    alt={photos[4].alt}
                    loading="lazy"
                    className="w-full aspect-square sm:aspect-square object-cover editorial-photo rounded-lg sm:rounded-[2px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
              {photos[5] && (
                <div
                  onClick={() => onPhotoClick(photos[5])}
                  className="editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded bg-white p-1.5 sm:p-2 shadow-paper hover:shadow-paper-lg transition-all border border-border/60 tilt-left md:tilt-none sm:translate-y-2"
                >
                  <img
                    src={photos[5].url}
                    alt={photos[5].alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover editorial-photo rounded-lg sm:rounded-[2px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Photobook Footer Stamp */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/60 flex justify-between items-center text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-muted">
          <span>Album Kỷ Niệm Của Chúng Mình</span>
          <span>Chương V</span>
        </div>
      </div>
    </section>
  );
};
