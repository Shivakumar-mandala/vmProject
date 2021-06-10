var bank = /** @class */ (function () {
    function bank(name, id, acc) {
        this.custName = name;
        this.custId = id;
        this.custAcc = acc;
    }
    return bank;
}());
var hdfc = new bank('shiva', 1, 234);
console.log(hdfc.custName, hdfc.custId, hdfc.custAcc);
