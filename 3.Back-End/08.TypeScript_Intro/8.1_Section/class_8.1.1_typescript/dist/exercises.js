"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezoidArea = exports.getRhombusArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getRhombusArea(length, height) {
    return (length * height) / 2;
}
exports.getRhombusArea = getRhombusArea;
function getTrapezoidArea(base1, base2, height) {
    return (base1 + base2) * height / 2;
}
exports.getTrapezoidArea = getTrapezoidArea;
function getCircleArea(radius) {
    const formula = Math.PI * radius ** 2;
    return Math.round(formula * 100) / 100;
}
exports.getCircleArea = getCircleArea;
