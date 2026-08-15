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

function CoursesPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pb-32 sm:px-8 lg:px-10">
      <section className="py-16">
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
                <div
                  key={cert.title}
                  className="flex items-center justify-between border-b border-border pb-4 group"
                >
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
    </div>
  );
}
