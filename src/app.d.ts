// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  interface Window {
    /** Can not find out mixitup typescript for this lib
     * Temporarily using any type
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mixitup: any;
  }
}

export {};
