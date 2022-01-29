import { Car } from './Car';
import { Driver } from "./Driver";
import { User } from "./User";
import { UberX } from './UberX';
import { UberVan } from './UberVan';

export interface ICarType {
    [key: string]: {
        [key: string]: number
    }
}

/**
 * User
 */
const user: User = new User("José Duque", "1234567890", "user@demo.com", "usr123");

/**
 * Driver
 */
const driver: Driver = new Driver("Andrea Herrera", "42796545", "driver@demo.com", "drv123");

/**
 * Vehicles
 */
const car: Car = new Car("JMD123", user);
car.setPassenger = 4;
car.printDataCar();

const car2: UberX = new UberX("QWE456", driver, "Dodge", "Acttitude");
car2.setPassenger = 3;
car2.printDataCar();

/**
 * UberVan
 */
const carType: ICarType = {
    'Particular': { 'Seats': 4, 'Airbag': 6, 'ABS Brakes': 2 }
};
const seatsMaterial: Array<String> = [ 'Synthetic fur', 'Fine leather'];
const uberVan: UberVan = new UberVan( "ABC223", driver, carType, seatsMaterial )
uberVan.setPassenger = 6;
uberVan.printDataCar();