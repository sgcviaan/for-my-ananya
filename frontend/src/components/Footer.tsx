import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'for-my-ananya');

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-14 px-6 text-center section-hidden ${isVisible ? 'section-visible' : ''}`}
      style={{
        background: 'linear-gradient(160deg, oklch(0.94 0.06 350) 0%, oklch(0.93 0.06 290) 100%)',
        borderTop: '1px solid oklch(0.88 0.06 350)',
      }}
    >
      {/* Floating hearts row */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="text-xl animate-float-gentle"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            💕
          </span>
        ))}
      </div>

      {/* Main footer text */}
      <p
        className="mb-2"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          color: 'oklch(0.5 0.14 350)',
        }}
      >
        Forever yours, Viaan.
      </p>

      <p
        className="mb-8"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.95rem',
          fontStyle: 'italic',
          color: 'oklch(0.6 0.08 340)',
        }}
      >
        Always and forever 🤍
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-20" style={{ background: 'oklch(0.82 0.08 350)' }} />
        <span className="text-sm">🌸</span>
        <div className="h-px w-20" style={{ background: 'oklch(0.82 0.08 350)' }} />
      </div>

      {/* Attribution */}
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '0.8rem',
          color: 'oklch(0.62 0.07 340)',
        }}
      >
        © {year} &nbsp;·&nbsp; Built with{' '}
        <span className="text-red-400">♥</span> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{ color: 'oklch(0.62 0.12 350)' }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
