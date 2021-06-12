import {address } from "./address";
import { bank } from "./bank";
class customer{
    name:string
    constructor(name:string){
        this.name=name;
    }
    getcustomerinfo(){
        console.log(`welcome ${this.name}`);
    }
}
let Customer=new customer('shiva')
let Address=new address('hyderabad')
let Bank=new bank('SBI')
console.log(Customer.getcustomerinfo())
console.log(Address.getaddressinfo())
console.log(Bank.getbankinfo())