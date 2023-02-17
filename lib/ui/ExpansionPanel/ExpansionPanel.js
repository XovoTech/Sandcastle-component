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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_md_1 = require("react-md");
var style_1 = __importStar(require("./style"));
var Label = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? false : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.label, label = _d === void 0 ? "" : _d;
    if (icon) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(react_md_1.FontIcon, { style: (0, style_1.getLabelStyle)(style)["iconStyle"] }, icon),
            react_1.default.createElement("span", { style: (0, style_1.getLabelStyle)(style)["labelStyle"] }, label)));
    }
    return react_1.default.createElement("span", null, label);
};
/**
 * Expansion panels contain content and allow lightweight editing of an element.
 * @param {object} props The props
 * @returns {function} The component
 */
var ExpansionPanel = function (_a) {
    var icon = _a.icon, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.label, label = _c === void 0 ? "" : _c, _d = _a.isExpanded, isExpanded = _d === void 0 ? false : _d, footer = _a.footer, _e = _a.onExpandToggle, onExpandToggle = _e === void 0 ? function () { return null; } : _e, children = _a.children;
    var id = (0, react_1.useId)();
    return (react_1.default.createElement(react_md_1.ExpansionList, { onKeyDown: function () { } },
        react_1.default.createElement(react_md_1.ExpansionPanel, { expanded: isExpanded, id: id, 
            // footer={footer}
            // label={<Label icon={icon} style={style} label={label} />}
            style: __assign(__assign({}, style_1.default.label), style), onExpandClick: function () { return onExpandToggle(!isExpanded); } },
            react_1.default.createElement("div", { "data-testid": "Components-ExpansionPanel", style: style_1.default.inside }, children))));
};
exports.default = ExpansionPanel;
