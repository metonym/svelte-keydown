/// <reference types="svelte" />

export interface KeydownProps {
  /**
   * @default false
   */
  paused?: boolean;
}

export default class Keydown {
  $$prop_def: KeydownProps;
  $$slot_def: {};

  $on(eventname: "combo", cb: (event: CustomEvent<string>) => void): () => void;
  $on(eventname: "key", cb: (event: CustomEvent<string>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
