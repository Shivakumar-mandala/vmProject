var customer = {
    custid: 1,
    custName: 'shiva',
    custAcc: 'ac1',
    getSavingsDeposit: function () {
        var bal = 30000;
        console.log("your balance in savings account is " + bal);
    },
    getRecurringDeposit: function () {
        var bal = 30000;
        var intrest = 0.2 * bal;
        console.log("your intrest for recurring deposit is " + intrest);
    },
    getAccountDetails: function () {
        console.log(customer.custid, customer.custName, customer.custAcc);
    }
};
customer.getSavingsDeposit();
customer.getRecurringDeposit();
customer.getAccountDetails();
