"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_konva_1 = require("react-konva");
const math_1 = require("../utils/math");
function MaximumRight(props) {
    const centroidX = (0, math_1.getX)(props.fuzzySet.defuzzyMaxRight(props.leftX, props.rightX), 0, props.sizeX, props.leftX, props.rightX);
    return (react_1.default.createElement(react_konva_1.Line, { points: [centroidX, 0, centroidX, props.sizeY], strokeWidth: 1, stroke: props.color || "black" }));
}
exports.default = MaximumRight;
