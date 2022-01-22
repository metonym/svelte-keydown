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

## Installation

**Yarn**

```bash
yarn add -D svelte-keydown
```

**NPM**

```bash
npm i -D svelte-keydown
```

**pnpm**

```bash
pnpm i -D svelte-keydown
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
  import Keydown from "svelte-keydown";

  let evt = [];
</script>

<Keydown
  pauseOnInput
  on:key={(e) => {
    evt = [...evt, e.detail];
  }}
/>

<input placeholder="Type here..." />

{evt.join("")}
```

## Examples

### Escape to close a modal

In this use case, keydown events are paused if the modal is not open.

```svelte
<script>
  import Keydown from "svelte-keydown";

  let showModal = true;
</script>

<Keydown paused={!showModal} on:Escape={() => (showModal = false)} />

<button on:click={() => (showModal = !showModal)}> Toggle me </button>

<br /><br />

Toggled? {showModal}
```

### `on:combo`

Use the `combo` dispatched event to listen for a combination of keys.

```svelte
<script>
  import Keydown from "svelte-keydown";

  let combo = [];
</script>

<Keydown on:combo={(e) => (combo = [...combo, e.detail])} />

{combo.join(", ")}
```

## API

| Prop         | Type      | Default value |
| :----------- | :-------- | :------------ |
| paused       | `boolean` | `false`       |
| pauseOnInput | `boolean` | `false`       |

### Dispatched events

#### `on:[Key]`

Example:

```svelte no-eval
<Keydown on:Enter />
<Keydown on:Escape />
<Keydown on:Space />
```

#### `on:key`

Alternative API to `on:[Key]`.

Example:

```svelte
<script>
  import Keydown from "svelte-keydown";

  let keys = [];
</script>

<Keydown on:key={({ detail }) => (keys = [...keys, detail])} />

<pre>
  {JSON.stringify(keys, null, 2)}
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
  import Keydown from "svelte-keydown";

  let combos = [];
</script>

<Keydown on:combo={({ detail }) => (combos = [...combos, detail])} />

<pre>
  {JSON.stringify(combos, null, 2)}
</pre>
```

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](./types).

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-keydown.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-keydown
