import { useState, useMemo, useCallback } from 'react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ArtPlaceholder } from './ArtPlaceholder';
import { PortfolioModal } from './PortfolioModal';
import {
  CATEGORIES,
  FILTER_KEYS,
  FILTER_LABELS,
  ASPECT_CLASSES,
  WORKS,
} from '../data/portfolio';
import { FilterKey } from '../types';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('todos');
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'todos') {
      return WORKS;
    }
    return WORKS.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  const handleCloseModal = useCallback(() => {
    setSelectedWorkIndex(null);
  }, []);

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio"
            title="Arte que ganha vida nas paredes."
            subtitle="Cada projeto tem sua própria história, personalidade e paleta de cores."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div
            role="group"
            aria-label="Filtrar obras por categoria"
            className="flex flex-wrap gap-2"
          >
            {FILTER_KEYS.map((key) => {
              const isSelected = activeFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveFilter(key)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? 'border-olive-600 bg-olive-600 text-paper shadow-sm'
                      : 'border-ink/20 text-ink-soft hover:border-ink hover:text-ink'
                  }`}
                >
                  {FILTER_LABELS[key]}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredWorks.map((work, idx) => (
            <Reveal
              key={work.id}
              delay={(idx % 3) * 100}
              className="mb-6 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setSelectedWorkIndex(idx)}
                className="group relative block w-full overflow-hidden rounded-xl text-left shadow-md transition-shadow hover:shadow-xl focus-visible:outline-olive-600"
              >
                <ArtPlaceholder
                  alt={work.title}
                  tone={work.tone}
                  image={work.image}
                  className={`${ASPECT_CLASSES[work.aspect]} w-full`}
                />
                <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-lg bg-paper/95 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 shadow-md">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                    {CATEGORIES[work.category]}
                  </span>
                  <span className="mt-1 block font-display text-lg leading-snug text-ink font-medium">
                    {work.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedWorkIndex !== null && (
        <PortfolioModal
          works={filteredWorks}
          index={selectedWorkIndex}
          onClose={handleCloseModal}
          onNavigate={setSelectedWorkIndex}
        />
      )}
    </section>
  );
}
