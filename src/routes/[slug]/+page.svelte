<script lang="ts">
	import '../../app.css'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Postpush from '$lib/components/organisms/Postpush.svelte'

	import type { PageData } from './$types'

	export let data: PageData

	import { activeSectionStore, burgerStore } from '$lib/utilities/stores'

	activeSectionStore.set(data.slug ?? 'home')
	burgerStore.set(false)

	function checksection(event: CustomEvent) {
		activeSectionStore.set(event.detail.section)
	}

	$: activeSection = $activeSectionStore

</script>

<Logo />
<div class="h-screen flex flex-col md:flex-row homesection">
	<Homepagesection
		title="Articles"
		bind:activeSection
		section="articles"
		gradient
		on:activateSection={checksection}
	>
		{#if $activeSectionStore == 'articles'}
			<div class="">
				{#each data.posts ?? [] as post}
					<Postpush {...post} />
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
		{#if $activeSectionStore == 'edition'}
			<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
				<div class="sticky alignwide inset-0 bg-stockholm border-b border-black h-8" />

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
		{#if $activeSectionStore == 'credits'}
			<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
				<div class="sticky alignwide inset-0 bg-stockholm border-b border-black h-8" />
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
		{#if $activeSectionStore == 'a-propos'}
			<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
				<div class="sticky alignwide inset-0 bg-blue-parrot border-b border-black h-8" />

				<h1>{data.title}</h1>
				<div>
					{@html data.content}
				</div>
			</div>
		{/if}
	</Homepagesection>
</div>
