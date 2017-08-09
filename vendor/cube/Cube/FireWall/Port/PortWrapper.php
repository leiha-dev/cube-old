<?php

namespace Cube\FireWall\Port;

use Cube\Kernel\Wrapper\Wrapper;

abstract class PortWrapper
    extends     Wrapper
    implements  PortFacade
{
    public function __construct ( $checkFacade = FALSE , $classDefault = NULL , $postPattern = '' )
    {
        parent::__construct ( $checkFacade , $classDefault , $postPattern );
    }
}