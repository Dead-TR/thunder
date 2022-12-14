import { CardId } from "ItemComponents";
import React, { FC, useEffect, useRef, useState } from "react";

import { GameContext } from "./Context";
import { ThunderManager } from "./Manager";

interface Props {
  children: React.ReactNode;

  enemieCards: CardId[];
  playerCards: CardId[];
}

export const GameProvider: FC<Props> = ({
  children,
  enemieCards,
  playerCards,
}) => {
  const manager = useRef<ThunderManager>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    manager.current = new ThunderManager(playerCards, enemieCards);
    setIsLoading(false);

    return () => {};
  }, []);

  if (!isLoading && manager.current) {
    return (
      <GameContext.Provider
        value={{
          manager: manager.current,
        }}>
        {children}
      </GameContext.Provider>
    );
  } else return null;
};
