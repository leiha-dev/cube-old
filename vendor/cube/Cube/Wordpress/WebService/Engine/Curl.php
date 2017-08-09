<?php

namespace WordPress\WebService\Engine;

class Curl
    extends Engine
{
    /**
     * @param  string     $url
     * @param  array      $options
     * @param  null|array $return
     * @return bool
     */
    public
        function exec( string $url , array $options , & $return = [] )
        : bool
    {
        $options[ CURLOPT_URL            ] = $url;
        $options[ CURLOPT_RETURNTRANSFER ] = true;

        $curl = curl_init( );

        curl_setopt_array( $curl , $options );

        $response = curl_exec( $curl );

        curl_close( $curl );

        $is = false !== $response;
        if ( $is && ( is_array( $return ) || is_object( $return ) ) )
        {
            $return = json_decode( $response );
        }

        return $is;
    }
}