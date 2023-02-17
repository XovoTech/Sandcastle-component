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
exports.CardCaption = exports.Card = void 0;
var react_1 = __importDefault(require("react"));
/**
 * A card is a sheet of material that serves as an entry point to more detailed information!
 */
var Card = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react_1.default.createElement("div", { "data-testid": "Components-Card", role: "group", style: __assign({}, style) }, children));
};
exports.Card = Card;
/**
 * The caption provided for a card object
 * @param param0
 */
var CardCaption = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react_1.default.createElement("div", { "data-testid": "Components-CardCaption", role: "cell", style: style }, children));
};
exports.CardCaption = CardCaption;
exports.default = exports.Card;
