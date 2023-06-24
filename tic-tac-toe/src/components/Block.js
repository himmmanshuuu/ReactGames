import React from "react";
import "../App.css";

function Block({mark,pos, changeMark}) {
    console.log(mark);
  return (
    <>
      <div className={`Block marks${mark}`} onClick={e => changeMark(pos)}></div>
    </>
  );
}

export default Block;
