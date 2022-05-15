import { useEffect, useRef } from "react";
import { config } from "./config";

const Component = () => {
  const phaserApp = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    phaserApp.current?.destroy(true, false);

    phaserApp.current = new Phaser.Game(config);

    return () => {
      phaserApp.current?.destroy(true, false);
    };
  }, []);

  return <div id="phaser-app-box" />;
};

export default Component;
