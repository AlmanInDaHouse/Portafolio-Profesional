import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const skills = [
  {
    category: "Ciberseguridad",
    items: [
      { name: "Análisis de Amenazas", level: 90 },
      { name: "Pentesting", level: 85 },
      { name: "IDS/IPS", level: 80 },
      { name: "SIEM", level: 75 },
      { name: "Incident Response", level: 85 }
    ]
  },
  {
    category: "Programación",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Bash/Shell", level: 85 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    category: "Infraestructura",
    items: [
      { name: "Linux Administration", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "AWS", level: 75 },
      { name: "Networking", level: 85 }
    ]
  },
  {
    category: "Desarrollo Web",
    items: [
      { name: "React/Svelte", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "FastAPI", level: 85 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 80 }
    ]
  }
];
const certifications = [
  {
    name: "Técnico en Sistemas Microinformáticos y Redes",
    issuer: "FP España",
    year: 2025
  },
  {
    name: "Cisco Ethical Hacker",
    issuer: "Cisco",
    year: 2025
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: 2025
  }
];
const experience = [
  {
    id: 1,
    title: "Desarrollador de CyberGuard AI",
    company: "Proyecto Personal",
    period: "2025 - Presente",
    type: "project",
    description: "Desarrollo de plataforma de ciberseguridad con IA para detección de amenazas. Implementación de modelos de machine learning y arquitectura cloud escalable.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "AWS"]
  },
  {
    id: 2,
    title: "Técnico en Sistemas Microinformáticos y Redes",
    company: "Formación Profesional",
    period: "2022 - 2024",
    type: "education",
    description: "Formación integral en administración de sistemas, redes y ciberseguridad. Especialización en infraestructura IT y seguridad de la información.",
    technologies: ["Linux", "Windows Server", "Networking", "Seguridad"]
  },
  {
    id: 3,
    title: "Proyectos de Laboratorio",
    company: "Aprendizaje Autodidacta",
    period: "2023 - Presente",
    type: "learning",
    description: "Desarrollo continuo de habilidades en ciberseguridad, pentesting y desarrollo de aplicaciones. Construcción de laboratorios de práctica y proyectos personales.",
    technologies: ["Kali Linux", "Docker", "Python", "JavaScript"]
  }
];
const SkillBar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skill-bar.svelte-8nutcs{@apply w-full;}",
  map: null
};
const SkillBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { level } = $$props;
  let animatedLevel = 0;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  $$result.css.add(css);
  return `<div class="skill-bar svelte-8nutcs"><div class="flex justify-between items-center mb-2"><span class="font-medium text-[var(--text-primary)]">${escape(name)}</span> <span class="text-sm text-[var(--text-secondary)]">${escape(animatedLevel)}%</span></div> <div class="h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden"><div class="h-full gradient-primary transition-all duration-1000 ease-out rounded-full" style="${"width: " + escape(animatedLevel, true) + "%"}"></div></div> </div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  const typeIcons = {
    project: { icon: "💼", color: "text-blue-500" },
    education: { icon: "🎓", color: "text-purple-500" },
    learning: { icon: "📚", color: "text-green-500" },
    work: { icon: "💻", color: "text-orange-500" }
  };
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="timeline relative">${each(items, (item, i) => {
    return `<div class="timeline-item flex gap-6 pb-12 relative animate-slide-up" style="${"animation-delay: " + escape(i * 100, true) + "ms"}"> ${i < items.length - 1 ? `<div class="absolute left-[19px] top-12 w-0.5 h-full bg-[var(--border)]"></div>` : ``}  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--bg-secondary)] border-2 border-[var(--primary)] flex items-center justify-center relative z-10"><span class="text-xl">${escape(typeIcons[item.type]?.icon || "⚡")}</span></div>  <div class="flex-1 card card-hover"><div class="flex flex-col md:flex-row md:items-start md:justify-between mb-3"><div><h3 class="text-xl font-bold mb-1">${escape(item.title)}</h3> <p class="text-[var(--text-secondary)] font-medium">${escape(item.company)} </p></div> <span class="badge badge-primary mt-2 md:mt-0">${escape(item.period)}</span></div> <p class="text-[var(--text-secondary)] mb-4">${escape(item.description)}</p> ${item.technologies ? `<div class="flex flex-wrap gap-2">${each(item.technologies, (tech) => {
      return `<span class="text-xs px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]">${escape(tech)} </span>`;
    })} </div>` : ``}</div> </div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-hi1wqw_START -->${$$result.title = `<title>Sobre Mí - Manuel Grande</title>`, ""}<meta name="description" content="Conoce más sobre mi experiencia, habilidades y trayectoria profesional."><!-- HEAD_svelte-hi1wqw_END -->`, ""}  <section class="section pt-32 bg-gradient-to-b from-blue-500/10 to-transparent" data-svelte-h="svelte-co0g70"><div class="container-custom"><div class="max-w-4xl mx-auto text-center animate-fade-in"><h1 class="text-5xl md:text-6xl font-bold mb-6">Sobre <span class="gradient-text">Mí</span></h1> <p class="text-xl text-[var(--text-secondary)]">Conoce mi trayectoria, habilidades y pasión por la tecnología</p></div></div></section>  <section class="section" data-svelte-h="svelte-39s1kf"><div class="container-custom"><div class="max-w-4xl mx-auto"><div class="card animate-slide-up"><div class="flex flex-col md:flex-row gap-8 items-center"> <div class="flex-shrink-0"><div class="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-5xl font-bold">MG</div></div>  <div class="flex-1"><h2 class="text-3xl font-bold mb-4">Manuel Grande</h2> <p class="text-[var(--text-secondary)] mb-4 leading-relaxed">Soy Técnico en Sistemas Microinformáticos y Redes
                            con una profunda pasión por la <strong>ciberseguridad</strong>
                            y la <strong>inteligencia artificial</strong>. Mi
                            enfoque se centra en crear soluciones innovadoras
                            que protejan sistemas y datos en un mundo cada vez
                            más digitalizado.</p> <p class="text-[var(--text-secondary)] mb-4leading-relaxed">Mi trayectoria me ha permitido adquirir experiencia
                            en <strong>administración de sistemas Linux</strong>, <strong>desarrollo de aplicaciones</strong> y
                            <strong>análisis de seguridad</strong>. Actualmente,
                            estoy desarrollando <strong>CyberGuard AI</strong>,
                            una plataforma que combina machine learning con
                            seguridad proactiva.</p> <p class="text-[var(--text-secondary)] leading-relaxed">Cuando no estoy programando o configurando
                            servidores, me dedico a aprender nuevas tecnologías,
                            participar en CTFs de seguridad y contribuir a la
                            comunidad de código abierto.</p></div></div></div></div></div></section>  <section class="section bg-[var(--bg-secondary)]"><div class="container-custom"><div class="max-w-4xl mx-auto"><h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-svelte-h="svelte-15fnmmt">Trayectoria <span class="gradient-text">Profesional</span></h2> ${validate_component(Timeline, "Timeline").$$render($$result, { items: experience }, {}, {})}</div></div></section>  <section class="section"><div class="container-custom"><div class="max-w-4xl mx-auto"><h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-svelte-h="svelte-xic0fw">Habilidades <span class="gradient-text">Técnicas</span></h2> <div class="space-y-8">${each(skills, (category, i) => {
    return `<div class="card animate-slide-up" style="${"animation-delay: " + escape(i * 100, true) + "ms"}"><h3 class="text-xl font-bold mb-6">${escape(category.category)}</h3> <div class="space-y-4">${each(category.items, (skill) => {
      return `${validate_component(SkillBar, "SkillBar").$$render($$result, { name: skill.name, level: skill.level }, {}, {})}`;
    })}</div> </div>`;
  })}</div></div></div></section>  ${certifications && certifications.length > 0 ? `<section class="section bg-[var(--bg-secondary)]"><div class="container-custom"><div class="max-w-4xl mx-auto"><h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-svelte-h="svelte-14gmzla">Certificaciones y <span class="gradient-text">Formación</span></h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${each(certifications, (cert, i) => {
    return `<div class="card card-hover animate-scale-in" style="${"animation-delay: " + escape(i * 50, true) + "ms"}"><div class="flex items-start gap-4"><div class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center" data-svelte-h="svelte-1hza25n"><svg class="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div> <div class="flex-1"><h3 class="font-bold mb-1">${escape(cert.name)}</h3> <p class="text-sm text-[var(--text-secondary)]">${escape(cert.issuer)}</p> <p class="text-sm text-[var(--text-secondary)] mt-1">${escape(cert.year)}</p> </div></div> </div>`;
  })}</div></div></div></section>` : ``}  <section class="section" data-svelte-h="svelte-1oe2f55"><div class="container-custom"><div class="max-w-2xl mx-auto text-center card gradient-primary text-white"><h2 class="text-3xl md:text-4xl font-bold mb-4">¿Trabajamos Juntos?</h2> <p class="text-lg mb-8 opacity-90">Estoy disponible para proyectos freelance y oportunidades
                laborales</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="${escape(base, true) + "/projects"}" class="btn btn-primary bg-white text-[var(--primary)] hover:bg-white/90">Ver Mis Proyectos</a> <a href="${escape(base, true) + "/contact"}" class="btn btn-secondary text-white border-white/30 hover:bg-white/20">Contáctame</a></div></div></div></section>`;
});
export {
  Page as default
};
