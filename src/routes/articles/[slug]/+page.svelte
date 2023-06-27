<script lang="ts">
	import type { PageData } from './$types'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Download from '$lib/components/atoms/Download.svelte'
	import { SoundCloud, Vimeo } from 'sveltekit-embed'

	export let data: PageData

	let activeSection = 'home'

	function checksection(event: CustomEvent) {
		activeSection = event.detail.section
	}

	$: console.log(activeSection)

	const { title, author, embedType, embed, pdf, content } = data

</script>

<Logo />
<div class="h-screen flex flex-row homesection   bg-stockholm">
	<Homepagesection
		title="Acceuil"
		bind:activeSection
		section="home"
		gradient
		on:activateSection={checksection}
	>
		
		<div class="relative lg:px-12 w-full max-w-[900px] mx-auto">
			<div class="sticky alignwide inset-0 bg-stockholm border-b border-black h-8"></div>
			<hgroup class="mb-12">
				<h1 class="mb-12 text-4xl">{title}</h1>
				<h2 class="mb-12 text-center font-serif normal-case text-base italic">{author}</h2>
			</hgroup>
			<div>
				<div class="wp-content">
					{@html content || ''}
				</div>
				{#if embed && embedType === 'soundcloud'}
				<div class="alignwide mb-24">
					<SoundCloud soundcloudLink={embed} />
				</div>
				{/if}
				{#if embed && embedType === 'vimeo'}
				<div class="alignwide mb-24">
					<Vimeo vimeoId={embed} />
				</div>
				{/if}
				{#if pdf}
					<Download {...pdf} />
				{/if}
			</div>
		</div>
	</Homepagesection>

	<Homepagesection
		title="Edition"
		bind:activeSection
		section="edition"
		on:activateSection={checksection}
	/>

	<Homepagesection
		title="Crédits"
		bind:activeSection
		section="credits"
		on:activateSection={checksection}
	/>
	<Homepagesection
		title="A propos"
		bind:activeSection
		section="a-propos"
		on:activateSection={checksection}
	/>
</div>
