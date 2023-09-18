import React from "react";
import { FuzzySet } from "fuzzylogic-js";
type PropsType = {
    fuzzySet: FuzzySet;
    sizeX: number;
    sizeY: number;
    color?: string;
    leftX: number;
    rightX: number;
};
export default function MaximumRight(props: PropsType): React.JSX.Element;
export {};
