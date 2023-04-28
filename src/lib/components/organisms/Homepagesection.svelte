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
		console.log(`activesection: ${activeSection}, Section: ${section}`)
	}
</script>

<div
	class="max-h-screen overflow-y-scroll page-section flex flex-col transition-all duration-500 flex-grow shadow-right min-h-screen"
	class:active
>
	{#if !active}
		<a href="/{section}">
			<div
				class=" {gradient
					? 'bg-gradient-to-r from-blue-parrot to-salmon'
					: 'bg-salmon hover:bg-blue-parrot'} cursor-pointer drawer min-h-screen"
				on:click={activateSection}
				on:keypress={activateSection}
			>
				<button class="drawer-link inline-block whitespace-nowrap">{title}</button>
			</div>
		</a>
	{:else}
		<div class="content" in:fly={{ duration: 2000 }}>
			<slot />
		</div>
	{/if}
</div>

<style>
	.page-section {
		width: 5vw;
	}

	.page-section:not(.active):hover {
		width: 6vw;
	}

	.page-section.active {
		max-width: 87vw;
		width: 100%;
	}

	.drawer-link {
		transform: rotate(90deg) translate(0, -2vw);
		transform-origin: left;
	}
</style>
