"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_konva_1 = require("react-konva");
const math_1 = require("../utils/math");
const MaximumLeft_1 = __importDefault(require("./MaximumLeft"));
const MaximumRight_1 = __importDefault(require("./MaximumRight"));
const MaximumMiddle_1 = __importDefault(require("./MaximumMiddle"));
const Centroid_1 = __importDefault(require("./Centroid"));
function DisplayFuzzySet(props) {
    function getPoint(fuzzySet) {
        const points = [];
        for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
            points.push((0, math_1.getX)(i, 0, props.sizeX, props.leftX, props.rightX));
            points.push(props.sizeY - fuzzySet.getValue(i) * props.sizeY);
        }
        return points;
    }
    const zeroX = (0, math_1.getX)(0, 0, props.sizeX, props.leftX, props.rightX);
    return (react_1.default.createElement(react_konva_1.Stage, { width: props.sizeX, height: props.sizeY },
        react_1.default.createElement(react_konva_1.Layer, null,
            zeroX > 0 && (react_1.default.createElement(react_konva_1.Line, { points: [zeroX, 0, zeroX, props.sizeY], strokeWidth: 1, stroke: "black" })),
            react_1.default.createElement(react_konva_1.Line, { points: [0, props.sizeY, props.sizeX, props.sizeY], strokeWidth: 1, stroke: "black" }),
            react_1.default.createElement(react_konva_1.Line, { points: [0, 0, props.sizeX, 0], strokeWidth: 1, stroke: "black" }),
            props.sets.map((set) => (react_1.default.createElement(react_konva_1.Group, null,
                react_1.default.createElement(react_konva_1.Line, { points: getPoint(set.fuzzySet), strokeWidth: 1, stroke: set.color || "red" }),
                set.isShowMaximumLeft && (react_1.default.createElement(MaximumLeft_1.default, { ...props, fuzzySet: set.fuzzySet, color: set.color || "red" })),
                set.isShowMaximumRight && (react_1.default.createElement(MaximumRight_1.default, { ...props, fuzzySet: set.fuzzySet, color: set.color || "red" })),
                set.isShowMaximumMiddle && (react_1.default.createElement(MaximumMiddle_1.default, { ...props, fuzzySet: set.fuzzySet, color: set.color || "red" })),
                set.isShowCentroid && (react_1.default.createElement(Centroid_1.default, { ...props, fuzzySet: set.fuzzySet, color: set.color || "red" }))))))));
}
exports.default = DisplayFuzzySet;
