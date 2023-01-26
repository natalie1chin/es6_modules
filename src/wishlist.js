import Car from "./car.js";
export default class Wishlist {

    constructor(){
        this.list=[];
        this.nextId=0;
    }
    add(make,model,year){
        const nextCar = new Car(++this.nextId,make,model,year);
        this.list.push(nextCar);
    }
    remove(carId){
        this.list = this.list.filter((element,index,array)=>{
            if (element.id == carId){
                return false;
            }return true;
        });
    }
}