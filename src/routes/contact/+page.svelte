<script>
    let formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    let formState = "idle"; // idle, submitting, success, error

    function handleSubmit(e) {
        e.preventDefault();
        formState = "submitting";

        // Simulación de envío (en producción, aquí iría la lógica real)
        setTimeout(() => {
            formState = "success";
            formData = { name: "", email: "", subject: "", message: "" };

            setTimeout(() => {
                formState = "idle";
            }, 5000);
        }, 1500);
    }

    const contactInfo = [
        {
            icon: "phone",
            label: "Teléfono",
            value: "644 55 12 93",
            href: "tel:+34644551293",
        },
        {
            icon: "email",
            label: "Email",
            value: "manuelgrandeecija1@gmail.com",
            href: "mailto:manuelgrandeecija1@gmail.com",
        },
        {
            icon: "location",
            label: "Ubicación",
            value: "España",
            href: null,
        },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/AlmanInDaHouse",
            icon: "github",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/manuel-grande",
            icon: "linkedin",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/manuelgrande",
            icon: "twitter",
        },
    ];
</script>

<svelte:head>
    <title>Contacto - Manuel Grande</title>
    <meta
        name="description"
        content="Ponte en contacto conmigo para proyectos, colaboraciones u oportunidades laborales."
    />
</svelte:head>

<!-- Hero -->
<section class="section pt-32 bg-gradient-to-b from-blue-500/10 to-transparent">
    <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                Hablemos <span class="gradient-text">Juntos</span>
            </h1>
            <p class="text-xl text-[var(--text-secondary)]">
                ¿Tienes un proyecto en mente? ¿Buscas colaborar? Estoy a un
                mensaje de distancia
            </p>
        </div>
    </div>
</section>

<!-- Contenido principal -->
<section class="section">
    <div class="container-custom">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Información de contacto -->
            <div class="space-y-8 animate-slide-up">
                <div>
                    <h2 class="text-3xl font-bold mb-6">
                        Información de Contacto
                    </h2>
                    <p class="text-[var(--text-secondary)] mb-8">
                        Estoy disponible para proyectos freelance,
                        colaboraciones y oportunidades laborales. No dudes en
                        contactarme por cualquiera de estos medios.
                    </p>
                </div>

                <!-- Tarjetas de contacto -->
                <div class="space-y-4">
                    {#each contactInfo as info, i}
                        <div
                            class="card card-hover flex items-center gap-4 animate-scale-in"
                            style="animation-delay: {i * 100}ms"
                        >
                            <div
                                class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0"
                            >
                                {#if info.icon === "phone"}
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
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                {:else if info.icon === "email"}
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                {:else}
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
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                {/if}
                            </div>
                            <div class="flex-1">
                                <p
                                    class="text-sm text-[var(--text-secondary)] mb-1"
                                >
                                    {info.label}
                                </p>
                                {#if info.href}
                                    <a
                                        href={info.href}
                                        class="font-medium hover:text-[var(--primary)] transition-colors"
                                    >
                                        {info.value}
                                    </a>
                                {:else}
                                    <p class="font-medium">{info.value}</p>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Redes sociales -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Sígueme en Redes</h3>
                    <div class="flex gap-4">
                        {#each socialLinks as social}
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--primary)] hover:text-white transition-all hover:scale-110 flex items-center justify-center"
                                aria-label={social.name}
                            >
                                {#if social.icon === "github"}
                                    <svg
                                        class="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        />
                                    </svg>
                                {:else if social.icon === "linkedin"}
                                    <svg
                                        class="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                        />
                                    </svg>
                                {:else}
                                    <svg
                                        class="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        />
                                    </svg>
                                {/if}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Formulario de contacto -->
            <div class="animate-slide-up delay-100">
                <div class="card">
                    <h2 class="text-3xl font-bold mb-6">Envíame un Mensaje</h2>

                    {#if formState === "success"}
                        <div
                            class="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 mb-6 animate-fade-in"
                        >
                            <p class="font-medium">
                                ✅ ¡Mensaje enviado con éxito!
                            </p>
                            <p class="text-sm mt-1">
                                Te responderé lo antes posible.
                            </p>
                        </div>
                    {/if}

                    <form on:submit={handleSubmit} class="space-y-6">
                        <div>
                            <label
                                for="name"
                                class="block text-sm font-medium mb-2"
                                >Nombre</label
                            >
                            <input
                                type="text"
                                id="name"
                                bind:value={formData.name}
                                required
                                class="input"
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium mb-2"
                                >Email</label
                            >
                            <input
                                type="email"
                                id="email"
                                bind:value={formData.email}
                                required
                                class="input"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label
                                for="subject"
                                class="block text-sm font-medium mb-2"
                                >Asunto</label
                            >
                            <input
                                type="text"
                                id="subject"
                                bind:value={formData.subject}
                                required
                                class="input"
                                placeholder="¿Sobre qué quieres hablar?"
                            />
                        </div>

                        <div>
                            <label
                                for="message"
                                class="block text-sm font-medium mb-2"
                                >Mensaje</label
                            >
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                required
                                class="textarea"
                                placeholder="Cuéntame más sobre tu proyecto o consulta..."
                                rows="5"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="btn btn-primary w-full"
                            disabled={formState === "submitting"}
                        >
                            {#if formState === "submitting"}
                                Enviando...
                            {:else}
                                Enviar Mensaje
                            {/if}
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
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
