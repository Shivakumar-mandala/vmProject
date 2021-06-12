class Person{
    name:string;
    designation:string;
    constructor(name:string, designation:string){
        this.name=name;
        this.designation=designation;
    }
    getInfo(){
        console.log(`Name:${this.name} and Desgination:${this.designation}`)

    }
    learn(){
        console.log('person learn method implementation')
   
    }
}
class Programmer extends Person{
    employer:string;
    constructor(name,designation,employer){
        super(name,designation)
        this.employer=employer;

    }
    coding(){
        console.log('Programer special method implementation..')

    }
    getInfo(){
        console.log(`Name:${this.name} and Designation:${this.designation} and CompanyName:${this.employer}`)
}
parentgetInfo(){
    super.getInfo()
}
}
let programmer = new Programmer("ayesha","SE","VAM")
console.log(programmer.name,programmer.designation,programmer.employer)