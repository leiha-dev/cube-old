<?php

namespace Cube\Kernel\Core;

use Cube\Kernel\Core\Reflector\Closure\ClosureCore;

abstract class Core
    implements CoreFacade
{
    private $reflection;

    /**
     * @param string $class
     * @return Core
     */
    public function instance
        ( string $class = NULL )
        : Core
    {
        if ( ! $this->reflection ) {
            $this->reflection = new \ReflectionClass( $class ?: get_called_class( ) );
        }

        $instance = $this->reflection->newInstanceWithoutConstructor( );
        return $instance;
    }

    /**
     * @param array    $params
     * @param callable $closure
     * @param array    $extracted
     * @return bool
     */
    protected function extractClosureData
        ( array $params , callable $closure , array & $extracted = [ ] )
        : bool
    {
        $extracted = ( new ClosureCore( $closure ) )
            ->getParameters( $params )
        ;

        $is = count( $extracted ) != count( $params );
        if( ! $is )
        {
            // @Todo: Make an Exception
        }
        return $is;
    }

    /**
     * @param string   $class
     * @return bool
     */
    protected function checkClass
        ( string $class )
        : bool
    {
        $is = class_exists ( $class , true );
        if ( ! $is )
        {
            // @Todo: Make an Exception
        }
        return $is;
    }

    /**
     * @param string   $trait
     * @return bool
     */
    protected function checkTrait
        ( string $trait )
        : bool
    {
        $is = trait_exists ( $trait , true );
        if ( ! $is )
        {
            // @Todo: Make an Exception
        }
        return $is;
    }

    /**
     * @param string   $facade
     * @return bool
     */
    protected function checkFacade
        ( string $facade )
        : bool
    {
        $is = interface_exists ( $facade , true );
        if ( ! $is )
        {
            // @Todo: Make an Exception
        }
        return $is;
    }
}