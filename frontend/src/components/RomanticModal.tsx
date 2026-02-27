interface RomanticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RomanticModal({ isOpen, onClose }: RomanticModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'oklch(0.1 0.05 340 / 0.5)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full rounded-3xl p-8 text-center animate-fade-in-up"
        style={{
          background: 'linear-gradient(135deg, oklch(0.98 0.02 350) 0%, oklch(0.96 0.04 290) 100%)',
          boxShadow: '0 24px 64px oklch(0.65 0.15 350 / 0.35)',
          border: '1px solid oklch(0.88 0.06 350)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative hearts */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2">
          {['💕', '💍', '💕'].map((emoji, i) => (
            <span key={i} className="text-xl animate-bounce-heart" style={{ animationDelay: `${i * 0.2}s` }}>
              {emoji}
            </span>
          ))}
        </div>

        <div className="mb-4 text-5xl animate-bounce-heart">💍</div>

        <h3
          className="mb-3 leading-snug"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.8rem',
            color: 'oklch(0.55 0.14 350)',
          }}
        >
          Too late,
        </h3>
        <p
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            color: 'oklch(0.4 0.08 340)',
            lineHeight: 1.6,
          }}
        >
          you're already mine forever 💍
        </p>

        <button
          onClick={onClose}
          className="btn-romantic text-sm px-6 py-2"
        >
          Aww, I know 🥰
        </button>
      </div>
    </div>
  );
}
