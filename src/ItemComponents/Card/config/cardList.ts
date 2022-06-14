
export const cardList = {
  attack_1: {
    icon: "_1",
    type: "atack",
    value: 1,
    description: "Проста атака. Наносить одиницю шкоди кожного раунду",
    name: "Удар",
    usage: "permanent",
  },

  armor_1: {
    icon: "_1",
    type: "armor",
    value: 5,
    description: "Додає 5 броні, після використання",
    name: "Броня",
    usage: "once",
  },

  clear_round: {
    icon: "_1",
    type: "special",
    usage: "once",
    name: "Очисти",
    description: "Очищає усі карти раунду суперника",
  },

  parry_1: {
    icon: "_1",
    type: "parry",
    usage: "round",
    value: 5,
    name: "Парирувати",
    description: "Додає 5 одиниць парирування",
  },

  treat_1: {
    icon: "_1",
    type: "treat",
    usage: "once",
    value: "10",
    name: "Ліки",
    description: "Відновлює 10 одиниць здоров'я",
  },

  special_hand_1: {
    icon: "_1",
    type: "special",
    usage: "once",
    value: 2,
    name: "Збільшити руку",
    description: "Збільшує число карт у руці на 2",
  },
  special_reuse: {
    icon: "_1",
    type: "special",
    usage: "once",
    value: 1,
    name: "Перевикористати",
    description: "Забрати випадкову карту з відбою собі в руку",
  },
  special_steal: {
    icon: "_1",
    type: "special",
    usage: "once",
    name: "Вкрасти",
    description: "Забрати випадкову карту зі столу суперника собі в руку",
  },
};
