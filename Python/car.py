from account import Account


class Car:
    __id = int
    __license = str
    __driver = Account('', '', '', '')
    _passenger = int(0)

    def __init__(self, license, driver):
        self.license = license
        self.driver = driver

    def printDataCar(self):
        if(self._passenger != 0):
            print('License:', self.license, ' Driver:', self.driver.name)

    def getPassenger(self):
        return self._passenger

    def setPassenger(self, passenger):
        if (passenger != 4):
            print('You must assign 4 passengers')
        self._passenger = passenger

    def getId(self):
        return self.__id

    def setId(self, id):
        self.__id = id

    def getLicense(self):
        return self.__license

    def setLicense(self, license):
        self.__license = license

    def getDriver(self):
        return self.__driver

    def setDriver(self, driver):
        self.__driver = driver
