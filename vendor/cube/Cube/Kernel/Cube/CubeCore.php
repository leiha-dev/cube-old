<?php

namespace Cube\Kernel\Cube;

use Cube\Kernel\Core\Core;

/**
 * Class CubeCore
 * @package Cube
 */
class CubeCore
    extends     Core
    implements  Cube
{
    public function start( )
    {
        $this->kernel( )->start( );
    }

    /**
     * @param string $module
     * @param array  $args
     * @return Core
     */
    public function instanceTo
        ( string $module , array $args = [] )
        : Core
    {
        return $this->kernel( )->instanceTo( $this , $module , $args );
    }
}