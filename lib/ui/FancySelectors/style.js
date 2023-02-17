"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellStyle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var style = {
    menu: { width: "100%" },
    innerMenuContainer: { height: 200, overflowY: "scroll" },
    multiSelectorContainer: { maxHeight: 250 },
    noItemsContainer: { padding: 30, textAlign: "center", width: "100%" },
    cellStyle: { height: 65 },
    cellContainer: { padding: 10 },
    cell: { width: "100%", textAlign: "left" },
    fontIcon: { marginTop: 0, marginRight: 10 },
};
exports.CellStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: left;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  cursor: pointer;\n  margin: 5px;\n  position: relative;\n  &:hover {\n    background-color: #eee;\n    color: black;\n  }\n"], ["\n  text-align: left;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  cursor: pointer;\n  margin: 5px;\n  position: relative;\n  &:hover {\n    background-color: #eee;\n    color: black;\n  }\n"])));
exports.default = style;
var templateObject_1;
