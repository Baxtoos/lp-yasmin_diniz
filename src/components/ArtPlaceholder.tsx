import { useState } from 'react';
import { Tone } from '../types';

interface ArtPlaceholderProps {
  alt: string;
  tone: Tone;
  image?: string;
  fit?: 'cover' | 'contain';
  className?: string;
}

const TONES: Record<Tone, { surface: string; shape: string }> = {
  foliage: { surface: 'bg-foliage-100', shape: 'fill-foliage-500' },
  olive: { surface: 'bg-olive-100', shape: 'fill-olive-500' },
  rose: { surface: 'bg-rose-200', shape: 'fill-terracotta-300' },
  mustard: { surface: 'bg-mustard-100', shape: 'fill-mustard-500' },
  sky: { surface: 'bg-sky-100', shape: 'fill-sky-500' },
  terracotta: { surface: 'bg-terracotta-100', shape: 'fill-terracotta-500' },
};

const FIT_CLASSES: Record<'cover' | 'contain', string> = {
  cover: 'object-cover',
  contain: 'object-contain',
};

export function ArtPlaceholder({
  alt,
  tone,
  image,
  fit = 'cover',
  className = '',
}: ArtPlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toneConfig = TONES[tone] || TONES.olive;
  const fitClass = FIT_CLASSES[fit];

  if (image && !hasError) {
    return (
      <div className={`relative overflow-hidden bg-cream-100 ${className}`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full ${fitClass} transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!isLoaded && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 animate-pulse ${toneConfig.surface}`}
          />
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt}. Espaço reservado para a fotografia da obra.`}
      className={`relative overflow-hidden ${toneConfig.surface} ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
      >
        <path
          d="M40 200V100a60 60 0 0 1 120 0v100z"
          className={toneConfig.shape}
          opacity="0.9"
        />
        <circle cx="100" cy="140" r="18" className="fill-paper" opacity="0.8" />
      </svg>
      <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft shadow-sm">
        Fotografia em breve
      </span>
    </div>
  );
}
