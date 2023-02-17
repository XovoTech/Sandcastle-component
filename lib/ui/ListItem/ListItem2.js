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
exports.MenuItemLabel = void 0;
var React = __importStar(require("react"));
// import { FontIcon, ListItem as ListItemMD } from "react-md";
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Icon_1 = __importDefault(require("@mui/material/Icon"));
var style_1 = __importStar(require("./style"));
/**
 * This component lets you display multiple line items vertically as a single continuous element.
 * @param {object} props The props
 * @returns {function} The component
 */
var ListItem = function (_a) {
    // const conditionalLIcon = (leftIcon || icon) && {
    //   leftIcon: <Icon>{leftIcon || icon}</Icon>,
    // };
    var leftIcon = _a.leftIcon, icon = _a.icon, 
    // rightIcon,
    _b = _a.onClick, 
    // rightIcon,
    onClick = _b === void 0 ? function () { return null; } : _b, children = _a.children;
    // const conditionalRIcon = rightIcon && {
    //   rightIcon: <Icon>{rightIcon}</Icon>,
    // };
    return (React.createElement(MenuItem_1.default, { "data-testid": "Components-ListItem", onClick: onClick, 
        // {...conditionalLIcon}
        // {...conditionalRIcon}
        // primaryText={children}
        style: style_1.default },
        React.createElement(exports.MenuItemLabel, { icon: icon || leftIcon }, children)));
};
var MenuItemLabel = function (_a) {
    var children = _a.children, icon = _a.icon;
    return (React.createElement("div", { style: style_1.menuItem },
        icon && React.createElement(Icon_1.default, null, icon),
        React.createElement("span", { style: style_1.menuItemLabel }, children)));
};
exports.MenuItemLabel = MenuItemLabel;
exports.default = ListItem;
