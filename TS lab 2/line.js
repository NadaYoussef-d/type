"use strict";
exports.__esModule = true;
var Line = /** @class */ (function () {
    function Line(_point1, _point2) {
        this._point1 = _point1;
        this._point2 = _point2;
    }
    Object.defineProperty(Line.prototype, "point2", {
        get: function () {
            return this._point2;
        },
        set: function (value) {
            this._point2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "point1", {
        get: function () {
            return this._point1;
        },
        set: function (value) {
            this._point1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.Clone = function () {
        return new Line(this.point1, this.point2);
    };
    Line.prototype.Draw = function () {
        this.point1.Draw();
        this.point2.Draw();
    };
    return Line;
}());
exports["default"] = Line;
