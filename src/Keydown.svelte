<script>
  /** Set to `true` to pause the capture of keydown events */
  export let paused = false;

  /** Set to `true` to pause keydown events when typing in an input field */
  export let pauseOnInput = false;

  /** Specify the separating key between multiple keys */
  export let separator = "-";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let combo = [];
  let down = [];

  $: combination = combo.join(separator);
  $: comboByKey = combo.reduce((keys, key) => ({ ...keys, [key]: true }), {});
  $: if (combo.length > 0) dispatch("combo", combination);
</script>

<svelte:body
  on:keyup
  on:keyup={({ key }) => {
    down = down.filter((_key) => _key !== key);
    if (down.length > 0) return;
    combo = [];
  }}
  on:keydown
  on:keydown={({ key, target }) => {
    if (pauseOnInput && target.tagName !== "BODY") {
      return;
    }

    down = [...down, key];

    if (!paused) {
      if (!(key in comboByKey)) {
        combo = [...combo, key];
      } else {
        dispatch("combo", combination);
      }

      dispatch(key === " " ? "Space" : key);
      dispatch("key", key);
    }
  }}
/>
