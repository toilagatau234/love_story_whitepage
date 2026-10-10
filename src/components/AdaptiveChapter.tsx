import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface AdaptiveChapterProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const AdaptiveChapter: React.FC<AdaptiveChapterProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, layoutVariant, photos } = chapter;

  // Text block component with clean typography
  const renderTextBlock = (extraClasses = '') => (
    <div className={`chapter-text-block max-w-lg ${extraClasses}`}>
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

  // Render borderless, free-flowing photo card
  const renderPhotoCard = (
    photo: PhotoItem,
    className = '',
    aspect = '',
    tiltClass = '',
    isPrimary = false
  ) => (
    <div
      key={photo.id}
      onClick={() => onPhotoClick(photo)}
      className={`editorial-card-interactive group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-500 hover:shadow-paper-lg ${aspect} ${tiltClass} ${
        isPrimary ? 'parallax-subtle' : ''
      } ${className}`}
    >
      <img
        src={photo.url}
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ filter: 'none' }}
      />
      {/* Subtle touch indicator on mobile */}
      <div className="sm:hidden absolute bottom-2.5 right-2.5 bg-black/40 backdrop-blur-sm text-[10px] text-white/90 px-2 py-0.5 rounded-full tracking-wider font-sans opacity-0 group-hover:opacity-100 transition-opacity">
        Xem
      </div>
    </div>
  );

  return (
    <section
      id={chapter.id}
      className="chapter-section relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* 1. GRAND SINGLE (Chương 2 - Tấm hình chụp chung năm đó) -> Thu hẹp khoảng cách desktop, không giãn xa */}
      {layoutVariant === 'grand-single' && (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
          <div className="w-full md:w-1/2 text-left">
            {renderTextBlock()}
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {photos[0] &&
              renderPhotoCard(
                photos[0],
                'w-full max-w-sm sm:max-w-md shadow-paper',
                'aspect-[4/3]',
                'tilt-right md:tilt-none',
                true
              )}
          </div>
        </div>
      )}

      {/* 2. ASYMMETRIC TRIO (Chương 1 - Những ngày đầu tiên) */}
      {layoutVariant === 'asymmetric-trio' && (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Header text on top */}
          <div className="max-w-xl text-left">
            {renderTextBlock()}
          </div>

          {/* Free-flowing layout: 1 Hero Photo + 2 Offset Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Primary Portrait Photo */}
            <div className="sm:col-span-7 lg:col-span-6">
              {photos[0] &&
                renderPhotoCard(
                  photos[0],
                  'w-full shadow-paper',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none',
                  true
                )}
            </div>

            {/* 2 Supporting Photos */}
            <div className="sm:col-span-5 lg:col-span-6 grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-6 sm:translate-y-4">
              {photos[1] &&
                renderPhotoCard(
                  photos[1],
                  'w-full shadow-paper',
                  'aspect-square sm:aspect-[4/3]',
                  'tilt-right md:tilt-none'
                )}
              {photos[2] &&
                renderPhotoCard(
                  photos[2],
                  'w-full shadow-paper',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none'
                )}
            </div>
          </div>
        </div>
      )}

      {/* 3. EDITORIAL QUAD (Buổi Date & Những Chuyến Đi) */}
      {layoutVariant === 'editorial-quad' && (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Text narrative */}
          <div className="max-w-xl text-left">
            {renderTextBlock()}
          </div>

          {/* 4 Photos free-flowing without stiff frames */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 items-start">
            <div className="flex flex-col gap-4">
              {photos[0] &&
                renderPhotoCard(
                  photos[0],
                  'w-full shadow-paper',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none',
                  true
                )}
            </div>
            <div className="flex flex-col gap-4 sm:translate-y-6">
              {photos[1] &&
                renderPhotoCard(
                  photos[1],
                  'w-full shadow-paper',
                  'aspect-[3/4]',
                  'tilt-right md:tilt-none'
                )}
            </div>
            <div className="flex flex-col gap-4 -translate-y-1 sm:translate-y-2">
              {photos[2] &&
                renderPhotoCard(
                  photos[2],
                  'w-full shadow-paper',
                  'aspect-[3/4]',
                  'tilt-left md:tilt-none'
                )}
            </div>
            <div className="flex flex-col gap-4 sm:translate-y-8">
              {photos[3] &&
                renderPhotoCard(
                  photos[3],
                  'w-full shadow-paper',
                  'aspect-[3/4]',
                  'tilt-right md:tilt-none',
                  true
                )}
            </div>
          </div>
        </div>
      )}

      {/* 4. OFFSET DUO (2 Ảnh) */}
      {layoutVariant === 'offset-duo' && (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
          <div className="w-full md:w-1/2 text-left">
            {renderTextBlock()}
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 items-center">
            {photos[0] &&
              renderPhotoCard(
                photos[0],
                'w-full shadow-paper',
                'aspect-[4/3]',
                'tilt-left md:tilt-none',
                true
              )}
            {photos[1] &&
              renderPhotoCard(
                photos[1],
                'w-full shadow-paper sm:translate-y-6',
                'aspect-[4/3]',
                'tilt-right md:tilt-none'
              )}
          </div>
        </div>
      )}
    </section>
  );
};
