"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.getStyle = exports.getBackgroundColor = exports.ButtonWrapper = void 0;
var theme_1 = __importDefault(require("../theme"));
var styled_components_1 = __importDefault(require("styled-components"));
var types_1 = require("../types");
var style = {
    iconButton: {
        cursor: "pointer",
        color: "white",
    },
    text: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    iconLeft: {
        color: "white",
        paddingRight: 5,
    },
    iconRight: {
        color: "white",
        paddingLeft: 5,
    },
    smallSize: {
        padding: "5px 18px",
    },
    smallTextSize: {
        fontSize: 13,
        fontWeight: "bold",
    },
};
exports.ButtonWrapper = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 12px 50px;\n  border: 0;\n  border-radius: 30px;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n  &:hover {\n    opacity: 0.9;\n  }\n"], ["\n  padding: 12px 50px;\n  border: 0;\n  border-radius: 30px;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n  &:hover {\n    opacity: 0.9;\n  }\n"])));
var getBackgroundColor = function (_a) {
    var _b = _a.transparent, transparent = _b === void 0 ? false : _b, _c = _a.secondary, secondary = _c === void 0 ? false : _c, _d = _a.primary, primary = _d === void 0 ? false : _d, _e = _a.tertiary, tertiary = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.negative, negative = _g === void 0 ? false : _g;
    var backgroundColor = "transparent";
    if (transparent)
        backgroundColor = "transparent";
    if (secondary)
        backgroundColor = theme_1.default.secondaryColor;
    if (primary)
        backgroundColor = theme_1.default.primaryColor;
    if (tertiary)
        backgroundColor = theme_1.default.tertiaryColor;
    if (disabled)
        backgroundColor = theme_1.default.disabledColor;
    if (negative)
        backgroundColor = theme_1.default.disabledColor;
    return { backgroundColor: backgroundColor };
};
exports.getBackgroundColor = getBackgroundColor;
var getStyle = function (props) { return (__assign(__assign(__assign(__assign({}, style.iconButton), (0, exports.getBackgroundColor)(props)), props.style), (props.fixedPosition === types_1.FixedPositions.BOTTOM_RIGHT
    ? { bottom: 55, right: 100 }
    : {}))); };
exports.getStyle = getStyle;
exports.default = style;
var templateObject_1;
