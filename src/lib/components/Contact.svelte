<script>
  import { base } from "$app/paths";
  export let phone = "";
  export let email = "";
</script>

<section id="contacto" class="py-10 bg-white/50 dark:bg-gray-900/40">
  <div class="max-w-3xl mx-auto text-center">
    <h4 class="text-2xl font-bold">Contacto</h4>
    <p class="mt-3 text-gray-700 dark:text-gray-300">
      Tel: <a class="font-medium" href={"tel:" + phone}>{phone}</a> · Email:
      <a class="font-medium" href={"mailto:" + email}>{email}</a>
    </p>
    <div class="mt-6 flex justify-center gap-4">
      <a
        href="{base}/resume.pdf"
        class="px-4 py-2 bg-primary text-white rounded">Descargar CV</a
      >
    </div>
  </div>
</section>
