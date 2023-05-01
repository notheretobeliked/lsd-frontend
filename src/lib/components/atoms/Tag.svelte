<script lang="ts">
  export let name: string;
  export let slug: string = ''

  let buttonElement: HTMLButtonElement

  import { tagStore } from '$lib/utilities/stores'

  const changeTag = (tag:string) => {
    buttonElement.classList.remove('hover:bg-salmon-light')
    buttonElement.classList.add('hover:bg-salmon')
    tagStore.set(tag)
    console.log(buttonElement)
  }
</script>

<buttton bind:this={buttonElement} class="{slug} {$tagStore === slug ? 'bg-salmon' : 'bg-white'} shadow-sm font-serif shadow-blue-parrot px-3 py-1 hover:bg-salmon-light" on:click={changeTag(slug)} on:keypress={changeTag(slug)} >{name}</buttton>