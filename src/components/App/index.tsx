import React from "react";

import NumberDisplay from "../NumberDisplay";
// import { generateCells } from "../../utils";

import "./App.scss";
import Button from "../Button";
import GameParamsInput from "../GameParamsInput";
import { useGameSize } from "../../store/hooks";
import { GameSize } from "../../types";

const App: React.FC = () => {
  const gameSize: GameSize = useGameSize();

  const renderCells = (): React.ReactNode => {
    return Array.from(Array(gameSize.rows).keys()).map(rowIndex => {
      console.log(`${rowIndex}`);
      return (
        <div className="row" key={`row-${rowIndex}`}>
          {Array.from(Array(gameSize.cols).keys()).map(colIndex => {
            console.log(`Row: ${rowIndex} Col: ${colIndex}`);

            return (
              <Button
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="gameParams">
        <GameParamsInput />
      </div>
      <div className="Header">
        <NumberDisplay value={10} />
        <div className="Face">
          <span role="img" aria-label="face">
            😃
          </span>
        </div>
        <NumberDisplay value={100} />
      </div>
      <div className="Body">{renderCells()}</div>
    </div>
  );
};

export default App;
