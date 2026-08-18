import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Cursos e Certificações — Breno Silva" },
      { name: "description", content: "Cursos e certificações concluídos por Breno Silva." },
      { property: "og:title", content: "Cursos e Certificações — Breno Silva" },
      { property: "og:description", content: "Cursos e certificações concluídos por Breno Silva." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  {
    title: "Introdução ao Databricks",
    provider: "Databricks",
    description: "Fundamentos da plataforma Databricks para engenharia e análise de dados em larga escala.",
  },
];

const certificates = [
  {
    title: "Manipulando dados no Python",
    issuer: "Alura",
    description: "Certificado de conclusão emitido pela Alura.",
  },
  {
    title: "Estruturas condicionais",
    issuer: "Alura",
    description: "Certificado de conclusão emitido pela Alura.",
  },
  {
    title: "Estruturas de repetição",
    issuer: "Alura",
    description: "Certificado de conclusão emitido pela Alura.",
  },
  {
    title: "Estruturas de dados",
    issuer: "Alura",
    description: "Certificado de conclusão emitido pela Alura.",
  },
  {
    title: "Imersão Dev com Google Gemini",
    issuer: "Alura",
    description: "Desenvolvimento de uma aplicação prática utilizando a API do Google Gemini e tecnologias web.",
  },
  {
    title: "Python para Data Science",
    issuer: "Alura",
    description: "Primeiros passos com Python aplicado a Data Science, utilizando bibliotecas como Pandas.",
  },
  {
    title: "Carreira Análise de Dados",
    issuer: "Alura",
    description: "Boas-vindas ao campo de análise de dados, explorando oportunidades e habilidades necessárias.",
  },
  {
    title: "Começando em Programação",
    issuer: "Alura",
    description: "Guia sobre carreira, mercado de trabalho e os primeiros passos para se tornar um desenvolvedor.",
  },
  {
    title: "Excel Avançado: Fórmulas, Tabelas Dinâmicas e Ferramentas de Análise de Dados",
    issuer: "Alura",
    description: "Aprofundamento em fórmulas, tabelas dinâmicas e ferramentas de análise de dados no Excel.",
  },
];

function CoursesPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pb-32 sm:px-8 lg:px-10">
      <section className="py-16">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Cursos e certificados
        </h2>

        <div className="certification-grid grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">Certificados Databricks</h3>
            <div className="mb-8 flex h-12 items-center">
              <a href="https://pt.wikipedia.org/wiki/Databricks" target="_blank" rel="noopener noreferrer" aria-label="Saiba mais sobre a Databricks" className="transition-opacity hover:opacity-70">
                <img src="https://pt.wikipedia.org/wiki/Databricks" alt="Databricks" className="h-8 w-auto object-contain" />
              </a>
            </div>
            <div className="space-y-8">
              {courses.map((course) => (
                <div key={course.title} className="group relative pl-6">
                  <div className="absolute left-0 top-1.5 h-full w-[1px] bg-border" />
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                  <span className="hidden">
                    {course.year} — {course.status}
                  </span>
                  <h4 className="font-sans text-base font-medium text-foreground">{course.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{course.description}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">{course.provider}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">Certificados Alura</h3>
            <div className="mb-8 flex h-12 items-center">
              <img src="https://alun.com.br/assets/logos/alura/alura-dark-3000px.png" alt="Alura" className="h-8 w-auto object-contain brightness-0 invert" />
            </div>
            <div className="space-y-6">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between border-b border-border pb-4 group"
                >
                  <div>
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-accent">{cert.issuer}</span>
                    <h4 className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{cert.description}</p>
                  </div>
                  <span className="hidden">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
