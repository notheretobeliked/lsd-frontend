<script lang="ts">
  import "../../app.css";
  import Homepagesection from '$lib/Homepagesection.svelte'
  import Logo from '$lib/Logo.svelte'

  import type { PageData } from './$types';

  export let data: PageData;

  let activeSection:string = data.slug

  function checksection(event) {
    activeSection = event.detail.section
  }

  $: console.log(activeSection)
  
</script>
<Logo />
<div class="h-screen flex flex-row homesection">
  <Homepagesection title="Acceuil" bind:activeSection={activeSection} section="home" gradient on:activateSection={checksection}>
    {@html data.content}
  </Homepagesection>

  <Homepagesection title="A propos" bind:activeSection={activeSection} section="about" on:activateSection={checksection} >
    {@html data.content}
  </Homepagesection>
  
  <Homepagesection title="Actualités" bind:activeSection={activeSection} section="actualites" on:activateSection={checksection}>
    {@html data.content}
  </Homepagesection>

  <Homepagesection title="Edition" bind:activeSection={activeSection} section="editions" on:activateSection={checksection}>
    {@html data.content}
  </Homepagesection>

  <Homepagesection title="Crédits" bind:activeSection={activeSection} section="credits" on:activateSection={checksection}>
    {@html data.content}
  </Homepagesection>
</div>