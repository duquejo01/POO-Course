<?php

require_once('./Car.php');

class UberX extends Car {
    private $brand;
    private $model;

    public function __construct( $license, $driver, $brand, $model ) {
        parent::__construct( $license, $driver );
        $this->brand = $brand;
        $this->model = $model;
    }

    public function printDataCar() {
        parent::printDataCar();
        echo "<i>Model: {$this->model} Brand: {$this->brand}</i><br/>";
    }
}

?>