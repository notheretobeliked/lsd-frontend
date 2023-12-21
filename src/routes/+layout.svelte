<script lang="ts">
	import type { PageData } from './$types'
	import '../app.css'
	import { ProgressBar } from '@prgm/sveltekit-progress-bar'
  import { burgerStore, activeSectionStore } from '$lib/utilities/stores'

  let menuOpen: boolean

  $: menuOpen = $burgerStore

  let showThisAgain: string


	$: menuOpen

	const toggleMenu = () => {
    menuOpen = !menuOpen
    if (menuOpen) {
      showThisAgain = $activeSectionStore
      console.log(showThisAgain)    
      activeSectionStore.set('')
    } else activeSectionStore.set(showThisAgain)
	}


</script>

<ProgressBar class="text-blue-parrot" zIndex={900} />

<main class="wrapper">
	<div class="fixed bottom-3 left-1 z-50 rounded-full bg-salmon-light p-2">
		<button on:click={toggleMenu} on:keypress={toggleMenu}>
			<div class:tham-active={menuOpen} class="tham tham-e-squeeze tham-w-6">
				<div class="tham-box">
					<div class="tham-inner" />
				</div>
			</div>
			<p class="sr-only">Menu</p>
		</button>
	</div>
	<slot />
</main>
