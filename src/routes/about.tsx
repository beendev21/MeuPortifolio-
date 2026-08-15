import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre — Breno Silva | Desenvolvedor Backend Java" },
      { name: "description", content: "Sobre Breno Silva, desenvolvedor backend Java trabalhando com Spring Boot, JPA, PostgreSQL e sistemas distribuídos." },
      { property: "og:title", content: "Sobre — Breno Silva | Desenvolvedor Backend Java" },
      { property: "og:description", content: "Sobre Breno Silva, desenvolvedor backend Java trabalhando com Spring Boot, JPA, PostgreSQL e sistemas distribuídos." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const skills = [
  "Java 21",
  "Spring Boot",
  "Spring Security",
  "JPA / Hibernate",
  "PostgreSQL",
  "Kafka",
  "Redis",
  "Docker",
  "Kubernetes",
  "JUnit / Testcontainers",
  "AWS",
  "Maven",
];


function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pb-32 sm:px-8 lg:px-10">
      <section className="py-16">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Sobre mim
        </h2>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-sans text-xl leading-relaxed text-foreground">
              Eu desenho backends como leio código: fronteiras explícitas, classes pequenas e sem surpresas às 3 da manhã.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Desenvolvedor backend Java com mais de 6 anos entregando serviços com Spring Boot — APIs REST, pipelines orientadas a eventos com Kafka e schemas em PostgreSQL que sobrevivem à escala. Forte foco em DDD, arquitetura hexagonal e testes automatizados com JUnit e Testcontainers.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Fora do horário, costumo profilear a JVM, ler sobre sistemas distribuídos ou reduzir alguns megabytes de um Dockerfile.
            </p>

          </div>

          <div className="md:col-span-5">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">Stack principal</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">Localização</h3>
              <p className="font-sans text-sm text-muted-foreground">Mauá, São Paulo, Brasil</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                UTC-3
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
