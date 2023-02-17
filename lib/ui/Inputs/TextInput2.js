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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var index_1 = require("../index");
var style_1 = __importDefault(require("./style"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
/**
 * Text fields allow users to input, edit, and select text
 * @param {object} props The props
 * @returns {function} The component
 */
var TextInput = function (_a) {
    var _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "" : _c, _d = _a.type, type = _d === void 0 ? "" : _d, _e = _a.focusOnMount, focusOnMount = _e === void 0 ? false : _e, _f = _a.selectOnMount, selectOnMount = _f === void 0 ? false : _f, _g = _a.format, format = _g === void 0 ? false : _g, _h = _a.size, size = _h === void 0 ? "small" : _h, _j = _a.onChange, onChange = _j === void 0 ? function () { return null; } : _j, _k = _a.onKeyUp, onKeyUp = _k === void 0 ? function () { return null; } : _k, _l = _a.onClick, onClick = _l === void 0 ? function () { return null; } : _l, _m = _a.onBlur, onBlur = _m === void 0 ? function () { return null; } : _m, _o = _a.focusOnClick, focusOnClick = _o === void 0 ? false : _o, _p = _a.iconLeft, iconLeft = _p === void 0 ? "" : _p, _q = _a.iconRight, iconRight = _q === void 0 ? "" : _q, _r = _a.style, style = _r === void 0 ? {} : _r, _s = _a.label, label = _s === void 0 ? "" : _s, _t = _a.labelStyle, labelStyle = _t === void 0 ? {} : _t, _u = _a.multiline, multiline = _u === void 0 ? false : _u, _v = _a.variant, variant = _v === void 0 ? "outlined" : _v, _w = _a.transparent, transparent = _w === void 0 ? false : _w;
    var _x = __read((0, react_1.useState)(value), 2), curValue = _x[0], setCurValue = _x[1];
    var _y = __read((0, react_1.useState)(true), 2), curLabel = _y[0], setLabel = _y[1];
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (focusOnMount)
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        if (selectOnMount)
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.select();
        setCurValue(value);
    }, []);
    (0, react_1.useEffect)(function () {
        setCurValue(value);
    }, [value]);
    var doFilter = function (value) {
        if (format === "currency")
            return parseFloat(value.replace(/[^0-9.]/g, ""))
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return value;
    };
    var handleChange = function (event) {
        var value = event.target.value;
        var showLabel = size === "large" ? false : curLabel;
        setCurValue(value);
        setLabel(showLabel);
        onChange(event);
    };
    var handleBlur = function (event) {
        var value = doFilter(event.target.value);
        setCurValue(value);
        onBlur(event);
    };
    var handleClick = function (event) {
        var _a;
        if (focusOnClick)
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        onClick(event);
    };
    var sizeInputStyle = size === "large" ? style_1.default.textInputLarge : {};
    var display = (0, lodash_1.get)(style, "display", "block");
    var classes = {
        transparent: {
            '& label.Mui-focused': {
                color: 'transparent',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'transparent',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'transparent',
                },
                '&:hover fieldset': {
                    borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                },
            },
        },
    };
    return (react_1.default.createElement("div", { "data-testid": "Components-TextInput", style: __assign(__assign(__assign({}, style_1.default.container), { display: display }), (label && curLabel) ? { marginTop: 30, marginBottom: 5 } : {}) },
        react_1.default.createElement(TextField_1.default, { variant: size === "large" ? 'standard' : variant, style: __assign(__assign({}, sizeInputStyle), style), InputProps: {
                startAdornment: (react_1.default.createElement(InputAdornment_1.default, { position: "start" }, iconLeft && react_1.default.createElement(index_1.FontIcon, null, iconLeft))),
                endAdornment: (react_1.default.createElement(InputAdornment_1.default, { position: "end" }, iconRight && react_1.default.createElement(index_1.FontIcon, null, iconRight))),
            }, value: curValue, placeholder: placeholder, onChange: handleChange, onKeyUp: onKeyUp, onBlur: handleBlur, onClick: handleClick, type: type, inputRef: inputRef, autoFocus: focusOnMount, multiline: multiline, rows: 4, label: label, fullWidth: true })));
};
exports.default = TextInput;
