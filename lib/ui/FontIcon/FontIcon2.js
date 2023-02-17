"use strict";
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
var React = __importStar(require("react"));
var Icon_1 = __importDefault(require("@mui/material/Icon"));
/**
 * This component uses various font libraries to render an icon.
 * @param {object} props The props
 * @returns {function} The component
 */
var FontIcon = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { return null; } : _d, children = _a.children;
    return (React.createElement(Icon_1.default, { "data-testid": "Components-FontIcon", onClick: onClick, className: className, style: style }, children));
};
exports.default = FontIcon;
