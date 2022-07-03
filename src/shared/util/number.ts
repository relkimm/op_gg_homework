export const fixed = (fractionDigits: number) => (target: number) => {
  return parseFloat(target.toFixed(fractionDigits));
};

export const fixed0 = fixed(0);
export const fixed1 = fixed(1);
