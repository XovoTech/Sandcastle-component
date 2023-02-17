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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_1 = __importDefault(require("./style"));
/**
 * You can use the Thumbnail component to display images (especially screenshots)
 * @param {object} props The props
 * @returns {function} The component
 */
var Thumbnail = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, src = _a.src;
    return (react_1.default.createElement("img", { "data-testid": "Components-Thumbnail", alt: "", src: src, style: __assign(__assign({}, style_1.default), style) }));
};
exports.default = Thumbnail;
