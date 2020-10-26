# svelte-keydown

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Utility to listen for keyboard events.

Simple wrapper using [svelte:body](https://svelte.dev/docs#svelte_body) to listen for [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) events.

This can be used to close modals or listen for a combination of keydown events.

## Install

```bash
yarn add -D svelte-keydown
```

## Usage

```svelte
<script>
  import Keydown from "svelte-keydown";
</script>

<Keydown on:Enter="{() => { console.log('Enter'); }}" />
```

## Examples

### Escape to Close Modal

```svelte
<script>
  import Keydown from "svelte-keydown";

  let showModal = true;

  function closeModal() {
    showModal = false;
  }
</script>

<Keydown paused="{!showModal}" on:Escape="{closeModal}" />
```

### "Command+S" to Save

```svelte
<script>
  import Keydown from "svelte-keydown";
</script>

<Keydown
  on:combo="{({detail}) => {
    if (detail === 'Meta-s') {
      console.log('Save');
    }
  }}"
/>
```

## API

| Property name | Value                        |
| :------------ | :--------------------------- |
| paused        | `boolean` (default: `false`) |

### Dispatched events

#### `on:{Key}`

Example:

```svelte
<Keydown on:Enter={() => {}} />
```

#### `on:key`

Alternative API to `on:{Key}`.

Example:

```svelte
<Keydown
  on:key={({ detail }) => {
    console.log(detail); // "Enter"
  }}
/>
```

#### `on:combo`

Triggered when a sequence of keys are pressed and cleared when a keyup event is fired.

Example:

```svelte
<Keydown
  on:combo={({ detail }) => {
    console.log(detail); // "Meta-Shift-a"
  }}
/>
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-keydown.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-keydown
[build]: https://travis-ci.com/metonym/svelte-keydown.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-keydown
