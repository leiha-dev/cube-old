<?php

namespace WordPress\WebService\Service\Action;

use WordPress\WebService\Action;
use WordPress\WebService\Service\Service;

class Get
    extends Action
{
    protected $args = [

    ];

    /**
     * @var int
     */
    protected $id;

    /**
     * Action constructor.
     * @param Service $service
     * @param int $id
     */
    public
    function __construct( Service $service , int $id )
    {
        parent::__construct( $service );
        $this->id = $id;

    }

    /**
     * @param  string   $key
     * @param  mixed    $value
     * @return Get
     */
    protected
        function set ( string $key , $value )
        : Get
    {
        parent::set( $key , $value );
        return $this;
    }

    /**
     * @return string
     */
    protected
    function getEndUrl( )
    : string
    {
        return ''.$this->id.'/';
    }

    // --

}