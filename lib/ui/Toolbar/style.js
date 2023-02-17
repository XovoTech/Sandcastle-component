"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = __importDefault(require("../theme"));
var style = {
    dark: {
        toolbar: {
            width: "100%",
            backgroundColor: theme_1.default.darkColor,
            padding: 5,
        },
        title: {
            width: "100%",
            position: "absolute",
            top: 0,
            height: 0,
            right: 0,
            textAlign: "center",
        },
        titleText: {
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            padding: 15,
            display: "inline-block",
        },
    },
    light: {
        toolbar: {
            width: "100%",
            backgroundColor: "white",
            padding: 5,
        },
        title: {
            width: "100%",
            position: "absolute",
            top: 0,
            height: 0,
            right: 0,
            textAlign: "center",
        },
        titleText: {
            color: theme_1.default.darkColor,
            fontWeight: "bold",
            fontSize: 18,
            padding: 20,
            display: "inline-block",
        },
        leftActionsGroup: {
            color: theme_1.default.darkColor,
        },
    },
};
exports.default = style;
