import { Position } from "game/Thunder/types";

export const setOrigin = (
  gameObject: {
    [key: string]: any;
    setOrigin: (x?: number | undefined, y?: number | undefined) => void;
  },
  origin?: Position["origin"]
) => {
  if (origin === undefined) {
    return;
  }
  const prepearedOrigin =
    typeof origin === "number"
      ? {
          x: origin,
          y: origin,
        }
      : {
          x: origin[0],
          y: origin[1],
        };

  console.log(prepearedOrigin);

  gameObject.setOrigin(prepearedOrigin.x, prepearedOrigin.y);

  console.log(gameObject);
};
