import React from "react";
import { Triangle } from "fuzzylogic-js";
import { Layer, Line, Stage } from "react-konva";

type PropsType = {
  x1: number;
  x2: number;
  x3: number;

  leftX: number;
  rightX: number;
  step?: number;
};

export default function TriangleSet(props: PropsType) {
  const triangle = new Triangle(props.x1, props.x2, props.x3);

  const points: number[] = [];
  for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
    points.push(i);
    points.push(triangle.getValue(i));
  }

  return (
    <Stage width={300} height={300}>
      <Layer>
        <Line points={points} />
      </Layer>
    </Stage>
  );
}
