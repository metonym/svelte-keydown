# svelte-keydown

[![NPM][npm]][npm-url]

> Utility to listen for keyboard events.

<!-- REPO_URL -->

Utility component leveraging the [svelte:body API](https://svelte.dev/docs#svelte_body) to listen for [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) events.

**Use Cases**

- toggle modals
- capture a combination of keys (i.e., "Meta-s")

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-keydown
# OR
npm i -D svelte-keydown
```

## Usage

### Basic

```svelte
<script>
  import Keydown from "svelte-keydown";

  let events = [];
</script>

<Keydown
  on:Enter={() => {
    events = [...events, "enter"];
  }}
/>

Press "enter": {events.join(", ")}
```

### Pause on input

Set `pauseOnInput` to prevent the utility from capturing keydown events on input events.

```svelte
<script>
  let evt = [];
</script>

<Keydown
  pauseOnInput
  on:key={(e) => {
    evt = [...evt, e.detail];
  }}
/>

<input placeholder="Type here..." />

{evt.join(", ")}
```

## Examples

### Escape to Close Modal

In this use case, keydown events are paused if the modal is not open.

```svelte
<script>
  let showModal = true;

  function closeModal() {
    showModal = false;
  }
</script>

<Keydown paused={!showModal} on:Escape={closeModal} />

<button
  on:click={() => {
    showModal = !showModal;
  }}
>
  Toggle me
</button>

<br /><br />

Toggled? {showModal}
```

### on:combo

Use the `combo` dispatched event to listen for a combination of keys.

```svelte
<script>
  let combo = [];
</script>

<Keydown
  on:combo={(e) => {
    combo = [...combo, e.detail];
  }}
/>

{combo.join(", ")}
```

## API

| Prop name    | Value                        |
| :----------- | :--------------------------- |
| paused       | `boolean` (default: `false`) |
| pauseOnInput | `boolean` (default: `false`) |

### Dispatched events

#### `on:[Key]`

Example:

```svelte
<Keydown on:Enter />
<Keydown on:Escape />
```

#### `on:key`

Alternative API to `on:[Key]`.

Example:

```svelte
<script>
  let key_events = [];
</script>

<Keydown
  on:key={({ detail }) => {
    key_events = [...key_events, detail];
  }}
/>

<pre>
  {JSON.stringify(key_events, null, 2)}
</pre>
```

#### `on:combo`

Triggered when a sequence of keys are pressed and cleared when a keyup event is fired.

Examples:

- "Shift-S"
- "Meta-c" (Copy)
- "Meta-v" (Paste)

```svelte
<script>
  let combo_events = [];
</script>

<Keydown
  on:combo={({ detail }) => {
    combo_events = [...combo_events, detail];
  }}
/>

<pre>
  {JSON.stringify(combo_events, null, 2)}
</pre>
```

## TypeScript

Svelte version 3.31 or greater is required to use this module with TypeScript.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-keydown.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-keydown
