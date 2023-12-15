<script lang="ts">
  import "../../app.css";
  import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
  import Logo from '$lib/components/atoms/Logo.svelte'
  import Postpush from '$lib/components/organisms/Postpush.svelte'

  import type { PageData } from './$types';

  export let data: PageData;

  let activeSection:string = data.slug ?? 'home'
	
  function checksection(event: CustomEvent) {
    activeSection = event.detail.section
  }

  
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
				<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
					<div class="sticky alignwide inset-0 bg-stockholm border-b border-black h-8"></div>
		
				<h1>{data.title}</h1>
				<div>
					{ @html data.content }
				</div>
			</div>
		{/if}
  </Homepagesection>

  <Homepagesection title="Crédits" bind:activeSection={activeSection} section="credits" on:activateSection={checksection}>
		{#if activeSection == 'credits'}
		<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
			<div class="sticky alignwide inset-0 bg-stockholm border-b border-black h-8"></div>
				<h1>{data.title}</h1>
				<div>
					{ @html data.content }
				</div>
			</div>
		{/if}
  </Homepagesection>


  <Homepagesection title="A propos" bind:activeSection={activeSection} section="a-propos" on:activateSection={checksection} >
		{#if activeSection == 'a-propos'}
		<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
			<div class="sticky alignwide inset-0 bg-blue-parrot border-b border-black h-8"></div>

				<h1>{data.title}</h1>
				<div>
					{ @html data.content }
				</div>
			</div>
		{/if}
  </Homepagesection>
</div>