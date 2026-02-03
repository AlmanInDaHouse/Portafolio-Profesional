<script>
  import { base } from "$app/paths";
  export let name = "Manuel Grande";
</script>

<section
  class="min-h-[60vh] flex items-center justify-center bg-animated py-16"
>
  <div class="max-w-4xl text-center px-6">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
      Hola, soy <span class="text-accent">{name}</span>
    </h1>
    <p class="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
      Técnico en Sistemas Microinformáticos y Redes. Apasionado por la
      ciberseguridad, administración de sistemas e IA aplicada a seguridad.
    </p>

    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="{base}/resume.pdf"
        class="inline-flex items-center px-6 py-3 rounded-md bg-primary text-white hover:opacity-90"
        download
      >
        Descargar CV
      </a>
      <a
        href="#proyectos"
        class="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary bg-white/60 hover:bg-white/80"
      >
        Ver proyectos
      </a>
    </div>
  </div>
</section>
