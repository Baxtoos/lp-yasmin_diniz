import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title="Da primeira ideia à última pincelada."
          />
        </Reveal>

        <div className="relative mt-20">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-px bg-olive-300 md:bottom-auto md:left-0 md:right-0 md:top-[27px] md:h-px md:w-auto"
          />
          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <li key={step.number}>
                <Reveal delay={idx * 120}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-olive-300 bg-cream-100 font-display text-xl font-semibold text-olive-600">
                    {step.number}
                  </span>
                  <h3 className="mt-8 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

