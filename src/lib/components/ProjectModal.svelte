<script>
  import { createEventDispatcher } from "svelte";
  import { base } from "$app/paths";
  export let project = null;
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }
</script>

{#if project}
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" on:click={close}></div>
    <div
      class="relative bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full p-6 shadow-xl"
    >
      <button
        class="absolute top-3 right-3 text-gray-700 dark:text-gray-200"
        on:click={close}>✕</button
      >
      <h2 class="text-2xl font-bold">{project.title}</h2>
      <p
        class="mt-3 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line"
      >
        {project.details}
      </p>
      <div class="mt-4 flex gap-3">
        <a
          href="{base}/resume.pdf"
          class="px-4 py-2 bg-primary text-white rounded">Descargar CV</a
        >
        <button class="px-4 py-2 border rounded" on:click={close}>Cerrar</button
        >
      </div>
    </div>
  </div>
{/if}
