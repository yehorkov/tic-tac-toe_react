import React, { useState, useEffect } from 'react';
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [go, setGo] = useState('circle');
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "It is now " + go + "'s go.";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === 'circle');

      if (circleWins) {
        setWinningMessage('Circle Wins!');
        return;
      }
    });

    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === 'cross');

      if (crossWins) {
        setWinningMessage('Cross Wins!');
        return;
      }
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkDraw = () => {
    if (cells.every((cell) => cell !== '') && !winningMessage) {
      setWinningMessage("It's a draw!");
    }
  };

  useEffect(() => {
    checkScore();
	checkDraw();
  }, [cells, checkScore, checkDraw]);

  const handleReset = () => {
    setCells(['', '', '', '', '', '', '', '', '']);
    setGo('circle');
    setWinningMessage(null);
  };

  return (
    <div className="app">
      <div className='gameboard'>
        {cells.map((cell, index) =>
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        )}
      </div>
      <p className='message'>{winningMessage || message}</p>
      <button className='reset' onClick={handleReset}>New Game</button>
    </div>
  );
};

export default App;
