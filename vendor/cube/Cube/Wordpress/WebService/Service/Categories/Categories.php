<?php

namespace WordPress\WebService\Service\Categories;

use WordPress\WebService\Service\Categories\Action\Get;
use WordPress\WebService\Service\Categories\Action\Index;
use WordPress\WebService\Service\Service;

class Categories
    extends Service
{
    /**
     * @return string
     */
    protected
        function getServicePath( )
        : string
    {
        return 'categories';
    }

    /**
     * @param int $id
     * @param array $options
     * @return \stdClass
     * @throws \Exception
     */
    public
    function get( int $id , array $options = [] )
    : \stdClass
    {
        $return = new \stdClass();
        if ( ! ( new Get( $this , $id ))->exec( $options , $return ) ) {
            throw new \Exception( 'Category with id : '.$id.' not found !' );
        };
        return $return;
    }

    /**
     * @return Index
     */
    public
        function list( )
        : Index
    {
        return new Index( $this );
    }
}