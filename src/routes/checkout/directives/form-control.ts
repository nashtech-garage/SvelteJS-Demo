import { getContext, onMount } from 'svelte';

import { CHECKOUT_FORM_KEY } from '../constants';

import type { Writable } from 'svelte/store';
import type { CheckoutFormContext } from '../models';

export function formControl(node: HTMLInputElement, formControlName: string) {
  const formContextStore = getContext<Writable<CheckoutFormContext>>(CHECKOUT_FORM_KEY);
  // Set the initial value
  // node.value = formContextStore;

  // Handle the input event and update the value
  const handleInput = () => {
    formContextStore.update((current) => {
      current.formData = { ...current.formData, [formControlName]: node.value };

      return current;
    });
  };

  const handleBlur = () => {
    formContextStore.update((current) => {
      current.touched = { ...current.touched, [formControlName]: true };

      return current;
    });
  };

  node.addEventListener('input', handleInput);
  node.addEventListener('blur', handleBlur);

  onMount(() => {
    console.log('mounted');
  });

  return {
    destroy() {
      node.removeEventListener('input', handleInput);
      node.removeEventListener('blur', handleBlur);
    }
  };
}
