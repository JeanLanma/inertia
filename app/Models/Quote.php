<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Quote extends Model
{
    use HasFactory;

    protected $appends = ['url'];

    public $fillable = [
        'uuid',
        'user_id',
        'coupon_id',
        'national',
        'season',
        'type',
        'holder_name',
        'adults',
        'minors',
        'infants',
        'notes',
        'status'
    ];

    public function user(){

        return $this->belongsTo(User::class);

    }

    public function coupon(){

        return $this->belongsTo(Coupon::class);

    }

    public function listed_activity(){

        return $this->hasOne(QuoteActivity::class);

    }

    public function listed_activities(){

        return $this->hasMany(QuoteActivity::class);

    }

    public function createdAt(): Attribute{

        return Attribute::make(
            get: fn ($date) => Carbon::parse($date)->format('m/d/Y'),
        );
    
    }

    protected function url(): Attribute{

        return Attribute::make(
            get: fn ($not, $attributes) => route('quote.preview', ['quoteId' => $attributes['uuid']])
        );

    }
}
