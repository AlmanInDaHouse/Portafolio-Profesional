<script>
  import "../app.css";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let dark = false;

  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dark = true;
      document.documentElement.classList.add("dark");
    }
  });

  function toggleTheme() {
    dark = !dark;
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
</script>

<div
  class="min-h-screen bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] text-[var(--text-primary)]"
>
  <Navbar {dark} {toggleTheme} />

  <main class="pt-20">
    <slot />
  </main>

  <Footer />
</div>
