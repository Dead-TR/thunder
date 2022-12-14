import React, { FC, ReactNode } from "react";
import { Portal } from "components";
import css from "./style.module.scss";

interface Props {
  children: ReactNode;

  handleClose: () => void;
}

export const Modal: FC<Props> = ({ children, handleClose }) => {
  return (
    <Portal>
      <div className={css.curtain} onClick={handleClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
