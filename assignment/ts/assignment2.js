var bank = /** @class */ (function () {
    function bank(id, name, acc) {
        this.custid = id;
        this.custName = name;
        this.custAcc = acc;
    }
    bank.prototype.getSavingsDeposit = function () {
        var bal = 30000;
        console.log("your balance in savings account is " + bal);
    };
    bank.prototype.getRecurringDeposit = function () {
        var bal = 30000;
        var intrest = 0.2 * bal;
        console.log("your intrest for recurring deposit is " + intrest);
    };
    bank.prototype.getAccountDetails = function () {
        console.log(this.custid, this.custName, this.custAcc);
    };
    return bank;
}());
var customer1 = new bank(1, 'shiva', 'ac1');
var customer2 = new bank(2, 'kumar', 'ac2');
customer1.getSavingsDeposit();
customer1.getRecurringDeposit();
customer1.getAccountDetails();
customer2.getSavingsDeposit();
customer2.getRecurringDeposit();
customer2.getAccountDetails();
