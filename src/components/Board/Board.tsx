import {FC} from "react";
import {BoardProps} from "./types";
import Square from "../Square/Square";

import style from "./Board.module.scss";

const Board: FC<BoardProps> = ({squares, handleClickSquare}) => {
  return (
    <div className={style.board}>
      <div className={style.board__wrapper}>
        {squares.map((square, id) => (
          <Square key={id} value={square} handleClickSquare={() => handleClickSquare(id)}/>
        ))}
      </div>
    </div>
  );
};

export default Board;