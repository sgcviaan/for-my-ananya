import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        background: 'linear-gradient(135deg, oklch(0.95 0.04 350) 0%, oklch(0.93 0.05 290) 50%, oklch(0.96 0.03 50) 100%)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Animated heart */}
      <div className="mb-8 animate-loading-pulse">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M40 68s-30-18-30-38a18 18 0 0 1 30-13.4A18 18 0 0 1 70 30c0 20-30 38-30 38z"
            fill="oklch(0.78 0.14 350)"
            opacity="0.9"
          />
          <path
            d="M40 60s-22-13-22-28a13 13 0 0 1 22-9.7A13 13 0 0 1 62 32c0 15-22 28-22 28z"
            fill="oklch(0.88 0.1 350)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Loading text */}
      <p
        className="text-center px-8"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.4rem, 4vw, 2rem)',
          color: 'oklch(0.45 0.1 340)',
          letterSpacing: '0.02em',
        }}
      >
        Preparing something special
        <br />
        <span style={{ color: 'oklch(0.65 0.14 350)' }}>for Ananya…</span>
      </p>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              background: 'oklch(0.75 0.12 350)',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
