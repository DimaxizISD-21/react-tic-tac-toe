export interface WinScorePlayers {
  player_x: number;
  player_o: number;
}

export interface ScoreProps {
  wins: WinScorePlayers;
  currentPlayer: boolean;
}