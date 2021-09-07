import {Dispatch, SetStateAction} from "react";

export interface ModalChangePlayerProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setCurrentPlayer: Dispatch<SetStateAction<boolean>>;
}