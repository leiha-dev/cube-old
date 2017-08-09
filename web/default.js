//
//$cube.dataGrid =
//    $cube.class( )
//.$({
//    '$start' : function(  )
//    {
//        this.node   = $('<table></table>');
//        this.head   = new $cube.dataGrid.head  ( this );
//        this.body   = new $cube.dataGrid.body  ( this );
//        this.config = new $cube.dataGrid.config( this );
//    },
//
//    'render' : function( data )
//    {
//        var order = this.config.order;
//        if( order.length === 0 ) {
//            for( var i in data[ 0 ] ) {
//                order.push( i );
//            }
//        }
//
//        for( var i in data ) {
//            var line  = this.body.line( );
//            for( var ii in order ) {
//                line.column( ).content$( data[ i ] [ order[ ii ] ] );
//            }
//        }
//    }
//});
//
//$cube.dataGrid.config =
//    $cube.class( )
//.$({
//    '$start' : function()
//    {
//        this.order = [ 'd' , 'c' , 'b' , 'a' ];
//    }
//});
//
//$cube.dataGrid.head =
//    $cube.class( $cube.collection.array )
//.$({
//    '$start' : function( grid )
//    {
//        this.grid = grid;
//        this.node = $('<thead></thead>')
//            .appendTo( grid.node )
//            ;
//    },
//
//    'line' : function(  )
//    {
//        var item = new $cube.dataGrid.head.line( this );
//        this.set( item );
//        return item;
//    }
//});
//
//$cube.dataGrid.head.line =
//    $cube.class( $cube.collection.array )
//.$({
//    '$start' : function( body )
//    {
//        this.body = body;
//        this.node = $('<tr></tr>')
//            .appendTo( body.node )
//            ;
//    },
//
//    'column' : function(  )
//    {
//       var item = new $cube.dataGrid.head.line.column( this );
//       this.set( item );
//       return item;
//    }
//});
//
//$cube.dataGrid.head.line.column =
//    $cube.class( )
//.$({
//    '$start' : function( line )
//    {
//        this.line = line;
//        this.node = $('<th></th>')
//            .appendTo( line.node )
//            ;
//    }
//});
//
//$cube.dataGrid.body =
//    $cube.class( $cube.collection.array )
//.$({
//    '$start' : function( grid )
//    {
//        this.grid = grid;
//        this.node = $('<tbody></tbody>')
//            .appendTo( grid.node )
//            ;
//    },
//
//   'line' : function(  )
//    {
//       var item = new $cube.dataGrid.body.line( this );
//       this.set( item );
//       return item;
//    }
//});
//
//$cube.dataGrid.body.line =
//    $cube.class( $cube.collection.array )
//.$({
//    '$start' : function( body )
//    {
//        this.body = body;
//        this.node = $('<tr></tr>')
//            .appendTo( body.node )
//            ;
//    },
//
//    'column' : function(  )
//    {
//       var item = new $cube.dataGrid.body.line.column( this );
//       this.set( item );
//       return item;
//    }
//});
//
//$cube.dataGrid.body.line.column =
//    $cube.class( )
//.$({
//    '$start' : function( line )
//    {
//        this.line = line;
//        this.node = $('<td></td>')
//            .appendTo( line.node )
//            ;
//    },
//
//    'content' : function( )
//    {
//        return this.node.html( );
//    },
//
//    'content$' : function( content )
//    {
//        return this.node.html( content );
//    }
//});