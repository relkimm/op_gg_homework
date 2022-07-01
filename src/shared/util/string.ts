export const putComma = (target: number): string => {
  return target.toLocaleString();
};

export const trim = (target: string): string => {
  return target.replace(/\s/g, "");
};

export const isBlank = (target: string): boolean => {
  return target.length === 0;
};

export const isNotBlank = (target: string): boolean => {
  return !isBlank(target);
};
