<?php

namespace Cube\FireWall\Input;

class Input
    extends InputWrapper
{
    public function port ( )
    {
        return $_SERVER[ 'SERVER_PORT' ];
    }

    public function method ( )
    {
        return $_SERVER[ 'REQUEST_METHOD' ];
    }

    public function protocol ( )
    {
        return $_SERVER[ 'SERVER_PROTOCOL' ];
    }
}