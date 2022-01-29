from car import Car


class UberX(Car):
    __brand = str
    __model = str

    def __init__(self, license, driver, brand, model):
        super().__init__(license, driver)
        self.__brand = brand
        self.__model = model

    def printDataCar(self):
        super().printDataCar()
        print('Model: ', self.__model, 'Brand: ', self.__brand)
