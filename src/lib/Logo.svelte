<script lang="ts">

</script>


<div class="fixed transition-all hover:bg-salmon bg-blue-parrot cursor-pointer drawer min-h-screen flex flex-col justify-between">
  <p class="drawer-link inline-block">la</p>
  <p class="drawer-link inline-block">surface</p>
  <p class="drawer-link inline-block">démange</p>
</div>

<style>
  div {
    max-width: 5vw;
    width: 5vw;
  }

  div:hover {
    width: 6vw;
  }

  .drawer-link {
    transform: rotate(90deg) translate(0, -2vw);
    transform-origin: left;
  }

  .drawer-link:last-child {
    transform: rotate(90deg) translate(-11vh, -2vw);
  }
</style>