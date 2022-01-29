import { Account } from './Account';
import { Car } from './Car';
import { ICarType } from './index';

export class UberBlack extends Car {
    typeCarAccepted: ICarType;
    seatsMaterial: String[];

    constructor( 
        license: String, 
        driver: Account, 
        typeCarAccepted: ICarType, 
        seatsMaterial: String[] ) {
            super( license, driver );
            this.typeCarAccepted = typeCarAccepted;
            this.seatsMaterial = seatsMaterial;
    }

    public printDataCar(): void {
        super.printDataCar();
        if( this.typeCarAccepted ) {
            for (const type in this.typeCarAccepted ) {
                console.log( `Type: ${ type }` );
                const specs =  this.typeCarAccepted[type];
                const specsKeys = Object.keys( specs );
                if( specsKeys.length > 0 ) {
                    console.log('Specifications:');
                    for (const sK in specsKeys ) {
                        console.log( `${specsKeys[sK]}: ${ specs[specsKeys[sK]]}` );
                    }
                }
            }
        }
    }
}