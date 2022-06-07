import { getGameSizes } from "./getGameSizes";
import { getPercentFrom } from "./getPercentFrom";

export const scaleFromSizes = (
  element: {
    [key: string]: any;
    width: number;
    height: number;
    setScale: (x: number, y?: number) => void;
  },
  scaleToSizes: {
    width?: number | string;
    height?: number | string;

    anchor?: {
      width: number;
      height: number;
    };
  }
) => {
  const anchorSizes = scaleToSizes.anchor || getGameSizes();

  const sizes = {
    width: scaleToSizes.width,
    height: scaleToSizes.height,
  };

  const calculatedScaleSizes = {
    width: 0,
    height: 0,
  };

  const setCalculatedSizes = (
    key: "width" | "height",
    value?: number | string
  ) => {
    if (value) {
      if (typeof value === "number") {
        calculatedScaleSizes[key] = value;
      } else {
        calculatedScaleSizes[key] = getPercentFrom(
          anchorSizes[key],
          Number(value)
        );
      }
    }
  };
  Object.entries(sizes).forEach(([key, value]) => {
    setCalculatedSizes(key as "width" | "height", value);
  });

  let scaleValue = 1;
  if (calculatedScaleSizes.width > calculatedScaleSizes.height) {
    scaleValue = calculatedScaleSizes.width / element.width;
  } else {
    scaleValue = calculatedScaleSizes.height / element.height;
  }

  element.setScale(scaleValue);
};
