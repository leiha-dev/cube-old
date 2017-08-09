<?php

namespace WordPress\WebService\Service\Posts\Action;

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
        'per_page'   => 100 ,

        /**
         * The terms assigned to the object in the category taxonomy.
         * Context: view, edit
         * @var array
         */
        'categories' => [] ,
    ];

    protected
        function set ( string $key , $value )
        : Index
    {
        parent::set( $key , $value );
        return $this;
    }

    // --

    /**
     * @param  int         $value
     * @return Index
     */
    public
        function setPage ( int $value )
        : Index
    {
        return $this->set( 'page' , $value );
    }

    /**
     * @param  int         $value
     * @return Index
     */
    public
        function setPerPage ( int $value )
        : Index
    {
        return $this->set( 'per_page' , $value );
    }

    /**
     * @param  int[]       $values
     * @return Index
     */
    public
        function setCategories ( array $values = [] )
        : Index
    {
        return $this->set( 'categories' , $values );
    }
}