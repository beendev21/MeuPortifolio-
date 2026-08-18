import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SocialLink } from "../components/SocialLink";
import workshopVideo from "../assets/oficina.mp4";
import engineImage from "../assets/project-engine.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Breno Silva — Desenvolvedor Backend Java" },
      { name: "description", content: "Portfólio de Breno Silva, desenvolvedor backend Java especializado em APIs resilientes, serviços distribuídos e sistemas com domínio bem modelado." },
      { property: "og:title", content: "Breno Silva — Desenvolvedor Backend Java" },
      { property: "og:description", content: "Portfólio de Breno Silva, desenvolvedor backend Java especializado em APIs resilientes, serviços distribuídos e sistemas com domínio bem modelado." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: HomePage,
});

const projects = [
  {
    id: "01",
    category: "Front-End",
    title: "Landing Page Profissional para Oficina Automotiva",
    description: "Aplicação front-end estruturada com foco em escalabilidade, performance e separação de responsabilidades. Implementa manipulação dinâmica de dados, gerenciamento de estado na interface, otimização de renderização via Intersection Observer e integração com serviços externos (Google Maps e WhatsApp).",
    stack: "HTML • CSS • JavaScript • Google Maps API • WhatsApp API",
    link: "https://github.com/beendev21/MeuPortifolio-",
    video: workshopVideo,
    cta: "Ver repositório",
  },
  {
    id: "02",
    category: "Full Stack",
    title: "Santos Tech - Plataforma de eSports",
    description: "Plataforma completa para torneios de CS, LoL e Valorant. Implementação de SignalR para atualizações em tempo real, reformulação do painel administrativo e integração com Steam API e autenticação JWT. Infraestrutura robusta com PostgreSQL, Redis e Cloudflare R2.",
    stack: "React.js • .NET • PostgreSQL • Redis • SignalR • Cloudflare R2",
    link: "#",
    image: engineImage,
    cta: "Repositório",
  },
];

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
    title: "Análise de Dados",
    issuer: "Alura",
    description: "Boas-vindas ao campo de análise de dados, explorando oportunidades e habilidades necessárias.",
  },
  {
    title: "Começando em Programação",
    issuer: "Alura",
    description: "Guia sobre carreira, mercado de trabalho e os primeiros passos para se tornar um desenvolvedor.",
  },
  {
    title: "Excel Avançado",
    issuer: "Alura",
    description: "Aprofundamento em fórmulas, tabelas dinâmicas e ferramentas de análise de dados no Excel.",
  },
];

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

const EMAIL = "brenosilvavalecontato@gmail.com";
const WHATSAPP_NUMBER = "5511985426184";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be under 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be under 255 characters" }),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(150, { message: "Subject must be under 150 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be under 1000 characters" }),
});

type Field = keyof z.infer<typeof contactSchema>;

const fieldClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent";

