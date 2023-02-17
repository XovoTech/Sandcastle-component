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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var React = __importStar(require("react"));
var __1 = require("..");
var style_1 = __importStar(require("./style"));
var MultiSelector = function (_a) {
    var _b = _a.choice, choice = _b === void 0 ? false : _b, _c = _a.onChange, onChange = _c === void 0 ? function () { return null; } : _c, _d = _a.items, items = _d === void 0 ? [] : _d, _e = _a.columns, columns = _e === void 0 ? 3 : _e, _f = _a.showOptions, showOptions = _f === void 0 ? false : _f;
    var _g = __read(React.useState(""), 2), curChoice = _g[0], setCurChoice = _g[1];
    var toggleSelect = function (itm) {
        if (curChoice) {
            var index = curChoice.findIndex(function (i) { return i.id === itm.id; });
            if (index > -1) {
                // remove it
                setCurChoice(__spreadArray(__spreadArray([], __read(curChoice.slice(0, index)), false), __read(curChoice.slice(index + 1)), false));
            }
        }
        else {
            setCurChoice(__spreadArray(__spreadArray([], __read(curChoice), false), [itm], false));
        }
    };
    var toggleTrial = function (itm) {
        var item = curChoice.filter(function (i) { return i.id === itm.id; })[0];
        var newItem = (0, lodash_1.has)(item, "trial")
            ? (0, lodash_1.omit)(itm, "trial")
            : __assign(__assign({}, itm), { trial: { product_id: item.id } });
        var index = curChoice.findIndex(function (c) { return c.id === item.id; });
        var newChoice = __spreadArray(__spreadArray(__spreadArray([], __read(curChoice.slice(0, index)), false), [
            newItem
        ], false), __read(curChoice.slice(index + 1)), false);
        setCurChoice(newChoice);
        onChange(newChoice);
    };
    var setStepNum = function (itm) {
        var item = curChoice.filter(function (i) { return i.id === itm.id; })[0];
        var step_num = window.prompt("Set the Step Number", (0, lodash_1.has)(item, "step_num") ? item.step_num : 0);
        if (step_num) {
            var index = curChoice.findIndex(function (i) { return i.id === itm.id; });
            var updatedItem = step_num === "0" ? (0, lodash_1.omit)(itm, "step_num") : __assign(__assign({}, itm), { step_num: step_num });
            var newChoice = __spreadArray(__spreadArray(__spreadArray([], __read(curChoice.slice(0, index)), false), [
                updatedItem
            ], false), __read(curChoice.slice(index + 1)), false);
            setCurChoice(newChoice);
            onChange(newChoice);
        }
    };
    var setPic = function (itm) {
        var _a, _b;
        var item = curChoice.filter(function (i) { return i.id === itm.id; })[0];
        var image = window.prompt("Please enter the URL of your image", (0, lodash_1.get)(item, "image", ""));
        if (image) {
            var index = curChoice.findIndex(function (i) { return i.id === itm.id; });
            var updatedItem = !image ? (0, lodash_1.omit)(itm, "image") : __assign(__assign({}, itm), { image: image });
            var newChoice = __spreadArray(__spreadArray(__spreadArray([], __read((_a = choice === null || choice === void 0 ? void 0 : choice.toString()) === null || _a === void 0 ? void 0 : _a.slice(0, index)), false), [
                updatedItem
            ], false), __read((_b = choice === null || choice === void 0 ? void 0 : choice.toString()) === null || _b === void 0 ? void 0 : _b.slice(index + 1)), false);
            setCurChoice(newChoice);
            onChange(newChoice);
        }
    };
    return (React.createElement("div", { "data-testid": "Components-MultiSelector" },
        React.createElement(__1.Grid, { wrap: true, justify: "stretch", style: style_1.default.multiSelectorContainer },
            !items.length && (React.createElement("div", { style: style_1.default.noItemsContainer }, "No Items Found. Please Try Again")),
            items.map(function (itm) {
                var isSelected = (0, lodash_1.find)(curChoice, function (i) { return parseInt(i.id, 10) === parseInt(itm.id, 10); });
                var isTrial = (0, lodash_1.find)(curChoice, function (i) {
                    return parseInt(i.id, 10) === parseInt(itm.id, 10) && (0, lodash_1.has)(i, "trial");
                });
                return (React.createElement(__1.Cell, { style: { width: "".concat(100 / columns, "%") }, key: itm.id, onClick: function () { return toggleSelect(itm); } },
                    React.createElement(style_1.CellStyle, { style: style_1.default.cellStyle },
                        React.createElement(__1.Grid, { justify: "space-between", style: style_1.default.cellContainer },
                            React.createElement(__1.Cell, null,
                                React.createElement(__1.FontIcon, { style: style_1.default.fontIcon }, isSelected ? "check_circle" : "add_circle_outline")),
                            React.createElement(__1.Cell, { style: style_1.default.cell }, itm.name),
                            showOptions ? (React.createElement(__1.Cell, { onClick: function (e) { return e.stopPropagation(); } },
                                React.createElement(__1.MenuButton, { icon: "more_vert" },
                                    React.createElement(__1.ListItem, { onClick: function () {
                                            toggleTrial(itm);
                                        } }, !isTrial
                                        ? "Process as a Trial"
                                        : "Do not process as a trial"),
                                    React.createElement(__1.ListItem, { onClick: function () { return setStepNum(itm); } }, "Set the Funnel 'Step Number'"),
                                    React.createElement(__1.ListItem, { onClick: function () { return setPic(itm); } }, "Set the Product's Picture")))) : null))));
            }))));
};
exports.default = MultiSelector;
