<?php 

require_once('./Car.php');
require_once('./UberX.php');
require_once('./UberVan.php');
require_once('./User.php');
require_once('./Driver.php');

/**
 * User
 */
$user = new User('José Duque', '1234567890', 'user@demo.com', 'usr123');

/**
 * Driver
 */
$driver = new Driver('Andrea Herrera', '42796545', 'driver@demo.com', 'drv123');

/**
 * Vehicles
 */
$car = new Car( 'ABS544', $user );
$car->setPassenger(4);
$car->printDataCar();

$uberX = new UberX( 'XYZ123', $driver, 'Dodge', 'Attitude');
$uberX->setPassenger(3);
$uberX->printDataCar();

/**
 * UberVan
 */
$carType = array( 
    "Particular" => array( "Seats" => 4, "Airbag" => 6, "ABS Brakes" => 2 )
);
$seatsMaterial = array( "Synthetic fur", "Fine leather");

$uberVan = new UberVan( "ABC223", $driver, $carType, $seatsMaterial );
$uberVan->setPassenger(6);
$uberVan->printDataCar();


?>