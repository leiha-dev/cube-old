<?php
namespace WordPress\WebService\Service;

use WordPress\WebService\Engine\Engine;

abstract
class Service
{
    /** @var string */
    protected $baseUrl = '';
    /** @var string */
    protected $serviceUrl = '';
    /** @var Engine */
    protected $engine;

    /**
     * @return string
     */
    abstract protected
        function getServicePath( )
        : string
    ;

    /**
     * Service constructor.
     * @param Engine $engine
     */
    public
        function __construct( Engine $engine )
    {
        $this->engine     = $engine;
        $this->serviceUrl = $this->baseUrl . $this->getServicePath( ) . '/';
    }

    /**
     * @return string
     */
    public
        function getServiceUrl( )
        : string
    {
        return $this->serviceUrl;
    }

    /**
     * @return Engine
     */
    public
        function getServiceEngine( )
        : Engine
    {
        return $this->engine;
    }
}