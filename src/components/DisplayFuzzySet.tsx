import React from "react";
import { FuzzySet } from "fuzzylogic-js";
import { Layer, Line, Stage } from "react-konva";

type PropsType = {
  fuzzySet: FuzzySet;

  sizeX: number;
  sizeY: number;
  color?: string;

  leftX: number;
  rightX: number;
  step?: number;
};

React.useLayoutEffect = React.useEffect;

function getX(
  value: number,
  sizeLeft: number,
  sizeRight: number,
  left: number,
  right: number
) {
  const ret =
    sizeLeft + (sizeRight - sizeLeft) * ((value - left) / (right - left));
  return ret;
}

export default function DisplayFuzzySet(props: PropsType) {
  const points: number[] = [];
  for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
    points.push(getX(i, 0, props.sizeX, props.leftX, props.rightX));
    points.push(props.sizeY - props.fuzzySet.getValue(i) * props.sizeY);
  }

  const zeroX = getX(0, 0, props.sizeX, props.leftX, props.rightX);

  return (
    <Stage width={props.sizeX} height={props.sizeY}>
      <Layer>
        {zeroX > 0 && (
          <Line
            points={[zeroX, 0, zeroX, props.sizeY]}
            strokeWidth={1}
            stroke="black"
          />
        )}
        <Line
          points={[0, props.sizeY, props.sizeX, props.sizeY]}
          strokeWidth={1}
          stroke="black"
        />
        <Line points={[0, 0, props.sizeX, 0]} strokeWidth={1} stroke="black" />

        <Line points={points} strokeWidth={1} stroke={props.color} />
      </Layer>
    </Stage>
  );
}
