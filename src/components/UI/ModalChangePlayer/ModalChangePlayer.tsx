import {ChangeEvent, FC} from "react";
import {ModalChangePlayerProps} from "./types";
import Modal from "../Modal/Modal";

import style from "../Modal/Modal.module.scss";

const ModalChangePlayer: FC<ModalChangePlayerProps> = ({visible, setVisible, setCurrentPlayer}) => {

  const handleChangePlayer = (e: ChangeEvent<any>): void => {
    switch (e.target.id) {
      case "X":
        setCurrentPlayer(true);
        setVisible(false);
        break;
      case "O":
        setCurrentPlayer(false);
        setVisible(false);
        break;
      default:
        return;
    }
  };

  return (
    <Modal visible={visible}>
      <h2 className={style.modal__title}>Change player</h2>
      <div className={style.modal__info}>
        <button
          id="X"
          className={`${style.modal__btn} ${style.player_x}`}
          onClick={(e) => handleChangePlayer(e)}>Player - X
        </button>
        <button
          id="O"
          className={`${style.modal__btn} ${style.player_o}`}
          onClick={(e) => handleChangePlayer(e)}>Player - O
        </button>
      </div>
    </Modal>
  );
};

export default ModalChangePlayer;