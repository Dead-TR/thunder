export const getStatsSizes = () => {
  const { offsetWidth, offsetHeight } =
    (document.getElementById("stats") as HTMLDivElement | null) || {};

  return {
    width: offsetWidth || 400,
    height: offsetHeight || 80,
  };
};
