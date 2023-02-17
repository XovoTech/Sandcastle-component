"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGridStyle = exports.generateCellStyle = void 0;
var generateCellStyle = function (_a) {
    var _b = _a.grow, grow = _b === void 0 ? 0 : _b, _c = _a.basis, basis = _c === void 0 ? "auto" : _c, _d = _a.align, align = _d === void 0 ? "auto" : _d, _e = _a.order, order = _e === void 0 ? 0 : _e;
    return ({
        order: order,
        flexGrow: grow,
        flexBasis: basis,
        alignSelf: align === "start" || align === "end" ? "flex-".concat(align) : align,
    });
};
exports.generateCellStyle = generateCellStyle;
var generateGridStyle = function (_a) {
    var wrap = _a.wrap, justify = _a.justify, align = _a.align;
    return ({
        display: "flex",
        flexWrap: wrap ? "wrap" : "nowrap",
        justifyContent: justify === "start" || justify === "end" ? "flex-".concat(justify) : justify,
        alignContent: align === "start" || align === "end" ? "flex-".concat(align) : align,
    });
};
exports.generateGridStyle = generateGridStyle;
