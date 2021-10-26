<script lang="ts">
  import Keydown from "../types";
  import K from "../types/Keydown.svelte";

  let showModal = true;
</script>

<!-- svelte-ignore missing-declaration -->
<Keydown
  pauseOnInput
  paused={!showModal}
  on:Escape={() => (showModal = false)}
  on:combo={(e) => {
    console.log(e.detail); // string
  }}
/>

<!-- svelte-ignore missing-declaration -->
<K on:combo={(e) => e.detail} />
