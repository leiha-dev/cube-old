<?php

namespace Cube\FireWall;

use Cube\FireWall\Port\Port;
use Cube\Kernel\Wrapper\Wrapper;

abstract class FireWallWrapper
    extends     Wrapper
    implements  FireWall
{
    /**
     * @var Port[]
     */
    protected $ports = Array( );

    /**
     * @param int $port
     * @return Port
     */
    public function listen
        ( int $port )
        : Port
    {
        $this->ports[ $port ] = $this->cube( )
            ->instanceTo( 'Cube\FireWall\Port' )
        ;
        return $this->ports[ $port ];
    }
}