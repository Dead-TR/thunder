import { useEffect, useRef } from "react";
import { config } from "./config";
import css from "./style.module.scss";

const Component = () => {
  const phaserApp = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    phaserApp.current?.destroy(true, false);

    phaserApp.current = new Phaser.Game(config);

    return () => {
      phaserApp.current?.destroy(true, false);
    };
  }, []);

  return <div id="phaser-app-box" className={css.appWrapper} />;
};

export default Component;
