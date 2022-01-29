import { Account } from "./Account";

export class Car {
    private id: Number;
    private license: String;
    private driver: Account;
    protected passenger: Number;

    constructor( license: String, driver: Account) {
        this.license = license;
        this.driver = driver;
    }

    public printDataCar(): void {
        if( this.passenger != null ) {
            console.log('License: ' + this.license + ' Driver: ' + this.driver.name);
        }
    }

    public get getPassenger() : Number {
        return this.passenger;
    }

    public set setPassenger( passenger: Number ) {
        if( passenger != 4 ) {
            console.error("You must assign 4 passengers");
        }
        this.passenger = passenger;
    }

    public get getId() : Number {
        return this.id;
    }

    public set setId( id: Number ) {
        this.id = id;
    }

    public get getLicense() : String {
        return this.license;
    }

    public set setLicense( license: String ) {
        this.license = license;
    }

    public get getDriver() : Account {
        return this.driver;
    }

    public set setDriver( driver: Account ) {
        this.driver = driver;
    }
}
