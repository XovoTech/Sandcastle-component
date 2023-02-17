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
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("../Button"));
var style_1 = __importStar(require("./style"));
var Drawer_types_1 = require("./Drawer.types");
/**
 * A drawer is an expandable sidebar that slides in into your page from a
 * direction of your choosing.
 * @param {object} props The props
 * @returns {function} The component
 */
var Drawer = function (_a) {
    var _b = _a.hidden, hidden = _b === void 0 ? false : _b, _c = _a.inline, inline = _c === void 0 ? false : _c, _d = _a.position, position = _d === void 0 ? Drawer_types_1.DrawerPosition.LEFT : _d, _e = _a.style, style = _e === void 0 ? {} : _e, _f = _a.overlay, overlay = _f === void 0 ? true : _f, _g = _a.overlayStyle, overlayStyle = _g === void 0 ? {} : _g, _h = _a.onClose, onClose = _h === void 0 ? function () { return null; } : _h, _j = _a.showClose, showClose = _j === void 0 ? true : _j, children = _a.children;
    if (!hidden) {
        var positionStyle = (0, style_1.getPositionStyle)(position, inline);
        var CloseButton = function () { return (React.createElement(Button_1.default, { style: style_1.default.closeBtn, icon: true, onClick: onClose }, "close")); };
        return (React.createElement("div", { "data-testid": "Components-Drawer", role: "group", style: style },
            overlay && (React.createElement("div", { style: __assign(__assign({}, style_1.default.overlay), overlayStyle), onClick: onClose })),
            React.createElement("div", { style: __assign(__assign(__assign({}, style_1.default.drawer), positionStyle), style) },
                showClose && React.createElement(CloseButton, null),
                children)));
    }
    return null;
};
exports.default = Drawer;
