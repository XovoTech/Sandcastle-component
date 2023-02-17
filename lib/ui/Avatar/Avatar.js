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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_md_1 = require("react-md");
/**
 * This component lets you display an Avatar icon on the page
 * @param {object} props The props
 * @returns {function} The component
 */
var Avatar = function (_a) {
    var _b = _a.src, src = _b === void 0 ? "" : _b, _c = _a.role, role = _c === void 0 ? "presentation" : _c, _d = _a.alt, alt = _d === void 0 ? "" : _d, _e = _a.style, style = _e === void 0 ? {} : _e;
    return React.createElement(react_md_1.Avatar, { src: src, role: role, alt: alt, style: style });
};
exports.default = Avatar;
