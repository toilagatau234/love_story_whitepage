import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;

      return () => {
        audio.pause();
        audioRef.current = null;
      };
    }
  }, [audioUrl]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-5 right-5 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/90 backdrop-blur-md shadow-sm hover:border-ink transition-all text-xs font-sans tracking-wide text-ink"
      aria-label={isPlaying ? 'Tắt âm thanh' : 'Bật âm thanh'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider font-medium text-ink">BGM: On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-muted" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-muted">BGM: Off</span>
        </>
      )}
    </button>
  );
};
