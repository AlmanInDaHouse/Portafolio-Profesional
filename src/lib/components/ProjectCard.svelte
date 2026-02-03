<script>
  import { createEventDispatcher } from 'svelte';
  export let project;
  const dispatch = createEventDispatcher();

  function open() {
    dispatch('open', { id: project.id });
  }
</script>

<article class="bg-white/80 dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-xl transition">
  <div class="flex items-start justify-between">
    <div>
      <h3 class="text-xl font-semibold">{project.title}</h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.short}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        {#each project.tags as t}
          <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>
        {/each}
      </div>
    </div>
    <div class="text-sm text-right">
      <span class="block font-medium">{project.status}</span>
      <button class="mt-4 inline-block px-3 py-1 rounded bg-accent text-white" on:click={open}>
        Detalles
      </button>
    </div>
  </div>
</article>