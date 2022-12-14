<?php

namespace App\Repositories\Prices;

use Illuminate\Support\Facades\DB;

class Price {

    public function getParkPrice($activity, $zone, $season){
        return DB::table('prices')
                    ->where('activity_id', $activity)
                    ->where('zone_id', $zone)
                    ->where('season', $season)
                    ->get();
    }

    public static function get($activity, $zone, $season){
        $adult = DB::table('prices')
                ->where('activity_id', $activity)
                ->where('zone_id', $zone)
                ->where('season', $season)
                ->where('type', 'adult')
                ->first();
                
        $minor = DB::table('prices')
                ->where('activity_id', $activity)
                ->where('zone_id', $zone)
                ->where('season', $season)
                ->where('type', 'kid')
                ->first();
        return [ 'adult' => $adult, 'minor' => $minor ];
    }

}