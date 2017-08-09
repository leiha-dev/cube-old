<?php

namespace Cube\FireWall\Port;

use Cube\Kernel\Driver\DriverWrapper;

class PortDriver
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
        return [ ];
    }
}