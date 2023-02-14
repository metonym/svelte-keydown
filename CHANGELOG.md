# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0](https://github.com/metonym/svelte-keydown/releases/tag/v0.6.0) - 2023-02-14

- add `separator` prop to customize the key between keys

## [0.5.0](https://github.com/metonym/svelte-keydown/releases/tag/v0.5.0) - 2022-01-22

- forward `keydown`, `keyup` events to `svelte:body`

## [0.4.1](https://github.com/metonym/svelte-keydown/releases/tag/v0.4.1) - 2022-01-21

- alias space (`" "`) as `"Space"` for the dynamic `on:[Key]` event

## [0.4.0](https://github.com/metonym/svelte-keydown/releases/tag/v0.4.0) - 2021-10-26

**Breaking Changes**

- use `.svelte.d.ts` extension for component TypeScript definition

## [0.3.1](https://github.com/metonym/svelte-keydown/releases/tag/v0.3.1) - 2021-06-20

- do not reset combo if one or more keys are down

## [0.3.0](https://github.com/metonym/svelte-keydown/releases/tag/v0.3.0) - 2021-06-10

- add `pauseOnInput` prop to prevent keydown capturing on input events (default is `false`)

## [0.2.1](https://github.com/metonym/svelte-keydown/releases/tag/v0.2.1) - 2020-12-21

- add index type in TypeScript definitions for generic key events

## [0.2.0](https://github.com/metonym/svelte-keydown/releases/tag/v0.2.0) - 2020-11-18

- add TypeScript definitions

## [0.1.0](https://github.com/metonym/svelte-keydown/releases/tag/v0.1.0) - 2020-04-26

- Initial release
