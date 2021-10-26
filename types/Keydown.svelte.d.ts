/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeydownProps {
  /**
   * Set to `true` to pause the capture of keydown events
   * @default false
   */
  paused?: boolean;

  /**
   * Set to `true` to pause keydown events when typing in an input field
   * @default false
   */
  pauseOnInput?: boolean;
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
