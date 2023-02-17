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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabelStyle = void 0;
var style = {
    label: {
        boxShadow: "none",
        backgroundColor: "transparent",
        margin: "5px 0",
        width: "100%",
    },
    inside: { paddingTop: 20 },
};
var getLabelStyle = function (style) { return ({
    iconStyle: __assign(__assign({}, style), { width: 25, top: 7, position: "relative", display: "inline-block" }),
    labelStyle: {
        display: "inline-block",
        padding: 15,
    },
}); };
exports.getLabelStyle = getLabelStyle;
exports.default = style;
