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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var style_1 = require("./style");
/**
 * This component lets you further customize the Grid enclosure by consuming a variable
 * number of Grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
var Cell = function (_a) {
    // const { order, flexGrow, flexBasis, alignSelf } = generateCellStyle({ grow, basis, align, order })
    var _b = _a.style, style = _b === void 0 ? {} : _b, children = _a.children, _c = _a.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = _a.onMouseEnter, onMouseEnter = _d === void 0 ? function () { return null; } : _d, _e = _a.onMouseLeave, onMouseLeave = _e === void 0 ? function () { return null; } : _e, _f = _a.grow, grow = _f === void 0 ? 0 : _f, _g = _a.basis, basis = _g === void 0 ? "auto" : _g, _h = _a.align, align = _h === void 0 ? "auto" : _h, _j = _a.order, order = _j === void 0 ? 0 : _j;
    return (React.createElement(Grid_1.default, { item: true, "data-testid": "Components-Cell", 
        // role="cell"
        style: __assign(__assign({}, (0, style_1.generateCellStyle)({ grow: grow, basis: basis, align: align, order: order })), style), onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, xs: true }, children));
};
exports.Cell = Cell;
/**
 * This sets up a 12 column grid system that you can use to build layouts.
 * Its child elements are usually a collection Cell elements that consume a variable
 * number of grid columns.
 * @param {object} props The props
 * @returns {function} The component
 */
var Grid = function (_a) {
    var _b = _a.wrap, wrap = _b === void 0 ? false : _b, _c = _a.justify, justify = _c === void 0 ? "start" : _c, _d = _a.align, align = _d === void 0 ? "start" : _d, _e = _a.style, style = _e === void 0 ? { width: "100%" } : _e, _f = _a.onMouseEnter, onMouseEnter = _f === void 0 ? function () { return null; } : _f, _g = _a.onMouseLeave, onMouseLeave = _g === void 0 ? function () { return null; } : _g, _h = _a.onClick, onClick = _h === void 0 ? function () { return null; } : _h, children = _a.children;
    var _j = (0, style_1.generateGridStyle)({ wrap: wrap, justify: justify, align: align }), justifyContent = _j.justifyContent, alignContent = _j.alignContent, flexWrap = _j.flexWrap;
    return (React.createElement(Grid_1.default, { container: true, "data-testid": "Components-Grid", role: "group", style: style, 
        // wrap={flexWrap}
        alignContent: alignContent, 
        // justifyContent={justifyContent}
        // justify={justifyContent}
        onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onClick: onClick }, children));
};
exports.default = Grid;
