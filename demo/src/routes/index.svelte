<script>
  import Keydown from "svelte-keydown";

  function submit() {
    console.log("Submit");
  }
</script>

<svelte:head>
  <title>svelte-keydown</title>
</svelte:head>

<Keydown
  on:Enter={submit}
  on:Escape={() => {
    console.log('on:Escape');
  }}
  on:combo={({ detail }) => {
    console.log('on:combo', detail);
  }}
  on:key={({ detail }) => {
    console.log('on:key', detail);
  }} />
