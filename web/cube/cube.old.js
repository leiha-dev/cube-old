var $cube = {};

/**
 * @class $cube.interface
 * @constructor
 */
$cube.interface = function( methods )
{
    this.check = function( obj )
    {
        var missing = [];
        for( var i in methods )
        {
            if( ! obj[ methods[ i ] ] ) {
                missing.push( methods[ i ] );
            }
        }
        return missing;
    }
};

/**
 @param {function} [extend=]
 */
$cube.class = function( extend )
{
    var obj = function( )
    {
        var missing = [];
        // Check Interfaces
        iterateInterfaces( this , this ,
            function ( facade , obj , obj2 ) {
                missing = missing.concat( facade.check( obj ) );
            }
        );

        if( missing.length ){
            console.log( missing );
        }

        //Check construct object
        if( this['$start'] ) {
            this['$start'].apply( this , arguments );
        }
    };

    var func = function( extend )
    {
        if( extend ) {
            obj.prototype             = Object.create( extend.prototype );
            obj.prototype.constructor = obj;
            obj.prototype.$parent     = function ( )
            {
                return this.__proto__.__proto__;
            };
        }
    };

    func( extend );

    return obj.prototype[ '$' ] =
        {
            '$extends'    : function( extend    ) { func( extend ); return this; } ,
            '$'           : function( methods ) {
                for ( var i in methods ) {
                    obj.prototype[ i ] = methods[ i ];
                }
                return obj;
            }
        };
};

/**
 * @class $cube.object
 * @constructor
 */
$cube.object =
    $cube.class ( )
.$({
    /**
    * @param obj
    * @return {boolean}
    */
    'instanceOf' : function ( obj ) { return this instanceof obj; }
});