import React, { useState } from "react";
import Block from "./Block";
function Board() {
  const [marks, setmarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);

  const changeMark = (i) => {
    if (marks[i] === 0) {
      const m = [...marks];
      m[i] = player;
      setPlayer(player === 1 ? 2 : 1);
      setmarks(m);
    }
  };
  
  return (
    <div className="Board">
      <div>
        <Block mark={marks[0]} pos={0} changeMark={changeMark}></Block>
        <Block mark={marks[1]} pos={1} changeMark={changeMark}></Block>
        <Block mark={marks[2]} pos={2} changeMark={changeMark}></Block>
      </div>

      <div>
        <Block mark={marks[3]} pos={3} changeMark={changeMark}></Block>
        <Block mark={marks[4]} pos={4} changeMark={changeMark}></Block>
        <Block mark={marks[5]} pos={5} changeMark={changeMark}></Block>
      </div>

      <div>
        <Block mark={marks[6]} pos={6} changeMark={changeMark}></Block>
        <Block mark={marks[7]} pos={7} changeMark={changeMark}></Block>
        <Block mark={marks[8]} pos={8} changeMark={changeMark}></Block>
      </div>
    </div>
  );
}

export default Board;
