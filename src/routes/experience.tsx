import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experiência — Breno Silva" },
      { name: "description", content: "Experiência profissional de Breno Silva, desenvolvedor full-stack." },
      { property: "og:title", content: "Experiência — Breno Silva" },
      { property: "og:description", content: "Experiência profissional de Breno Silva, desenvolvedor full-stack." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

const experiences = [
  {
    period: "05/26 — 08/26",
    role: "Programador Júnior",
    company: "SWB Indústria Mecânica e Automação Industrial Ltda.",
    description:
      "Desenvolvimento de sistemas de automação industrial utilizando JavaScript, Python e Node-RED. Atuação técnica com lógica Ladder e interpretação de diagramas elétricos para integração eficiente entre software e hardware.",
    highlights: ["JavaScript", "Python", "Node-RED", "Automação Industrial"],
  },
  {
    period: "01/26 — 07/26",
    role: "Front-End Developer",
    company: "Plataforma Competitiva de e-Sports",
    description:
      "Atuação no Front-End com React.js e planejamento da arquitetura (MVP). Responsável direto pela implementação do SignalR para comunicação em tempo real e reformulação completa do painel administrativo, além da construção de interfaces para gerenciamento de times, rankings e chaveamento automático.",
    highlights: ["React.js", "SignalR", ".NET", "PostgreSQL", "Redis"],
  },
  {
    period: "01/26 — 03/26",
    role: "Desenvolvedor Freelancer",
    company: "Companhia do Conserto",
    description:
      "Desenvolvimento de uma aplicação web para captação de clientes no setor automotivo, aplicando princípios de Engenharia de Software. Foco em performance, escalabilidade, manipulação dinâmica de dados e integração com APIs (Google Maps, WhatsApp).",
    highlights: ["JavaScript", "Google Maps API", "WhatsApp API", "Performance"],
  },
];

function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pb-32 sm:px-8 lg:px-10">
      <section className="py-16">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Histórico profissional
        </h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.period} className="group relative pl-6 md:pl-8">
              <div className="absolute left-0 top-1.5 h-full w-[1px] bg-border" />
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
              <span className="mb-1 block font-mono text-[10px] text-accent">{exp.period}</span>
              <h3 className="font-sans text-xl font-medium text-foreground">{exp.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
