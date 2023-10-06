import React from "react";

function Box({ width, height, backgroundColor, removeBox }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
      }}
    >
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
