<?php

namespace Cube\FireWall;

class FireWallEngine
    extends FireWallWrapper
{
    /**
     * @var int
     */
    protected $mainStrategy;

    /**
     * @var int
     */
    static protected $STRATEGY__ALL_DENIED  = 1;

    /**
     * @var int
     */
    static protected $STRATEGY__ALL_ALLOWED = 2;






}