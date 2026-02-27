import { useRef } from 'react';
import FloatingHearts from './FloatingHearts';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroSectionProps {
  onButtonClick: () => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, oklch(0.95 0.05 350) 0%, oklch(0.93 0.06 290) 40%, oklch(0.96 0.04 50) 100%)',
      }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1440x900.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating hearts */}
      <FloatingHearts count={15} />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.92 0.08 350 / 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-2xl mx-auto section-hidden ${isVisible ? 'section-visible' : ''}`}
      >
        {/* Small decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12" style={{ background: 'oklch(0.78 0.12 350)' }} />
          <span className="text-lg">🤍</span>
          <div className="h-px w-12" style={{ background: 'oklch(0.78 0.12 350)' }} />
        </div>

        {/* Main heading */}
        <h1
          className="mb-4 leading-tight"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            color: 'oklch(0.5 0.14 350)',
            textShadow: '0 2px 20px oklch(0.72 0.12 350 / 0.3)',
          }}
        >
          For My Ananya 🤍
        </h1>

        {/* Subheading */}
        <p
          className="mb-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 3vw, 1.35rem)',
            color: 'oklch(0.55 0.08 340)',
            fontStyle: 'italic',
            letterSpacing: '0.04em',
          }}
        >
          Made with love by Viaan
        </p>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className="btn-romantic animate-pulse-glow text-base md:text-lg px-10 py-4"
        >
          Click if you love me 💗
        </button>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.8rem',
              color: 'oklch(0.6 0.08 340)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            scroll down
          </span>
          <div className="w-px h-8 animate-bounce" style={{ background: 'oklch(0.75 0.1 350)' }} />
        </div>
      </div>
    </section>
  );
}
