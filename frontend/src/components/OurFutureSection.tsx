import { useScrollAnimation } from '../hooks/useScrollAnimation';

const milestones = [
  { emoji: '🏫', title: 'More school memories', desc: 'Every corridor, every laugh, every stolen glance.' },
  { emoji: '🌷', title: 'Cute little dates', desc: 'Ice cream walks, sunsets, and just being us.' },
  { emoji: '🍳', title: 'Cooking dosa for you', desc: 'Messy kitchen, perfect moments, just us two.' },
  { emoji: '🌙', title: 'Late night calls', desc: 'Talking about everything and nothing at all.' },
  { emoji: '👗', title: 'Matching outfits', desc: 'Because we are better together in every way.' },
  { emoji: '💍', title: 'Marriage', desc: 'The forever I have been dreaming of with you.' },
];

function SparkleIcon({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="animate-twinkle absolute"
      style={{ animationDuration: '2.5s', animationDelay: `${delay}s` }}
      fill="oklch(0.78 0.14 350)"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

export default function OurFutureSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 section-hidden ${isVisible ? 'section-visible' : ''}`}
      style={{
        background: 'linear-gradient(180deg, oklch(0.96 0.04 290) 0%, oklch(0.97 0.03 350) 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="mb-2"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'oklch(0.65 0.1 290)',
            }}
          >
            written in the stars
          </p>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              color: 'oklch(0.48 0.1 290)',
            }}
          >
            Our Future ✨
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'oklch(0.78 0.08 290)' }} />
            <span className="text-base">🌟</span>
            <div className="h-px w-16" style={{ background: 'oklch(0.78 0.08 290)' }} />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 md:left-1/2 md:-translate-x-0.5"
            style={{ background: 'linear-gradient(180deg, oklch(0.82 0.1 350), oklch(0.78 0.1 290))' }}
          />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.88 0.1 350), oklch(0.82 0.1 290))',
                    boxShadow: '0 0 0 4px oklch(0.97 0.03 350), 0 4px 12px oklch(0.72 0.12 350 / 0.3)',
                  }}
                >
                  <span className="text-xl">{milestone.emoji}</span>
                  {/* Sparkles */}
                  <SparkleIcon delay={index * 0.4} />
                  <SparkleIcon delay={index * 0.4 + 1.2} />
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 rounded-2xl p-5 md:w-5/12 md:flex-none ml-0 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  style={{
                    background: 'oklch(0.99 0.008 30)',
                    border: '1px solid oklch(0.9 0.04 350)',
                    boxShadow: '0 4px 16px oklch(0.72 0.12 350 / 0.1)',
                  }}
                >
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'oklch(0.42 0.1 340)',
                    }}
                  >
                    {milestone.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.875rem',
                      color: 'oklch(0.58 0.06 340)',
                      lineHeight: 1.6,
                    }}
                  >
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
