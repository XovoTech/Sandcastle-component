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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
var lodash_1 = require("lodash");
var React = __importStar(require("react"));
var react_md_1 = require("react-md");
var __1 = require("..");
var types_1 = require("../types");
var style_1 = __importDefault(require("./style"));
/**
 * This component let's you set up a button that displays a menu list when clicked
 * @param {object} props The props
 * @returns {function} The component
 */
var MenuButton = function (_a) {
    var _b = _a.position, position = _b === void 0 ? types_1.FixedPositions.BOTTOM_LEFT : _b, icon = _a.icon, children = _a.children, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { return null; } : _d, className = _a.className, _e = _a.visible, visible = _e === void 0 ? false : _e, props = __rest(_a, ["position", "icon", "children", "style", "onClick", "className", "visible"]);
    var id = React.useId();
    return (React.createElement(react_md_1.MenuButton, { id: props.id || id, "data-testid": "Components-MenuButton", icon: true, 
        // position={position}
        // menuItems={children}
        visible: visible, style: style, onClick: onClick, className: className }, icon));
};
exports.MenuButton = MenuButton;
/**
 * The Menu controlled component is used to display a list of children in the List component once the visible prop is true.
 * @param param0
 */
var Menu = function (_a) {
    var _b = _a.position, position = _b === void 0 ? types_1.FixedPositions.BOTTOM_LEFT : _b, id = _a.id, children = _a.children, _c = _a.style, style = _c === void 0 ? {} : _c, label = _a.label, _d = _a.icon, icon = _d === void 0 ? "keyboard_arrow_down" : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { return null; } : _e, visible = _a.visible;
    return (React.createElement(react_md_1.DropdownMenu, { id: id || "DropdownMenu", "data-testid": "Components-Menu", buttonChildren: children, 
        // toggleQuery=".arrdropdown"
        // position={position}
        // onVisibilityChange={() => null}
        style: style, 
        // label={label}
        icon: icon, onClick: onClick },
        React.createElement("div", { style: style }, label ? (React.createElement(__1.Grid, { justify: "space-between" },
            React.createElement(__1.Cell, { align: "center", style: __assign(__assign({}, style_1.default.cell), { textAlign: (0, lodash_1.get)(style, "textAlign", "left") }) }, label),
            icon && (React.createElement(__1.Cell, { align: "center", style: style_1.default.icon },
                React.createElement(react_md_1.FontIcon, { className: "arrdropdown" }, icon))))) : (React.createElement(react_md_1.FontIcon, { className: "arrdropdown" }, icon)))));
};
exports.default = Menu;
