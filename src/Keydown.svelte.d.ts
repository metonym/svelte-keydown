import type { SvelteComponentTyped } from "svelte";

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

  /**
   * Specify the separating key between multiple keys
   * @default "-"
   */
  separator?: string;
}

export default class Keydown extends SvelteComponentTyped<
  KeydownProps,
  {
    combo: CustomEvent<string>;
    key: CustomEvent<string>;
    keyup: WindowEventMap["keyup"];
    keydown: WindowEventMap["keydown"];
    [key: string]: CustomEvent<any>;
  },
  {}
> {}
