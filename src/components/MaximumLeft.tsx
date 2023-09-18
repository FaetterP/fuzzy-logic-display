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

export default function MaximumLeft(props: PropsType) {
  const centroidX = getX(
    props.fuzzySet.defuzzyMaxLeft(props.leftX, props.rightX),
    0,
    props.sizeX,
    props.leftX,
    props.rightX
  );

  return (
    <Line
      points={[centroidX, 0, centroidX, props.sizeY]}
      strokeWidth={1}
      stroke={props.color || "black"}
    />
  );
}
