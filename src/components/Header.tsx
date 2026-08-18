import { Link, useRouterState } from "@tanstack/react-router";

const navLinks = [
  { to: "/#projects", label: "Projetos" },
  { to: "/#courses", label: "Cursos" },
  { to: "/#experience", label: "Experiência" },
  { to: "/#about", label: "Sobre" },
  { to: "/#contact", label: "Contato" },
];

export function Header() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          to="/#top"
          className="font-mono text-sm font-bold tracking-tighter uppercase text-foreground hover:text-accent transition-colors"
        >
          Dev_Breno/2004
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === "/" && hash === "#" + link.to.split("#")[1];
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  active ? "text-accent" : "text-muted-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <details className="group relative md:hidden">
          <summary
            aria-label="Abrir menu de navegação"
            className="mobile-menu-toggle cursor-pointer list-none text-muted-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden"
          >
            <span />
            <span />
            <span />
          </summary>
          <div className="absolute right-0 top-[calc(100%+1rem)] grid min-w-40 gap-1 border border-border bg-background p-2 shadow-xl">
            {navLinks.map((link) => {
              const active = pathname === "/" && hash === "#" + link.to.split("#")[1];
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-muted ${
                    active ? "text-accent" : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </details>
      </nav>
    </header>
  );
}
