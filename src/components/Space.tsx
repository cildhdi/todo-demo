import React from "react";

export const Space: React.FC<{
  x?: number;
  y?: number;
}> = ({ x = 0, y = 0 }) => {
  return (
    <div
      style={{
        width: `${x}px`,
        height: `${y}px`,
      }}
    />
  );
};
