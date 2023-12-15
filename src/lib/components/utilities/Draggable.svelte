<script lang="ts">
  import { onMount } from 'svelte';

  export let left = 50;
  export let top = 300;

  let moving = false;

  function onMouseDown(): void {
    moving = true;
  }

  function onMouseMove(e: MouseEvent): void {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp(): void {
    moving = false;
  }

</script>

<section
  on:mousedown={onMouseDown}
  style={`left: ${left}px; top: ${top}px;`}
  class="cursor-move fixed user-select-none left-4 top-48 z-[100] bg-white p-4 border-salmon border shadow-sm w-80 p-30 rounded"
>
  <slot />
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />