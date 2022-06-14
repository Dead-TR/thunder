import React, { FC } from "react";
import css from "./style.module.scss";

interface Props {
  title: string;
  value: number;
}

export const Content: FC<Props> = ({ title, value }) => {
  return (
    <div className={css.side}>
      <h1 className={css.title}>{title}:</h1>
      <span className={css.value}>{value}</span>
    </div>
  );
};
