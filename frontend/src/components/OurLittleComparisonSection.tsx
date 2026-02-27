import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function OurLittleComparisonSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 section-hidden ${isVisible ? 'section-visible' : ''}`}
      style={{
        background: 'linear-gradient(160deg, oklch(0.97 0.03 30) 0%, oklch(0.96 0.04 350) 50%, oklch(0.97 0.03 290) 100%)',
      }}
    >
      <div className="max-w-lg mx-auto text-center">
        {/* Section header */}
        <div className="mb-10">
          <p
            className="mb-2"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'oklch(0.65 0.1 350)',
            }}
          >
            just us
          </p>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              color: 'oklch(0.48 0.1 350)',
            }}
          >
            Our Little Comparison 🤍
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'oklch(0.78 0.08 350)' }} />
            <span className="text-base">🤍</span>
            <div className="h-px w-16" style={{ background: 'oklch(0.78 0.08 350)' }} />
          </div>
        </div>

        {/* Image frame */}
        <div
          className="comparison-image-wrapper mx-auto mb-10"
          style={{
            maxWidth: '380px',
            borderRadius: '2rem',
            overflow: 'hidden',
            boxShadow: '0 8px 40px oklch(0.72 0.12 350 / 0.22), 0 2px 12px oklch(0.72 0.12 350 / 0.1)',
            border: '3px solid oklch(0.92 0.06 350)',
            background: 'oklch(0.99 0.01 30)',
            padding: '6px',
          }}
        >
          <div
            style={{
              borderRadius: '1.6rem',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="/assets/generated/comparison.dim_930x1240.jpg"
              alt="Our arms side by side — different but perfectly aligned 🤍"
              className="comparison-photo"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
              }}
            />
            {/* Soft overlay shimmer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, oklch(0.98 0.04 350 / 0.08) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* Caption */}
        <div
          className="rounded-3xl px-8 py-8 mx-auto"
          style={{
            maxWidth: '420px',
            background: 'oklch(0.99 0.01 30)',
            border: '1px solid oklch(0.9 0.06 350)',
            boxShadow: '0 4px 24px oklch(0.72 0.1 350 / 0.1)',
          }}
        >
          <div className="text-2xl mb-4">🤍</div>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
              color: 'oklch(0.42 0.08 340)',
              lineHeight: 2,
              fontStyle: 'italic',
            }}
          >
            <span className="block mb-3">
              This picture looks simple to anyone else.<br />
              But to me, it means everything.
            </span>
            <span className="block mb-3">
              It's not about whose arm is bigger or smaller.<br />
              It's about how different we are…<br />
              and how perfectly we still fit together.
            </span>
            <span className="block mb-3">
              Your arm next to mine reminds me that we stand side by side.<br />
              Not competing.<br />
              Not comparing.<br />
              Just existing together.
            </span>
            <span className="block">
              Different.<br />
              But aligned.<br />
              And that's what makes it ours.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
