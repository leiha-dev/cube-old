<?php

namespace WordPress\WebService\Service\Categories\Action;

use WordPress\WebService\Action;

class Index
    extends Action
{
    protected $args = [
        /**
         * Current page of the collection
         * @var int
         */
        'page'       =>  1 ,

        /**
         * Maximum number of items to be returned in result set.
         * @var int
         */
        'per_page' => 100
    ];

    /**
     * @param  string   $key
     * @param  mixed    $value
     * @return Index
     */
    protected
        function set ( string $key , $value )
        : Index
    {
        parent::set( $key , $value );
        return $this;
    }

    // --
}