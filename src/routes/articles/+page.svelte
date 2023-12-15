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

	let showFilters: boolean = false

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

	$: $tagStore, filterPosts($tagStore as string), showFilters
</script>

<Logo />
<Draggable>
	<div class="flex flex-wrap gap-3">
		<div class="w-full flex flex-row justify-between items-center">
			<p class="italic text-sm mb-0">Filtrer contenu par thème :</p>
			<svg
				width="32"
				height="34"
				viewBox="0 0 32 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="transform cursor-pointer transition-all {showFilters ? '' : 'rotate-180'}"
				on:click={() => {
					showFilters = !showFilters
				}}
				on:keypress={() => {
					showFilters = !showFilters
				}}
			>
				<circle cx="16" cy="16" r="15.5" stroke="#7E7CF8" />
				<path
					d="M11.344 13.468L10.616 13.468L10.616 12.796L15.656 7.784L17.28 7.784L22.32 12.796L22.32 13.468L21.592 13.468L16.972 8.848L16.972 25.396L15.964 25.396L15.964 8.848L11.344 13.468Z"
					fill="black"
				/>
			</svg>
		</div>
		{#if showFilters}
		<Tag name="Voir tout" slug="all" />
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
	{/if}
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
				<p class="alignwide border-black mt-2 border-b pb-8 text-base text-center">
					<em>La surface démange</em> est un espace de collecte, d’observation, de rencontre, d’expérimentation
					et de diffusion des manières de faire, des manières de partager et de déployer des pratiques
					antirascistes, antivalidistes, au cœur des lieux d’éducation artistique
				</p>
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
