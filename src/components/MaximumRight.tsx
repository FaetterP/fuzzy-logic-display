import React from "react";
import { FuzzySet } from "fuzzylogic-js";
import { Layer, Line, Stage } from "react-konva";
import { getX } from "../utils/math";

type PropsType = {
  fuzzySet: FuzzySet;

  sizeX: number;
  sizeY: number;
  color?: string;

  leftX: number;
  rightX: number;
};

export default function MaximumRight(props: PropsType) {
  const x = getX(
    props.fuzzySet.defuzzyMaxRight(props.leftX, props.rightX),
    0,
    props.sizeX,
    props.leftX,
    props.rightX
  );

  return (
    <Line
      points={[x, 0, x, props.sizeY]}
      strokeWidth={1}
      stroke={props.color || "black"}
    />
  );
}
