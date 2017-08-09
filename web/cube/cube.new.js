//var $cube = {};

/**
 * @return {$cube.class}
 */
var $cube;
$cube = function( inherit )
{
    return new $cube.class( inherit );
};

/**
 * @param {object} context
 * @param {object} inherit
 * @return {object}
 */
$cube.extends = function( context , inherit )
{
    if( inherit ) {
        context.prototype             = Object.create( inherit.prototype );
        context.prototype.constructor = context;
        context.prototype.parent      = function ( ) { return this.__proto__.__proto__; };
    }
    return context;
};

/**
 * @class $cube.facade
 * @constructor
 */
$cube.facade = function( methods )
{
    /**
     * @param {object} obj
     * @return {[]}
     */
    this.check = function( obj )
    {
        var missing = [];
        for ( var i in methods ) {
            if ( ! obj[ methods[ i ] ] ) {
                missing.push( methods[ i ] );
            }
        }

        if( this.parent ) {
            this.parent( ).check( obj );
        }

        return missing;
    }
};

/**
 * @class $cube.class
 * @constructor
 */
$cube.class = function( inherit )
{
    var $append     = [];
    var $extends    = inherit ? inherit : null;
    var $context    = function( ) { };
    //var $implements = [];

    /**
     * @param {function[]} closures
     * @return {$cube.class}
     */
    this.$ = function( closures )
    {
        for ( var i in closures ) {
            $append.push( [ i , closures[ i ] ] );
        }
        return this;
    };

    /**
     * @param {function} closure
     * @return {$cube.class}
     */
    this.context = function( closure )
    {
        $context = closure;
        return this;
    };

    /**
     * @return {$cube.class}
     *//*
    this.implements = function(  )
    {
        for ( var i in arguments ) {
            //@todo : Check for already interface registered
            //for ( var ii in $implements ) {}
            $implements.push( arguments[ i ] );
        }
        return this;
    };*/

    /**
     * @return {function}
     */
    this.end = function( )
    {
        /**
         * @param {function} context
         * @return {function}
         */
        var _extends = function( context )
        {
            if( $extends ) {
                $cube.extends( context , $extends );
            }
            return context;
        };

        /**
         * @param {function} context
         * @return {function}
         */
        var _append = function( context )
        {
            for ( var i in $append ) {
                context.prototype[ $append[ i ][ 0 ] ] = $append[ i ][ 1 ];
            }
            return context;
        };

        /**
         * @param {function} context
         * @return {function}
         */
        var _implements = function( context )
        {
            /*
            var _iterateInterfaces = function ( obj , obj2 ,  cb )
            {
                for ( var i in $implements ) {
                    cb( $implements[ i ] , obj , obj2 );
                }

                if( obj2.parent ){
                    _iterateInterfaces( obj , obj2.parent( ) , cb );
                }
            };

            var missing = [];
            _iterateInterfaces( context , context ,
                function ( facade , obj , obj2 ) {
                    missing = missing.concat( facade.check( obj ) );
                }
            );

            if( missing.length ) {
                console.log( missing );
            }*/

            return context;
        };

        return _implements( _append( _extends( $context ) ) );
    }
};

$c = $cube  ( )
    .context( function(  ) { } )
    .$( {
            'aaaa' : function(  )
            {
                console.log( 'aaaaa' );
            }
        } ).end( );

$d = $cube  ( $c )
    .context( function(  ) { } )
    .$( {
            'eeee' : function(  )
            {
                console.log( 'eeeee' );
            }
        }).end( );

var ee = new $d;

console.log( ee );

ee.aaaa();