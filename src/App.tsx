import { Wrapper } from "TableComponents";
import { GameProvider } from "providers";
import { CardId } from "ItemComponents";
import { FC } from "react";

interface Props {
  enemieCards: CardId[];
  playerCards: CardId[];
}

export const Thunder: FC<Props> = ({ enemieCards, playerCards }) => {
  return (
    <GameProvider enemieCards={enemieCards} playerCards={playerCards}>
      <Wrapper />
    </GameProvider>
  );
};
