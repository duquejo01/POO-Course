<?php

require_once('./Car.php');

class UberBlack extends Car {
    public $typeCarAccepted;
    public $seatsMaterial;

    public function __construct( $license, $driver, $typeCarAccepted, $seatsMaterial ) {
        parent::__construct( $license, $driver );
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
    }

    public function printDataCar() {
        parent::printDataCar();
        if( count( $this->typeCarAccepted ) > 0 ) {
            foreach ($this->typeCarAccepted as $type => $spec ) {
                echo "<i>Type: {$type}</i><br/>";
                if( count( $spec ) > 0 ) {
                    echo '<i> Specifications:</i><br/>';
                    foreach ( $spec as $specKey => $specValue ) {
                        echo "<i>{$specKey}: {$specValue}</i><br/>";
                    }
                }
            }
        }
        if( count( $this->seatsMaterial ) > 0 ) {
            echo '<i> Seats material: ' . implode(', ', $this->seatsMaterial) . '</i>';
        }
    }
}

?>
