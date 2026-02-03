<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    export let dark = false;
    export let toggleTheme;

    let scrolled = false;
    let mobileMenuOpen = false;

    const navItems = [
        { href: `${base}/`, label: "Inicio" },
        { href: `${base}/about`, label: "Sobre Mí" },
        { href: `${base}/projects`, label: "Proyectos" },
        { href: `${base}/contact`, label: "Contacto" },
    ];

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    $: currentPath = $page.url.pathname;
</script>

<nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
        ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg'
        : 'bg-transparent'}"
>
    <div class="container-custom py-4 px-6 flex justify-between items-center">
        <!-- Logo -->
        <a
            href="{base}/"
            class="text-2xl font-bold gradient-text flex items-center gap-2"
        >
            <span class="text-3xl">⚡</span>
            <span>Manuel Grande</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
            {#each navItems as item}
                <a
                    href={item.href}
                    class="text-sm font-medium transition-colors relative group {currentPath ===
                    item.href
                        ? 'text-[var(--primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'}"
                >
                    {item.label}
                    <span
                        class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full {currentPath ===
                        item.href
                            ? 'w-full'
                            : ''}"
                    ></span>
                </a>
            {/each}

            <!-- Theme Toggle -->
            <button
                on:click={toggleTheme}
                class="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
                aria-label="Toggle theme"
            >
                {#if dark}
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
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                {:else}
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
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                {/if}
            </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
            on:click={toggleMobileMenu}
            class="md:hidden p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="Toggle menu"
        >
            {#if mobileMenuOpen}
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            {:else}
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            {/if}
        </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div
            class="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)] animate-fade-in"
        >
            <div class="container-custom py-4 px-6 flex flex-col gap-4">
                {#each navItems as item}
                    <a
                        href={item.href}
                        on:click={toggleMobileMenu}
                        class="text-base font-medium py-2 {currentPath ===
                        item.href
                            ? 'text-[var(--primary)]'
                            : 'text-[var(--text-secondary)]'}"
                    >
                        {item.label}
                    </a>
                {/each}

                <button
                    on:click={() => {
                        toggleTheme();
                        toggleMobileMenu();
                    }}
                    class="flex items-center gap-2 text-base font-medium py-2 text-[var(--text-secondary)]"
                >
                    {dark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
                </button>
            </div>
        </div>
    {/if}
</nav>
