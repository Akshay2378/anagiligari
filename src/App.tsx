/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  DatabaseZap,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Network,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import profileImage from "./assets/akshay-profile.jpg";

const emailAddress = "akshayusa23@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/akshay-kumar-n";
const githubUrl = "https://github.com/anagiligari";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#expertise" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const metrics = [
  { value: "10+", label: "Years in enterprise engineering" },
  { value: "3", label: "AI and cloud domains" },
  { value: "RAG", label: "Search, retrieval, and orchestration" },
];

const expertise: Array<{ title: string; detail: string; icon: LucideIcon }> = [
  {
    title: "LLM product engineering",
    detail: "Designing AI workflows that move from prompt prototypes into monitored, maintainable production systems.",
    icon: BrainCircuit,
  },
  {
    title: "RAG and document intelligence",
    detail: "Building retrieval pipelines, vector search, metadata filters, and answer grounding for enterprise knowledge.",
    icon: DatabaseZap,
  },
  {
    title: "Enterprise platform delivery",
    detail: "Shipping resilient .NET, Angular, React, API, and cloud systems for regulated and high-scale teams.",
    icon: ServerCog,
  },
];

const aiStack = [
  { name: "OpenAI / GPT-4o", icon: Bot },
  { name: "LangChain", icon: Network },
  { name: "Vector databases", icon: Database },
  { name: "Azure AI Search", icon: Sparkles },
  { name: "RAG architecture", icon: Cpu },
  { name: ".NET and APIs", icon: Code2 },
  { name: "AWS / Azure", icon: Cloud },
  { name: "Agentic workflows", icon: Workflow },
];

const projects = [
  {
    title: "AI Resume Intelligence Platform",
    category: "AI Engineering",
    summary:
      "An automated resume generation workflow that parses professional profiles, maps experience to target roles, and produces ATS-ready drafts with LLM-assisted refinement.",
    tags: ["OpenAI", "n8n", "Node.js", "Prompt systems"],
    icon: Workflow,
  },
  {
    title: "Enterprise RAG Chatbot",
    category: "LLM Architecture",
    summary:
      "A retrieval-augmented assistant for private documentation, combining semantic search, citations, access-aware context, and response quality guardrails.",
    tags: ["LangChain", "Vector search", "Python", "Azure AI Search"],
    icon: BrainCircuit,
  },
  {
    title: "Cloud Modernization Toolkit",
    category: "Platform Engineering",
    summary:
      "A reusable modernization foundation for APIs, identity, observability, and deployment automation across cloud-native enterprise applications.",
    tags: [".NET Core", "Angular", "AWS", "CI/CD"],
    icon: Cloud,
  },
];

const experience = [
  {
    company: "World Bank",
    role: "Senior AI/LLM Consultant",
    period: "Apr 2025 - Present",
    description:
      "Leading RAG-based search, AI-assisted data workflows, and scalable intelligence layers for global financial datasets.",
  },
  {
    company: "PayPal",
    role: "Senior Full Stack Developer",
    period: "Sep 2024 - Apr 2025",
    description:
      "Architected payment platform modules with .NET Core, Angular, APIs, and performance-focused delivery practices.",
  },
  {
    company: "State of New Mexico",
    role: "Senior Software Engineer",
    period: "Sep 2023 - Aug 2024",
    description:
      "Modernized public-sector portals into secure, cloud-ready systems with cleaner UX and maintainable service boundaries.",
  },
  {
    company: "Thomson Reuters and Zetagile",
    role: "Software Engineering Roles",
    period: "Earlier experience",
    description:
      "Built the foundation in enterprise application development, data integrations, backend services, and product delivery.",
  },
];

