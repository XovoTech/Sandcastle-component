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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var __1 = require("..");
var style_1 = __importDefault(require("./style"));
var DropdownSelector = function (_a) {
    var _b = _a.choice, choice = _b === void 0 ? false : _b, _c = _a.text, text = _c === void 0 ? "Choose an item..." : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return null; } : _d, _e = _a.items, items = _e === void 0 ? [] : _e, _f = _a.showId, showId = _f === void 0 ? false : _f;
    var _g = __read(React.useState(""), 2), curChoice = _g[0], setCurChoice = _g[1];
    React.useEffect(function () {
        setCurChoice(choice);
    }, [choice]);
    var noteListSelection = function (id) {
        setCurChoice(id);
        onChange(id);
    };
    var chosenItem = curChoice
        ? items.filter(function (i) { return i.id === curChoice; })
        : [{ name: text }];
    return (React.createElement("div", { "data-testid": "Components-DropDownSelector" },
        React.createElement(__1.Menu, { label: chosenItem.length ? chosenItem[0].name : text, style: style_1.default.menu },
            React.createElement("div", { style: style_1.default.innerMenuContainer }, items.map(function (itm) { return (React.createElement(__1.ListItem, { key: itm.id, onClick: function () { return noteListSelection(itm.id); } },
                showId ? "(".concat(itm.id, ") ") : null,
                itm.name)); })))));
};
exports.default = DropdownSelector;
