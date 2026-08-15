import { ArrowUpRight } from "lucide-react";

interface SocialLinkProps {
  href: string;
  label: string;
}

export function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between border border-border p-4 text-foreground hover:border-accent hover:bg-accent/5 transition-all"
    >
      <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
