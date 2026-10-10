import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface GrandAlbumProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const GrandAlbum: React.FC<GrandAlbumProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, photos } = chapter;

  return (
    <section id={chapter.id} className="chapter-section relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-border/40">
      {/* Header */}
      <div className="text-left sm:text-center max-w-xl mx-auto mb-10 sm:mb-14">
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

      {/* Free-flow Editorial Mosaic - Không viền trắng, không chừa mảng trắng, không cắt xén khuôn mặt */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 items-start">
        {/* Photo 0 */}
        {photos[0] && (
          <div
            onClick={() => onPhotoClick(photos[0])}
            className="editorial-card-interactive group cursor-pointer overflow-hidden rounded-lg shadow-paper hover:shadow-paper-lg transition-all tilt-left md:tilt-none"
          >
            <img
              src={photos[0].url}
              alt={photos[0].alt}
              loading="lazy"
              className="w-full aspect-square sm:aspect-[4/3] object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: 'none' }}
            />
          </div>
        )}

        {/* Photo 1 */}
        {photos[1] && (
          <div
            onClick={() => onPhotoClick(photos[1])}
            className="editorial-card-interactive group cursor-pointer overflow-hidden rounded-lg shadow-paper hover:shadow-paper-lg transition-all tilt-right md:tilt-none md:translate-y-4"
          >
            <img
              src={photos[1].url}
              alt={photos[1].alt}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: 'none' }}
            />
          </div>
        )}

        {/* Photo 2 */}
        {photos[2] && (
          <div
            onClick={() => onPhotoClick(photos[2])}
            className="editorial-card-interactive group cursor-pointer overflow-hidden rounded-lg shadow-paper hover:shadow-paper-lg transition-all tilt-left md:tilt-none"
          >
            <img
              src={photos[2].url}
              alt={photos[2].alt}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: 'none' }}
            />
          </div>
        )}

        {/* Photo 3 */}
        {photos[3] && (
          <div
            onClick={() => onPhotoClick(photos[3])}
            className="editorial-card-interactive group cursor-pointer overflow-hidden rounded-lg shadow-paper hover:shadow-paper-lg transition-all tilt-right md:tilt-none md:-translate-y-3"
          >
            <img
              src={photos[3].url}
              alt={photos[3].alt}
              loading="lazy"
              className="w-full aspect-square sm:aspect-[4/3] object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: 'none' }}
            />
          </div>
        )}

        {/* Photo 4 */}
        {photos[4] && (
          <div
            onClick={() => onPhotoClick(photos[4])}
            className="editorial-card-interactive group cursor-pointer overflow-hidden rounded-lg shadow-paper hover:shadow-paper-lg transition-all tilt-left md:tilt-none md:translate-y-2"
          >
            <img
              src={photos[4].url}
              alt={photos[4].alt}
              loading="lazy"
              className="w-full aspect-square object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: 'none' }}
            />
          </div>
        )}

        {/* Photo 5 */}
        {photos[5] && (
          <div
            onClick={() => onPhotoClick(photos[5])}
            className="editorial-card-interactive group cursor-pointer overflow-hidden rounded-lg shadow-paper hover:shadow-paper-lg transition-all tilt-right md:tilt-none"
          >
            <img
              src={photos[5].url}
              alt={photos[5].alt}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: 'none' }}
            />
          </div>
        )}
      </div>

      {/* Photobook Footer Stamp */}
      <div className="mt-10 pt-4 border-t border-border/40 flex justify-between items-center text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-muted">
        <span>Album Kỷ Niệm Của Chúng Mình</span>
        <span>Chương V</span>
      </div>
    </section>
  );
};
