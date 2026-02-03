<script>
    import { base } from "$app/paths";

    export let data;
    const { project } = data;

    const statusColors = {
        "En Construcción": {
            bg: "bg-yellow-500/10",
            text: "text-yellow-500",
            icon: "🚧",
        },
        Completado: {
            bg: "bg-green-500/10",
            text: "text-green-500",
            icon: "✅",
        },
        "En Desarrollo": {
            bg: "bg-blue-500/10",
            text: "text-blue-500",
            icon: "⚙️",
        },
    };

    const status =
        statusColors[project.status] || statusColors["En Desarrollo"];
</script>

<svelte:head>
    <title>{project.title} - Manuel Grande</title>
    <meta name="description" content={project.shortDescription} />
</svelte:head>

<!-- Hero del proyecto -->
<section
    class="section pt-32 pb-12 bg-gradient-to-b from-blue-500/10 to-transparent"
>
    <div class="container-custom">
        <div class="max-w-4xl mx-auto">
            <!-- Breadcrumb -->
            <nav
                class="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-8 animate-fade-in"
            >
                <a href="{base}/" class="hover:text-[var(--primary)]">Inicio</a>
                <span>/</span>
                <a href="{base}/projects" class="hover:text-[var(--primary)]"
                    >Proyectos</a
                >
                <span>/</span>
                <span class="text-[var(--text-primary)]">{project.title}</span>
            </nav>

            <!-- Título y estado -->
            <div class="animate-slide-up">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-4xl">{status.icon}</span>
                    <span class="badge {status.bg} {status.text} border-0">
                        {project.status}
                    </span>
                </div>

                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    {project.title}
                </h1>

                <p class="text-xl text-[var(--text-secondary)] mb-8">
                    {project.shortDescription}
                </p>

                <!-- Tags y categoría -->
                <div class="flex flex-wrap gap-3 mb-8">
                    <span class="badge badge-primary">{project.category}</span>
                    {#if project.tags}
                        {#each project.tags as tag}
                            <span class="badge badge-primary">{tag}</span>
                        {/each}
                    {/if}
                </div>

                <!-- Links -->
                {#if project.demoUrl || project.githubUrl}
                    <div class="flex flex-wrap gap-4">
                        {#if project.demoUrl}
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary"
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
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                                Ver Demo
                            </a>
                        {/if}
                        {#if project.githubUrl}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-secondary"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    />
                                </svg>
                                Ver Código
                            </a>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<!-- Descripción del proyecto -->
<section class="section">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto">
            <div class="card mb-8 animate-fade-in">
                <h2 class="text-2xl font-bold mb-4">Descripción</h2>
                <div class="prose prose-lg dark:prose-invert max-w-none">
                    <p class="text-[var(--text-secondary)] whitespace-pre-line">
                        {project.description}
                    </p>
                </div>
            </div>

            <!-- Descripción detallada (Markdown) -->
            {#if project.fullDescription}
                <div class="card mb-8 animate-slide-up">
                    <div class="prose prose-lg dark:prose-invert max-w-none">
                        {@html project.fullDescription.replace(/\n/g, "<br>")}
                    </div>
                </div>
            {/if}

            <!-- Stack Tecnológico -->
            {#if project.technologies && project.technologies.length > 0}
                <div class="card animate-scale-in">
                    <h2 class="text-2xl font-bold mb-6">Stack Tecnológico</h2>
                    <div
                        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {#each project.technologies as tech}
                            <div
                                class="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                            >
                                <span class="text-2xl">⚡</span>
                                <span class="font-medium">{tech}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>

<!-- CTA Creativo: Contactar sobre el proyecto -->
<section
    class="section bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700"
>
    <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
            <div class="relative">
                <!-- Icono decorativo -->
                <div
                    class="absolute -top-12 left-1/2 transform -translate-x-1/2"
                >
                    <div
                        class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce"
                    >
                        <svg
                            class="w-12 h-12 text-white"
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
                    </div>
                </div>

                <!-- Contenido principal -->
                <div class="pt-16 animate-fade-in">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Quieres saber más sobre el proyecto?
                    </h2>
                    <p class="text-lg md:text-xl text-white/90 mb-8">
                        Estoy disponible para discutir detalles técnicos,
                        colaboraciones o responder cualquier pregunta
                    </p>

                    <!-- Botón principal -->
                    <a
                        href="{base}/contact"
                        class="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50 group"
                    >
                        <svg
                            class="w-6 h-6 group-hover:rotate-12 transition-transform"
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
                        Contáctame Ahora
                        <svg
                            class="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

                    <!-- Características rápidas -->
                    <div
                        class="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
                    >
                        <div class="flex items-center gap-2">
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Respuesta rápida
                        </div>
                        <div class="flex items-center gap-2">
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Disponible para colaborar
                        </div>
                        <div class="flex items-center gap-2">
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Open to opportunities
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Navegación inferior -->
<section class="section bg-[var(--bg-secondary)]">
    <div class="container-custom">
        <div
            class="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-between"
        >
            <a href="{base}/projects" class="btn btn-secondary">
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
                        d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                </svg>
                Volver a Proyectos
            </a>

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
    </div>
</section>
