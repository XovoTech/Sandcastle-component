"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = __importDefault(require("../theme"));
var style = {
    overlay: {
        background: theme_1.default.darkColor,
        opacity: 0.8,
        position: "fixed",
    },
    viewPort: {
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 100,
        top: 0,
        left: 0,
    },
    fullscreen: {
        borderRadius: 0,
        marginTop: 0,
    },
    closeBtn: {
        color: theme_1.default.darkColor,
        position: "absolute",
        right: 0,
    },
    dialog: {
        position: "absolute",
        background: "white",
        zIndex: 101,
        borderRadius: 10,
    },
    dialogContent: {
        padding: 40,
    },
    dialogTitle: {
        textAlign: "center",
        padding: "10px 0 20px",
    },
    dialogBody: {
        textAlign: "center",
    },
    dialogFooter: {
        padding: "20px 0 0",
    },
};
exports.default = style;
