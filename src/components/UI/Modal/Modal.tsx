import {FC} from "react";
import {ModalProps} from "./types";

import style from "./Modal.module.scss";

const Modal: FC<ModalProps> = ({children, visible}) => {

  const modalRootStyles = [style.modal];
  if (visible) modalRootStyles.push(style.modal__active);

  return (
    <div className={modalRootStyles.join(" ")}>
      <div className={style.modal__wrapper}>
        {children}
      </div>
    </div>
  );
};

export default Modal;