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
        'type',
    ];

    public function user(){
        return $this->belongsToMany(User::class);
    }

    static function minusStock(Event $event){
        $event->capacity--;
        $event->save();
    }

    static function moreStock(Event $event){
        $event->capacity++;
        $event->save();
    }

    static function checkCapacity(Event $event){
        $capacity = $event->capacity;
        return $capacity ? true : false;
    }

    static function verifyRecord(Event $event)
    {
        $isCheck = false;
        if(auth()->user()){
            $myEvents = auth()->user()->event->where('id', $event->id)->first();
            $isCheck = $myEvents ? true : false;
        }
        return $isCheck;
    }

    static function showRegisteredUsers(Event $event)
    {
        return $event->user;
    }
}
