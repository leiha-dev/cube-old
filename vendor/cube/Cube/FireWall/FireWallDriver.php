<?php

namespace Cube\FireWall;

use Cube\Kernel\Driver\Driver;

class FireWallDriver
    extends Driver
{
    /**
     * @return array
     */
    public function configureSubDrivers ( )
        : array
    {
        $nsDefault = $this->getDefaultNameSpace( );
        return [
            $nsDefault.'Port'   => $nsDefault.'Port\PortDriver'    ,
            $nsDefault.'Input'  => $nsDefault.'Input\InputDriver'  ,
            $nsDefault.'Router' => $nsDefault.'Router\RouterDriver',
        ];
    }
}