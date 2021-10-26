<script lang="ts">
  import Keydown from "../types";
  import K from "../types/Keydown.svelte";

  let showModal = true;
</script>

<Keydown
  pauseOnInput
  paused={!showModal}
  on:Escape={() => (showModal = false)}
  on:combo={(e) => {
    console.log(e.detail); // string
  }}
/>

<K on:combo={(e) => e.detail} />
