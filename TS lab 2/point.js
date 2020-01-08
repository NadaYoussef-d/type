"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "y1", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            this.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "x1", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.Clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.Draw = function () {
        console.log('.');
    };
    return Point;
}());
exports["default"] = Point;
