var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "./atom"], function (require, exports) {
    "use strict";
    var atom_1 = require("./atom");
    var NumberLeaf = (function (_super) {
        __extends(NumberLeaf, _super);
        function NumberLeaf() {
            return _super.apply(this, arguments) || this;
        }
        NumberLeaf.prototype.toString = function (radix) {
            return "{" + this.value.toString(radix) + "}";
        };
        return NumberLeaf;
    }(atom_1.Atom));
    exports.NumberLeaf = NumberLeaf;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NumberLeaf;
});
//# sourceMappingURL=number.js.map