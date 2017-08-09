<?php

namespace Cube\FireWall\Router;

use Cube\Kernel\Driver\DriverWrapper;

class RouterDriver
    extends DriverWrapper
{
    public function __construct (  )
    {
        parent::__construct ( __CLASS__ );
    }

    /**
     * @return array
     */
    public function configureSubDrivers () : array
    {
        return [ ] ;
    }
}