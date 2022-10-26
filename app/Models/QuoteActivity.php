<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuoteActivity extends Model
{
    use HasFactory;

    public $fillable = [
        'quote_id',
        'activity_id',
        'hotel_id',
        'pickup_time',
    ];

    public function quote(){

        return $this->belongsTo(Quote::class);

    }
}
