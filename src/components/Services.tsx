import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ArtPlaceholder } from './ArtPlaceholder';
import { SERVICES, WHATSAPP_URL } from '../data/content';

export function Services() {
  return (
    <section id="criar" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="O que podemos criar"
            title="Seu espaço. Sua história. Nossa arte."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 100}>
              <article className="group flex h-full flex-col">
                <ArtPlaceholder
                  alt={service.alt}
                  tone={service.tone}
                  image={service.image}
                  className="aspect-[4/5] w-full rounded-2xl shadow-sm"
                />
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text mt-6"
                >
                  Criar meu projeto
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
