<script>
    import { base } from "$app/paths";
    import { skills, certifications } from "$lib/data/skills";
    import { experience } from "$lib/data/experience";
    import SkillBar from "$lib/components/SkillBar.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
</script>

<svelte:head>
    <title>Sobre Mí - Manuel Grande</title>
    <meta
        name="description"
        content="Conoce más sobre mi experiencia, habilidades y trayectoria profesional."
    />
</svelte:head>

<!-- Hero -->
<section class="section pt-32 bg-gradient-to-b from-blue-500/10 to-transparent">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Sobre <span class="gradient-text">Mí</span>
            </h1>
            <p class="text-xl text-[var(--text-secondary)]">
                Conoce mi trayectoria, habilidades y pasión por la tecnología
            </p>
        </div>
    </div>
</section>

<!-- Biografía -->
<section class="section">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto">
            <div class="card animate-slide-up">
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <!-- Avatar placeholder -->
                    <div class="flex-shrink-0">
                        <div
                            class="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-5xl font-bold"
                        >
                            MG
                        </div>
                    </div>

                    <!-- Bio -->
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold mb-4">Manuel Grande</h2>
                        <p
                            class="text-[var(--text-secondary)] mb-4 leading-relaxed"
                        >
                            Soy Técnico en Sistemas Microinformáticos y Redes
                            con una profunda pasión por la <strong
                                >ciberseguridad</strong
                            >
                            y la <strong>inteligencia artificial</strong>. Mi
                            enfoque se centra en crear soluciones innovadoras
                            que protejan sistemas y datos en un mundo cada vez
                            más digitalizado.
                        </p>
                        <p
                            class="text-[var(--text-secondary)] mb-4leading-relaxed"
                        >
                            Mi trayectoria me ha permitido adquirir experiencia
                            en <strong>administración de sistemas Linux</strong
                            >, <strong>desarrollo de aplicaciones</strong> y
                            <strong>análisis de seguridad</strong>. Actualmente,
                            estoy desarrollando <strong>CyberGuard AI</strong>,
                            una plataforma que combina machine learning con
                            seguridad proactiva.
                        </p>
                        <p class="text-[var(--text-secondary)] leading-relaxed">
                            Cuando no estoy programando o configurando
                            servidores, me dedico a aprender nuevas tecnologías,
                            participar en CTFs de seguridad y contribuir a la
                            comunidad de código abierto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Timeline de Experiencia -->
<section class="section bg-[var(--bg-secondary)]">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                Trayectoria <span class="gradient-text">Profesional</span>
            </h2>
            <Timeline items={experience} />
        </div>
    </div>
</section>

<!-- Habilidades -->
<section class="section">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                Habilidades <span class="gradient-text">Técnicas</span>
            </h2>

            <div class="space-y-8">
                {#each skills as category, i}
                    <div
                        class="card animate-slide-up"
                        style="animation-delay: {i * 100}ms"
                    >
                        <h3 class="text-xl font-bold mb-6">
                            {category.category}
                        </h3>
                        <div class="space-y-4">
                            {#each category.items as skill}
                                <SkillBar
                                    name={skill.name}
                                    level={skill.level}
                                />
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- Certificaciones -->
{#if certifications && certifications.length > 0}
    <section class="section bg-[var(--bg-secondary)]">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                    Certificaciones y <span class="gradient-text"
                        >Formación</span
                    >
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {#each certifications as cert, i}
                        <div
                            class="card card-hover animate-scale-in"
                            style="animation-delay: {i * 50}ms"
                        >
                            <div class="flex items-start gap-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center"
                                >
                                    <svg
                                        class="w-6 h-6 text-[var(--primary)]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-bold mb-1">{cert.name}</h3>
                                    <p
                                        class="text-sm text-[var(--text-secondary)]"
                                    >
                                        {cert.issuer}
                                    </p>
                                    <p
                                        class="text-sm text-[var(--text-secondary)] mt-1"
                                    >
                                        {cert.year}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
{/if}

<!-- CTA -->
<section class="section">
    <div class="container-custom">
        <div
            class="max-w-2xl mx-auto text-center card gradient-primary text-white"
        >
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                ¿Trabajamos Juntos?
            </h2>
            <p class="text-lg mb-8 opacity-90">
                Estoy disponible para proyectos freelance y oportunidades
                laborales
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="{base}/projects"
                    class="btn btn-primary bg-white text-[var(--primary)] hover:bg-white/90"
                >
                    Ver Mis Proyectos
                </a>
                <a
                    href="{base}/contact"
                    class="btn btn-secondary text-white border-white/30 hover:bg-white/20"
                >
                    Contáctame
                </a>
            </div>
        </div>
    </div>
</section>
