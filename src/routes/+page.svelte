<script>
  import "../app.css";
  import Homepagesection from '$lib/Homepagesection.svelte'
  import Logo from '$lib/Logo.svelte'

  let activeSection = 'home'

  function checksection(event) {
    activeSection = event.detail.section
  }

  $: console.log(activeSection)
  
</script>
<Logo />
<div class="h-screen flex flex-row homesection">
  <Homepagesection title="Acceuil" bind:activeSection={activeSection} section="home" gradient on:activateSection={checksection} />
  <Homepagesection title="A propos" bind:activeSection={activeSection} section="about" on:activateSection={checksection} />
  <Homepagesection title="Actualités" bind:activeSection={activeSection} section="actualites" on:activateSection={checksection} />
  <Homepagesection title="Edition" bind:activeSection={activeSection} section="editions" on:activateSection={checksection} />
  <Homepagesection title="Crédits" bind:activeSection={activeSection} section="credits" on:activateSection={checksection} />
</div>