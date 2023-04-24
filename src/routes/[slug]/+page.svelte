<script lang="ts">
  import "../../app.css";
  import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
  import Logo from '$lib/components/atoms/Logo.svelte'
  import Postpush from '$lib/components/organisms/Postpush.svelte'

  import type { PageData } from './$types';

  export let data: PageData;

  let activeSection:string = data.slug
	console.log(activeSection)

  function checksection(event: CustomEvent) {
    activeSection = event.detail.section
  }

  $: console.log(activeSection)
  
</script>
<Logo />
<div class="h-screen flex flex-row homesection">
  <Homepagesection title="Acceuil" bind:activeSection={activeSection} section="home" gradient on:activateSection={checksection}>
		{#each data.posts as post}
			<Postpush {...post} />
		{/each}
  </Homepagesection>

  <Homepagesection title="A propos" bind:activeSection={activeSection} section="a-propos" on:activateSection={checksection} >
    
  </Homepagesection>
  
  <Homepagesection title="Edition" bind:activeSection={activeSection} section="editions" on:activateSection={checksection}>
    
  </Homepagesection>

  <Homepagesection title="Crédits" bind:activeSection={activeSection} section="credits" on:activateSection={checksection}>
    
  </Homepagesection>
</div>