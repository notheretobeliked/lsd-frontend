<script lang="ts">
	import type { PageData } from './$types'
	import '../app.css'
	import { ProgressBar } from '@prgm/sveltekit-progress-bar'
  import { burgerStore, activeSectionStore } from '$lib/utilities/stores'
  import OpenGraph from '$lib/components/OpenGraph.svelte';

  let menuOpen: boolean

  $: menuOpen = $burgerStore
  export let data: PageData
  let showThisAgain: string
  const { pageTitle, metadescription, url, temp, image, squareImage } = data as PageData


	$: menuOpen

	const toggleMenu = () => {
    menuOpen = !menuOpen
    if (menuOpen) {
      showThisAgain = $activeSectionStore
      console.log(showThisAgain)    
      activeSectionStore.set('')
    } else activeSectionStore.set(showThisAgain)
	}
	console.log(data)

</script>

<ProgressBar class="text-blue-parrot" zIndex={900} />
<OpenGraph {pageTitle} {metadescription} siteUrl={url} {image} {squareImage} />

<main class="wrapper">
	<div class="fixed bottom-3 left-1 z-50 rounded-full bg-salmon-light p-2">
		<!-- <button on:click={toggleMenu} on:keypress={toggleMenu}>
			<div class:tham-active={menuOpen} class="tham tham-e-squeeze tham-w-6">
				<div class="tham-box">
					<div class="tham-inner" />
				</div>
			</div>
			<p class="sr-only">Menu</p>
		</button> -->
	</div>
	<slot />
</main>
