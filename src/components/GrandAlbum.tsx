import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface GrandAlbumProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const GrandAlbum: React.FC<GrandAlbumProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, photos } = chapter;

  // Helper render photo card without white blank spaces
  const renderAlbumCard = (
    photo: PhotoItem,
    aspectClass: string,
    tiltClass: string,
    extraClass = ''
  ) => (
    <div
      key={photo.id}
      onClick={() => onPhotoClick(photo)}
      className={`editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-lg bg-white p-1 sm:p-1.5 shadow-paper hover:shadow-paper-lg transition-all border border-border/60 ${aspectClass} ${tiltClass} ${extraClass}`}
    >
      <div className="w-full h-full overflow-hidden rounded-lg sm:rounded-[4px] relative">
        <img
          src={photo.url}
          alt={photo.alt}
          loading="lazy"
          className="w-full h-full object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ filter: 'none' }}
        />
        {/* <div className="sm:hidden absolute bottom-2 right-2 bg-black/40 backdrop-blur-sm text-[9px] text-white/90 px-1.5 py-0.5 rounded-full tracking-wider font-sans">
          Xem
        </div> */}
      </div>
    </div>
  );

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
            {/* Top Row: photo-02 (square) and photo-03 (portrait) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
              {photos[0] &&
                renderAlbumCard(
                  photos[0],
                  'w-full aspect-[4/5] sm:aspect-square',
                  'tilt-left md:tilt-none'
                )}
              {photos[1] &&
                renderAlbumCard(
                  photos[1],
                  'w-full aspect-[4/5] sm:aspect-[3/4]',
                  'tilt-right md:tilt-none sm:translate-y-2'
                )}
            </div>

            {/* Bottom wide/landscape: photo-01 */}
            {photos[2] &&
              renderAlbumCard(
                photos[2],
                'w-full aspect-[4/3] sm:aspect-[16/10]',
                'md:tilt-none'
              )}
          </div>

          {/* Right Page (3 Photos) */}
          <div className="flex flex-col gap-3.5 sm:gap-6 justify-between">
            {/* Top wide: photo-04 */}
            {photos[3] &&
              renderAlbumCard(
                photos[3],
                'w-full aspect-[4/3] sm:aspect-[16/10]',
                'md:tilt-none'
              )}

            {/* Bottom Row: photo-05 (square) and photo-06 (landscape 4:3) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
              {photos[4] &&
                renderAlbumCard(
                  photos[4],
                  'w-full aspect-square',
                  'tilt-right md:tilt-none'
                )}
              {photos[5] &&
                renderAlbumCard(
                  photos[5],
                  'w-full aspect-square sm:aspect-[4/3]',
                  'tilt-left md:tilt-none sm:translate-y-2'
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
