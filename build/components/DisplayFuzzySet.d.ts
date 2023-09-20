import React from "react";
import { FuzzySet } from "fuzzylogic-js";
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
export default function DisplayFuzzySet(props: PropsType): React.JSX.Element;
export {};
