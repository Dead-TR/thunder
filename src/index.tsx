import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Thunder } from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Thunder
    enemieCards={[]}
    playerCards={[
      "attack_1",
      "attack_1",
      "attack_1",
      "attack_1",
      "attack_1",
      "armor_1",
      "armor_1",
      "armor_1",
      "clear_round",
      "clear_round",
      "clear_round",
      "clear_round",
      "clear_round",
      "parry_1",
      "parry_1",
      "treat_1",
      "special_hand_1",
      "special_hand_1",
      "special_reuse",
      "special_reuse",
      "special_reuse",
      "special_steal",
      "special_steal",
    ]}
  />,
);
