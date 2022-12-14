import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

let popUp = document.getElementById("popup");
if (!popUp) {
  popUp = document.createElement("div");
  popUp.id = "popup";
  document.body.appendChild(popUp);
}

export const Portal: FC<Props> = ({ children }) => {
  return createPortal(<>{children}</>, popUp as HTMLDivElement);
};
