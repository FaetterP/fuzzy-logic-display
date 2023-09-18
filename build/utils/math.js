"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getX = void 0;
function getX(value, sizeLeft, sizeRight, left, right) {
    return sizeLeft + (sizeRight - sizeLeft) * ((value - left) / (right - left));
}
exports.getX = getX;
