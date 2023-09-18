"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_konva_1 = require("react-konva");
react_1.default.useLayoutEffect = react_1.default.useEffect;
function getX(value, sizeLeft, sizeRight, left, right) {
    const ret = sizeLeft + (sizeRight - sizeLeft) * ((value - left) / (right - left));
    return ret;
}
function DisplayFuzzySet(props) {
    const points = [];
    for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
        points.push(getX(i, 0, props.sizeX, props.leftX, props.rightX));
        points.push(props.sizeY - props.fuzzySet.getValue(i) * props.sizeY);
    }
    const zeroX = getX(0, 0, props.sizeX, props.leftX, props.rightX);
    return (react_1.default.createElement(react_konva_1.Stage, { width: props.sizeX, height: props.sizeY },
        react_1.default.createElement(react_konva_1.Layer, null,
            zeroX > 0 && (react_1.default.createElement(react_konva_1.Line, { points: [zeroX, 0, zeroX, props.sizeY], strokeWidth: 1, stroke: "black" })),
            react_1.default.createElement(react_konva_1.Line, { points: [0, props.sizeY, props.sizeX, props.sizeY], strokeWidth: 1, stroke: "black" }),
            react_1.default.createElement(react_konva_1.Line, { points: [0, 0, props.sizeX, 0], strokeWidth: 1, stroke: "black" }),
            react_1.default.createElement(react_konva_1.Line, { points: points, strokeWidth: 1, stroke: props.color }))));
}
exports.default = DisplayFuzzySet;
