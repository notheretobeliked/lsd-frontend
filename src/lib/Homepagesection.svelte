<script lang="ts">
  import { createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
  import { goto } from '$app/navigation';

  export let section: string = "home"
  export let title: string = "Home"
  export let activeSection: string = ""
  export let gradient: boolean = false

  let active: boolean = false

  const dispatch = createEventDispatcher()

  function activateSection() {
		dispatch('activateSection', {
			section
		})
    goto(`/${section}`, { replaceState: true })
	}


  $: {
    active = (activeSection == section)
    console.log(`activesection: ${activeSection}, Section: ${section}`)
  }

</script>

<div 
  class="page-section flex flex-col transition-all duration-500 flex-grow shadow-right min-h-screen"
  class:active
  >
  {#if (!active)}
  <div class="{gradient ? 'bg-gradient-to-r from-blue-parrot to-salmon':'bg-salmon hover:bg-blue-parrot'} cursor-pointer drawer min-h-screen"
  on:click={activateSection} on:keypress={activateSection}>
    <button class="drawer-link inline-block">{title}</button>
  </div>
  {:else}
  <div class="content" in:fly="{{ duration: 2000 }}" style="width:70vw">
    <slot></slot>
  </div>
  {/if}
</div>

<style>
  .page-section {
    max-width: 5vw;
  }

  .page-section:not(.active):hover {
    max-width:6vw;
  }

  .page-section.active {
    max-width: 80vw;
  }

  .drawer-link {
    transform: rotate(90deg) translate(0, -2vw);
    transform-origin: left;
  }
</style>