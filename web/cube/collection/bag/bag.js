/**
 * @class $cube.collection.bag
 * @constructor
 * @augments {$cube.collection}
 * @this $cube.collection.bag
 */
$cube.collection.bag =
    $cube.class( $cube.collection )
.$({
   /**
    * @type {{}}
    */
   '_items' : { },

   /**
    *
    * @param {string} key
    * @param {*} value
    * @return {$cube.collection.bag}
    */
   'set' : function( key , value ) {
       this._items[ key ] = value;
       return this;
   }
});