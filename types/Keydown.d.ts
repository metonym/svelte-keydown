/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeydownProps {
  /**
   * @default false
   */
  paused?: boolean;
}

export default class Keydown extends SvelteComponentTyped<
  KeydownProps,
  {
    combo: CustomEvent<string>;
    key: CustomEvent<string>;
    [key: string]: CustomEvent<any>;
  },
  {}
> {}
