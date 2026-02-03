<script>
  import { base } from "$app/paths";

  export let project;

  const statusColors = {
    "En Construcción": "badge-warning",
    Completado: "badge-success",
    "En Desarrollo": "badge-primary",
  };
</script>

<a
  href="{base}/projects/{project.slug}"
  class="card card-hover block group overflow-hidden h-full"
>
  <!-- Imagen del proyecto o placeholder -->
  <div
    class="relative h-48 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg mb-4 overflow-hidden"
  >
    {#if project.images && project.images[0]}
      <img
        src={project.images[0]}
        alt={project.title}
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    {:else}
      <div class="flex items-center justify-center h-full">
        <svg
          class="w-16 h-16 text-white/50"
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
      </div>
    {/if}

    <!-- Badge de estado -->
    <div class="absolute top-3 right-3">
      <span
        class="badge {statusColors[project.status] ||
          'badge-primary'} backdrop-blur-sm"
      >
        {project.status}
      </span>
    </div>
  </div>

  <!-- Contenido -->
  <div>
    <div class="flex items-start justify-between mb-2">
      <h3
        class="text-xl font-bold group-hover:text-[var(--primary)] transition-colors"
      >
        {project.title}
      </h3>
    </div>

    <p class="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
      {project.shortDescription}
    </p>

    <!-- Tags de tecnologías -->
    {#if project.technologies}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each project.technologies.slice(0, 4) as tech}
          <span
            class="text-xs px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]"
          >
            {tech}
          </span>
        {/each}
        {#if project.technologies.length > 4}
          <span
            class="text-xs px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]"
          >
            +{project.technologies.length - 4}
          </span>
        {/if}
      </div>
    {/if}

    <!-- Tags/Categorías -->
    {#if project.tags}
      <div class="flex flex-wrap gap-2">
        {#each project.tags.slice(0, 3) as tag}
          <span class="badge badge-primary text-xs">
            {tag}
          </span>
        {/each}
      </div>
    {/if}

    <!-- Call to action -->
    <div
      class="mt-4 flex items-center text-[var(--primary)] font-medium text-sm group-hover:gap-2 transition-all"
    >
      Ver Detalles
      <svg
        class="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
    </div>
  </div>
</a>
