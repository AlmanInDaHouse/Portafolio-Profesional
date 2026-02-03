import { c as create_ssr_component, b as add_attribute, a as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { p as projects } from "../../../chunks/projects.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredProjects;
  let selectedCategory = "Todos";
  let searchQuery = "";
  const categories = ["Todos", ...new Set(projects.map((p) => p.category))];
  filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });
  return `${$$result.head += `<!-- HEAD_svelte-1wi31zl_START -->${$$result.title = `<title>Proyectos - Manuel Grande</title>`, ""}<meta name="description" content="Explora mis proyectos de ciberseguridad, desarrollo web e inteligencia artificial."><!-- HEAD_svelte-1wi31zl_END -->`, ""}  <section class="section bg-gradient-to-b from-blue-500/10 to-transparent"><div class="container-custom"><div class="text-center mb-12 animate-fade-in" data-svelte-h="svelte-1p34ssk"><h1 class="text-5xl md:text-6xl font-bold mb-6">Mis <span class="gradient-text">Proyectos</span></h1> <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Explora mi trabajo en ciberseguridad, desarrollo de aplicaciones
                e inteligencia artificial</p></div>  <div class="max-w-4xl mx-auto mb-12 space-y-6 animate-slide-up"> <div class="relative"><svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Buscar proyectos..." class="input pl-12"${add_attribute("value", searchQuery, 0)}></div>  <div class="flex flex-wrap gap-3 justify-center">${each(categories, (category) => {
    return `<button class="${"btn " + escape(
      selectedCategory === category ? "btn-primary" : "btn-ghost",
      true
    ) + " text-sm"}">${escape(category)} </button>`;
  })}</div></div></div></section>  <section class="section -mt-10"><div class="container-custom">${filteredProjects.length > 0 ? `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(filteredProjects, (project, i) => {
    return `<div class="animate-slide-up" style="${"animation-delay: " + escape(i * 50, true) + "ms"}">${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} </div>`;
  })}</div>` : `<div class="text-center py-20" data-svelte-h="svelte-tnbk7c"><svg class="w-16 h-16 mx-auto text-[var(--text-secondary)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="text-xl text-[var(--text-secondary)]">No se encontraron proyectos que coincidan con tu búsqueda</p></div>`}</div></section>  <section class="section bg-[var(--bg-secondary)]" data-svelte-h="svelte-1ul3t5l"><div class="container-custom text-center"><h2 class="text-3xl md:text-4xl font-bold mb-4">¿Tienes un Proyecto en Mente?</h2> <p class="text-lg text-[var(--text-secondary)] mb-8">Estoy disponible para nuevos proyectos y colaboraciones</p> <a href="${escape(base, true) + "/contact"}" class="btn btn-primary">Contáctame
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></a></div></section>`;
});
export {
  Page as default
};
