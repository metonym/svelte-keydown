<script>
  /**
   * @event {string} combo
   * @event {string} key
   */

  /** Set to `true` to pause the capture of keydown events */
  export let paused = false;

  /** Set to `true` to pause keydown events when typing in an input field */
  export let pauseOnInput = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let combo = [];

  $: if (combo.length > 0) dispatch("combo", combo.join("-"));
</script>

<svelte:body
  on:keyup={() => {
    combo = [];
  }}
  on:keydown={({ key, target }) => {
    if (pauseOnInput && target.tagName !== "BODY") {
      return;
    }

    if (!paused) {
      combo = [...combo, key];
      dispatch(key);
      dispatch("key", key);
    }
  }} />
