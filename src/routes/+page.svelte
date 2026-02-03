<script>
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import ProjectModal from '$lib/components/ProjectModal.svelte';
  import { projects } from '$lib/data/projects.js';
  import { onMount } from 'svelte';

  let activeProject = null;
  let filter = 'Todos';
  let filtered = projects;

  const hard = [
    'Ciberseguridad (IDS/IPS, MITRE ATT&CK)',
    'Administración Linux / Windows Server',
    'Redes (VLANs, routing, NAT, DHCP, DNS)',
    'IA aplicada a ciberseguridad',
    'Python, FastAPI, APIs RESTful'
  ];

  const soft = [
    'Aprendizaje constante',
    'Pensamiento crítico',
    'Trabajo en equipo',
    'Resolución de problemas',
    'Adaptabilidad'
  ];

  function openProject(e) {
    const id = e.detail.id;
    activeProject = projects.find(p => p.id === id);
  }
  function closeModal() {
    activeProject = null;
  }

  $: filtered = filter === 'Todos' ? projects : projects.filter(p => p.status === filter);

</script>

<Hero name="Manuel Grande" />

<section id="proyectos" class="py-12 max-w-6xl mx-auto px-6">
  <div class="flex items-center justify-between mb-6">
    <h3 class="text-2xl font-bold">Proyectos</h3>
    <div class="flex gap-2">
      <button class="px-3 py-1 rounded border" on:click={() => filter = 'Todos'}>Todos</button>
      <button class="px-3 py-1 rounded border" on:click={() => filter = 'En desarrollo'}>En desarrollo</button>
      <button class="px-3 py-1 rounded border" on:click={() => filter = 'En construcción'}>En construcción</button>
    </div>
  </div>

  <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
    {#each filtered as p (p.id)}
      <ProjectCard {project}={p} on:open={openProject} />
    {/each}
  </div>
</section>

<About />
<Skills {hard} {soft} />
<Contact phone="644551293" email="manuelgrandeecija1@gmail.com" />

{#if activeProject}
  <ProjectModal {project} on:close={closeModal} />
{/if}