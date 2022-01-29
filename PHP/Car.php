<?php

class Car {
    private $id;
    private $license;
    private $driver;
    protected $passenger;

    public function __construct( $license, $driver ) {
        $this->license = $license;
        $this->driver = $driver;
    }

    public function printDataCar() {
        if( $this->passenger != null ) {
            echo "License: {$this->license} Driver: {$this->driver->name}<br>";
        }
    }

    public function getPassenger() {
        return $this->passenger;
    }

    public function setPassenger( $passenger ) {
        if( $passenger != 4 ) {
            echo "<i>You must assign 4 passengers</i><br/>";
        }
        $this->passenger = $passenger;
    }    

    public function getId() {
        return $this->id;
    }

    public function setId( $id ) {
        $this->id = $id;
    }

    public function getLicense() {
        return $this->license;
    }

    public function setLicense( $license ) {
        $this->license = $license;
    }

    public function getDriver() {
        return $this->driver;
    }

    public function setDriver( $driver ) {
        $this->driver = $driver;
    }
}

?>