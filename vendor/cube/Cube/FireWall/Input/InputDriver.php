<?php

namespace Cube\FireWall\Input;

use Cube\Kernel\Driver\DriverWrapper;

class InputDriver
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