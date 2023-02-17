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
exports.DialogFooter = exports.DialogBody = exports.DialogTitle = void 0;
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var __1 = require("../");
var style_1 = __importDefault(require("./style"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
/**
 * A title to display for the popup window
 * @param param0
 */
var DialogTitle = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, children = _a.children;
    return (React.createElement(DialogTitle_1.default, { "data-testid": "Components-DialogTitle", style: __assign(__assign({}, style_1.default.dialogTitle), style) }, children));
};
exports.DialogTitle = DialogTitle;
/**
 * The content of the popup window
 * @param param0
 */
var DialogBody = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, children = _a.children;
    return (React.createElement(DialogContent_1.default, { "data-testid": "Components-DialogBody", style: __assign(__assign({}, style_1.default.dialogBody), style) }, children));
};
exports.DialogBody = DialogBody;
/**
 * The content for the footer of the popup window
 * @param param0
 */
var DialogFooter = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, children = _a.children;
    return (React.createElement("div", { "data-testid": "Components-DialogFooter", style: __assign(__assign({}, style_1.default.dialogFooter), style) }, children));
};
exports.DialogFooter = DialogFooter;
/**
 * Dialogs are popup windows that are focused on a specific task.
 * They inform users about critical information or require them to make decisions.
 * @param {object} props The props
 * @returns {function} The component
 */
var Dialog = function (_a) {
    var _b = _a.fullscreen, fullscreen = _b === void 0 ? false : _b, _c = _a.overlayStyle, overlayStyle = _c === void 0 ? {} : _c, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.onClose, onClose = _e === void 0 ? function () { return null; } : _e, _f = _a.closeHref, closeHref = _f === void 0 ? "#" : _f, children = _a.children, _g = _a.centered, centered = _g === void 0 ? true : _g, _h = _a.overlay, overlay = _h === void 0 ? true : _h;
    return (React.createElement(Dialog_1.default, { "data-testid": "Components-Dialog", role: "group", open: true, onClose: closeHref === "#" ? onClose : function () { return window.location.href = closeHref; }, maxWidth: "lg" },
        React.createElement(react_router_dom_1.Link, { to: closeHref },
            React.createElement(__1.Button, { style: style_1.default.closeBtn, icon: true, onClick: onClose }, "close")),
        React.createElement("div", { style: style_1.default.dialogContent }, children)));
};
exports.default = Dialog;
