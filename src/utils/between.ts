/**min and max included */
export const between = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
