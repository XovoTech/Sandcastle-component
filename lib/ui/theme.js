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
exports.ToolTip = exports.fieldset = exports.theme = void 0;
var lodash_1 = require("lodash");
var config_1 = __importDefault(require("@/10mf/config"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var styles_1 = require("@mui/material/styles");
exports.theme = __assign({ primaryColor: "#0082d2", secondaryColor: "#f14b59", disabledColor: "#5b5b5b", tertiaryColor: "#169e7d", darkColor: "#222", lightColor: "#ddd", altColors: [
        "#f26e81",
        "#ff5a4e",
        "#bfcd6b",
        "#80638e",
        "#77c7e5",
        "#ffaa9c",
        "#f8d46d",
        "#666666",
        "#6be1c3",
        "#f87759",
        "#9d79b4",
    ] }, (0, lodash_1.get)(config_1.default, "app.colors", {}));
exports.fieldset = {
    border: "1px solid #ccc",
    marginBottom: 20,
    padding: "10px 15px",
    textAlign: "left",
};
exports.ToolTip = (0, styles_1.withStyles)(function (theme) { return ({
    tooltip: {
        fontSize: 14,
        padding: 5,
    },
}); })(Tooltip_1.default);
exports.default = exports.theme;
