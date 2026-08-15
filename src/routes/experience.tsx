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
    period: "2022 — Present",
    role: "Lead Developer",
    company: "Synthetix Labs",
    description:
      "Leading the frontend platform team, designing scalable design systems, and mentoring engineers across the organization.",
    highlights: ["Design system adoption", "Micro-frontends", "Team mentorship"],
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: "Orbital Systems",
    description:
      "Built core features for a high-traffic SaaS platform, improved performance metrics, and implemented real-time collaboration tools.",
    highlights: ["React migration", "WebSocket features", "Performance tuning"],
  },
  {
    period: "2018 — 2020",
    role: "Junior Developer",
    company: "Nova Digital",
    description:
      "Started my career building REST APIs, integrating third-party services, and contributing to internal tooling.",
    highlights: ["API integrations", "Internal dashboards", "CI/CD pipelines"],
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
