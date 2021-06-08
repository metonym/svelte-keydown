<script lang="ts">
  import Keydown from "../types";

  let showModal = true;

  function closeModal() {
    showModal = false;
  }
</script>

<Keydown
  paused={!showModal}
  on:Escape={closeModal}
  on:combo={(e) => {
    console.log(e.detail);
  }}
/>

Toggled
{showModal}
<button
  on:click={() => {
    showModal = !showModal;
  }}>Toggle modal</button
>
