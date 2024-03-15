<script lang="ts">
  import Keydown from "../src";
  import K from "../src/Keydown.svelte";

  let showModal = true;
</script>

<Keydown
  pauseOnInput
  paused={!showModal}
  on:keyup={(e) => console.log(e)}
  on:keydown={(e) => console.log(e)}
  on:Escape={(e) => (showModal = false)}
  on:combo={(e) => {
    console.log(e.detail); // string
  }}
/>

<K on:combo={(e) => e.detail} />
