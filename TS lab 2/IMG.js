"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var img = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            img[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._img = img;
        return _this;
    }
    Object.defineProperty(Image.prototype, "img", {
        get: function () {
            return this.img;
        },
        set: function (value) {
            this.img = value;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.clone = function () {
        return new (Image.bind.apply(Image, [void 0].concat(this._img)))();
    };
    Image.prototype.Draw = function () {
        for (var i = 0; i < this._img.length; i++) {
            this._img[i].Draw();
        }
    };
    return Image;
}(shape_1["default"]));
exports["default"] = Image;
