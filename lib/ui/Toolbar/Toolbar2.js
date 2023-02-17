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
var lodash_1 = require("lodash");
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var __1 = require("..");
var style_1 = __importDefault(require("./style"));
/**
 * The title to show for the toolbar.  A component can be used as well.
 * @param props
 */
var Title = function (_a) {
    var title = _a.title, _b = _a.theme, theme = _b === void 0 ? "dark" : _b;
    return typeof title === "function" ? (React.createElement("span", { style: style_1.default[theme].titleText }, React.createElement(title))) : (React.createElement("span", { style: style_1.default[theme].titleText }, title));
};
/**
 * The array of components to use for the left portion of the toolbar
 * @param props
 */
var LeftActionsGroup = function (props) {
    var _a = props.leftActionsGroup, leftActionsGroup = _a === void 0 ? [] : _a, _b = props.theme, theme = _b === void 0 ? "dark" : _b;
    return (React.createElement(__1.Grid, { style: (0, lodash_1.get)(style_1.default[theme], "leftActionsGroup", {}) }, leftActionsGroup.map(function (Elem, key) { return (React.createElement(__1.Cell, { key: key, align: "center" },
        React.createElement(Elem, __assign({}, props)))); })));
};
/**
 * The array of components to use for the right portion of the toolbar
 * @param props
 */
var RightActionsGroup = function (props) {
    var _a = props.rightActionsGroup, rightActionsGroup = _a === void 0 ? [] : _a, _b = props.theme, theme = _b === void 0 ? "dark" : _b;
    return (React.createElement(__1.Grid, { style: (0, lodash_1.get)(style_1.default[theme], "rightActionsGroup", {}) }, rightActionsGroup.map(function (Elem, key) { return (React.createElement(__1.Cell, { key: key, align: "center" },
        React.createElement(Elem, __assign({}, props)))); })));
};
/**
 * The toolbar component can be used as a fixed header to display a navigation
 * of buttons, title, and actions
 * @todo Bring in the toolbar concepts from the Header object, & use this toolbar in that
 * @param {object} props The props
 * @returns {function} The component
 */
var Toolbar = function (props) {
    var _a = props.theme, theme = _a === void 0 ? "dark" : _a, title = props.title, _b = props.ToolbarContent, ToolbarContent = _b === void 0 ? function () { return React.createElement("div", null); } : _b, _c = props.style, style = _c === void 0 ? {} : _c;
    var themeStyle = style_1.default[theme];
    return (
    // <div
    //   data-testid="Components-Toolbar"
    //   style={{ ...themeStyle.toolbar, ...style }}
    // >
    React.createElement(React.Fragment, null,
        React.createElement(Toolbar_1.default, { "data-testid": "Components-Toolbar", style: __assign(__assign({}, themeStyle.toolbar), style) },
            React.createElement(__1.Grid, { justify: "space-between" },
                React.createElement(__1.Cell, null,
                    React.createElement(LeftActionsGroup, __assign({}, props))),
                React.createElement(__1.Cell, { style: themeStyle.title },
                    React.createElement(Title, { title: title, theme: theme })),
                React.createElement(__1.Cell, null,
                    React.createElement(RightActionsGroup, __assign({}, props))))),
        ToolbarContent && React.createElement(ToolbarContent, __assign({}, props)))
    // </div>
    );
};
exports.default = Toolbar;
