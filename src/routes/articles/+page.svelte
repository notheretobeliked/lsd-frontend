<script lang="ts">
	import '../../app.css'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Postpush from '$lib/components/organisms/Postpush.svelte'
  import {writable} from 'svelte/store'

	import type { PageData } from './$types'

	export let data: PageData

	let activeSection: string = 'articles'

	function checksection(event: CustomEvent) {
		activeSection = event.detail.section
	}

	let { posts, alltags } = data

  const postsStore = writable(posts)


	const filterPosts = (slug:string) => {
    let newposts = posts.filter((item) => { 
      console.log(item.tagsearch)
      return (item.tagsearch.includes(slug)) }
    )
    $postsStore = newposts // update posts with the fetched data
	}

	$: {
    $postsStore
	}
</script>

<Logo />
<div class="fixed left-0 top-48 z-99 bg-blue-parrot w-96 p-30 rounded flex flex-wrap">
  {#each alltags as tag}
    <button on:click={() => filterPosts(tag.slug)} class="text-white text-16 font-bold uppercase mr-10 mb-10">{tag.name}</button>
  {/each}

</div>
<div class="h-screen flex flex-row homesection">
	<Homepagesection
		title="Articles"
		bind:activeSection
		section="articles"
		gradient
		on:activateSection={checksection}
	>
		{#if activeSection == 'articles'}
			<div>
				{#each $postsStore ?? [] as post}
					<Postpush {...post} />
				{/each}
			</div>
		{/if}
	</Homepagesection>

	<Homepagesection
		title="A propos"
		bind:activeSection
		section="a-propos"
		on:activateSection={checksection}
	>
		{#if activeSection == 'a-propos'}
			<div>
				<h1>{data.title}</h1>
				<div>
					{@html data.content}
				</div>
			</div>
		{/if}
	</Homepagesection>

	<Homepagesection
		title="Edition"
		bind:activeSection
		section="edition"
		on:activateSection={checksection}
	>
		{#if activeSection == 'edition'}
			<div>
				<h1>{data.title}</h1>
				<div>
					{@html data.content}
				</div>
			</div>
		{/if}
	</Homepagesection>

	<Homepagesection
		title="Crédits"
		bind:activeSection
		section="credits"
		on:activateSection={checksection}
	>
		{#if activeSection == 'credits'}
			<div>
				<h1>{data.title}</h1>
				<div>
					{@html data.content}
				</div>
			</div>
		{/if}
	</Homepagesection>
</div>
