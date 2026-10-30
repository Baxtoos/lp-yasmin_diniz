import { NAV_ITEMS, WHATSAPP_URL, INSTAGRAM_URL } from '../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-semibold text-paper">
            Yasmin Diniz
          </p>
          <p className="mt-3 text-sm text-cream-200">
            Artista visual • Pintura artística em paredes
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:justify-self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-300">
            Navegação
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-300">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-paper"
              >
                Solicitar orçamento
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-paper"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-soft/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-cream-200 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg italic text-paper">
            Feito com intenção, cor e personalidade.
          </p>
          <p>© {currentYear} Yasmin Diniz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

