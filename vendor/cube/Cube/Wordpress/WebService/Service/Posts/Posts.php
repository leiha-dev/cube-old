<?php

namespace WordPress\WebService\Service\Posts;

use WordPress\WebService\Service\Posts\Action\Get;
use WordPress\WebService\Service\Posts\Action\Index;
use WordPress\WebService\Service\Service;

class Posts
    extends Service
{
    /**
     * @return string
     */
    protected
        function getServicePath( )
        : string
    {
        return 'posts';
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
            throw new \Exception( 'Post with id : '.$id.' not found !' );
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