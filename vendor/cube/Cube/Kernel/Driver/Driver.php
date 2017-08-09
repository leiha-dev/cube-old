<?php

namespace Cube\Kernel\Core\Driver;

use Cube\Kernel\Core\Device\Device;

interface Driver
{
    /**
     * @return Device
     */
    public function device ( )
        : Device
        ;
}