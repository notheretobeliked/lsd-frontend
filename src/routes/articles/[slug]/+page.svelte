<script lang="ts">
	import type { PageData } from './$types'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import { SoundCloud, Vimeo } from 'sveltekit-embed'

	export let data: PageData

	let activeSection = 'home'

	function checksection(event: CustomEvent) {
		activeSection = event.detail.section
	}

	$: console.log(activeSection)
</script>

<Logo />
<div class="h-screen flex flex-row homesection">
	<Homepagesection
		title="Acceuil"
		bind:activeSection
		section="home"
		gradient
		on:activateSection={checksection}
	>
		<div class="lg:px-12">
			<hgroup>
				<h1 class="text-4xl">{data.title}</h1>
				<h2 class="text-center">{data.author}</h2>
			</hgroup>
			<div>
				{@html data.content || ''}
				{#if data.embed && data.embedType === 'soundcloud'}
					<SoundCloud soundcloudLink={data.embed} />
				{/if}
				{#if data.embed && data.embedType === 'vimeo'}
					<Vimeo vimeoId={data.embed} />
				{/if}
				{#if data.embed && data.embedType === 'soundcloud'}
					<SoundCloud soundcloudLink={data.embed} />
				{/if}
			</div>
		</div>
	</Homepagesection>
	<Homepagesection
		title="A propos"
		bind:activeSection
		section="a-propos"
		on:activateSection={checksection}
	/>

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
</div>
