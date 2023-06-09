import { onDestroy } from 'svelte';

export const exFuntion = () => {
  return '';
};

export function sliceIntoChunks<T>(arr: T[], chunkSize: number): Array<Array<T>> {
  const res: Array<Array<T>> = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export const onInterval = (cb: () => void, timer: number) => {
  const interval = setInterval(cb, timer);

  onDestroy(() => clearInterval(interval));
};
