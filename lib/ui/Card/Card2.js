"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardCaption = exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardActions_1 = __importDefault(require("@mui/material/CardActions"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
/**
 * A card is a sheet of material that serves as an entry point to more detailed information!
 */
var Card = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react_1.default.createElement(Card_1.default, { style: style, variant: "outlined" },
        react_1.default.createElement(CardContent_1.default, { "data-testid": "Components-Card" }, children)));
};
exports.Card = Card;
/**
 * The caption provided for a card object
 * @param param0
 */
var CardCaption = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react_1.default.createElement(CardActions_1.default, { "data-testid": "Components-CardCaption", style: style }, children));
};
exports.CardCaption = CardCaption;
exports.default = exports.Card;
