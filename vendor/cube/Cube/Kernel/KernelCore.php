<?php

namespace Cube\Kernel;

use Cube\Kernel\Core\Core;
use Cube\Kernel\Core\Driver\Driver;
use Cube\Kernel\Core\Registry\RegistryAbility;

abstract class KernelCore
    extends    Core
    implements Kernel
{
    use RegistryAbility;

    /**
     * @var Driver[]
     */
    protected $drivers;

    function __construct ()
    {
        $this->focusOn( $this->drivers );
    }

    public function start ( )
    {

    }


}