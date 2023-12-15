<script lang="ts">
	import '../../app.css'
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Tag from '$lib/components/atoms/Tag.svelte'
	import Draggable from '$lib/components/utilities/Draggable.svelte'
	import Postpush from '$lib/components/organisms/Postpush.svelte'

	import type { PageData } from './$types'
	import type { Posts, Article } from '$lib/utilities/types'

	export let data: PageData

	let activeSection: string = 'articles'

	function checksection(event: CustomEvent) {
		activeSection = event.detail.section
	}

	
	let { posts, alltags, allcollaborateurices } = data

	let activeTag: string = 'all'

	import { postsStore, tagStore } from '$lib/utilities/stores'

	const changeCollaborateurices = (event: Event) => {
		const selectElement = event.target as HTMLSelectElement
		tagStore.set(selectElement.value)
	}

	const filterPosts = (slug: string) => {
		$postsStore = []
		let newPosts: Posts
		if (slug === 'all') {
			newPosts = posts
		} else {
			newPosts = posts.filter((item: Article) => item.tagsearch.includes(slug))
		}
		$postsStore = newPosts
		$tagStore = slug
	}

	$: $tagStore, filterPosts($tagStore as string)
</script>

<Logo />
<Draggable>
	<div class="flex flex-wrap gap-3">
		<div class="w-full flex flex-row justify-between items-center">
			<p class="italic text-sm mb-0">Filtrer contenu par thème :</p>
			<Tag name="Voir tout" slug="all" />
		</div>
		{#each alltags as { slug, name }}
			<Tag {name} {slug} />
		{/each}
		<p class="italic text-sm mb-0">Auteurices :</p>
		<select
			on:change={changeCollaborateurices}
			name="author"
			id="author"
			class="w-full shadow-sm font-serif shadow-blue-parrot px-3 py-1 hover:bg-salmon-light text-sm"
		>
			<option value="all">Tout</option>
			{#each allcollaborateurices as { slug, name }}
				<option value={slug}>{name}</option>
			{/each}
		</select>
	</div>
</Draggable>
<div class="h-screen flex flex-row homesection">
	<Homepagesection
		title="Articles"
		bind:activeSection
		section="articles"
		gradient
		on:activateSection={checksection}
	>
		{#if activeSection == 'articles'}
			<div class="max-w-[900px] m-auto">
				{#each $postsStore ? $postsStore : posts as post, i (post.uri)}
					<div
						out:fly={{
							y: 50,
							delay: 50 * i,
							easing: backOut
						}}
						in:fly={{
							y: 50,
							delay: 100 * i,
							easing: backOut
						}}
					>
						<Postpush {...post} />
					</div>
				{/each}
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
</div>
