export const take = <T>(limit: number, data: T[]) => {
  const next: T[] = [];
  const end = data.length > limit ? limit : data.length;

  for (const i of range(end)) {
    next.push(data[i]);
  }

  return next;
};

export const range = (start: number, end?: number) => {
  let startIdx, endIdx;

  if (isUndefined(end)) {
    startIdx = 0;
    endIdx = start;
  } else {
    startIdx = start;
    endIdx = end;
  }

  const next: number[] = [];

  for (let i = startIdx; i < endIdx; i++) {
    next.push(i);
  }

  return next;
};

export const isUndefined = (x: unknown): x is undefined => {
  return x === undefined;
};

export const isDefined = <T>(x: T | undefined): x is T => {
  return x !== undefined;
};

export const compose =
  (...fns: Function[]) =>
  <T>(init: T) => {
    return fns.reduce((v, fn) => fn(v), init);
  };
