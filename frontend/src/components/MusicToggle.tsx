import { useEffect, useRef, useState } from 'react';
import { Music, Music2 } from 'lucide-react';

// Using a royalty-free public domain piano piece from a CDN
const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked or error
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <button
      onClick={toggleMusic}
      title={isPlaying ? 'Pause music' : 'Play music'}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        isPlaying ? 'animate-music-pulse' : ''
      }`}
      style={{
        background: isPlaying
          ? 'linear-gradient(135deg, oklch(0.72 0.14 350), oklch(0.68 0.12 290))'
          : 'linear-gradient(135deg, oklch(0.88 0.08 350), oklch(0.85 0.07 290))',
        boxShadow: isPlaying
          ? '0 0 0 3px oklch(0.88 0.08 350), 0 4px 20px oklch(0.65 0.14 350 / 0.5)'
          : '0 4px 16px oklch(0.72 0.12 350 / 0.3)',
        border: '2px solid oklch(0.92 0.06 350)',
        color: isPlaying ? 'white' : 'oklch(0.5 0.12 350)',
      }}
    >
      {isLoading ? (
        <div
          className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
        />
      ) : isPlaying ? (
        <Music2 size={18} />
      ) : (
        <Music size={18} />
      )}
    </button>
  );
}
