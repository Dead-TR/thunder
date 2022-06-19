import { Card } from "ItemComponents";

export const Hand = () => {
  return (
    <div>
      <Card configKey="attack_1" />
      <Card configKey="armor_1" />
      <Card configKey="clear_round" />
      <Card configKey="parry_1" />
      <Card configKey="treat_1" />
      <Card configKey="special_hand_1" />
      <Card configKey="special_reuse" />
      <Card configKey="special_steal" />
    </div>
  );
};
