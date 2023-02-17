"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var style_1 = require("./style");
/**
 * This component lets you further customize the Grid enclosure by consuming a variable
 * number of Grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
var Cell = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, children = _a.children, _c = _a.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = _a.onMouseEnter, onMouseEnter = _d === void 0 ? function () { return null; } : _d, _e = _a.onMouseLeave, onMouseLeave = _e === void 0 ? function () { return null; } : _e, _f = _a.grow, grow = _f === void 0 ? 0 : _f, _g = _a.basis, basis = _g === void 0 ? "auto" : _g, _h = _a.align, align = _h === void 0 ? "auto" : _h, _j = _a.order, order = _j === void 0 ? 0 : _j;
    return (React.createElement("div", { "data-testid": "Components-Cell", role: "cell", style: __assign(__assign({}, (0, style_1.generateCellStyle)({ grow: grow, basis: basis, align: align, order: order })), style), onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, children));
};
exports.default = Cell;
