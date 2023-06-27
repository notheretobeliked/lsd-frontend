<script lang="ts">
  import "../../app.css";
  import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
  import Logo from '$lib/components/atoms/Logo.svelte'
  import Postpush from '$lib/components/organisms/Postpush.svelte'

  import type { PageData } from './$types';

  export let data: PageData;

	console.log(data.slug)
  let activeSection:string = data.slug ?? 'home'
	
  function checksection(event: CustomEvent) {
    activeSection = event.detail.section
  }

  $: console.log(activeSection)
  
</script>
<Logo />
<div class="h-screen flex flex-row homesection">
  <Homepagesection title="Articles" bind:activeSection={activeSection} section="articles" gradient on:activateSection={checksection}>
		{#if activeSection == 'articles'}
		<div>
			{#each data.posts ??[] as post}
				<Postpush {...post} />
			{/each}
		</div>
		{/if}
	
  </Homepagesection>
  
  <Homepagesection title="Edition" bind:activeSection={activeSection} section="edition" on:activateSection={checksection}>
		{#if activeSection == 'edition'}
			<div class="max-w-4xl m-auto">
				<h1>{data.title}</h1>
				<div>
					{ @html data.content }
				</div>
			</div>
		{/if}
  </Homepagesection>

  <Homepagesection title="Crédits" bind:activeSection={activeSection} section="credits" on:activateSection={checksection}>
		{#if activeSection == 'credits'}
			<div class="max-w-4xl m-auto">
				<h1>{data.title}</h1>
				<div>
					{ @html data.content }
				</div>
			</div>
		{/if}
  </Homepagesection>


  <Homepagesection title="A propos" bind:activeSection={activeSection} section="a-propos" on:activateSection={checksection} >
		{#if activeSection == 'a-propos'}
			<div class="max-w-4xl m-auto">
				<h1>{data.title}</h1>
				<div>
					{ @html data.content }
				</div>
			</div>
		{/if}
  </Homepagesection>
</div>