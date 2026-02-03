<script>
    export let items = []; // Array de { title, company, period, type, description, technologies }

    const typeIcons = {
        project: { icon: "💼", color: "text-blue-500" },
        education: { icon: "🎓", color: "text-purple-500" },
        learning: { icon: "📚", color: "text-green-500" },
        work: { icon: "💻", color: "text-orange-500" },
    };
</script>

<div class="timeline relative">
    {#each items as item, i}
        <div
            class="timeline-item flex gap-6 pb-12 relative animate-slide-up"
            style="animation-delay: {i * 100}ms"
        >
            <!-- Línea vertical -->
            {#if i < items.length - 1}
                <div
                    class="absolute left-[19px] top-12 w-0.5 h-full bg-[var(--border)]"
                ></div>
            {/if}

            <!-- Icono -->
            <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--bg-secondary)] border-2 border-[var(--primary)] flex items-center justify-center relative z-10"
            >
                <span class="text-xl">{typeIcons[item.type]?.icon || "⚡"}</span
                >
            </div>

            <!-- Contenido -->
            <div class="flex-1 card card-hover">
                <div
                    class="flex flex-col md:flex-row md:items-start md:justify-between mb-3"
                >
                    <div>
                        <h3 class="text-xl font-bold mb-1">{item.title}</h3>
                        <p class="text-[var(--text-secondary)] font-medium">
                            {item.company}
                        </p>
                    </div>
                    <span class="badge badge-primary mt-2 md:mt-0"
                        >{item.period}</span
                    >
                </div>

                <p class="text-[var(--text-secondary)] mb-4">
                    {item.description}
                </p>

                {#if item.technologies}
                    <div class="flex flex-wrap gap-2">
                        {#each item.technologies as tech}
                            <span
                                class="text-xs px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]"
                            >
                                {tech}
                            </span>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    {/each}
</div>
