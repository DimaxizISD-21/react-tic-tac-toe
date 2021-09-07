import {FC} from 'react';
import {ScoreProps} from "./types";

import style from "./Score.module.scss";

const Score: FC<ScoreProps> = ({wins, currentPlayer}) => {
  return (
    <div className={style.score}>
      <div className={style.score__wrapper}>
        <div className={style.score__player}>
          <div className={style.score__player__x}>Player - X</div>
          <div className={style.score__player__wins}>{wins.player_x}</div>
        </div>
        <div className={style.score__current}>
          Current player: <span>{currentPlayer ? "X" : "O"}</span>
        </div>
        <div className={style.score__player}>
          <div className={style.score__player__o}>Player - O</div>
          <div className={style.score__player__wins}>{wins.player_o}</div>
        </div>
      </div>
    </div>
  );
};

export default Score;