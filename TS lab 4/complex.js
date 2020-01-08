"use strict";
exports.__esModule = true;
var Complex = /** @class */ (function () {
    function Complex(_real, _imag) {
        this._real = _real;
        this._imag = _imag;
    }
    Object.defineProperty(Complex.prototype, "real", {
        get: function () {
            return this._real;
        },
        set: function (value) {
            this._real = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Complex.prototype, "imag", {
        get: function () {
            return this._imag;
        },
        set: function (value) {
            this._imag = value;
        },
        enumerable: true,
        configurable: true
    });
    Complex.prototype.clone = function () {
        return new Complex(this.real, this.imag);
    };
    return Complex;
}());
exports["default"] = Complex;
