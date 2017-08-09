<?php

namespace WordPress\WebService;

use WordPress\WebService\Engine\Engine;
use WordPress\WebService\Service\Service;

abstract
class Action
{
    /**
     * @var array
     */
    protected $args = [];

    /**
     * @var Service
     */
    protected $service;

    /**
     * @var Engine
     */
    protected $engine;

    /**
     * Action constructor.
     * @param Service $service
     */
    public
        function __construct( Service $service )
    {
        $this->service = $service;
        $this->engine  = $service->getServiceEngine( );
    }

    /**
     * @return string
     */
    protected
        function getEndUrl( )
        : string
    {
        return '';
    }

    /**
     * @return string
     */
    protected
        function getActionUrl( )
    {
        return $this->service->getServiceUrl( )
            .$this->getEndUrl( )
            .$this->engine->formatGETParams( $this->args )
            ;
    }

    /**
     * @param  string  $key
     * @param  mixed   $value
     * @return Action
     */
    protected
        function set( string $key , $value )
    {
        $this->args[ $key ] = $value;
        return $this;
    }

    /**
     * @param  array      $options
     * @param  null|array $return
     * @return bool
     */
    public
        function exec( array $options , & $return = [] )
        : bool
    {
        return $this->engine
            ->exec( $this->getActionUrl( ) , $options , $return )
        ;
    }

    /**
     * @param  array $options
     * @param  callable|null $f
     * @return array
     * @throws \Exception
     */
    public
        function fetch( array $options , callable $f = null )
        : array
    {
        $items = [];
        if ( ! $this->exec( $options , $items ) || ! $f )
            return $items
                ;

        if( is_array( $items ) )
        {
            $values = [];
            foreach ( $items as $item )
                $f( $values , $item )
                ;

            return $values;
        }

        throw new \Exception( $items->message );
    }
}