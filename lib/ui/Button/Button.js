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
var react_md_1 = require("react-md");
var style_1 = __importStar(require("./style"));
var types_1 = require("../types");
/**
 * This component lets you display a button on the page with various features such as,
 * a icons, floating, colored, etc.
 * @param {object} props The props
 * @returns {function} The component
 */
var Button = function (_a) {
    var _b = _a.small, small = _b === void 0 ? true : _b, _c = _a.large, large = _c === void 0 ? false : _c, _d = _a.icon, icon = _d === void 0 ? false : _d, _e = _a.fixed, fixed = _e === void 0 ? false : _e, _f = _a.floating, floating = _f === void 0 ? false : _f, _g = _a.fixedPosition, fixedPosition = _g === void 0 ? types_1.FixedPositions.TOP_LEFT : _g, _h = _a.transparent, transparent = _h === void 0 ? false : _h, _j = _a.primary, primary = _j === void 0 ? false : _j, _k = _a.secondary, secondary = _k === void 0 ? false : _k, _l = _a.tertiary, tertiary = _l === void 0 ? false : _l, _m = _a.disabled, disabled = _m === void 0 ? false : _m, negative = _a.negative, _o = _a.style, style = _o === void 0 ? {} : _o, _p = _a.className, className = _p === void 0 ? "" : _p, children = _a.children, iconLeft = _a.iconLeft, iconRight = _a.iconRight, _q = _a.onClick, onClick = _q === void 0 ? function () { return null; } : _q;
    var bStyle = (0, style_1.getBackgroundColor)({
        transparent: transparent,
        secondary: secondary,
        primary: primary,
        tertiary: tertiary,
        disabled: disabled,
        negative: negative,
    });
    var btnSizeStyle = small && !large ? style_1.default.smallSize : null;
    var btnSizeTextStyle = small && !large ? style_1.default.smallTextSize : null;
    if (icon) {
        return (React.createElement(react_md_1.Button
        // icon
        // fixed={fixed}
        // floating={floating}
        // transparent={transparent ? "true" : undefined}
        // small={small ? small.toString() : undefined}
        // large={large ? true : undefined}
        // fixedPosition={fixedPosition}
        , { 
            // icon
            // fixed={fixed}
            // floating={floating}
            // transparent={transparent ? "true" : undefined}
            // small={small ? small.toString() : undefined}
            // large={large ? true : undefined}
            // fixedPosition={fixedPosition}
            style: (0, style_1.getStyle)({
                transparent: transparent,
                secondary: secondary,
                primary: primary,
                tertiary: tertiary,
                disabled: disabled,
                negative: negative,
                fixedPosition: fixedPosition,
                style: style,
            }), onClick: function () {
                if (!disabled)
                    onClick();
            }, className: className }, children));
    }
    return (React.createElement(style_1.ButtonWrapper, { onClick: function () {
            if (!disabled)
                onClick();
        }, style: __assign(__assign(__assign({}, btnSizeStyle), style), bStyle), className: className },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
            iconLeft && (React.createElement("div", { style: { alignSelf: "center" } },
                React.createElement(react_md_1.FontIcon, { style: __assign(__assign({}, style_1.default.iconLeft), style) }, iconLeft))),
            iconRight && (React.createElement("div", { style: { alignSelf: "center", order: 1 } },
                React.createElement(react_md_1.FontIcon, { style: __assign(__assign({}, style_1.default.iconRight), style) }, iconRight))),
            React.createElement("div", { style: { alignSelf: "center" } },
                React.createElement("span", { style: __assign(__assign(__assign({}, style_1.default.text), style), btnSizeTextStyle) }, children)))));
};
exports.default = Button;
