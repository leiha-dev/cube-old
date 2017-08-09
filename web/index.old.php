<?php

$loader = require __DIR__ . '/../vendor/autoload.php';

$Cube = new \Cube\CubeCore(  );
$Cube->loadKernel(
    function( \Cube\Kernel\Kernel $kernel

    ) {

    }
);
$Cube->start();
$Cube->listen( 80 );
