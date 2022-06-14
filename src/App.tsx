import { Wrapper } from "TableComponents";
import { GameProvider } from "providers";

export const App = () => {
  return (
    <GameProvider>
      <Wrapper />
    </GameProvider>
  );
};
