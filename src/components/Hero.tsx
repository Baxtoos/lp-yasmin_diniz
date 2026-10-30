import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { ArtPlaceholder } from './ArtPlaceholder';
import { WHATSAPP_URL } from '../data/content';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Pintura artística em paredes</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Paredes que{' '}
            <em className="font-medium italic text-terracotta-600">contam</em>{' '}
            histórias.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Transformo paredes e ambientes em obras de arte únicas, criadas para
            refletir histórias, personalidades e sentimentos.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Vamos criar sua arte
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#portfolio" className="btn-secondary">
              Explorar meu portfólio
            </a>
          </div>
          <p className="mt-10 text-sm tracking-wide text-ink-soft">
            Arte autoral • Murais personalizados • Projetos exclusivos
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6">
          <div className="group grid h-[460px] grid-cols-5 grid-rows-2 gap-4 sm:h-[580px]">
            <ArtPlaceholder
              alt="Mural botânico com folhagens, flores e pássaros pintado por Yasmin Diniz"
              tone="foliage"
              image="/images/hero-main.jpg"
              className="col-span-3 row-span-2 rounded-b-2xl rounded-t-full shadow-lg"
            />
            <ArtPlaceholder
              alt="Detalhe de pintura decorativa em parede residencial por Yasmin Diniz"
              tone="rose"
              image="/images/hero-top.jpg"
              className="col-span-2 rounded-2xl shadow-md"
            />
            <ArtPlaceholder
              alt="Ilustração lúdica para quarto infantil por Yasmin Diniz"
              tone="mustard"
              image="/images/hero-bottom.jpg"
              className="col-span-2 rounded-2xl shadow-md"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
