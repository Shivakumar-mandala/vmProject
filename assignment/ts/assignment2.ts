class bank
{
    custid:Number;
    custName:string;
    custAcc:string;
    constructor(id:Number,name:string,acc:string){
        this.custid=id;
        this.custName=name;
        this.custAcc=acc;
    }
    getSavingsDeposit(){
      var bal=30000;
      console.log(`your balance in savings account is ${bal}`)
    }
    getRecurringDeposit(){
      var bal=30000;
      var intrest=0.2*bal;
      console.log(`your intrest for recurring deposit is ${intrest}`)
    }
    getAccountDetails(){
      console.log(this.custid,this.custName,this.custAcc)
    }
}
 let customer1=new bank(1,'shiva','ac1');
 let customer2=new bank(2,'kumar','ac2');
  customer1.getSavingsDeposit();
  customer1.getRecurringDeposit();
  customer1.getAccountDetails();
  customer2.getSavingsDeposit();
  customer2.getRecurringDeposit();
  customer2.getAccountDetails();
  