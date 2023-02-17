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
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var Icon_1 = __importDefault(require("@mui/material/Icon"));
var Fab_1 = __importDefault(require("@mui/material/Fab"));
var theme_1 = __importDefault(require("../theme"));
var types_1 = require("../types");
var style_1 = __importDefault(require("./style"));
/**
 * This component lets you display a button on the page with various features such as,
 * a icons, floating, colored, etc.
 * @param {object} props The props
 * @returns {function} The component
 */
var Button = function (_a) {
    var _b = _a.small, small = _b === void 0 ? true : _b, _c = _a.large, large = _c === void 0 ? false : _c, _d = _a.icon, icon = _d === void 0 ? false : _d, _e = _a.fixed, fixed = _e === void 0 ? false : _e, _f = _a.floating, floating = _f === void 0 ? false : _f, fixedPosition = _a.fixedPosition, _g = _a.transparent, transparent = _g === void 0 ? false : _g, _h = _a.primary, primary = _h === void 0 ? false : _h, _j = _a.secondary, secondary = _j === void 0 ? false : _j, _k = _a.tertiary, tertiary = _k === void 0 ? false : _k, _l = _a.disabled, disabled = _l === void 0 ? false : _l, negative = _a.negative, _m = _a.style, style = _m === void 0 ? {} : _m, _o = _a.className, className = _o === void 0 ? "" : _o, children = _a.children, iconLeft = _a.iconLeft, iconRight = _a.iconRight, _p = _a.onClick, onClick = _p === void 0 ? function () { return null; } : _p;
    var color = icon ? "inherit" : "primary";
    if (primary)
        color = "primary";
    if (secondary)
        color = "secondary";
    // if (tertiary) color = "?";
    if (negative)
        color = "default";
    var size = "large";
    if (small)
        size = "small";
    if (large)
        size = "large";
    var classes = __assign({}, style);
    var backgroundColor = React.useMemo(function () {
        if (tertiary) {
            return theme_1.default.tertiaryColor;
        }
        if (primary) {
            return theme_1.default.primaryColor;
        }
        if (secondary) {
            return theme_1.default.secondaryColor;
        }
        if (negative) {
            return theme_1.default.lightColor;
        }
    }, [tertiary, primary, secondary, negative]);
    var root = __assign(__assign({ padding: "12px 50px", borderRadius: 30 }, style_1.default.text), size === "small" ? __assign(__assign({}, style_1.default.smallSize), style_1.default.smallTextSize) : {});
    var fabStyle = __assign(__assign(__assign({ backgroundColor: backgroundColor }, root), style), fixedPosition === types_1.FixedPositions.BOTTOM_RIGHT
        ? { position: 'fixed', bottom: 55, right: 100 }
        : {});
    if (icon && (fixed || fixedPosition))
        return (React.createElement(Fab_1.default, { style: fabStyle, color: color, onClick: onClick, size: size },
            React.createElement(Icon_1.default, null, children)));
    if (icon)
        return (React.createElement(material_1.IconButton, { style: { backgroundColor: fabStyle.backgroundColor }, size: "medium", color: color, onClick: onClick },
            React.createElement(Icon_1.default, null, children)));
    return (React.createElement(material_1.Button, { style: __assign(__assign(__assign({}, root), { backgroundColor: backgroundColor }), style), size: size, onClick: onClick, disabled: disabled, variant: !transparent ? "contained" : "text", disableElevation: true, startIcon: iconLeft ? React.createElement(Icon_1.default, null, iconLeft) : null, endIcon: iconRight ? React.createElement(Icon_1.default, null, iconRight) : null }, children));
};
exports.default = Button;
