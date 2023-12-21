<script lang="ts">
  let left: number;
  let top:number;

  // if screen width is larger than 400px, set left and top to 0
  if ((typeof window !== 'undefined') && (window.innerWidth > 400)) {
    left = 30;
    top = (window.innerHeight/2) - 80;
  }

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
  class="cursor-move fixed user-select-none max-md:bottom-[20vh] left-[5vw] md:left-4 md:top-48 z-[100] bg-white !p-4 border-salmon border shadow-sm w-80 max-w-full p-30 rounded"
>
  <slot />
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />