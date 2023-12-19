<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	import { goto } from '$app/navigation'

	export let section: string = 'home'
	export let title: string = 'Home'
	export let activeSection: string = ''
	export let gradient: boolean = false

	let active: boolean = false

	const dispatch = createEventDispatcher()

	function activateSection() {
		event?.preventDefault()
		dispatch('activateSection', {
			section
		})
		goto(`/${section}`, { replaceState: true })
	}

	$: {
		active = activeSection == section
	}
</script>

<div
	class="{activeSection === 'a-propos' ? 'bg-blue-parrot' : 'bg-stockholm'} {active ? 'overflow-y-scroll overflow-x-hidden min-h-[82vh] md:min-h-sc' : 'overflow-hidden'} max-h-screen page-section flex flex-col transition-all duration-500 flex-grow shadow-right"
	class:active
>
	{#if !active}
		<a href="/{section}">
			<div
				class=" {gradient
					? 'bg-gradient-to-r from-blue-parrot to-salmon'
					: 'bg-salmon hover:bg-blue-parrot'} cursor-pointer drawer min-h-[92vh] md:min-h-screen"
				on:click={activateSection}
				on:keypress={activateSection}
			>
				<button class="drawer-link inline-block whitespace-nowrap font-serif italic">{title}</button>
			</div>
		</a>
	{:else}
		<div class="content" in:fly={{ duration: 2000 }}>
			<slot />
		</div>
	{/if}
</div>

<style lang="postcss">

	.page-section {
		@apply w-full md:w-[5vw];
	}

	.page-section:not(.active):hover {
		@apply w-full md:w-[6vw];
	}

	.page-section.active {
		@apply w-full md:max-w-[87vw];
	}

	.drawer-link {
		@apply md:rotate-90 md:transform md:translate-y-[0] md:translate-x-[2vw] origin-left;
	}
</style>

