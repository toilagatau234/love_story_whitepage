import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface GrandAlbumProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const GrandAlbum: React.FC<GrandAlbumProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, photos } = chapter;

  return (
    <section id={chapter.id} className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary font-medium mb-2 inline-block">
          {tag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-ink tracking-tight mb-4">
          {title}
        </h2>
        <p className="font-sans text-muted text-sm sm:text-base font-light max-w-md mx-auto">
          {lead}
        </p>
      </div>

      {/* The Grand Photobook Album Container */}
      <div className="relative rounded-lg sm:rounded-2xl bg-[#F7F2EB] border border-border/80 shadow-2xl p-4 sm:p-8 lg:p-12 transition-all duration-700">
        {/* Subtle Album Spine Line (Center Binding) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border/80" />

        {/* Dual Page Grid inside Album */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Left Page (3 Photos) */}
          <div className="flex flex-col gap-6 sm:gap-8 justify-between">
            <div className="grid grid-cols-2 gap-4">
              {photos[0] && (
                <div
                  onClick={() => onPhotoClick(photos[0])}
                  className="group relative cursor-pointer overflow-hidden rounded bg-white p-2 shadow-sm hover:shadow-md transition-all border border-border/40"
                >
                  <img
                    src={photos[0].url}
                    alt={photos[0].alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover editorial-photo rounded-[1px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
              {photos[1] && (
                <div
                  onClick={() => onPhotoClick(photos[1])}
                  className="group relative cursor-pointer overflow-hidden rounded bg-white p-2 shadow-sm hover:shadow-md transition-all border border-border/40"
                >
                  <img
                    src={photos[1].url}
                    alt={photos[1].alt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover editorial-photo rounded-[1px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
            </div>

            {photos[2] && (
              <div
                onClick={() => onPhotoClick(photos[2])}
                className="group relative cursor-pointer overflow-hidden rounded bg-white p-2.5 shadow-sm hover:shadow-md transition-all border border-border/40"
              >
                <img
                  src={photos[2].url}
                  alt={photos[2].alt}
                  loading="lazy"
                  className="w-full aspect-[16/9] sm:aspect-[4/3] object-cover editorial-photo rounded-[1px] transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'none' }}
                />
              </div>
            )}
          </div>

          {/* Right Page (3 Photos) */}
          <div className="flex flex-col gap-6 sm:gap-8 justify-between">
            {photos[3] && (
              <div
                onClick={() => onPhotoClick(photos[3])}
                className="group relative cursor-pointer overflow-hidden rounded bg-white p-2.5 shadow-sm hover:shadow-md transition-all border border-border/40"
              >
                <img
                  src={photos[3].url}
                  alt={photos[3].alt}
                  loading="lazy"
                  className="w-full aspect-[16/9] sm:aspect-[4/3] object-cover editorial-photo rounded-[1px] transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'none' }}
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {photos[4] && (
                <div
                  onClick={() => onPhotoClick(photos[4])}
                  className="group relative cursor-pointer overflow-hidden rounded bg-white p-2 shadow-sm hover:shadow-md transition-all border border-border/40"
                >
                  <img
                    src={photos[4].url}
                    alt={photos[4].alt}
                    loading="lazy"
                    className="w-full aspect-square object-cover editorial-photo rounded-[1px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
              {photos[5] && (
                <div
                  onClick={() => onPhotoClick(photos[5])}
                  className="group relative cursor-pointer overflow-hidden rounded bg-white p-2 shadow-sm hover:shadow-md transition-all border border-border/40"
                >
                  <img
                    src={photos[5].url}
                    alt={photos[5].alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover editorial-photo rounded-[1px] transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Photobook Footer Stamp */}
        <div className="mt-8 pt-6 border-t border-border/40 flex justify-between items-center text-[11px] font-sans uppercase tracking-[0.2em] text-muted/60">
          <span>Private Memory Archive</span>
          <span>Chapter VII</span>
        </div>
      </div>
    </section>
  );
};
