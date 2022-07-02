import { useEffect, useRef } from "react";
import { Stats, PermanentCards, RoundCards, Hand } from "TableComponents";
import css from "./style.module.scss";

const margin = parseInt(css.marginTop);

export const Wrapper = () => {
  const elements = useRef<{
    root: HTMLDivElement | null;
    stats: HTMLDivElement | null;
  }>({
    root: null,
    stats: null,
  });

  useEffect(() => {
    const { root, stats } = elements.current;
    if (root && stats) {
      const sections = [...root.children] as HTMLDivElement[];
      const { offsetHeight } = stats;

      sections.forEach((div) => {
        if (div !== stats) {
          div.style.height = `calc((100vh - ${offsetHeight}px - ${
            margin * 2 * 4
          }px) / 5)`;
        }
      });
    }
    return () => {};
  }, [elements.current.root, elements.current.stats]);

  return (
    <div
      className={css.appWrapper}
      ref={(node) => (elements.current.root = node)}>
      <RoundCards />
      <PermanentCards />

      <div
        className={css.stats}
        ref={(node) => (elements.current.stats = node)}>
        <Stats />
        <div className={css.statsLine} />
        <Stats />
      </div>
      <PermanentCards />
      <RoundCards />
      <Hand />
    </div>
  );
};

