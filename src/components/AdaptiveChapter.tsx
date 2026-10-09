import React from 'react';
import { StoryChapter, PhotoItem } from '../types/story';

interface AdaptiveChapterProps {
  chapter: StoryChapter;
  onPhotoClick: (photo: PhotoItem) => void;
}

export const AdaptiveChapter: React.FC<AdaptiveChapterProps> = ({ chapter, onPhotoClick }) => {
  const { title, tag, lead, textPosition, layoutVariant, photos } = chapter;

  // Text block component
  const renderTextBlock = (extraClasses = '') => (
    <div className={`chapter-text-block max-w-sm ${extraClasses}`}>
      <span className="inline-block text-xs font-sans uppercase tracking-[0.2em] text-primary font-medium mb-2">
        {tag}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-tight leading-[1.18] mb-4 text-balance">
        {title}
      </h2>
      <p className="font-sans text-muted text-sm sm:text-base font-light leading-relaxed">
        {lead}
      </p>
    </div>
  );

  // Render photo card without any captions over the photo
  const renderPhotoCard = (photo: PhotoItem, className = '') => (
    <div
      key={photo.id}
      onClick={() => onPhotoClick(photo)}
      className={`group relative overflow-hidden rounded-[2px] bg-surface cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 border border-border/60 ${className}`}
    >
      <img
        src={photo.url}
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover editorial-photo transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ filter: 'none' }}
      />
    </div>
  );

  return (
    <section
      id={chapter.id}
      className="chapter-section relative py-20 sm:py-28 px-6 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* 1. GRAND SINGLE (1 Image: e.g. Tấm ảnh báu vật duy nhất 6 năm) */}
      {layoutVariant === 'grand-single' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-5 order-2 lg:order-1">
            {renderTextBlock('lg:pb-8')}
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
            {photos[0] &&
              renderPhotoCard(
                photos[0],
                'w-full max-w-md aspect-[4/3] sm:aspect-[4/3]'
              )}
          </div>
        </div>
      )}

      {/* 2. ASYMMETRIC TRIO (3 Images: e.g. 6 Năm Thương Thầm or Âm Thầm Giúp Đỡ) */}
      {layoutVariant === 'asymmetric-trio' && (
        <>
          {textPosition === 'top-left' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Text Top-Left */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                {renderTextBlock('mb-8')}
                {photos[1] && (
                  <div className="hidden lg:block w-3/4 self-start">
                    {renderPhotoCard(photos[1], 'aspect-square')}
                  </div>
                )}
              </div>

              {/* Photos on Right & Center */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                {photos[0] && renderPhotoCard(photos[0], 'aspect-[3/4] sm:translate-y-6')}
                <div className="flex flex-col gap-6">
                  <div className="block lg:hidden">
                    {photos[1] && renderPhotoCard(photos[1], 'aspect-square')}
                  </div>
                  {photos[2] && renderPhotoCard(photos[2], 'aspect-[3/4]')}
                </div>
              </div>
            </div>
          ) : (
            /* Text on Right */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photos on Left */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start order-2 lg:order-1">
                {photos[0] && renderPhotoCard(photos[0], 'aspect-[3/4]')}
                <div className="flex flex-col gap-6 sm:translate-y-10">
                  {photos[1] && renderPhotoCard(photos[1], 'aspect-[3/4]')}
                  {photos[2] && renderPhotoCard(photos[2], 'aspect-[3/4]')}
                </div>
              </div>

              {/* Text on Right */}
              <div className="lg:col-span-4 order-1 lg:order-2 lg:pl-6">
                {renderTextBlock()}
              </div>
            </div>
          )}
        </>
      )}

      {/* 3. EDITORIAL QUAD (4 Images: e.g. Điểm Tựa, Buổi Date, Xẻo Quýt) */}
      {layoutVariant === 'editorial-quad' && (
        <>
          {textPosition === 'top-right' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* 4 Photos in Asymmetric Grid */}
              <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">
                {photos[0] && renderPhotoCard(photos[0], 'aspect-[3/4]')}
                {photos[1] && renderPhotoCard(photos[1], 'aspect-[4/3] sm:translate-y-8')}
                {photos[2] && renderPhotoCard(photos[2], 'aspect-[3/4] -translate-y-2 sm:-translate-y-6')}
                {photos[3] && renderPhotoCard(photos[3], 'aspect-[3/4] sm:translate-y-2')}
              </div>

              {/* Text Top-Right */}
              <div className="lg:col-span-4 order-1 lg:order-2 lg:pl-4">
                {renderTextBlock()}
              </div>
            </div>
          ) : textPosition === 'bottom-right' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* 4 Photos */}
              <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6 order-1">
                {photos[0] && renderPhotoCard(photos[0], 'aspect-[3/4]')}
                {photos[1] && renderPhotoCard(photos[1], 'aspect-[3/4] sm:translate-y-6')}
                {photos[2] && renderPhotoCard(photos[2], 'aspect-[3/4]')}
                {photos[3] && renderPhotoCard(photos[3], 'aspect-[3/4] sm:translate-y-6')}
              </div>

              {/* Text Bottom-Right */}
              <div className="lg:col-span-4 order-2 lg:pl-4 lg:pb-8">
                {renderTextBlock()}
              </div>
            </div>
          ) : (
            /* Text Left / Offset */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Left */}
              <div className="lg:col-span-4 order-1">
                {renderTextBlock()}
              </div>

              {/* Photos Right */}
              <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6 order-2">
                {photos[0] && renderPhotoCard(photos[0], 'aspect-[3/4]')}
                {photos[1] && renderPhotoCard(photos[1], 'aspect-[4/3] sm:translate-y-8')}
                {photos[2] && renderPhotoCard(photos[2], 'aspect-[3/4]')}
                {photos[3] && renderPhotoCard(photos[3], 'aspect-[4/3]')}
              </div>
            </div>
          )}
        </>
      )}

      {/* 4. OFFSET DUO (2 Images: e.g. Những Chuyến Đi Xa) */}
      {layoutVariant === 'offset-duo' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            {renderTextBlock()}
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 order-1 lg:order-2 items-center">
            {photos[0] && renderPhotoCard(photos[0], 'aspect-[4/3]')}
            {photos[1] && renderPhotoCard(photos[1], 'aspect-[4/3] sm:translate-y-8')}
          </div>
        </div>
      )}
    </section>
  );
};
