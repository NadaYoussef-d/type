"use strict";
exports.__esModule = true;
var Rect = /** @class */ (function () {
    function Rect(_point1, _point2, _point3, _point4) {
        this._point1 = _point1;
        this._point2 = _point2;
        this._point3 = _point3;
        this._point4 = _point4;
    }
    Object.defineProperty(Rect.prototype, "point4", {
        get: function () {
            return this._point4;
        },
        set: function (value) {
            this._point4 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "point3", {
        get: function () {
            return this._point3;
        },
        set: function (value) {
            this._point3 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "point2", {
        get: function () {
            return this._point2;
        },
        set: function (value) {
            this._point2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "point1", {
        get: function () {
            return this._point1;
        },
        set: function (value) {
            this._point1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.Clone = function () {
        return new Rect(this.point1, this.point2, this.point3, this.point4);
    };
    Rect.prototype.Draw = function () {
        this.point1.Draw();
        this.point2.Draw();
        this.point3.Draw();
        this.point4.Draw();
    };
    return Rect;
}());
exports["default"] = Rect;
