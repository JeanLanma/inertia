<?php

namespace App\Enums;

enum Coupon: string {

    case Created = 'created';
    case Confirmed = 'confirmed';
    case Cancelled = 'cancelled';

}