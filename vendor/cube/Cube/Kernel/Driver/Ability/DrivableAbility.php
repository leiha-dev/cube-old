<?php
namespace Cube\Kernel\Core\Driver\Ability;

use Cube\Kernel\Core\Ability\Ability;
use Cube\Kernel\Core\Driver\Driver;

trait DrivableAbility
{
    use Ability;

    /** @var  Driver */ private $driverObj;

    /**
     * @param Driver $driver
     * @return Driver
     */
    public function driver
        ( Driver $driver = NULL )
        : Driver
    {
        if( $driver ) {
            $this->driverObj = $driver;
        }

        return $this->driverObj;
    }
}