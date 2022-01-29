package Java;

import java.util.ArrayList;
import java.util.Map;

public class UberVan extends Car {
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberVan(
            String license,
            Account driver,
            Map<String, Map<String, Integer>> typeCarAccepted,
            ArrayList<String> seatsMaterial) {
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }

    @Override
    public void setPassenger(Integer passenger) {
        if (passenger != 6) {
            System.out.println("You must assign 6 passengers");
        }
        this.passenger = passenger;
    }

    @Override
    void printDataCar() {
        super.printDataCar();
        if (this.typeCarAccepted.size() > 0) {
            for (Map.Entry<String, Map<String, Integer>> type : this.typeCarAccepted.entrySet()) {

                String key = type.getKey(); // Key Spec
                Map<String, Integer> values = type.getValue(); // Key Values Spec

                System.out.println("Type: " + key);

                if (values.entrySet().size() > 0) {
                    System.out.println("Specifications: ");
                    for (Map.Entry<String, Integer> value : values.entrySet()) {
                        System.out.println(value.getKey() + ": " + value.getValue());
                    }
                }
            }
        }
        if (this.seatsMaterial.size() > 0) {
            String seatsMaterials = String.join(", ", this.seatsMaterial);
            System.out.println("Seats material: " + seatsMaterials);
        }
    }
}
