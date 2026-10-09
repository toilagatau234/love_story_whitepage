import React, { useState } from 'react';
import { storyData } from '../data/storyData';
import { PhotoItem } from '../types/story';
import { StoryProgress } from '../components/StoryProgress';
import { AudioPlayer } from '../components/AudioPlayer';
import { HeroCover } from '../components/HeroCover';
import { AdaptiveChapter } from '../components/AdaptiveChapter';
import { GrandAlbum } from '../components/GrandAlbum';
import { ClimaxProposal } from '../components/ClimaxProposal';
import { Lightbox } from '../components/Lightbox';
import { useScrollAnimations } from '../animations/useScrollAnimations';

export const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Initialize smooth GSAP reveals
  useScrollAnimations();

  const handleStartStory = () => {
    const firstChapter = document.getElementById(storyData.chapters[0]?.id || '');
    if (firstChapter) {
      firstChapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink font-sans selection:bg-primary-soft selection:text-ink">
      {/* 35mm Subtle Film Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Reading Progress Bar */}
      <StoryProgress />

      {/* Audio Controller */}
      <AudioPlayer audioUrl={storyData.meta.bgMusicUrl} />

      <main className="relative z-10 w-full overflow-x-hidden">
        {/* Cover / Hero */}
        <HeroCover onStartClick={handleStartStory} />

        {/* Chapters with Adaptive Layouts */}
        <div className="space-y-4">
          {storyData.chapters.map((chapter) => {
            if (chapter.layoutVariant === 'grand-photobook') {
              return (
                <GrandAlbum
                  key={chapter.id}
                  chapter={chapter}
                  onPhotoClick={setSelectedPhoto}
                />
              );
            }
            return (
              <AdaptiveChapter
                key={chapter.id}
                chapter={chapter}
                onPhotoClick={setSelectedPhoto}
              />
            );
          })}
        </div>

        {/* Climax Proposal & Real Bouquet Reveal */}
        <ClimaxProposal onPhotoClick={setSelectedPhoto} />

        {/* Minimal Editorial Footer */}
        <footer className="py-16 text-center text-xs font-sans uppercase tracking-[0.2em] text-muted border-t border-border/40">
          <p>© {new Date().getFullYear()} — {storyData.meta.title}</p>
        </footer>
      </main>

      {/* High-Resolution Photo Lightbox */}
      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
};

export default App;