const technologyGroups = [
  {
    title: "AI and data",
    items: ["OpenAI", "RAG", "Embeddings", "Vector DB", "Azure AI Search", "Prompt engineering"],
  },
  {
    title: "Application engineering",
    items: [".NET Core", "C#", "Web API", "Angular", "React", "TypeScript"],
  },
  {
    title: "Cloud and delivery",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Observability"],
  },
];

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "");
  const message = String(formData.get("message") || "");
  const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
  const body = encodeURIComponent(message);

  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const current = navLinks
        .map((link) => link.href.substring(1))
        .find((section) => {
          const element = document.getElementById(section);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top >= -120 && rect.top <= 260;
        });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <nav className="fixed top-0 z-50 w-full border-b border-outline-variant bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#home" className="text-base font-bold text-on-surface">
            Akshay Kumar N
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`border-b-2 py-5 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "border-primary text-primary"
                    : "border-transparent text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${emailAddress}?subject=${encodeURIComponent("Resume request")}`}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container"
          >
            <Mail className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>

      <main>
        <section id="home" className="border-b border-outline-variant bg-surface pt-24">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                <Sparkles className="h-4 w-4" />
                AI Engineer portfolio
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white md:text-7xl">
                Akshay Kumar N
              </h1>
              <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-on-surface md:text-3xl">
                Senior AI Engineer building production LLM, RAG, cloud, and enterprise application systems.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
                I bring a full-stack engineering background into applied AI: turning complex business knowledge,
                documents, and workflows into reliable intelligent software.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 font-bold text-on-primary transition-colors hover:bg-primary-container"
                >
                  View AI Work
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-outline bg-surface-container px-6 font-bold text-on-surface transition-colors hover:border-primary hover:text-primary"
                >
                  Contact
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-outline-variant bg-surface-container p-4">
                    <div className="text-2xl font-black text-white">{metric.value}</div>
                    <div className="mt-1 text-sm leading-5 text-on-surface-variant">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-high">
                <img
                  src={profileImage}
                  alt="Akshay Kumar N professional headshot"
                  className="aspect-[4/5] h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <div className="text-sm font-bold text-white">Production AI focus</div>
                  <div className="mt-1 text-xs leading-5 text-on-surface-variant">Grounding, evaluation, APIs</div>
                </div>
                <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
                  <ShieldCheck className="mb-3 h-5 w-5 text-tertiary" />
                  <div className="text-sm font-bold text-white">Enterprise ready</div>
                  <div className="mt-1 text-xs leading-5 text-on-surface-variant">Security, scale, delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="expertise" className="border-b border-outline-variant bg-surface-container-low px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Expertise</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">
                AI engineering with enterprise delivery discipline.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {expertise.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-lg border border-outline-variant bg-surface p-6"
                >
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-on-surface-variant">{item.detail}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <h3 className="text-2xl font-black text-white">Core stack</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">
                  A practical stack for building AI features that integrate with real products, teams, and data.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {aiStack.map((skill) => (
                  <div key={skill.name} className="rounded-lg border border-outline-variant bg-surface p-4">
                    <skill.icon className="h-6 w-6 text-tertiary" />
                    <div className="mt-4 text-sm font-bold leading-5 text-white">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-outline-variant bg-surface px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Featured work</p>
                <h2 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">
                  Intelligent systems, not demos.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
                Selected portfolio themes across LLM automation, retrieval systems, and cloud-native platforms.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low"
                >
                  <div className="relative h-48 border-b border-outline-variant bg-surface-container-high p-5">
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                      <span className="rounded-lg border border-outline bg-surface px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-primary">
                        {project.category}
                      </span>
                      <project.icon className="h-6 w-6 text-tertiary" />
                    </div>
                    <div className="grid h-full grid-cols-3 items-end gap-3 pt-12">
                      {[0.62, 0.82, 0.48].map((height, barIndex) => (
                        <div key={barIndex} className="rounded-lg bg-background p-2">
                          <div
                            className="rounded-md border border-primary/50 bg-primary/25"
                            style={{ height: `${height * 112}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black leading-tight text-white">{project.title}</h3>
                    <p className="mt-4 leading-7 text-on-surface-variant">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-surface-container-high px-3 py-1 text-xs font-bold text-on-surface">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-outline-variant bg-surface-container-low px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Experience</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">
                Built across AI, fintech, public sector, and enterprise software.
              </h2>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="rounded-lg border border-outline-variant bg-surface p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-white">{item.company}</h3>
                      <p className="mt-1 font-semibold text-primary">{item.role}</p>
                    </div>
                    <span className="rounded-lg border border-outline-variant px-3 py-1 text-sm font-bold text-on-surface-variant">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 leading-7 text-on-surface-variant">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant bg-surface px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            {technologyGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-outline-variant bg-surface-container-low p-6">
                <h3 className="text-xl font-black capitalize text-white">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-surface-container-high px-3 py-2 text-sm font-semibold text-on-surface">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-surface-container-low px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Contact</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white md:text-5xl">
                Let&apos;s build useful AI into real products.
              </h2>
              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                I&apos;m available for AI engineering, RAG architecture, platform modernization, and full-stack product delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Email", href: `mailto:${emailAddress}`, icon: Mail },
                  { label: "LinkedIn", href: linkedInUrl, icon: Linkedin },
                  { label: "GitHub", href: githubUrl, icon: Github },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-outline bg-surface px-4 font-bold text-on-surface transition-colors hover:border-primary hover:text-primary"
                  >
                    <social.icon className="h-5 w-5" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="rounded-lg border border-outline-variant bg-surface p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-bold text-on-surface">Name</span>
                  <input
                    className="min-h-12 w-full rounded-lg border border-outline-variant bg-background px-4 text-on-surface outline-none transition-colors focus:border-primary"
                    name="name"
                    placeholder="Your name"
                    type="text"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-bold text-on-surface">Email</span>
                  <input
                    className="min-h-12 w-full rounded-lg border border-outline-variant bg-background px-4 text-on-surface outline-none transition-colors focus:border-primary"
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                  />
                </label>
              </div>
              <label className="mt-5 block space-y-2">
                <span className="text-sm font-bold text-on-surface">Message</span>
                <textarea
                  className="min-h-36 w-full resize-none rounded-lg border border-outline-variant bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-primary"
                  name="message"
                  placeholder="Tell me about the AI system or product you want to build."
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 font-bold text-on-primary transition-colors hover:bg-primary-container"
              >
                Send Inquiry
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-outline-variant bg-background px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Akshay Kumar N. AI Engineer portfolio.</p>
          <div className="flex gap-5">
            <a href={linkedInUrl} className="hover:text-primary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={githubUrl} className="hover:text-primary" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${emailAddress}`} className="hover:text-primary">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
