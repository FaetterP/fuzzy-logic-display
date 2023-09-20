import React from "react";
import { FuzzySet } from "fuzzylogic-js";
import { Group, Layer, Line, Stage } from "react-konva";
import { getX } from "../utils/math";
import MaximumLeft from "./MaximumLeft";
import MaximumRight from "./MaximumRight";
import MaximumMiddle from "./MaximumMiddle";

type PropsType = {
  sets: {
    fuzzySet: FuzzySet;
    color?: string;
    isShowMaximumLeft?: boolean;
    isShowMaximumRight?: boolean;
    isShowMaximumMiddle?: boolean;
    isShowCentroid?: boolean;
  }[];

  sizeX: number;
  sizeY: number;

  leftX: number;
  rightX: number;
  step?: number;
};

export default function DisplayFuzzySet(props: PropsType) {
  function getPoint(fuzzySet: FuzzySet) {
    const points: number[] = [];

    for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
      points.push(getX(i, 0, props.sizeX, props.leftX, props.rightX));
      points.push(props.sizeY - fuzzySet.getValue(i) * props.sizeY);
    }

    return points;
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

        {props.sets.map((set) => (
          <Group>
            <Line
              points={getPoint(set.fuzzySet)}
              strokeWidth={1}
              stroke={set.color || "red"}
            />

            {set.isShowMaximumLeft && (
              <MaximumLeft
                {...props}
                fuzzySet={set.fuzzySet}
                color={set.color || "red"}
              />
            )}
            {set.isShowMaximumRight && (
              <MaximumRight
                {...props}
                fuzzySet={set.fuzzySet}
                color={set.color || "red"}
              />
            )}
            {set.isShowMaximumMiddle && (
              <MaximumMiddle
                {...props}
                fuzzySet={set.fuzzySet}
                color={set.color || "red"}
              />
            )}
            {set.isShowCentroid && (
              <MaximumMiddle
                {...props}
                fuzzySet={set.fuzzySet}
                color={set.color || "red"}
              />
            )}
          </Group>
        ))}
      </Layer>
    </Stage>
  );
}
