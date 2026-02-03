import { c as create_ssr_component, e as escape, b as add_attribute, a as each } from "./ssr.js";
import { b as base } from "./paths.js";
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  const statusColors = {
    "En Construcción": "badge-warning",
    Completado: "badge-success",
    "En Desarrollo": "badge-primary"
  };
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<a href="${escape(base, true) + "/projects/" + escape(project.slug, true)}" class="card card-hover block group overflow-hidden h-full"> <div class="relative h-48 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg mb-4 overflow-hidden">${project.images && project.images[0] ? `<img${add_attribute("src", project.images[0], 0)}${add_attribute("alt", project.title, 0)} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">` : `<div class="flex items-center justify-center h-full" data-svelte-h="svelte-1ynhg00"><svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>`}  <div class="absolute top-3 right-3"><span class="${"badge " + escape(statusColors[project.status] || "badge-primary", true) + " backdrop-blur-sm"}">${escape(project.status)}</span></div></div>  <div><div class="flex items-start justify-between mb-2"><h3 class="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">${escape(project.title)}</h3></div> <p class="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">${escape(project.shortDescription)}</p>  ${project.technologies ? `<div class="flex flex-wrap gap-2 mb-4">${each(project.technologies.slice(0, 4), (tech) => {
    return `<span class="text-xs px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]">${escape(tech)} </span>`;
  })} ${project.technologies.length > 4 ? `<span class="text-xs px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]">+${escape(project.technologies.length - 4)}</span>` : ``}</div>` : ``}  ${project.tags ? `<div class="flex flex-wrap gap-2">${each(project.tags.slice(0, 3), (tag) => {
    return `<span class="badge badge-primary text-xs">${escape(tag)} </span>`;
  })}</div>` : ``}  <div class="mt-4 flex items-center text-[var(--primary)] font-medium text-sm group-hover:gap-2 transition-all" data-svelte-h="svelte-rimw59">Ver Detalles
      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div></div></a>`;
});
export {
  ProjectCard as P
};
