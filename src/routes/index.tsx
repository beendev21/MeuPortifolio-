import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SocialLink } from "../components/SocialLink";
import dashboardImage from "../assets/project-dashboard.png";
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

const courses = [
  {
    title: "Full-Stack Architecture",
    provider: "MIT Open Learning",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Advanced Distributed Systems",
    provider: "Coursera",
    year: "2024",
    status: "Completed",
  },
  {
    title: "React Performance Patterns",
    provider: "Epic React",
    year: "2023",
    status: "Completed",
  },
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    title: "Cloud Architecture Professional",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    title: "Advanced System Design",
    issuer: "MIT Professional Education",
    year: "2022",
  },
];

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

const EMAIL = "brenosilva.dev@gmail.com";

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
    const body = `${message}\n\n--\n${name}\n${email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("202 Accepted — opening your email client.");
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
          Focado em sistemas <br />
          <span className="text-accent">escaláveis.</span>
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
            "Breno da Silva Vale",
            21,
            "São Paulo - SP",
            "Cruzeiro do Sul Virtual",
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
                    {project.cta === "View case study" ? "Ver estudo de caso" : "Repositório"}
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="portfolio-section py-20">
        <h2 className="mb-12 border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Cursos e certificados
        </h2>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">Cursos</h3>
            <div className="space-y-8">
              {courses.map((course) => (
                <div key={course.title} className="group relative pl-6">
                  <div className="absolute left-0 top-1.5 h-full w-[1px] bg-border" />
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                  <span className="mb-1 block font-mono text-[10px] text-accent">
                    {course.year} — {course.status}
                  </span>
                  <h4 className="font-sans text-base font-medium text-foreground">{course.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{course.provider}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">Certificações</h3>
            <div className="space-y-6">
              {certificates.map((cert) => (
                <div key={cert.title} className="flex items-center justify-between border-b border-border pb-4 group">
                  <div>
                    <h4 className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-accent transition-colors">
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
          About Me
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
              Construindo uma API, migrando um monólito ou otimizando uma query lenta? Envie a solicitação — eu respondo.
            </p>

            <div className="mt-8 grid gap-3">
              <SocialLink href={`mailto:${EMAIL}`} label="Gmail" />
              <SocialLink href="https://github.com/brenosilva" label="GitHub" />
              <SocialLink href="https://linkedin.com/in/brenosilva" label="LinkedIn" />
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
