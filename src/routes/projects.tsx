import { createFileRoute } from "@tanstack/react-router";
import dashboardImage from "../assets/project-dashboard.png";
import engineImage from "../assets/project-engine.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projetos — Breno Silva" },
      { name: "description", content: "Projetos selecionados por Breno Silva, desenvolvedor full-stack." },
      { property: "og:title", content: "Projetos — Breno Silva" },
      { property: "og:description", content: "Projetos selecionados por Breno Silva, desenvolvedor full-stack." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: "01",
    category: "Full Stack",
    title: "Nexus Dashboard",
    description: "Performance-first analytics dashboard for cloud-native applications.",
    stack: "React • Node.js • PostgreSQL",
    link: "#",
    image: dashboardImage,
    cta: "View case study",
  },
  {
    id: "02",
    category: "Open Source",
    title: "Glitch Engine",
    description: "High-throughput data processing engine with a Rust core and WebAssembly runtime.",
    stack: "Rust • WASM • TypeScript",
    link: "#",
    image: engineImage,
    cta: "Repository",
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pb-32 sm:px-8 lg:px-10">
      <section className="py-16">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trabalhos selecionados
        </h2>
        <div className="grid gap-16">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="mb-2 block font-mono text-[10px] text-accent">
                    {project.id} / {project.category}
                  </span>
                  <h3 className="font-sans text-2xl font-medium text-foreground">{project.title}</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{project.stack}</span>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[2/1] overflow-hidden rounded-sm border border-border bg-surface outline-1 outline-offset-[-1px] outline-transparent transition-all duration-500 group-hover:outline-accent/50"
              >
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  loading="lazy"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {project.cta}
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
