<script>
  import '../app.css';
  import { onMount } from 'svelte';
  let dark = false;

  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      dark = true;
      document.documentElement.classList.add('dark');
    }
  });

  function toggleTheme() {
    dark = !dark;
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
  <header class="py-4 px-6 flex justify-between items-center max-w-6xl mx-auto">
    <a href="/" class="font-bold">Manuel Grande</a>
    <div class="flex items-center gap-4">
      <nav class="hidden sm:flex gap-4">
        <a href="#sobre-mi" class="text-sm">Sobre mí</a>
        <a href="#proyectos" class="text-sm">Proyectos</a>
        <a href="#contacto" class="text-sm">Contacto</a>
      </nav>
      <button class="px-3 py-1 border rounded" on:click={toggleTheme}>{dark ? '🌙' : '☀️'}</button>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer class="py-8 text-center text-sm text-gray-600 dark:text-gray-400">
    © {new Date().getFullYear()} Manuel Grande · Tel: 644 55 12 93 · manuelgrandeecija1@gmail.com
  </footer>
</div>