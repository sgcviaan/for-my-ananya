import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LoveCounterSection() {
  const [count, setCount] = useState(0);
  const [burst, setBurst] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleClick = () => {
    setCount((c) => c + 1);
    setBurst(true);
    setTimeout(() => setBurst(false), 300);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 text-center section-hidden ${isVisible ? 'section-visible' : ''}`}
      style={{ background: 'oklch(0.99 0.008 30)' }}
    >
      <div className="max-w-lg mx-auto">
        {/* Section header */}
        <p
          className="mb-2"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'oklch(0.7 0.1 350)',
          }}
        >
          infinite & beyond
        </p>
        <h2
          className="mb-10"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(2rem, 6vw, 3.2rem)',
            color: 'oklch(0.5 0.12 350)',
          }}
        >
          How much do I love you?
        </h2>

        {/* Counter display */}
        <div
          className="relative inline-flex items-center justify-center w-44 h-44 rounded-full mb-8 mx-auto"
          style={{
            background: 'linear-gradient(135deg, oklch(0.95 0.06 350) 0%, oklch(0.93 0.07 290) 100%)',
            boxShadow: '0 8px 32px oklch(0.72 0.12 350 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.5)',
            border: '2px solid oklch(0.88 0.08 350)',
          }}
        >
          <span
            className="transition-transform duration-150"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: count > 9999 ? '1.6rem' : count > 999 ? '2rem' : '2.8rem',
              fontWeight: 700,
              color: 'oklch(0.5 0.14 350)',
              transform: burst ? 'scale(1.2)' : 'scale(1)',
              display: 'block',
            }}
          >
            {count === 0 ? '∞' : count.toLocaleString()}
          </span>
          {burst && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {['💕', '✨', '💗'].map((e, i) => (
                <span
                  key={i}
                  className="absolute text-lg animate-fade-in"
                  style={{
                    transform: `translate(${(i - 1) * 40}px, ${i % 2 === 0 ? -30 : -50}px)`,
                    opacity: 0,
                    animation: 'fade-in-up 0.4s ease forwards',
                  }}
                >
                  {e}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <div className="mb-6">
          <button
            onClick={handleClick}
            className="btn-romantic text-base px-10 py-4"
          >
            {count === 0 ? 'Count the love 💗' : 'Add more love 💗'}
          </button>
        </div>

        {/* Static text */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'oklch(0.55 0.08 340)',
          }}
        >
          Still not enough.
        </p>

        {count > 0 && (
          <p
            className="mt-3 animate-fade-in"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.1rem',
              color: 'oklch(0.65 0.12 350)',
            }}
          >
            {count >= 100
              ? `${count.toLocaleString()} times and counting… 🌸`
              : count >= 10
              ? 'Keep going, it\'s infinite 💫'
              : 'Just the beginning… 🌷'}
          </p>
        )}
      </div>
    </section>
  );
}
