import { Reveal } from './Reveal';

export function QuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-olive-600 py-28 sm:py-40">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-24 -top-24 h-[360px] w-[360px] opacity-20"
      >
        <path
          d="M200 20c90 10 170 80 170 180S300 380 200 370 30 300 30 200 110 10 200 20z"
          className="fill-mustard-500"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-20 -right-16 h-[280px] w-[280px] opacity-20"
      >
        <path
          d="M100 10c50 0 90 50 85 100s-40 80-80 80S20 170 20 110 50 10 100 10z"
          className="fill-rose-200"
        />
      </svg>
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-display text-4xl leading-[1.2] text-paper sm:text-6xl">
          “Algumas paredes dividem espaços.{' '}
          <em className="italic text-cream-200">Outras contam histórias.</em>”
        </p>
      </Reveal>
    </section>
  );
}

