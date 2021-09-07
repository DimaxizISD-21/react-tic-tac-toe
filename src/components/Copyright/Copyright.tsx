import {FC} from "react";
import style from "./Copyright.module.scss";

const Copyright: FC = () => {
  return (
    <div className={style.copyright}>
      Tic Tac Toe game for pet-project : Copyright 2021 by Oleksiy Nikolaenko
    </div>
  );
};

export default Copyright;