import { useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CATEGORIES } from '../data/portfolio';
import { Work } from '../types';
import { ArtPlaceholder } from './ArtPlaceholder';

interface PortfolioModalProps {
  works: Work[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const SWIPE_THRESHOLD = 50;

export function PortfolioModal({
  works,
  index,
  onClose,
  onNavigate,
}: PortfolioModalProps) {
  const touchStartX = useRef<number | null>(null);
  const total = works.length;
  const currentWork = works[index];

  const handlePrev = useCallback(() => {
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handleNext, handlePrev]);

  if (!currentWork) return null;

  const handleTouchEnd = (touchEndX: number) => {
    if (touchStartX.current === null) return;
    const diff = touchEndX - touchStartX.current;
    touchStartX.current = null;
    if (diff > SWIPE_THRESHOLD) handlePrev();
    if (diff < -SWIPE_THRESHOLD) handleNext();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentWork.title}
      onClick={handleBackdropClick}
      className="animate-fade-in fixed inset-0 z-[60] flex flex-col bg-ink/95 text-paper backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-200">
          {CATEGORIES[currentWork.category]}
        </p>
        <div className="flex items-center gap-6">
          <span className="text-sm tabular-nums text-cream-200">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar visualização"
            className="rounded-full p-2 transition-colors hover:bg-paper/10 focus-visible:outline-paper"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      <div
        className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 sm:px-16"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
      >
        <div className="h-[62vh] w-full max-w-4xl">
          <ArtPlaceholder
            key={currentWork.id}
            alt={currentWork.title}
            tone={currentWork.tone}
            image={currentWork.image}
            fit="contain"
            className="animate-fade-in h-full w-full rounded-lg"
          />
        </div>
        <p className="mt-6 text-center font-display text-2xl text-paper">
          {currentWork.title}
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 pb-8 pt-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Obra anterior"
          className="rounded-full border border-paper/30 p-3 transition-colors hover:border-paper hover:bg-paper/10 focus-visible:outline-paper"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima obra"
          className="rounded-full border border-paper/30 p-3 transition-colors hover:border-paper hover:bg-paper/10 focus-visible:outline-paper"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
