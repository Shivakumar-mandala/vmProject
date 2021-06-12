export class address{
    city:string
    constructor(city:string){
        this.city=city
    }
    getaddressinfo(){
        return `city is ::${this.city}`;
    }
}