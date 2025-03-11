import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver.jsx";
import Player from "./components/Player";
import Log from "./components/Log.jsx";
import { winning_combinations } from "./winner-combinations";
import { RiArrowLeftRightFill } from "@remixicon/react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const players = {
  X: "Player 1",
  O: "Player 2",
};

function returnActivePlayer(gameTurns) {
  let currPlayer = "X";
  currPlayer =
    gameTurns.length > 0 && currPlayer === gameTurns[0].player ? "O" : "X";
  return currPlayer;
}

function deriveGameBoard(playerTurn) {
  let gameBoard = [...initialBoard.map((copy) => [...copy])];

  for (const turn of playerTurn) {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, player) {
  let winner;
  for (const combinations of winning_combinations) {
    const firstSquare = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquare = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquare = gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = player[firstSquare];
    }
  }

  return winner;
}

export default function App() {
  const [player, setPlayer] = useState(players);
  const [playerTurn, setPlayerTurn] = useState([]);
  const activePlayer = returnActivePlayer(playerTurn);

  function handleClickSquare(rowIndex, colIndex) {
    setPlayerTurn((prevTurn) => {
      const currPlayer = returnActivePlayer(playerTurn);
      const updatedTurn = [
        {
          square: {
            row: rowIndex,
            column: colIndex,
          },
          player: currPlayer,
        },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  function handleNameChange(symbol, newName) {
    setPlayer({
      ...player,
      [symbol]: newName,
    });
  }

  function handleRematch() {
    setPlayerTurn([]);
  }

  const gameBoard = deriveGameBoard(playerTurn);
  const winner = deriveWinner(gameBoard, player);
  let isDraw = playerTurn.length === 9 && !winner;

  return (
    <main className="w-full min-h-screen bg-matt-black text-beige flex justify-center items-center flex-col">
      <div className="max-w-[50rem] w-full h-full p-8 flex items-center justify-center flex-col space-y-2">
        <div className="w-full flex items-center justify-center cursor-default">
          <h1 className="font-Urbanist tracking-tight font-semibold text-6xl">
            Tic-Tac-Toe
          </h1>
        </div>
        <div className="w-full flex items-center justify-center p-4 space-x-6">
          <Player
            symbol={"X"}
            name={player.X}
            isActive={activePlayer === "X"}
            onNameChange={handleNameChange}
            isWon={winner === player.X}
          />
          {/* <button onClick={switchPlayerName}>
            <RiArrowLeftRightFill size={30} />
          </button> */}
          <Player
            symbol={"O"}
            name={player.O}
            isActive={activePlayer === "O"}
            onNameChange={handleNameChange}
            isWon={winner === player.O}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          {winner || isDraw ? (
            <GameOver
              winner={winner}
              isDraw={isDraw}
              handleReset={handleRematch}
            />
          ) : (
            <GameBoard
              onClickSquare={handleClickSquare}
              gameBoard={gameBoard}
            />
          )}
        </div>
      </div>
      <div></div>
      <div className="absolute bottom-10 right-10">
        <Log turns={playerTurn} winner={winner} isDraw={isDraw} />
      </div>
    </main>
  );
}
