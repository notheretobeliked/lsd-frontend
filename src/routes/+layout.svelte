<script lang="ts">
  import type { PageData } from './$types';
  import '../app.css'
  import { ProgressBar } from '@prgm/sveltekit-progress-bar'
   
  </script>
  <ProgressBar class="text-blue-parrot" zIndex={900}  />

  <main class="wrapper">
    <slot />
  </main>
   
