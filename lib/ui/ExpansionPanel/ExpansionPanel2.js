"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Accordion_1 = __importDefault(require("@mui/material/Accordion"));
var AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
var AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
var AccordionActions_1 = __importDefault(require("@mui/material/AccordionActions"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var Icon_1 = __importDefault(require("@mui/material/Icon"));
var style_1 = require("./style");
var Label = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? false : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.label, label = _d === void 0 ? "" : _d;
    if (icon) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Icon_1.default, { style: (0, style_1.getLabelStyle)(style)["iconStyle"] }, icon),
            react_1.default.createElement("span", { style: (0, style_1.getLabelStyle)(style)["labelStyle"] }, label)));
    }
    return react_1.default.createElement("span", null, label);
};
/**
 * Expansion panels contain content and allow lightweight editing of an element.
 * @param {object} props The props
 * @returns {function} The component
 */
var Accordion = function (_a) {
    var icon = _a.icon, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.label, label = _c === void 0 ? "" : _c, _d = _a.isExpanded, isExpanded = _d === void 0 ? false : _d, footer = _a.footer, _e = _a.onExpandToggle, onExpandToggle = _e === void 0 ? function () { return null; } : _e, children = _a.children;
    var classes = {
        root: {
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        details: {
            backgroundColor: "rgb(238, 238, 238)",
            margin: 5
        }
    };
    return (react_1.default.createElement(Accordion_1.default, { defaultExpanded: isExpanded, style: classes.root, onChange: function (e, isExpanded) { return onExpandToggle(isExpanded); } },
        react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null), "aria-controls": "panel1a-content", id: "panel1a-header", style: classes.details },
            react_1.default.createElement(Label, { icon: icon, label: label })),
        react_1.default.createElement(AccordionDetails_1.default, { "data-testid": "Components-ExpansionPanel" },
            react_1.default.createElement("div", { style: { width: "100%" } }, children)),
        footer && react_1.default.createElement(AccordionActions_1.default, null, footer)));
};
exports.default = Accordion;
