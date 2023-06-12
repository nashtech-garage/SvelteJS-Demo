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

export const secondsToTime = (secs: number): { [x: string]: number } => {
  secs = Math.round(secs);
  const hours = Math.floor(secs / (60 * 60));

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  const divisor_for_seconds = divisor_for_minutes % 60;
  const seconds = Math.ceil(divisor_for_seconds);

  const obj = {
    h: hours,
    m: minutes,
    s: seconds
  };
  return obj;
};
