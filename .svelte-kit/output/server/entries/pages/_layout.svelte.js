import { c as create_ssr_component, s as subscribe, e as escape, a as each, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { dark = false } = $$props;
  let { toggleTheme } = $$props;
  const navItems = [
    { href: `${base}/`, label: "Inicio" },
    { href: `${base}/about`, label: "Sobre Mí" },
    {
      href: `${base}/projects`,
      label: "Proyectos"
    },
    {
      href: `${base}/contact`,
      label: "Contacto"
    }
  ];
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.toggleTheme === void 0 && $$bindings.toggleTheme && toggleTheme !== void 0)
    $$bindings.toggleTheme(toggleTheme);
  currentPath = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="${"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + escape(
    "bg-transparent",
    true
  )}"><div class="container-custom py-4 px-6 flex justify-between items-center"> <a href="${escape(base, true) + "/"}" class="text-2xl font-bold gradient-text flex items-center gap-2" data-svelte-h="svelte-9qmqgy"><span class="text-3xl">⚡</span> <span>Manuel Grande</span></a>  <div class="hidden md:flex items-center gap-8">${each(navItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${"text-sm font-medium transition-colors relative group " + escape(
      currentPath === item.href ? "text-[var(--primary)]" : "text-[var(--text-secondary)] hover:text-[var(--primary)]",
      true
    )}">${escape(item.label)} <span class="${"absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full " + escape(currentPath === item.href ? "w-full" : "", true)}"></span> </a>`;
  })}  <button class="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors" aria-label="Toggle theme">${dark ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>` : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`}</button></div>  <button class="md:hidden p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors" aria-label="Toggle menu">${`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`}</button></div>  ${``}</nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    {
      icon: "github",
      href: "https://github.com/AlmanInDaHouse",
      label: "GitHub"
    },
    {
      icon: "linkedin",
      href: "https://linkedin.com/in/manuel-grande",
      label: "LinkedIn"
    },
    {
      icon: "email",
      href: "mailto:manuelgrandeecija1@gmail.com",
      label: "Email"
    }
  ];
  const quickLinks = [
    { href: `${base}/`, label: "Inicio" },
    { href: `${base}/about`, label: "Sobre Mí" },
    {
      href: `${base}/projects`,
      label: "Proyectos"
    },
    {
      href: `${base}/contact`,
      label: "Contacto"
    }
  ];
  return `<footer class="bg-[var(--bg-secondary)] border-t border-[var(--border)] mt-20"><div class="container-custom py-12 px-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div><h3 class="text-xl font-bold mb-4 gradient-text" data-svelte-h="svelte-11iv6nx">Manuel Grande</h3> <p class="text-[var(--text-secondary)] mb-4" data-svelte-h="svelte-l3zft8">Técnico en Sistemas Microinformáticos y Redes especializado
                    en ciberseguridad e IA.</p> <div class="flex gap-4">${each(socialLinks, (social) => {
    return `<a${add_attribute("href", social.href, 0)} class="p-2 rounded-lg bg-[var(--bg-primary)] hover:bg-[var(--primary)] hover:text-white transition-all hover:scale-110"${add_attribute("aria-label", social.label, 0)} target="_blank" rel="noopener noreferrer">${social.icon === "github" ? `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>` : `${social.icon === "linkedin" ? `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>` : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`}`} </a>`;
  })}</div></div>  <div><h4 class="text-lg font-semibold mb-4" data-svelte-h="svelte-c5a77c">Enlaces Rápidos</h4> <ul class="space-y-2">${each(quickLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">${escape(link.label)}</a> </li>`;
  })}</ul></div>  <div data-svelte-h="svelte-1pw7pne"><h4 class="text-lg font-semibold mb-4">Contacto</h4> <ul class="space-y-2 text-[var(--text-secondary)]"><li class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <span>644 55 12 93</span></li> <li class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <a href="mailto:manuelgrandeecija1@gmail.com" class="hover:text-[var(--primary)] transition-colors">manuelgrandeecija1@gmail.com</a></li></ul></div></div>  <div class="pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--text-secondary)]"><p>© ${escape(currentYear)} Manuel Grande. Todos los derechos reservados.</p> <p class="mt-2" data-svelte-h="svelte-pibbsv">Hecho con ❤️ y SvelteKit</p></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dark = false;
  function toggleTheme() {
    dark = !dark;
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  return `<div class="min-h-screen bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] text-[var(--text-primary)]">${validate_component(Navbar, "Navbar").$$render($$result, { dark, toggleTheme }, {}, {})} <main class="pt-20">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
