<?php

namespace Cube\Kernel\Core\Reflector\Closure;

use Cube\Kernel\Core\Core;

class ClosureCore
    extends    Core
    implements Closure
{
    /** @var \ReflectionFunction */ protected $reflection = NULL;

    /**
     * ReflectorCallable constructor.
     * @param callable $callable
     */
    public function __construct
        ( callable $callable )
    {
        $this->reflection = new \ReflectionFunction(
            ( new \ReflectionFunction( $callable ) )->getClosure( )
        );
    }

    /**
     * @param array|NULL $detect
     * @return array
     */
    public function getParameters
        ( array $detect = NULL )
        : array
    {
        $detected    = [ ];
        $cbParameter = function ( \ReflectionParameter $parameter )
            use ( $detect , & $detected )
        {
            $name  = $parameter->name;
            $index = array_search( $name , $detect );
            if( $detect == NULL || $index !== false  )
            {
                $detected[ $index ] = $parameter->getClass( )->name;
            }
        };

        $this->iterateParameters ( $cbParameter );
        return $detected;
    }

    /**
     * @param callable $callback
     */
    protected function iterateParameters
        ( callable $callback )
    {
        foreach ( $this->reflection->getParameters( ) as $parameter )
        {
            $callback( $parameter );
        }
    }
}