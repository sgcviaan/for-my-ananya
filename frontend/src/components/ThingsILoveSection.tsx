import { useScrollAnimation } from '../hooks/useScrollAnimation';

const loveItems = [
  { emoji: '😊', title: 'Your smile', desc: 'It lights up every room and my entire world.' },
  { emoji: '🥺', title: 'The way you say "pagal"', desc: 'Only you can make that word sound like love.' },
  { emoji: '🤗', title: 'Your hugs', desc: 'The safest place I have ever known.' },
  { emoji: '😤', title: 'The way you get jealous', desc: 'Secretly, it makes me feel so loved.' },
  { emoji: '🎶', title: 'Your soft voice', desc: 'I could listen to you forever and never get tired.' },
  { emoji: '🌸', title: 'The calm I feel with you', desc: 'You are my peace in every storm.' },
];

const cardGradients = [
  'linear-gradient(135deg, oklch(0.96 0.04 350) 0%, oklch(0.98 0.02 20) 100%)',
  'linear-gradient(135deg, oklch(0.95 0.05 290) 0%, oklch(0.97 0.03 310) 100%)',
  'linear-gradient(135deg, oklch(0.97 0.03 50) 0%, oklch(0.96 0.04 30) 100%)',
  'linear-gradient(135deg, oklch(0.96 0.04 350) 0%, oklch(0.95 0.05 290) 100%)',
  'linear-gradient(135deg, oklch(0.97 0.03 50) 0%, oklch(0.96 0.04 350) 100%)',
  'linear-gradient(135deg, oklch(0.95 0.05 290) 0%, oklch(0.97 0.03 50) 100%)',
];

export default function ThingsILoveSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 section-hidden ${isVisible ? 'section-visible' : ''}`}
      style={{ background: 'oklch(0.99 0.008 30)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
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
            a love letter
          </p>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              color: 'oklch(0.5 0.12 350)',
            }}
          >
            Things I Love About You
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'oklch(0.85 0.08 350)' }} />
            <span className="text-base">💕</span>
            <div className="h-px w-16" style={{ background: 'oklch(0.85 0.08 350)' }} />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveItems.map((item, index) => (
            <div
              key={index}
              className="love-card rounded-3xl p-7 cursor-default"
              style={{
                background: cardGradients[index],
                border: '1px solid oklch(0.9 0.04 350)',
                boxShadow: '0 4px 20px oklch(0.72 0.12 350 / 0.1)',
              }}
            >
              <div className="text-4xl mb-4 animate-float-gentle" style={{ animationDelay: `${index * 0.3}s` }}>
                {item.emoji}
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'oklch(0.4 0.1 340)',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.9rem',
                  color: 'oklch(0.55 0.06 340)',
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
