<?php

namespace WordPress\WebService\Engine;

abstract
class Engine
{
    /**
     * @param  string     $url
     * @param  array      $options
     * @param  null|array $return
     * @return bool
     */
    abstract public
        function exec( string $url , array $options , & $return = [] )
        : bool
    ;

    /**
     * @param array $params
     * @return string
     */
    public
        function formatGETParams( array $params )
        : string
    {
        $ret = '';
        if( count( $params ) )
        {
            $ret = '?'.http_build_query( $params );
        }
        return $ret;
    }
}