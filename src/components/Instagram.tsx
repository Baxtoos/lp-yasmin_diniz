import { Instagram as InstagramIcon, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ArtPlaceholder } from './ArtPlaceholder';
import { INSTAGRAM_POSTS, INSTAGRAM_URL } from '../data/content';

export function Instagram() {
  return (
    <section id="instagram" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Instagram"
              title="Um pouco mais do meu universo."
              subtitle="Acompanhe os bastidores, os processos criativos e as novas obras."
            />
          </Reveal>

          <Reveal delay={120}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <InstagramIcon size={18} />
              Acompanhar no Instagram
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <Reveal key={post.alt} delay={idx * 100}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <ArtPlaceholder
                  alt={post.alt}
                  tone={post.tone}
                  image={post.image}
                  className="aspect-square w-full"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
