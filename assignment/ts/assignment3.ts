class bank{
    custName:string;
    custId:Number;
    custAcc:Number;
    constructor(name:string,id:number,acc:number){
        this.custName=name;
        this.custId=id;
        this.custAcc=acc;

    }
}
    let hdfc=new bank('shiva',1,234);
    console.log(hdfc.custName,hdfc.custId,hdfc.custAcc)

    