function HomePage() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const set = (field: Field) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Request rejected — check the highlighted fields.");
      return;
    }

    setErrors({});
    const { name, email, subject, message } = result.data;
    const text = `Nova solicitação\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    toast.success("Abrindo conversa no WhatsApp.");
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pb-32 sm:px-8 lg:px-10">
      <section id="top" className="portfolio-section pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 px-3 py-1 mb-7 md:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Disponível para novos projetos
          </span>
        </div>
        <h1 className="font-sans text-5xl font-semibold leading-[0.9] tracking-tight text-foreground md:text-7xl">
          Breno da Silva <br />
          <span className="text-accent">Vale.</span>
        </h1>
        <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
          Desenvolvedor backend Java focado na criação de APIs resilientes e serviços distribuídos com Spring Boot, JPA e PostgreSQL modelos de domínio limpos, código testado e observabilidade em produção.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
          >
            Fale comigo
          </a>
        </div>

        <div className="mt-16 w-full max-w-2xl overflow-hidden rounded-sm border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <span className="font-mono text-[11px] text-muted-foreground">DeveloperController.java</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Spring Boot</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed text-muted-foreground md:text-[13px]">
{`class DeveloperController {

    @GetMapping("/about")
    DeveloperProfile profile() {

        return new DeveloperProfile(
            "`}
            <mark className="rounded-sm border border-yellow-300/60 bg-yellow-300/10 px-1.5 py-0.5 font-semibold text-yellow-200 shadow-[0_0_10px_rgba(253,224,71,0.35),inset_0_0_8px_rgba(253,224,71,0.12)]">Breno da Silva Vale</mark>
            {`",
            21,
            "São Paulo - SP",
            "`}
            <mark className="rounded-sm border border-yellow-300/60 bg-yellow-300/10 px-1.5 py-0.5 font-semibold text-yellow-200 shadow-[0_0_10px_rgba(253,224,71,0.35),inset_0_0_8px_rgba(253,224,71,0.12)]">Cruzeiro do Sul Virtual 2 Semestre</mark>
            {`",
            "Engenharia de Software",
            "Backend Java / Data Analysis"
        );
    }
}`}
          </pre>
        </div>
      </section>

      <section id="projects" className="portfolio-section py-20">
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
                {project.video ? (
                  <video
                    src={project.video}
                    aria-label={`Preview de ${project.title}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    loading="lazy"
                    width={1200}
                    height={600}
                    className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                {!project.video && (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {project.cta === "View case study" ? "Ver estudo de caso" : "Repositório"}
                  </span>
                </div>
                )}
              </a>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{project.description}</p>
              {project.video && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-sm border border-border px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent"
                >
                  {project.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="portfolio-section py-20">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Cursos e certificados
        </h2>

        <div className="certification-grid grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">Certificados Databricks</h3>
            <div className="mb-8 flex h-12 items-center">
              <a href="https://pt.wikipedia.org/wiki/Databricks" target="_blank" rel="noopener noreferrer" aria-label="Saiba mais sobre a Databricks" className="transition-opacity hover:opacity-70">
                <img src="https://azure.microsoft.com/svghandler/databricks/?width=600&height=315" alt="Databricks" className="h-8 w-auto object-contain" />
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
                <div key={cert.title} className="flex items-center justify-between border-b border-border pb-4 group">
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

      <section id="experience" className="portfolio-section py-20">
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

      <section id="about" className="portfolio-section py-20">
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

      <section id="contact" className="portfolio-section py-20">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contato
        </h2>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">Vamos conversar</h3>
            <p className="font-sans text-xl leading-relaxed text-foreground">
              Construindo uma API, migrando ou otimizando uma query lenta? Envie a solicitação eu respondo.
            </p>

            <div className="mt-8 grid gap-3">
              <SocialLink href={`mailto:${EMAIL}`} label="Gmail" />
              <SocialLink href="https://github.com/beendev21" label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/brenosilvavale/" label="LinkedIn" />
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Aberto a oportunidades freelance, full-time e de colaboração.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-sm border border-border bg-surface">
              <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                <span className="rounded-sm bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-accent">
                  POST
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">/api/v1/messages</span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="grid gap-5 p-5 md:p-6">
                <div>
                  <label htmlFor="Nome" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Nome <span className="text-accent">*</span>
                  </label>
                  <input id="Nome" value={values.name} onChange={set("name")} maxLength={100} placeholder="..." className={fieldClass} />
                  {errors.name && <p className="mt-2 font-mono text-[11px] text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="Email" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input id="Email" type="email" value={values.email} onChange={set("email")} maxLength={255} placeholder="voce@company.com" className={fieldClass} />
                  {errors.email && <p className="mt-2 font-mono text-[11px] text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="Assunto" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Assunto <span className="text-accent">*</span>
                  </label>
                  <input id="Assunto" value={values.subject} onChange={set("subject")} maxLength={150} placeholder="Oportunidade de colaboração" className={fieldClass} />
                  {errors.subject && <p className="mt-2 font-mono text-[11px] text-destructive">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="Mensagem" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Mensagem <span className="text-accent">*</span>
                  </label>
                  <textarea id="Mensagem" rows={6} value={values.message} onChange={set("message")} maxLength={1000} placeholder="Descreva o projeto, a oportunidade." className={`${fieldClass} resize-none`} />
                  <div className="mt-2 flex items-center justify-between">
                    {errors.message ? (
                      <p className="font-mono text-[11px] text-destructive">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="font-mono text-[10px] text-muted-foreground">{values.message.length}/1000</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Enviar solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
