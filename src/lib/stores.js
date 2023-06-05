import { writable } from 'svelte/store';
import { browser, dev, building, version } from '$app/environment';

export const count = writable(0);
if (browser) {
  console.log('ahihi')

}