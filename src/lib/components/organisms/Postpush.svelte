<script lang="ts">
	import type { tag } from '$lib/utilities/types'
	import Tag from '$lib/components/atoms/Tag.svelte'
	export let title: string
	export let author: string
	export let uri: string = '/articles'
	export let tags: Array<tag>
	export let huge: boolean = false
</script>

<article class="mx-20 border-black border-b pb-8 hover:text-blue-parrot">
	<a href={uri.slice(0, -1)}>
	<hgroup>
		<h1 class={huge?'text-10xl' : 'text-4xl'}>{title}</h1>
		{#if author}
			<p class="text-center italic mt-4">{author}</p>
		{/if}
	</hgroup>
		{#if tags}
			<div class="flex flex-row gap-3 justify-center mt-4">
				{#each tags as { name, slug }}
					<Tag {name} {slug} />
				{/each}
			</div>
		{/if}
</a>
</article>
