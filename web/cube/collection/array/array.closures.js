/**
 * @class $cube.collection.array.closures
 * @constructor
 * @augments {$cube.collection.array}
 */
$cube.collection.array.closures =
    $cube.class( $cube.collection.array )
.$({
   /**
    * @return {$cube.collection.array.closures}
    */
   'fire' : function( data ) {
       return this.iterate( function( closure ) {
           closure( data );
       } );
   },

   /**
    *
    * @param {function} callback
    * @return {$cube.collection.array.closures}
    */
   'set' : function( callback ) {
       var done = false;
       for ( var i in this._items ) {
           if ( this._items[ i ].toString() === callback.toString() ) {
               done = true;
               break;
           }
       }

       if ( ! done ) {
           this.$parent( ).set( callback );
       }

       return this;
   }
});