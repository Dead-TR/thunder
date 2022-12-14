import hit from "../assets/icons/hit.png";
import armor from "../assets/icons/armor.png";
import clean from "../assets/icons/clean.png";
import parry from "../assets/icons/parry.png";
import treat from "../assets/icons/treat.png";
import hand from "../assets/icons/hend.png";
import reuse from "../assets/icons/reuse.png";
import steal from "../assets/icons/steal.png";
import { CardConfig } from "../types";

export const cardList = {
  attack_1: {
    icon: hit,
    type: "atack",
    value: 1,
    description: "Проста атака. Наносить одиницю шкоди кожного раунду",
    name: "Удар",
    usage: "permanent",
  },

  armor_1: {
    icon: armor,
    type: "armor",
    value: 5,
    description: "Додає 5 броні, після використання",
    name: "Броня",
    usage: "once",
  },

  clear_round: {
    icon: clean,
    type: "special",
    usage: "once",
    name: "Очисти",
    description: "Очищає усі карти раунду суперника",
  },

  parry_1: {
    icon: parry,
    type: "parry",
    usage: "round",
    value: 5,
    name: "Парирувати",
    description: "Додає 5 одиниць парирування",
  },

  treat_1: {
    icon: treat,
    type: "treat",
    usage: "once",
    value: 10,
    name: "Ліки",
    description: "Відновлює 10 одиниць здоров'я",
  },

  special_hand_1: {
    icon: hand,
    type: "special",
    usage: "once",
    value: 2,
    name: "Збільшити руку",
    description: "Збільшує число карт у руці на 2",
  },
  special_reuse: {
    icon: reuse,
    type: "special",
    usage: "once",
    value: 1,
    name: "Перевикористати",
    description: "Забрати випадкову карту з відбою собі в руку",
  },
  special_steal: {
    icon: steal,
    type: "special",
    usage: "once",
    name: "Вкрасти",
    description: "Забрати випадкову карту зі столу суперника собі в руку",
  },
} as const;



