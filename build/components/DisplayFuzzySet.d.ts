import React from "react";
import { FuzzySet } from "fuzzylogic-js";
type PropsType = {
    fuzzySet: FuzzySet;
    sizeX: number;
    sizeY: number;
    color?: string;
    leftX: number;
    rightX: number;
    step?: number;
};
export default function DisplayFuzzySet(props: PropsType): React.JSX.Element;
export {};
