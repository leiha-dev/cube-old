<?php

namespace Cube\Kernel\Core\Driver;

use Cube\Kernel\Core\Core;
use Cube\Kernel\Core\Device\Device;
use Cube\Kernel\Core\Injector\Ability\InjectableAbility;

abstract class DriverCore
    extends    Core
    implements Driver
{
    use InjectableAbility
        ;

    /** @var string */ protected $module;
    /** @var string */ protected $device;
    /** @var bool   */ protected $deviceSingle;
    /** @var Device */ protected $deviceSingleObj;

    /**
     * DriverCore constructor.
     * @param string $module
     * @param bool   $single
     */
    public function __construct
        ( string $module , bool $single = false )
    {
        $this->checkFacade  ( $module );
        $this->override     ( $this->module = $module , true );
        $this->deviceSingle = $single;
    }

    /**
     * @return Device
     */
    public function device ( )
        : Device
    {
        if( ! $this->deviceSingle ) {
            return ( new $this->device( $this ) );
        }

        if ( ! $this->deviceSingleObj ) {
            $this->deviceSingleObj = ( new $this->device( $this ) );
        }

        return $this->deviceSingleObj;
    }

    /**
     * @param string  $module
     * @param bool    $device
     * @return bool
     */
    public function override (
        string  $module ,
        bool    $device = true
    )
        : bool
    {
        $is = false;
        try{
            $is = (
                ( $device ? $this->overrideDevice( $module ) : true )
            );
        } catch ( \Exception $e )
        {
            // @Todo: Make an exception
        }

        return $is;
    }

    /**
     * @param string   $device
     * @return bool
     */
    protected function overrideDevice
        ( string $device )
        : bool
    {
        $this->device = $device.'Device';
        $is = $this->checkClass( $this->device );
        if ( ! $is )
        {
            // @Todo: Make an exception
        }

        return $is;
    }
}