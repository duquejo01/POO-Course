from car import Car


class UberVan(Car):
    __typeCarAccepted = []
    __seatsMaterial = []

    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.__typeCarAccepted = typeCarAccepted
        self.__seatsMaterial = seatsMaterial

    def setPassenger(self, passenger):
        if passenger != 6:
            print('You must assign 6 passengers')
        self._passenger = passenger

    def printDataCar(self):
        super().printDataCar()

        if len(self.__typeCarAccepted) > 0:

            for type in self.__typeCarAccepted:
                print('Type: ', type)
                specs = self.__typeCarAccepted[type]
                if len(specs) > 0:
                    print('Specifications:')
                    for spec in specs:
                        print(spec, ":", specs[spec])

        if len(self.__seatsMaterial) > 0:
            print('Seats material: ', ', '.join(self.__seatsMaterial))
