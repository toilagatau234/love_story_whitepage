import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface AdaptiveChapterProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const AdaptiveChapter: React.FC<AdaptiveChapterProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, layoutVariant, photos } = chapter;

  // Text block component with editorial mobile styling
  const renderTextBlock = (extraClasses = '') => (
    <div className={`chapter-text-block max-w-lg lg:max-w-sm ${extraClasses}`}>
      <div className="inline-flex items-center gap-2 mb-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] text-primary font-medium">
          {tag}
        </span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-tight leading-[1.2] mb-3.5 text-balance">
        {title}
      </h2>
      <p className="font-sans text-muted text-sm sm:text-base font-light leading-relaxed">
        {lead}
      </p>
    </div>
  );

  // Render photo card with tactile mobile border, shadow, and touch interaction
  const renderPhotoCard = (
    photo: PhotoItem,
    className = '',
    aspect = 'aspect-[3/4]',
    tiltClass = '',
    isPrimary = false
  ) => (
    <div
      key={photo.id}
      onClick={() => onPhotoClick(photo)}
      className={`editorial-card-interactive group relative overflow-hidden rounded-xl sm:rounded-lg bg-surface cursor-pointer shadow-paper hover:shadow-paper-lg transition-all duration-500 border border-border/70 p-1 sm:p-1.5 ${aspect} ${tiltClass} ${
        isPrimary ? 'parallax-subtle' : ''
      } ${className}`}
    >
      <div className="w-full h-full overflow-hidden rounded-[10px] sm:rounded-[4px] relative">
        <img
          src={photo.url}
          alt={photo.alt}
          loading="lazy"
          className="w-full h-full object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ filter: 'none' }}
        />
        {/* Subtle touch indicator pill on mobile */}
        <div className="sm:hidden absolute bottom-2.5 right-2.5 bg-black/45 backdrop-blur-sm text-[10px] text-white/90 px-2 py-0.5 rounded-full tracking-wider font-sans opacity-70">
          Chạm để xem
        </div>
      </div>
    </div>
  );

  return (
    <section
      id={chapter.id}
      className="chapter-section relative py-16 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* 1. GRAND SINGLE (1 Ảnh: Kỷ niệm năm ấy - Scene 2) */}
      {layoutVariant === 'grand-single' && (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
          <div className="w-full md:w-5/12 order-2 md:order-1 text-left">
            {renderTextBlock()}
          </div>
          <div className="w-full md:w-7/12 order-1 md:order-2 flex justify-center md:justify-end">
            {photos[0] &&
              renderPhotoCard(
                photos[0],
                'w-full max-w-md',
                'aspect-[4/3]',
                'tilt-right md:tilt-none',
                true
              )}
          </div>
        </div>
      )}

      {/* 2. ASYMMETRIC TRIO (3 Ảnh: Chương 1 - Những ngày đầu tiên) */}
      {layoutVariant === 'asymmetric-trio' && (
        <div className="flex flex-col gap-8">
          {/* Header text on top for mobile clarity */}
          <div className="max-w-xl text-left">
            {renderTextBlock()}
          </div>

          {/* Mobile-first editorial collage: 1 Hero Photo + 2 Offset Polaroid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Primary Portrait Photo */}
            <div className="sm:col-span-7 lg:col-span-6">
              {photos[0] &&
                renderPhotoCard(
                  photos[0],
                  'w-full',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none',
                  true
                )}
            </div>

            {/* 2 Supporting Photos in offset row/column */}
            <div className="sm:col-span-5 lg:col-span-6 grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-6 sm:translate-y-4">
              {photos[1] &&
                renderPhotoCard(
                  photos[1],
                  'w-full',
                  'aspect-square sm:aspect-[4/3]',
                  'tilt-right md:tilt-none'
                )}
              {photos[2] &&
                renderPhotoCard(
                  photos[2],
                  'w-full',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none'
                )}
            </div>
          </div>
        </div>
      )}

      {/* 3. EDITORIAL QUAD (4 Ảnh: Buổi Date & Những Chuyến Đi) */}
      {layoutVariant === 'editorial-quad' && (
        <div className="flex flex-col gap-8">
          {/* Text narrative */}
          <div className="max-w-xl text-left">
            {renderTextBlock()}
          </div>

          {/* Dynamic 4-Photo Layout: 2 pairs stacked with natural offset on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-6">
            <div className="lg:col-span-3 flex flex-col gap-3.5 sm:gap-6">
              {photos[0] &&
                renderPhotoCard(
                  photos[0],
                  'w-full',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none',
                  true
                )}
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3.5 sm:gap-6 sm:translate-y-6">
              {photos[1] &&
                renderPhotoCard(
                  photos[1],
                  'w-full',
                  'aspect-[3/4] sm:aspect-[4/3]',
                  'tilt-right md:tilt-none'
                )}
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3.5 sm:gap-6 -translate-y-1 sm:translate-y-2">
              {photos[2] &&
                renderPhotoCard(
                  photos[2],
                  'w-full',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none'
                )}
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3.5 sm:gap-6 sm:translate-y-8">
              {photos[3] &&
                renderPhotoCard(
                  photos[3],
                  'w-full',
                  'aspect-[3/4] sm:aspect-[4/3]',
                  'tilt-right md:tilt-none',
                  true
                )}
            </div>
          </div>
        </div>
      )}

      {/* 4. OFFSET DUO (2 Ảnh) */}
      {layoutVariant === 'offset-duo' && (
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="w-full lg:col-span-5 text-left">
            {renderTextBlock()}
          </div>
          <div className="w-full lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            {photos[0] &&
              renderPhotoCard(
                photos[0],
                'w-full',
                'aspect-[4/3]',
                'tilt-left md:tilt-none',
                true
              )}
            {photos[1] &&
              renderPhotoCard(
                photos[1],
                'w-full sm:translate-y-6',
                'aspect-[4/3]',
                'tilt-right md:tilt-none'
              )}
          </div>
        </div>
      )}
    </section>
  );
};
