<script>
  export let hard = [];
  export let soft = [];
</script>

<section id="skills" class="py-8">
  <div class="max-w-4xl mx-auto">
    <h4 class="text-xl font-bold">Hard Skills</h4>
    <ul class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
      {#each hard as h}
        <li class="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded">{h}</li>
      {/each}
    </ul>

    <h4 class="text-xl font-bold mt-6">Soft Skills</h4>
    <ul class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
      {#each soft as s}
        <li class="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded">{s}</li>
      {/each}
    </ul>
  </div>
</section>