<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'date',
        'startTime',
        'endTime',
        'image',
        'address',
        'capacity',
    ];

    public function user(){
        return $this->belongsToMany(User::class);
    }
    // static function minusStock(){

    // }

    // static function moreStock(){

    // }
}
