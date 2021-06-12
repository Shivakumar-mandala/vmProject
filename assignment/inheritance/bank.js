"use strict";
exports.__esModule = true;
exports.bank = void 0;
var bank = /** @class */ (function () {
    function bank(bankname) {
        this.bankname = bankname;
    }
    bank.prototype.getbankinfo = function () {
        return "bank name is::" + this.bankname;
    };
    return bank;
}());
exports.bank = bank;
