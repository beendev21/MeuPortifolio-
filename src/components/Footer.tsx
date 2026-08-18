export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} — Built with precision
        </p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-center sm:gap-x-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Breno Silva
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Full-stack developer
          </span>
        </div>
      </div>
    </footer>
  );
}
