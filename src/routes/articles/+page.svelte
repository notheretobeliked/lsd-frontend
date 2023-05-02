<script lang="ts">
	import '../../app.css'
	import { OnMount } from 'fractils'
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Tag from '$lib/components/atoms/Tag.svelte'
	import Draggable from '$lib/components/utilities/Draggable.svelte'
	import Postpush from '$lib/components/organisms/Postpush.svelte'
	import { postsStore, tagStore } from '$lib/utilities/stores'

	import type { PageData } from './$types'
	import type { Posts, Article } from '$lib/utilities/types'

	export let data: PageData

	let activeSection: string = 'articles'

	function checksection(event: CustomEvent) {
		activeSection = event.detail.section
	}

	let { posts, alltags } = data

	let activeTag: string = 'all'

	$postsStore = posts
	$tagStore = activeTag

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

	console.log($postsStore)
</script>

<Logo />
<Draggable>
	<div class="flex flex-wrap gap-4">
		<Tag name="Tous" slug="all" />
		{#each alltags as { slug, name }}
			<Tag {name} {slug} />
		{/each}
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
			<div>
				<OnMount>
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
			</OnMount>
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
