"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionStyle = void 0;
var theme_1 = __importDefault(require("../theme"));
var Drawer_types_1 = require("./Drawer.types");
var getPositionStyle = function (position, inline) {
    if (inline === void 0) { inline = false; }
    switch (position) {
        case Drawer_types_1.DrawerPosition.LEFT:
            if (inline)
                return style.inlineStyle;
            else
                return { left: 0 };
        case Drawer_types_1.DrawerPosition.RIGHT:
            return { right: 0 };
        case Drawer_types_1.DrawerPosition.TOP:
            return { top: 0, width: "100%", height: 200 };
        case Drawer_types_1.DrawerPosition.BOTTOM:
            return { bottom: 0, width: "100%", height: 200 };
        default:
            return { left: 0 };
    }
};
exports.getPositionStyle = getPositionStyle;
var style = {
    overlay: {
        position: "fixed",
        background: theme_1.default.darkColor,
        opacity: "0.8",
        height: "100%",
        width: "100%",
        zIndex: 100,
    },
    drawer: {
        top: 0,
        width: 301,
        position: "fixed",
        height: "100vh",
        background: "white",
        zIndex: 101,
        textTransform: "none",
        boxShadow: "0 0 5px 1px rgb(0,0,0,0.25)",
    },
    inlineStyle: {
        border: "1px solid #CCC",
        height: "auto",
    },
    closeBtn: {
        float: "right",
        color: theme_1.default.darkColor,
    },
};
exports.default = style;
