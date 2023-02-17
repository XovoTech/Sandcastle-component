"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBackgroundColors = void 0;
var theme_1 = __importDefault(require("../theme"));
var style = {
    tabs: {
        width: "100%",
        backgroundColor: theme_1.default.darkColor,
        color: "white",
    },
    tab: {
        padding: "10px 30px",
        textTransform: "uppercase",
        fontSize: 13,
        cursor: "pointer",
        textAlign: "center",
        color: "#333",
    },
    tabActive: {
        fontWeight: "bold",
        borderBottom: "2px solid ".concat(theme_1.default.secondaryColor),
    },
    tabActiveVertical: {
        fontWeight: "bold",
        backgroundColor: "#DDD",
    },
};
var generateBackgroundColors = function (_a) {
    var _b = _a.transparent, transparent = _b === void 0 ? false : _b;
    if (transparent) {
        return {
            backgroundColor: "transparent",
            overflow: "hidden",
            color: theme_1.default.darkColor,
        };
    }
    return { tabs: null, tab: null };
};
exports.generateBackgroundColors = generateBackgroundColors;
exports.default = style;
