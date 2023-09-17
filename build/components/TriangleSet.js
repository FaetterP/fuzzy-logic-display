"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_chartjs_2_1 = require("react-chartjs-2");
const fuzzylogic_js_1 = require("fuzzylogic-js");
function TriangleSet(props) {
    const triangle = new fuzzylogic_js_1.Triangle(props.x1, props.x2, props.x3);
    const data = [];
    for (let i = props.leftX; i <= props.rightX; i += props.step || 0.1) {
        data.push(triangle.getValue(i));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_chartjs_2_1.Line, { data: {
                datasets: [
                    {
                        label: "Triangle",
                        data,
                        borderColor: "red",
                        backgroundColor: "#FF000066",
                    },
                ],
            } })));
}
exports.default = TriangleSet;
