"use strict";
exports.__esModule = true;
exports.address = void 0;
var address = /** @class */ (function () {
    function address(city) {
        this.city = city;
    }
    address.prototype.getaddressinfo = function () {
        return "city is ::" + this.city;
    };
    return address;
}());
exports.address = address;
