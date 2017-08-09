/**
 * @class $cube.collection
 * @constructor
 * @augments {$cube.object}
 */
$cube.collection =
    $cube.class( $cube.object )
.$({
   /**
    * @type {[]}
    */
   '_items' : [ ],

   /**
    *
    * @param {string} key
    * @return {*}
    */
   'get' : function( key ) {
       return this._items[ key ] ? this._items[ key ] : null;
   },

   /**
    *
    * @return {[]}
    */
   'getAll' : function () {
       return this._items;
   },

   /**
    *
    * @param {function} cb
    * @return {$cube.collection}
    */
   'iterate' : function( cb ) {
       for( var i in this._items ) {
           cb( this._items[ i ] , i , this._items );
       }
       return this;
   }
});