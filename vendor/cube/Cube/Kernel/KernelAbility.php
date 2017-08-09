<?php

namespace Cube\Kernel;

use Cube\Kernel\Core\Ability\Ability;

trait KernelAbility
{
    use Ability;

    /** @var KernelCore */ private $kernel;

    /**
     * @return KernelCore
     */
    protected function kernel
        ( )
        : KernelCore
    {
        return $this->kernel;
    }
}