"use strict";
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
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var Button_1 = __importDefault(require("../Button"));
var Drawer_types_1 = require("./Drawer.types");
var drawerWidth = 300;
/**
 * A drawer is an expandable sidebar that slides in into your page from a
 * direction of your choosing.
 * @param {object} props The props
 * @returns {function} The component
 */
var Drawer = function (_a) {
    var _b = _a.hidden, hidden = _b === void 0 ? false : _b, _c = _a.position, position = _c === void 0 ? Drawer_types_1.DrawerPosition.LEFT : _c, _d = _a.style, style = _d === void 0 ? { width: drawerWidth } : _d, _e = _a.onClose, onClose = _e === void 0 ? function () { return null; } : _e, _f = _a.showClose, showClose = _f === void 0 ? true : _f, children = _a.children;
    if (!hidden) {
        var CloseButton = function () { return (React.createElement("div", { style: { display: 'inline', textAlign: 'right', position: 'relative', top: 0, marginBottom: -50 } },
            React.createElement(Button_1.default, { icon: true, onClick: onClose }, "close"))); };
        var styles = {
            drawer: {
                flexShrink: 0,
                width: style.width || drawerWidth
            },
            drawerPaper: {
                width: style.width || drawerWidth,
                borderRight: "1px solid rgb(0,0,0,0.25)",
                boxShadow: "0 0 5px 1px rgb(0,0,0,0.25)",
            },
        };
        return (React.createElement(Drawer_1.default, { "data-testid": "Components-Drawer", anchor: position, open: true, onClose: onClose, style: styles.drawer, variant: "permanent" },
            showClose && React.createElement(CloseButton, null),
            children));
    }
    return null;
};
exports.default = Drawer;
