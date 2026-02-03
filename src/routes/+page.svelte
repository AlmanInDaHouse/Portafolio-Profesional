<script>
  import { base } from "$app/paths";
  import { getFeaturedProjects } from "$lib/data/projects";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  const featuredProjects = getFeaturedProjects();
</script>

<svelte:head>
  <title>Manuel Grande - Portafolio Profesional</title>
  <meta
    name="description"
    content="Portafolio profesional de Manuel Grande, Técnico en Sistemas Microinformáticos y Redes especializado en ciberseguridad e IA."
  />
</svelte:head>

<!-- Hero Section -->
<section
  class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-animated"
>
  <!-- Background decorativo -->
  <div class="absolute inset-0 opacity-20">
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-200"
    ></div>
    <div
      class="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-400"
    ></div>
  </div>

  <div class="container-custom px-6 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <div class="animate-fade-in">
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Hola, soy <span
            class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >Manuel Grande</span
          >
        </h1>
      </div>

      <p
        class="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up delay-100"
      >
        Técnico en Sistemas Microinformáticos y Redes
      </p>

      <p
        class="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up delay-200"
      >
        Especializado en <strong>ciberseguridad</strong>,
        <strong>administración de sistemas</strong>
        e <strong>inteligencia artificial</strong> aplicada a seguridad.
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-300"
      >
        <a href="{base}/projects" class="btn btn-primary glass">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Ver Proyectos
        </a>

        <a
          href="{base}/contact"
          class="btn btn-secondary glass text-white border-white/30 hover:bg-white/20"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contacto
        </a>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          class="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- Proyectos Destacados -->
<section class="section bg-[var(--bg-primary)]">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        Proyectos <span class="gradient-text">Destacados</span>
      </h2>
      <p class="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
        Descubre mis trabajos más recientes e innovadores en ciberseguridad y
        desarrollo
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {#each featuredProjects as project, i}
        <div class="animate-slide-up" style="animation-delay: {i * 100}ms">
          <ProjectCard {project} />
        </div>
      {/each}
    </div>

    <div class="text-center">
      <a href="{base}/projects" class="btn btn-primary">
        Ver Todos los Proyectos
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Tech Stack Section -->
<section class="section bg-[var(--bg-secondary)]">
  <div class="container-custom text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-12">
      Tecnologías y <span class="gradient-text">Herramientas</span>
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each ["Python", "JavaScript", "Linux", "Docker", "React", "TensorFlow", "AWS", "Kubernetes"] as tech, i}
        <div
          class="card card-hover text-center animate-scale-in"
          style="animation-delay: {i * 50}ms"
        >
          <p class="font-semibold">{tech}</p>
        </div>
      {/each}
    </div>

    <div class="mt-12">
      <a href="{base}/about" class="btn btn-secondary">
        Conocer Más Sobre Mí
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section
  class="section bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white"
>
  <div class="container-custom text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-6">¿Listo para Colaborar?</h2>
    <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
      Estoy disponible para proyectos freelance, colaboraciones y oportunidades
      laborales
    </p>
    <a
      href="{base}/contact"
      class="btn btn-primary bg-white text-[var(--primary)] hover:bg-white/90"
    >
      Hablemos
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </a>
  </div>
</section>
