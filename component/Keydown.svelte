<script>
  /**
   * @event {string} combo
   * @event {string} key
   */

  export let paused = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let combo = [];

  $: if (combo.length > 0) dispatch("combo", combo.join("-"));
</script>

<svelte:body
  on:keyup={() => {
    combo = [];
  }}
  on:keydown={({ key }) => {
    if (!paused) {
      combo = [...combo, key];
      dispatch(key);
      dispatch('key', key);
    }
  }} />
