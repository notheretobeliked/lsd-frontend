<script lang="ts">
	import type { PageData } from './$types'
	import '../app.css'
	import Homepagesection from '$lib/components/organisms/Homepagesection.svelte'
	import Logo from '$lib/components/atoms/Logo.svelte'
	import Tag from '$lib/components/atoms/Tag.svelte'
	import Postpush from '$lib/components/organisms/Postpush.svelte'

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
		{#each data.posts as post}
			<Postpush {...post} />
		{/each}
	</Homepagesection>
	<Homepagesection
		title="A propos"
		bind:activeSection
		section="about"
		on:activateSection={checksection}
	/>
	<Homepagesection
		title="Actualités"
		bind:activeSection
		section="actualites"
		on:activateSection={checksection}
	/>
	<Homepagesection
		title="Edition"
		bind:activeSection
		section="editions"
		on:activateSection={checksection}
	/>
	<Homepagesection
		title="Crédits"
		bind:activeSection
		section="credits"
		on:activateSection={checksection}
	/>
</div>
