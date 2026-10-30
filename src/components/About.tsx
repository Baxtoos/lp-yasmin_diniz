import { Reveal } from './Reveal';
import { ArtPlaceholder } from './ArtPlaceholder';
import { ABOUT_PARAGRAPHS } from '../data/content';

export function About() {
  return (
    <section id="sobre" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <ArtPlaceholder
            alt="Retrato e trabalho de Yasmin Diniz, artista visual"
            tone="rose"
            image="/images/yasmin-about.jpg"
            className="aspect-[4/5] w-full rounded-2xl shadow-xl"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="eyebrow">Sobre a artista</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.15] text-ink sm:text-5xl">
            Muito além da pintura, crio experiências.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-olive-300 pl-5 font-display text-2xl italic text-olive-600">
            Yasmin Diniz — Artista visual
          </p>
        </Reveal>
      </div>
    </section>
  );
}
