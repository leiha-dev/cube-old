( new function()
{
    /**
     * @class $Router
     * @constructor
     */
    var $Router = function()
    {
        var $oRouter = this;

        /**
         * @class $Configurator
         * @constructor
         */
        var $Configurator = function( parent , object )
        {
            var $oConfigurator = this;

            /**
             * @class $Bag
             * @constructor
             */
            var $Bag = function( parent )
            {
                /**
                 * @type {{}}
                 */
                var items = {};

                /**
                 *
                 * @param {string} key
                 * @return {*}
                 */
                this.get =
                    function( key )
                    {
                        return items[ key ] ? items[ key ] : null;
                    };

                /**
                 *
                 * @return {{}}
                 */
                this.getAll =
                    function()
                    {
                        return items;
                    };

                /**
                 *
                 * @param {string} key
                 * @param {*} value
                 * @return {$Bag}
                 */
                this.set =
                    function( key , value )
                    {
                        items[ key ] = value;
                        return this;
                    };

                /**
                 *
                 * @return {*}
                 */
                this.end =
                    function()
                    {
                        return parent;
                    };
            };

            /**
             * @type {$Bag}
             */
            var $globals = new $Bag( $oConfigurator );

            /**
             * @type {$Bag}
             */
            var $params = new $Bag( $oConfigurator );

            /**
             * @type {$Bag}
             */
            var $paramsQS = new $Bag( $oConfigurator );

            /**
             * @class $Registry
             * @constructor
             */
            var $registry = new function()
            {
                /**
                 * @type {{}}
                 */
                var items = {};

                /**
                 *
                 * @param {string} key
                 * @return {*}
                 */
                this.get =
                    function( key )
                    {
                        if ( !items[ key ] ) {
                            items[ key ] = new object( key );
                        }

                        return items[ key ];
                    };

                /**
                 *
                 * @param {function} callback
                 */
                this.iterate =
                    function( callback )
                    {
                        for ( var itemName in items ) {
                            callback( items[ itemName ] , itemName , items );
                        }
                    }
            };

            /**
             * @class $Listeners
             * @constructor
             */
            var $listeners = new function( )
            {   var $oListeners = this;

                /**
                 * @type {[function]}
                 */
                var $callbacks = [];

                /**
                 * @return {$Listeners}
                 */
                this.wakeUp =
                    function( response )
                    {
                        for ( var i = 0 ; i < $callbacks.length ; i++ ) {
                            $callbacks[ i ]( response );
                        }

                        return $oListeners;
                    };

                /**
                 *
                 * @param {function} callback
                 * @return {$Listeners}
                 */
                this.add =
                    function( callback )
                    {
                        var done = false;
                        for ( var i in $callbacks ) {
                            if ( $callbacks[ i ].toString() === callback.toString() ) {
                                done = true;
                                break;
                            }
                        }

                        if ( !done ) {
                            $callbacks.push( callback );
                        }

                        return $oListeners;
                    }
            };

            /**
             * @return {$Configurator}
             */
            this.subscribe =
                function( callback )
                {
                    $listeners.add( callback );
                    return $oConfigurator;
                };

            /**
             * @return {$Configurator}
             */
            this.wakeUp =
                function( response )
                {
                    $listeners.wakeUp( response );
                    return $oConfigurator;
                };

            /**
             * @return {$Configurator}
             */
            this.pattern =
                function( pattern )
                {
                    $globals.set( 'pattern' , pattern );
                    return $oConfigurator;
                };

            /**
             * @return {string}
             */
            this.pattern$ =
                function()
                {
                    return $globals.get( 'pattern' );
                };

            /**
             * @return {$Configurator}
             */
            this.param =
                function( key , value )
                {
                    $params.set( key , value );
                    return $oConfigurator;
                };

            /**
             * @return {*}
             */
            this.param$ =
                function( key )
                {
                    return $params.get( key );
                };

            /**
             * @return {{}}
             */
            this.params$ =
                function()
                {
                    return $params.getAll();
                };

            /**
             * @return {$Configurator}
             */
            this.param =
                function( key , value )
                {
                    $params.set( key , value );
                    return $oConfigurator;
                };

            /**
             * @return {$Configurator}
             */
            this.paramQS =
                function( key , value )
                {
                    $paramsQS.set( key , value );
                    return $oConfigurator;
                };

            /**
             * @return {*}
             */
            this.paramQS$ =
                function( key )
                {
                    return $paramsQS.get( key );
                };

            /**
             * @return {{}}
             */
            this.paramsQS$ =
                function()
                {
                    return $paramsQS.getAll();
                };

            /**
             *
             * @return {$Registry}
             */
            this.registry =
                function()
                {
                    return $registry;
                };

            /**
             *
             * @return {*}
             */
            this.end =
                function()
                {
                    return parent;
                };
        };

        /**
         * @class $Module
         * @param {string} module
         * @constructor
         */
        var $Module = function( module )
        {
            var $oModule = this;

            /**
             * @class $Controller
             * @param {string} controller
             * @constructor
             */
            var $Controller = function( controller )
            {
                var $oController = this;

                /**
                 * @class $Action
                 * @param {string} action
                 * @constructor
                 */
                var $Action = function( action )
                {
                    var $oAction = this;

                    /**
                     * @type {$Configurator}
                     */
                    var $ocAction = new $Configurator( $oAction , null );

                    /**
                     * @return {$Configurator}
                     */
                    this.config =
                        function()
                        {
                            return $ocAction;
                        };

                    /**
                     * @return {string}
                     */
                    this.getTranslatedRoute = function()
                    {
                        /**
                         *
                         * @param {string} url
                         * @param {string} subPattern
                         * @param {string} replaceWith
                         * @param vars
                         * @return {*}
                         */
                        var replace = function( url , subPattern , replaceWith , vars )
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
                        };

                        /**
                         * @param  {{}} qs
                         * @return {string}
                         */
                        var queryString = function( qs )
                        {
                            var qstmp = [];
                            for( var i in qs ) {
                                qstmp.push( i +'='+ qs[ i ] )
                            }
                            return qstmp.length ? '&'+ qstmp.join( '&' ) : '';
                        };

                        var url = $ocRouter.pattern$();

                        url = replace(
                            url , '#Action{(.*)#a}'     , action     , $ocAction.params$()
                        );

                        url = replace(
                            url , '#Controller{(.*)#c}' , controller , $ocController.params$()
                        );

                        url = replace(
                            url , '#Module{(.*)#m}'     , module     , $ocModule.params$()
                        );

                        return url
                            + ( -1 === url.indexOf( '?' )  ? '?' : '')
                            + queryString( $ocModule    .paramsQS$( ) )
                            + queryString( $ocController.paramsQS$( ) )
                            + queryString( $ocAction    .paramsQS$( ) )
                            ;


                    };

                    /**
                     * @return {$Controller}
                     */
                    this.end =
                        function()
                        {
                            return $oController;
                        };

                    /**
                     *
                     */
                    this.fire =
                        function()
                        {
                            var url = this.getTranslatedRoute();

                            //@Todo Ajax request
                        };
                };

                /**
                 * @type {$Configurator}
                 */
                var $ocController = new $Configurator( $oModule , $Action );

                /**
                 * @return {$Configurator}
                 */
                this.config =
                    function()
                    {
                        return $ocController;
                    };

                /**
                 * @param {string} action
                 * @return {$Action}
                 */
                this.action =
                    function( action )
                    {
                        return $ocController.registry().get( action );
                    };

                /**
                 * @param {function|null} callback (
                 *  - {$Action} oAction
                 *  - {string}  actionName
                 *  )
                 *  @return $Registry
                 */
                this.actions =
                    function( callback )
                    {
                        return callback
                            ? $ocController.registry().iterate( callback )
                            : $ocController.registry()
                            ;
                    };

                /**
                 * @return {$Module}
                 */
                this.end =
                    function()
                    {
                        return $oModule;
                    };

                /**
                 *
                 */
                this.fire =
                    function()
                    {
                        this.actions(
                            /**
                             * @param {$Action} oAction
                             */
                            function( oAction )
                            {
                                oAction.fire();
                            }
                        );
                    };
            };

            /**
             * @type {$Configurator}
             */
            var $ocModule = new $Configurator( $oModule , $Controller );

            /**
             * @return {$Configurator}
             */
            this.config =
                function()
                {
                    return $ocModule;
                };

            /**
             * @param {string} controller
             * @return {$Controller}
             */
            this.controller =
                function( controller )
                {
                    return $ocModule.registry().get( controller );
                };

            /**
             * @param {function|null} callback (
             *  - {$Controller} oController
             *  - {string}      controllerName
             *  )
             */
            this.controllers =
                function( callback )
                {
                    return callback
                        ? $ocModule.registry().iterate( callback )
                        : $ocModule.registry()
                        ;
                };

            /**
             * @return {$Router}
             */
            this.end =
                function()
                {
                    return $oRouter;
                };

            /**
             *
             */
            this.fire =
                function()
                {
                    this.controllers(
                        /**
                         * @param {$Controller} oController
                         */
                        function( oController )
                        {
                            oController.fire();
                        }
                    );
                };
        };

        /**
         * @type {$Configurator}
         */
        var $ocRouter = new $Configurator( $oRouter , $Module );

        /**
         * @return {$Configurator}
         */
        this.config =
            function()
            {
                return $ocRouter;
            };

        /**
         * @param {string} module
         * @return {$Module}
         */
        this.module =
            function( module )
            {
                return $ocRouter.registry().get( module );
            };

        /**
         * @param {function|null} callback (
         *  - {$Module} oModule
         *  - {string}  moduleName
         *  )
         *  @return $Registry
         */
        this.modules =
            function( callback )
            {
                return callback
                    ? $ocRouter.registry().iterate( callback )
                    : $ocRouter.registry()
                    ;
            };

        /**
         */
        this.fire =
            function()
            {
                this.modules(
                    /**
                     * @param {$Module} oModule
                     */
                    function( oModule )
                    {
                        oModule.fire();
                    }
                );
            };
    };

    /**
     * @type {$Router}
     */
    var $oRouter = new $Router();

    /**
     * @return {$Router}
     */
    this.router =
        function()
        {
            return $oRouter;
        };
});