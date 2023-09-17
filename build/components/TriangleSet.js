"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fuzzylogic_js_1 = require("fuzzylogic-js");
const react_konva_1 = require("react-konva");
function TriangleSet(props) {
    const triangle = new fuzzylogic_js_1.Triangle(props.x1, props.x2, props.x3);
    const points = [];
    for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
        points.push(i);
        points.push(triangle.getValue(i));
    }
    return (react_1.default.createElement(react_konva_1.Stage, { width: 300, height: 300 },
        react_1.default.createElement(react_konva_1.Layer, null,
            react_1.default.createElement(react_konva_1.Line, { points: points }))));
}
exports.default = TriangleSet;
