import {FC, useCallback, useEffect, useState} from 'react';
import Score from "../Score/Score";
import Board from "../Board/Board";
import Copyright from "../Copyright/Copyright";
import ModalChangePlayer from "../UI/ModalChangePlayer/ModalChangePlayer";
import ModalPlayerWin from "../UI/ModalPlayerWin/ModalPlayerWin";
import ModalGameTie from "../UI/ModalGameTie/ModalGameTie";
import {calculateWinner} from "../../utils/calculateWinner";

const Game: FC = () => {

  const [squares, setSquares] = useState([...Array(9).fill(null)]);
  const [countWins, setCountWins] = useState({player_x: 0, player_o: 0});
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [modalChangePlayerVisible, setChangePlayerVisible] = useState(true);
  const [modalPlayerWinVisible, setModalPlayerWinVisible] = useState(false);
  const [modalGameTieVisible, setModalGameTieVisible] = useState(false);
  const winner = calculateWinner(squares);

  const handleClickSquare = (id: number): void => {
    const copySquares = [...squares];
    if (winner || copySquares[id]) return;
    copySquares[id] = currentPlayer ? "X" : "O";
    setCurrentPlayer(!currentPlayer);
    setSquares(copySquares);
  };

  const restartGame = (): void => {
    setSquares([...Array(9).fill(null)]);
    setModalPlayerWinVisible(false);
    setModalGameTieVisible(false);
    setChangePlayerVisible(true);
  };

  const countPlayersWins = useCallback(() => {
    switch (winner) {
      case "X":
        setCountWins(prevState => ({...prevState, player_x: prevState.player_x + 1}));
        setModalPlayerWinVisible(true);
        break;
      case "O":
        setCountWins(prevState => ({...prevState, player_o: prevState.player_o + 1}));
        setModalPlayerWinVisible(true);
        break;
      default:
        return;
    }
  }, [winner]);

  const checkGameTie = squares.every((val) => val !== null);

  useEffect(() => {
    countPlayersWins();
    if (checkGameTie) return setModalGameTieVisible(true);
  }, [countPlayersWins, checkGameTie]);

  return (
    <>
      <Score wins={countWins} currentPlayer={currentPlayer}/>
      <Board squares={squares} handleClickSquare={handleClickSquare}/>
      <Copyright/>
      <ModalChangePlayer visible={modalChangePlayerVisible}
        setVisible={setChangePlayerVisible}
        setCurrentPlayer={setCurrentPlayer}
      />
      <ModalPlayerWin visible={modalPlayerWinVisible} currentPlayer={currentPlayer} restart={restartGame}/>
      <ModalGameTie visible={modalGameTieVisible} restart={restartGame}/>
    </>
  );
};

export default Game;