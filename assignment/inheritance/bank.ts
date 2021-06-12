export class bank{
    bankname:string
    constructor(bankname:string){
        this.bankname=bankname
    }
    getbankinfo(){
        return `bank name is::${this.bankname}`;
    }
}