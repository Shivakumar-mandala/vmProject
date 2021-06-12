"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var bank_1 = require("./bank");
var customer = /** @class */ (function () {
    function customer(name) {
        this.name = name;
    }
    customer.prototype.getcustomerinfo = function () {
        console.log("welcome " + this.name);
    };
    return customer;
}());
var Customer = new customer('shiva');
var Address = new address_1.address('hyderabad');
var Bank = new bank_1.bank('SBI');
console.log(Customer.getcustomerinfo());
console.log(Address.getaddressinfo());
console.log(Bank.getbankinfo());
