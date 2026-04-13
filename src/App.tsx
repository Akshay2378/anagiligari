/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Terminal, 
  Globe, 
  Cloud, 
  Cpu, 
  Database, 
  Search, 
  Bot, 
  Network, 
  Code, 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  Send,
  ChevronDown,
  Link as LinkIcon
} from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const aiSkills = [
  { name: "GPT-4 / 4o", icon: Bot },
  { name: "LangChain", icon: Network },
  { name: "Pinecone / FAISS", icon: Database },
  { name: "RAG Architecture", icon: Cpu },
  { name: "Azure AI Search", icon: Search },
];

const projects = [
  {
    title: "AI Resume Builder",
    description: "An automated pipeline utilizing n8n workflows and OpenAI to parse LinkedIn profiles and generate optimized, ATS-friendly resumes.",
    category: "AI Engineering",
    tags: ["n8n", "OpenAI", "Node.js"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABtU2_9tt-69vWerTOmHw-lOVGOxROXrPvnznNVpAV3VyTQBOCdeW7Aluk6uFvARqqgjf8dQyqN6hI3Xaqi3FZHvHpoMgpBw2sfZycVIDQECLlT1B0xcQf8pHnYp8omFRnPbCphoqDfCjyvgBBVaSyc8MzSME91yYvspdGmMNqbBzi6tb2bv_futjZl7STBoxmdMrLu18ScXg4wii2iktfwOk8oJsQ39pHrhdvdQNnF-T2w7hqXXtEVIcwNmVYGG2rGfHqWm7BQuJ8"
  },
  {
    title: "RAG-powered Chatbot",
    description: "Enterprise chatbot utilizing Retrieval-Augmented Generation (RAG) to provide context-aware answers from private internal documentation.",
    category: "LLM Architecture",
    tags: ["LangChain", "Vector DB", "Python"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz6mLhq0-_ZigJGUClBFjNjM9Wo2Xb2z1aCn5QhBonxFAcsJqLTVzzf43k6l2Y_V2stLvbfXG5V1pLAJBGP9ALusK8vu41VgBkVACgFJ0JfCb9My0-22JWRv7JEEAoS7l7za0W-pdvKdwj4i4Rdjs7GfLIITaTaa4q_UVQyThaHasreKhUd7awproeHXcAWqRiKJlVhhLsbxgI34otEa_5OHMybC9W3mARhtSUzeHdM8APC99hxLR6uxMEvFTgMGs9-8HcAKD9Gjqu"
  }
];

const experience = [
  {
    company: "World Bank",
    role: "Senior AI/LLM Consultant",
    period: "Apr 2025 - Present",
    description: "Leading implementation of RAG-based search engines and AI-orchestrated data processing for global financial datasets.",
    align: "right"
  },
  {
    company: "PayPal",
    role: "Senior Full Stack Developer",
    period: "Sept 2024 - Apr 2025",
    description: "Architected high-performance payment processing modules using .NET Core and Angular 17.",
    align: "left"
  },
  {
    company: "State of New Mexico",
    role: "Senior Software Engineer",
    period: "Sept 2023 - Aug 2024",
    description: "Modernized legacy government portals into modern cloud-native applications.",
    align: "right"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
          <div className="text-lg font-bold tracking-tighter text-on-surface">
            Akshay Kumar N
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-on-primary-container font-semibold border-b-2 border-primary-container pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="bg-primary-container text-on-primary-container px-5 py-2 rounded-xl text-sm font-semibold hover:scale-95 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-semibold">
                Engineering the Future of Intelligence
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
                Akshay Kumar N
              </h1>
              <p className="text-2xl md:text-3xl font-light text-on-surface-variant max-w-3xl mb-8 leading-tight">
                Senior Full Stack .NET Developer | <span className="text-primary">AI/LLM Engineer</span>
              </p>
              <p className="text-lg text-on-surface-variant/80 max-w-2xl mb-12 font-medium">
                Building AI-powered enterprise applications with .NET, Cloud, and Generative AI. Specializing in RAG architectures and high-scale cloud systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-primary-container to-primary text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="bg-surface-container-high border border-outline-variant/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/10"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="src/passportpic.jpg"
                  alt="Akshay Kumar N"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-surface-container-highest rounded-xl border border-outline-variant/20 shadow-xl hidden md:block">
                <div className="text-primary font-bold text-4xl leading-none">10+</div>
                <div className="text-xs uppercase tracking-widest text-on-surface-variant mt-2">Years Exp.</div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-4">The Narrative</div>
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">From Enterprise .NET to AI Architecture</h2>
              <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  With over a decade of experience in building mission-critical systems, I have navigated the evolution from monolithic .NET applications to distributed cloud microservices, and now, to the cutting edge of Generative AI.
                </p>
                <p>
                  My journey includes engineering robust solutions for global giants like <span className="text-white font-medium">World Bank</span>, <span className="text-white font-medium">PayPal</span>, and the <span className="text-white font-medium">State of New Mexico</span>. I specialize in bridging the gap between traditional enterprise architecture and modern LLM capabilities.
                </p>
                <p>
                  I don't just build chatbots; I design Document Intelligence systems and AI-orchestrated workflows that solve complex business problems using RAG (Retrieval-Augmented Generation) and Agentic frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI/LLM Skills */}
        <section id="skills" className="py-24 bg-surface px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">Artificial Intelligence Stack</h2>
              <div className="h-1 w-24 bg-secondary-container"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {aiSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-secondary-container/20 border border-secondary-container/30 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:bg-secondary-container/30 transition-all cursor-default"
                >
                  <skill.icon className="text-on-secondary-container w-10 h-10 mb-3" />
                  <div className="text-on-secondary-container font-bold text-sm">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Ecosystem */}
        <section className="py-24 bg-surface-container-low px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Backend */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="text-primary w-5 h-5" /> Backend Ecosystem
              </h3>
              <div className="flex flex-wrap gap-2">
                {[".NET CORE", "C#", "Microservices", "Web API", "Entity Framework"].map(tag => (
                  <span key={tag} className="bg-surface-container-highest px-3 py-1 rounded text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Frontend */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe className="text-primary w-5 h-5" /> Frontend & UI
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Angular 18", "React", "Vue.js", "Tailwind CSS", "TypeScript"].map(tag => (
                  <span key={tag} className="bg-surface-container-highest px-3 py-1 rounded text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Cloud */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cloud className="text-primary w-5 h-5" /> Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS (Lambda, S3)", "Azure", "Docker", "Kubernetes", "CI/CD"].map(tag => (
                  <span key={tag} className="bg-surface-container-highest px-3 py-1 rounded text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-surface px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-semibold">Featured Work</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Intelligent Solutions</h2>
              </div>
              <p className="text-on-surface-variant max-w-md text-lg">
                Selected projects showcasing the intersection of enterprise engineering and advanced language models.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-on-surface-variant mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-surface-container-highest px-2 py-1 rounded text-[10px] font-bold text-on-surface-variant uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Case Study <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-on-surface-variant font-bold flex items-center gap-1 hover:text-on-surface transition-colors">
                        {project.title.includes("Chatbot") ? "Demo" : "GitHub"} <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 bg-surface-container-low px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Professional Milestones</h2>
              <p className="text-on-surface-variant">A career defined by technical excellence and architectural leadership.</p>
            </div>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: exp.align === "right" ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-outline-variant/20"></div>
                  <div className={`md:flex items-center justify-between w-full ${exp.align === "left" ? "md:flex-row-reverse" : ""}`}>
                    <div className={`md:w-[45%] ${exp.align === "right" ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}>
                      <div className="text-primary font-bold text-lg">{exp.company}</div>
                      <div className="text-white font-medium">{exp.role}</div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(174,198,255,0.5)] z-10 border-4 border-surface-container-low"></div>
                    <div className={`md:w-[45%] text-on-surface-variant text-sm md:text-base ${exp.align === "left" ? "md:text-right" : ""}`}>
                      <span className="font-bold text-white block mb-1">{exp.period}</span>
                      {exp.description}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="relative pl-8 md:pl-0 text-center pt-8">
                <button className="text-on-surface-variant hover:text-primary font-bold flex items-center gap-2 mx-auto transition-colors group">
                  Show earlier experience (Thomson Reuters, Zetagile)
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Contact */}
        <section id="contact" className="py-24 bg-surface px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Credentials & Network</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-xl flex items-center gap-4">
                  <CheckCircle2 className="text-primary w-8 h-8" />
                  <div>
                    <div className="text-white font-bold text-sm">Azure Developer</div>
                    <div className="text-on-surface-variant text-xs">Associate</div>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-xl flex items-center gap-4">
                  <CheckCircle2 className="text-primary w-8 h-8" />
                  <div>
                    <div className="text-white font-bold text-sm">AWS Developer</div>
                    <div className="text-on-surface-variant text-xs">Associate</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Interested in collaborating on AI-driven products or enterprise modernization? Let's discuss how we can build the next generation of intelligent software.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Mail, href: "mailto:akshayusa23@gmail.com" },
                    { icon: Linkedin, href: "#" },
                    { icon: Github, href: "#" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-white hover:bg-primary hover:text-on-primary transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary text-white p-3 text-sm outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary text-white p-3 text-sm outline-none transition-all"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Message</label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary text-white p-3 text-sm outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary-container text-on-primary-container font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                  type="submit"
                >
                  Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-outline-variant/10 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 text-[10px] tracking-widest uppercase opacity-70">
          <div className="text-on-surface-variant">
            © 2024 Akshay Kumar N. Engineered with Precision.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
