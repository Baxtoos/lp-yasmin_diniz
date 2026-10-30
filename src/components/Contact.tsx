import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { WHATSAPP_URL } from '../data/content';

export function Contact() {
  return (
    <section id="orcamento" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-cream-200 bg-cream-100 px-8 py-16 text-center sm:px-16 sm:py-20">
            <p className="eyebrow">Orçamento</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.15] text-ink sm:text-5xl">
              Vamos transformar aquela parede?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Me conte o que você imaginou. Pode ser uma referência, uma ideia
              que ainda está tomando forma ou simplesmente a vontade de dar mais
              vida ao seu espaço. Vamos conversar sobre as possibilidades.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group px-8 py-4"
              >
                Solicitar meu orçamento
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
            <p className="mt-8 font-display text-lg italic text-olive-600">
              Cada projeto começa com uma boa conversa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

