import {FC} from "react";
import Game from "./components/Game/Game";

const App: FC = () => {
  return (
    <div className="game-wrapper">
      <Game/>
    </div>
  );
};

export default App;