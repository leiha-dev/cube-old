<?php

namespace Cube\Kernel\Core\Registry;

use Cube\Kernel\Core\Ability\Ability;

trait RegistryAbility
{
    use Ability;

    private $items = [ ];

    /**
     * @param array $items
     * @return $this
     */
    protected function focusOn
        ( array & $items )
    {
        $this->items = & $items;
        return $this;
    }

    /**
     * @param callable $cb
     * @return $this
     */
    protected function loop
        ( callable $cb )
    {
        foreach ( $this->items as $key => & $item )
        {
            $cb ( $item , $key , $this );
        }
        return $this;
    }

    /**
     * @param array    $limit
     * @param callable $cb
     * @return bool
     */
    protected function loopWith
        ( array $limit , callable $cb )
        : bool
    {
        return self::iterateWith( $limit , $this->items , $cb );
    }

    /**
     * @param array    $limit
     * @param array    $data
     * @param callable $cb
     * @return bool
     */
    protected static function iterateWith
        ( array $limit , array $data , callable $cb )
        :
        bool
    {
        if ( ( $t = count ( $data ) - ( $limit[ 0 ] + $limit[ 1 ] ) ) == 0 )
        {
            for ( $i = $limit[ 0 ] , $it = $t ; $i < $t ; $i++ )
            {
                if ( ! $cb ( $data , $i , $it-- , $t ) )
                    return false;
            }
            return true;
        }
        return NULL;
    }

    /**
     * @param mixed|array  $key
     * @param mixed        $value
     * @return bool
     */
    protected function set
        ( $value , $key  /* ,, $key2 , .etc.. */ )
        : bool
    {
        return self::iterateWith
        (
            [ 1 , 0 ] , func_get_args( ) ,
            function ( array $args , int $i , int $it , int $t )
                use  ( & $value , & $is )
                : bool
            {
                $key = $args[ $i ];
                $is  = array_key_exists( $key , $this->items );
                if ( $it == 1 ) {
                    if ( ! $is ) {
                        $this->items[ $key ] = $value;
                    } else {
                        $this->items[ $key ] = is_array( $this->items[ $key ] )
                            ?   $this->items[ $key ] + $value
                            : [ $this->items[ $key ] , $value ]
                            ;
                    }
                } else {
                    // @Todo: Finalize method
                }
                return true;
            }
        );
    }

    /**
     * @param mixed|array  $key
     * @param mixed        $value
     * @return bool
     */
    protected function get
        ( & $value , $key  /* ,, $key2 , .etc.. */ )
        : bool
    {
        $value = ( $is = array_key_exists( $key , $value ) )
            ? $this->items[ $key ]
            : NULL
        ;

        $loop = self::iterateWith(
            [ 2 , 0 ] , func_get_args( ) ,
            function ( array $args , int $i , int $it , int $t )
                use  ( & $value , & $is )
                : bool
            {
                $value = ( $is = array_key_exists( $args[ $i ] , $value ) )
                    ? $value[ $args[ $i ] ]
                    : NULL
                ;

                return ! (
                    NULL === $value
                    || ( ( ! is_array( $value ) ) && $it > 1 )
                );
            }
        );

        return ( true === $is
            && ( NULL === $loop || true === $loop )
        );
    }
}