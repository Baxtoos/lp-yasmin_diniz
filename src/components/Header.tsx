import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_URL } from '../data/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isSolid
          ? 'border-cream-200 bg-paper/95 backdrop-blur shadow-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:py-5">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex flex-col leading-tight"
        >
          <span className="font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-olive-600">
            Yasmin Diniz
          </span>
          <span className="font-display text-sm italic text-ink-soft">
            Arte que transforma espaços.
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar orçamento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="rounded-md p-2 text-ink transition-colors hover:text-olive-600 focus-visible:outline-olive-600 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Menu móvel"
          className="animate-fade-in border-t border-cream-200 bg-paper px-6 pb-8 pt-2 lg:hidden shadow-lg"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-cream-200">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-4 font-display text-2xl text-ink transition-colors hover:text-olive-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full"
            onClick={closeMenu}
          >
            Solicitar orçamento
            <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
