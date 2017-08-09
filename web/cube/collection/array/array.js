/**
 * @class $cube.collection.array
 * @constructor
 * @augments {$cube.collection}
 */
$cube.collection.array =
    $cube.class( $cube.collection )
.$({
   /**
    *
    * @param {*} value
    * @return {$cube.collection.array}
    */
   'set' : function( value ) {
       this._items.push( value );
       return this;
   }
});