export const hexToRgb = (hex: string, alpha: number) => {
  const splitedHex = hex.slice(1, 7).match(/.{2}/g) || [];

  const rgb = splitedHex
    .map((x) => parseInt(x, 16))
    .join();

  return `rgba(${rgb}, ${alpha})`;
};
