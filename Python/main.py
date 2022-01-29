from ast import Try
from uberVan import UberVan
from car import Car
from driver import Driver
from user import User
from uberX import UberX

if __name__ == '__main__':

    print('hola mundo')

    """
    User
    """
    user = User("Tito Duque", "1234567890", "user@demo.com", "usr123")

    """
    Driver
    """
    driver = Driver("Andrea Herrera", "42796545", "driver@demo.com", "drv123")

    car = Car("AMS977", user)
    car.setPassenger(4)
    car.printDataCar()

    car2 = UberX("PPT555", driver, "Dodge", "Attitude")
    car2.setPassenger(3)
    car2.printDataCar()

    """
    UberVan
    """
    carType = {
        'Particular': {'Seats': 4, 'Airbag': 6, 'ABS Brakes': 2}
    }
    seatsMaterial = ['Synthetic fur', 'Fine leather']

    uberVan = UberVan('ABC224', driver, carType, seatsMaterial)
    uberVan.setPassenger(6)
    uberVan.printDataCar()
