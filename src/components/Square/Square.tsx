import {FC} from 'react';
import {SquareProps} from "./types";
import cross from "../../assets/icons/cross.svg";
import circle from "../../assets/icons/circle.svg";

import style from "./Square.module.scss";

const Square: FC<SquareProps> = ({handleClickSquare, value}) => {

  const squareStyle = `${!value ? `${style.square}` : `${style.square} ${style.square__active}`}`;
  const playerImg = value === "X" ? `${cross}` : value === "O" ? `${circle}` : "";

  return (
    <div className={squareStyle} onClick={() => handleClickSquare()}>
      <img className={style.square__img} src={playerImg} alt={playerImg}/>
    </div>
  );
};

export default Square;