<script>
    import { base } from "$app/paths";
    import { projects } from "$lib/data/projects";
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    let selectedCategory = "Todos";
    let searchQuery = "";

    const categories = ["Todos", ...new Set(projects.map((p) => p.category))];

    $: filteredProjects = projects.filter((p) => {
        const matchesCategory =
            selectedCategory === "Todos" || p.category === selectedCategory;
        const matchesSearch =
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.shortDescription
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
</script>

<svelte:head>
    <title>Proyectos - Manuel Grande</title>
    <meta
        name="description"
        content="Explora mis proyectos de ciberseguridad, desarrollo web e inteligencia artificial."
    />
</svelte:head>

<!-- Hero Section -->
<section class="section bg-gradient-to-b from-blue-500/10 to-transparent">
    <div class="container-custom">
        <div class="text-center mb-12 animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Mis <span class="gradient-text">Proyectos</span>
            </h1>
            <p class="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Explora mi trabajo en ciberseguridad, desarrollo de aplicaciones
                e inteligencia artificial
            </p>
        </div>

        <!-- Filtros y búsqueda -->
        <div class="max-w-4xl mx-auto mb-12 space-y-6 animate-slide-up">
            <!-- Búsqueda -->
            <div class="relative">
                <svg
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Buscar proyectos..."
                    class="input pl-12"
                />
            </div>

            <!-- Categorías -->
            <div class="flex flex-wrap gap-3 justify-center">
                {#each categories as category}
                    <button
                        on:click={() => (selectedCategory = category)}
                        class="btn {selectedCategory === category
                            ? 'btn-primary'
                            : 'btn-ghost'} text-sm"
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- Grid de Proyectos -->
<section class="section -mt-10">
    <div class="container-custom">
        {#if filteredProjects.length > 0}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each filteredProjects as project, i}
                    <div
                        class="animate-slide-up"
                        style="animation-delay: {i * 50}ms"
                    >
                        <ProjectCard {project} />
                    </div>
                {/each}
            </div>
        {:else}
            <div class="text-center py-20">
                <svg
                    class="w-16 h-16 mx-auto text-[var(--text-secondary)] mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <p class="text-xl text-[var(--text-secondary)]">
                    No se encontraron proyectos que coincidan con tu búsqueda
                </p>
            </div>
        {/if}
    </div>
</section>

<!-- CTA -->
<section class="section bg-[var(--bg-secondary)]">
    <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un Proyecto en Mente?
        </h2>
        <p class="text-lg text-[var(--text-secondary)] mb-8">
            Estoy disponible para nuevos proyectos y colaboraciones
        </p>
        <a href="{base}/contact" class="btn btn-primary">
            Contáctame
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
