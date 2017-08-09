var $cube = {};

/**
 @param {function} [extend=]
 */
$cube.class = function( extend )
{
    var obj = function( )
    {
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