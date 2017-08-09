$cube.scheduler = new (
   /**
    * @class $cube.scheduler
    * @constructor
    */
   $cube.class( $cube.collection.array )
    .$({
       /**
        * @param { $cube.scheduler.service } service
        */
       'register' : function( service )
       {
           return this.set( service );
       }
    })
);

/**
 * @class $cube.scheduler.service
 * @constructor
 */
$cube.scheduler.service =
    $cube.class      ( $cube.collection.array.closures  )
.$({
   /**
    */
   '$start' : function(  )
   {
       $cube.scheduler.register( this );
   },

   /**
    * @param  {function} closure
    * @return {$cube.scheduler.service}
    */
   'subscribe' : function( closure )
   {
       return this.set( closure );
   }
});