<?php

namespace WordPress\WebService;

use WordPress\WebService\Engine\Curl;
use WordPress\WebService\Engine\Engine;
use WordPress\WebService\Service\Categories\Categories;
use WordPress\WebService\Service\Posts\Posts;

class WebService
{
    use WebServiceTrait;
}

trait WebServiceTrait
{
    /** @var Engine */ protected $engine;

    /**
     * @return Categories
     */
    public
        function categories( )
        : Categories
    {
        return new Categories( $this->engine( ) );
    }

    /**
     * @return Posts
     */
    public
        function posts( )
        : Posts
    {
        return new Posts( $this->engine( ) );
    }

    /**
     * @return Engine
     */
    protected
        function engine( )
        : Engine
    {
        if( ! $this->engine )
            $this->engine = new Curl( )
                ;

        return $this->engine;
    }

}
