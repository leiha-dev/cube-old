/**
 * @class $cube.http.router
 * @extends $cube.collection.bag
 * @constructor
 */
$cube.http.router =
    $cube.class( $cube.collection.bag )
.$({
   'module' : function( moduleName )
   {
       var module = new $cube.http.router.module( );
       this.set( moduleName , module );
       return module;
   }
});

/**
 * @class $cube.http.router.module
 * @extends $cube.collection.bag
 * @constructor
 */
$cube.http.router.module =
    $cube.class( $cube.collection.bag )
.$({
   'controller' : function( controllerName )
   {
       var controller = new $cube.http.router.module.controller( );
       this.set( controllerName , controller );
       return controller;
   }
});

/**
 * @class $cube.http.router.module.controller
 * @extends $cube.collection.bag
 * @constructor
 */
$cube.http.router.module.controller =
    $cube.class( $cube.collection.bag )
.$({
   'action' : function( actionName )
   {
       var action = new $cube.http.router.module.controller.action( );
       this.set( actionName , action );
       return action;
   }
});

/**
 * @class $cube.http.router.module.controller.action
 * @extends $cube.collection.bag
 * @constructor
 */
$cube.http.router.module.controller.action =
    $cube.class( $cube.collection.bag )
.$({

});

/**
 * @class $cube.http.router.module.controller.action.service
 * @extends $cube.scheduler.service
 * @constructor
 */
$cube.http.router.module.controller.action.service =
    $cube.class( $cube.scheduler.service )
.$({

});

/**
 * @return {string}
 */
$cube.http.router.module.controller.action.service.route =
    $cube.class( $cube.scheduler.service )
.$({
   /**
    *
    * @return {string}
    */
   'url' : function(  )
   {
       var url = '';
       return url
           + ( -1 === url.indexOf( '?' )  ? '?' : '')
           ;
   },

    /**
     *
     * @param {string} url
     * @param {string} subPattern
     * @param {string} replaceWith
     * @param vars
     * @return {*}
     */
    'replace' : function( url , subPattern , replaceWith , vars )
    {
        var matches   = url.match( new RegExp( subPattern ) );
        if ( null !== matches ) {

            matches[ 1 ] = matches[ 1 ].replace(
                /\$([$])?([\w\d]+)/ ,
                /**
                 *
                 * @param {string}           found
                 * @param {string|undefined} keepKey
                 * @param {string}           capture
                 * @return {string}
                 */
                function( found , keepKey , capture )
                {
                    return vars[ capture ]
                        ? ( keepKey ? capture +'/' : '' ) + vars[ capture ]
                        : found
                        ;
                }
            );
            return url.replace( matches[ 0 ] , replaceWith + matches[ 1 ] );
        }
        return url;
    },

    /**
     * @param  {{}} qs
     * @return {string}
     */
    'queryString' : function( qs )
    {
        var qstmp = [];
        for( var i in qs ) {
            qstmp.push( i +'='+ qs[ i ] )
        }
        return qstmp.length ? '&'+ qstmp.join( '&' ) : '';
    }
});