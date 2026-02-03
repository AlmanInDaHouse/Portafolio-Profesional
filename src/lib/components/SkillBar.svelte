<script>
    export let name;
    export let level; // 0-100

    let animatedLevel = 0;
    let visible = false;

    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                visible = true;
                animateLevel();
            }
        });
    }

    function animateLevel() {
        const duration = 1000; // 1 second
        const steps = 60;
        const increment = level / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= level) {
                animatedLevel = level;
                clearInterval(timer);
            } else {
                animatedLevel = Math.floor(current);
            }
        }, duration / steps);
    }

    function setupIntersectionObserver(node) {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        observer.observe(node);

        return {
            destroy() {
                observer.disconnect();
            },
        };
    }
</script>

<div use:setupIntersectionObserver class="skill-bar">
    <div class="flex justify-between items-center mb-2">
        <span class="font-medium text-[var(--text-primary)]">{name}</span>
        <span class="text-sm text-[var(--text-secondary)]"
            >{animatedLevel}%</span
        >
    </div>

    <div class="h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
        <div
            class="h-full gradient-primary transition-all duration-1000 ease-out rounded-full"
            style="width: {animatedLevel}%"
        ></div>
    </div>
</div>

<style>
    .skill-bar {
        @apply w-full;
    }
</style>
