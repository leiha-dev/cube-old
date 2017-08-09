<?php

namespace Cube\Kernel\Core\Device;

use Cube\Kernel\Core\Core;
use Cube\Kernel\Core\Driver\Ability\DrivableAbility;

abstract class DeviceCore
    extends    Core
    implements Device
{
    use DrivableAbility
        ;

}