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
var react_router_dom_1 = require("react-router-dom");
var __1 = require("..");
var style_1 = __importDefault(require("./style"));
var Tab = function (_a) {
    var _b = _a.vertical, vertical = _b === void 0 ? false : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.currentTab, currentTab = _d === void 0 ? false : _d, _e = _a.name, name = _e === void 0 ? "" : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { return null; } : _f, _g = _a.href, href = _g === void 0 ? "#" : _g, children = _a.children;
    var activeTabStyle = vertical ? style_1.default.tabActiveVertical : style_1.default.tabActive;
    var isActive = active ? activeTabStyle : null;
    isActive = currentTab === name ? activeTabStyle : isActive;
    return (React.createElement(react_router_dom_1.Link, { onClick: onClick, to: href },
        React.createElement(__1.Cell, { style: __assign(__assign({}, style_1.default.tab), isActive) }, children)));
};
exports.default = Tab;
