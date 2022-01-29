package Java;

import java.util.ArrayList;
import java.util.Map;

class Main {
    public static void main(String[] args) {

        System.out.println("Hello Java");

        /**
         * User
         */
        User user = new User("José Duque", "1234567890", "user@demo.com", "usr123");

        /**
         * Driver
         */
        Driver driver = new Driver("Andrea Herrera", "42796545", "driver@demo.com", "drv123");

        /**
         * Vehicles
         */
        Car car = new Car("JMD123", user);
        car.setPassenger(4);
        car.printDataCar();

        UberX uberX = new UberX("QWE456", driver, "Chevrolet", "Onyx");
        uberX.setPassenger(4);
        uberX.printDataCar();

        /**
         * UberVan
         */
        Map<String, Map<String, Integer>> carType = Map.of(
                "Particular", Map.of("Seats", 4, "Airbag", 6, "ABS Brakes", 2));

        ArrayList<String> seatsMaterial = new ArrayList<String>();
        seatsMaterial.add("Synthetic fur");
        seatsMaterial.add("Fine Leather");

        UberVan uberVan = new UberVan("ABC223", driver, carType, seatsMaterial);
        uberVan.setPassenger(6);
        uberVan.printDataCar();

    }
}