import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SocialLink } from "../components/SocialLink";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contato — Breno Silva | Desenvolvedor Backend Java" },
      { name: "description", content: "Envie uma mensagem para Breno Silva, desenvolvedor backend Java, ou entre em contato por Gmail, GitHub ou LinkedIn." },
      { property: "og:title", content: "Contato — Breno Silva | Desenvolvedor Backend Java" },
      { property: "og:description", content: "Envie uma mensagem para Breno Silva, desenvolvedor backend Java, ou entre em contato por Gmail, GitHub ou LinkedIn." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

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

function ContactPage() {
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
      <section className="py-16">
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
                  <input id="Nome" value={values.name} onChange={set("name")} maxLength={100} placeholder="Ada Lovelace" className={fieldClass} />
                  {errors.name && <p className="mt-2 font-mono text-[11px] text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="Email" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input id="Email" type="email" value={values.email} onChange={set("email")} maxLength={255} placeholder="you@company.com" className={fieldClass} />
                  {errors.email && <p className="mt-2 font-mono text-[11px] text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="Assunto" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Assunto <span className="text-accent">*</span>
                  </label>
                  <input id="Assunto" value={values.subject} onChange={set("subject")} maxLength={150} placeholder="Spring Boot API consulting" className={fieldClass} />
                  {errors.subject && <p className="mt-2 font-mono text-[11px] text-destructive">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="Mensagem" className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Mensagem <span className="text-accent">*</span>
                  </label>
                  <textarea id="Mensagem" rows={6} value={values.message} onChange={set("message")} maxLength={1000} placeholder="Describe the project, stack, and timeline." className={`${fieldClass} resize-none`} />
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
