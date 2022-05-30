import { Position, PositionAnchorObject } from "game/Thunder/types";
import { getGameSizes } from "./getGameSizes";
import { getPercentFrom } from "./getPercentFrom";

export const createCoordinatesFromPosition = (position: Position) => {
  const { anchor, top, bottom, left, right } = position;
  const rootElement: PositionAnchorObject = anchor || {
    ...getGameSizes(),
    x: 0,
    y: 0,
  };

  const coordinates = {
    x: 0,
    y: 0,
  };

  const isValue = (value?: string | number) => typeof value !== "undefined";

  if (isValue(top)) {
    if (typeof top === "number") {
      coordinates.y = rootElement.y + top;
    } else {
      coordinates.y =
        getPercentFrom(rootElement.height, Number(top)) + // percent of anchor height
        rootElement.y; //                                   + anchor position
    }
  } else if (isValue(bottom)) {
    const bottomOrigin = rootElement.height + rootElement.y;
    if (typeof bottom === "number") {
      coordinates.y = bottomOrigin - bottom;
    } else {
      coordinates.y =
        bottomOrigin - getPercentFrom(rootElement.height, Number(bottom));
      //percent of anchor height - bottom
    }
  }

  if (isValue(left)) {
    if (typeof left === "number") {
      coordinates.x = rootElement.x + left;
    } else {
      coordinates.x =
        rootElement.x + getPercentFrom(rootElement.width, Number(left));
    }
  } else if (isValue(right)) {
    const rightOrigin = rootElement.x + rootElement.width;
    if (typeof right === "number") {
      coordinates.x = rightOrigin - right;
    } else {
      coordinates.x =
        rightOrigin - getPercentFrom(rootElement.width, Number(right));
    }
  }

  return coordinates;
};
