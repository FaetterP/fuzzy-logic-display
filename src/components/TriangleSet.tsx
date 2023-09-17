import React from "react";
import { Line } from "react-chartjs-2";
import { Triangle } from "fuzzylogic-js";

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

  const data: number[] = [];
  for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
    data.push(triangle.getValue(i));
  }

  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              label: "Triangle",
              data,
              borderColor: "red",
              backgroundColor: "#FF000066",
            },
          ],
        }}
      />
    </div>
  );
}
