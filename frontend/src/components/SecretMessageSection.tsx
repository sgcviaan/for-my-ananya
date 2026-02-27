import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VALID_PASSWORDS = ['baby', 'bobo', 'gugi', 'jaanu', 'pati', 'darling', 'pagal', 'mine', 'viaanu'];

export default function SecretMessageSection() {
  const [password, setPassword] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_PASSWORDS.includes(password.trim().toLowerCase())) {
      setRevealed(true);
      setError('');
    } else {
      setError('Hmm, try again 🥺');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 section-hidden ${isVisible ? 'section-visible' : ''}`}
      style={{
        background: 'linear-gradient(160deg, oklch(0.95 0.05 290) 0%, oklch(0.96 0.04 350) 100%)',
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-10">
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
            only for you
          </p>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              color: 'oklch(0.48 0.1 290)',
            }}
          >
            A Secret Message 🔒
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'oklch(0.78 0.08 290)' }} />
            <span className="text-base">🗝️</span>
            <div className="h-px w-16" style={{ background: 'oklch(0.78 0.08 290)' }} />
          </div>
        </div>

        {!revealed ? (
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: 'oklch(0.99 0.008 30)',
              border: '1px solid oklch(0.88 0.06 350)',
              boxShadow: '0 8px 32px oklch(0.72 0.12 350 / 0.12)',
            }}
          >
            <div className="text-4xl mb-4">🔐</div>
            <p
              className="mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: 'oklch(0.5 0.08 340)',
                fontStyle: 'italic',
              }}
            >
              Password hint:
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '1.4rem',
                color: 'oklch(0.55 0.12 350)',
              }}
            >
              "What do you call me?"
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter the password…"
                className={`w-full px-5 py-3 rounded-2xl text-center outline-none transition-all duration-200 ${shake ? 'animate-bounce' : ''}`}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '1rem',
                  background: 'oklch(0.97 0.02 350)',
                  border: error
                    ? '2px solid oklch(0.65 0.15 20)'
                    : '2px solid oklch(0.88 0.06 350)',
                  color: 'oklch(0.35 0.08 340)',
                  letterSpacing: '0.05em',
                }}
              />

              {error && (
                <p
                  className="animate-fade-in"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '1.1rem',
                    color: 'oklch(0.6 0.14 20)',
                  }}
                >
                  {error}
                </p>
              )}

              <button type="submit" className="btn-romantic">
                Unlock 🗝️
              </button>
            </form>
          </div>
        ) : (
          <div
            className="rounded-3xl p-8 md:p-10 animate-fade-in-up text-left"
            style={{
              background: 'linear-gradient(135deg, oklch(0.98 0.03 350) 0%, oklch(0.97 0.04 290) 100%)',
              border: '1px solid oklch(0.88 0.08 350)',
              boxShadow: '0 12px 40px oklch(0.72 0.12 350 / 0.2)',
            }}
          >
            <div className="text-4xl mb-6 animate-bounce-heart text-center">💌</div>

            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
                color: 'oklch(0.4 0.08 340)',
                lineHeight: 1.95,
              }}
            >
              <p className="mb-4">
                <span
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)',
                    color: 'oklch(0.52 0.13 350)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Ananya my baby, my wifey,
                </span>
              </p>

              <p className="mb-4">
                If you're reading this, it means you unlocked something that was never meant for the world. Only you. Always you.
              </p>

              <p className="mb-4">
                I don't even know when it happened. When you stopped being just a person in my life and became the feeling of it. Somewhere between your "pagal" and your quiet smiles. Somewhere between our dumb conversations and those comfortable silences where nothing needed to be said. You became home.
              </p>

              <p className="mb-3 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                I love you in the smallest ways.
              </p>

              <p className="mb-1">I love the way your hand fits into mine like it already knows where it belongs.</p>
              <p className="mb-1">I love how your hugs don't just feel warm — they feel safe.</p>
              <p className="mb-1">I love the way you look at me when you're pretending to be annoyed but your eyes are soft.</p>
              <p className="mb-1">I love your jealousy — not because it's jealousy, but because it means you care.</p>
              <p className="mb-4">I love your voice, especially when it drops a little when you're tired.</p>

              <p className="mb-4">
                You don't even realize how much of my day is built around you. A notification from you can change my entire mood. One smile from you can fix a bad day. One hug from you can silence the noise in my head.
              </p>

              <p className="mb-4">
                And it's funny, because to anyone else, we're just two teenagers comparing arms in a picture. But to me? That picture is proof. Proof that we stand next to each other. Different. Unique. Not the same size, not the same personality, not the same everything — and yet perfectly aligned. Side by side. Not competing. Not overpowering. Just existing together.
              </p>

              <p className="mb-2" style={{ fontStyle: 'italic' }}>That's what I want with you.</p>
              <p className="mb-1" style={{ fontStyle: 'italic' }}>Not something loud and temporary.</p>
              <p className="mb-1" style={{ fontStyle: 'italic' }}>Not something dramatic and fragile.</p>

              <p className="mb-1 mt-3">I want steady.</p>
              <p className="mb-1">I want deep.</p>
              <p className="mb-4">I want real.</p>

              <p className="mb-4">
                I want the kind of love that grows quietly but refuses to break.
              </p>

              <p className="mb-4">
                You are not just my girlfriend. You are my calm after chaos. My favorite habit. My comfort place. My "I'm okay now." My person.
              </p>

              <p className="mb-3 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                And listen to me carefully when I say this —
              </p>

              <p className="mb-1">I don't love you in a way that disappears after arguments.</p>
              <p className="mb-1">I don't love you in a way that fades when things get complicated.</p>
              <p className="mb-4">I don't love you in a way that depends on mood.</p>

              <p className="mb-4 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                I love you intentionally.
              </p>

              <p className="mb-4">
                That means I choose you. Not once. Not sometimes. Every single time.
              </p>

              <p className="mb-1">On the days you feel insecure.</p>
              <p className="mb-1">On the days you overthink.</p>
              <p className="mb-1">On the days I mess up.</p>
              <p className="mb-4">On the days we misunderstand each other.</p>

              <p className="mb-4 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                I am still here.
              </p>

              <p className="mb-4">
                You are mine — not in control, not in possession — but in promise. And that promise is heavy in the best way. It means I am not walking away when things feel hard. It means I am building something, not just feeling something.
              </p>

              <p className="mb-4">
                I see you in my future. Not as a maybe. Not as a question. As a plan.
              </p>

              <p className="mb-3 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                And this is where it gets serious.
              </p>

              <p className="mb-1">I don't want a temporary chapter with you.</p>
              <p className="mb-1">I don't want memories that we laugh about and then move on from.</p>
              <p className="mb-4">I don't want "what we used to be."</p>

              <p className="mb-1">I want years.</p>
              <p className="mb-1">I want growth.</p>
              <p className="mb-1">I want history.</p>
              <p className="mb-4">I want the version of us that survives everything and looks back proud.</p>

              <p className="mb-4">
                So if you ever wonder how serious I am about you — read this again.
              </p>

              <p className="mb-1">You are not an option in my life.</p>
              <p className="mb-4">You are the decision.</p>

              <p className="mb-1">And my decisions?</p>
              <p className="mb-4">I don't take them lightly.</p>

              <p className="mb-4 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                It has always been you.
              </p>

              <p className="mb-4">
                And if I have anything to say about it —
              </p>

              <p className="mb-6 font-semibold" style={{ color: 'oklch(0.48 0.12 350)' }}>
                It always will be.
              </p>
            </div>

            <p
              className="text-right mt-4"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '1.5rem',
                color: 'oklch(0.6 0.14 350)',
              }}
            >
              — YOUR PATI VIAAN UPADHYAY 🤍
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
