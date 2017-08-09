<?php

namespace Cube\Kernel\Cube;

use Cube\Kernel\Core\Ability\Ability;

trait CubeAbility
{
    use Ability;

    /**
     * @var CubeCore
     */
    private $cube;

    /**
     * @return CubeCore
     */
    protected function cube
        ( )
        : CubeCore
    {
        return $this->cube;
    }

    /**
     * @param Cube $cube
     * @return $this
     */
    public function setCube
        ( Cube $cube )
    {
        $this->cube = $cube;
        return $this;
    }
}