import { Account } from "./Account";
import { Car } from "./Car";

export class UberX extends Car {
    brand: String;
    model: String;

    constructor( license: String, driver: Account, brand: String, model: String ) {
        super( license, driver );
        this.brand = brand;
        this.model = model;
    }

    public printDataCar(): void {
        super.printDataCar();
        console.log('Model: ' + this.model + ' Brand: ' + this.brand);
    }
}