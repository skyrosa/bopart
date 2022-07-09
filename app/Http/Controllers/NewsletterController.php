<?php

namespace App\Http\Controllers;

use App\Mail\MessageNewEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NewsletterController extends Controller
{
    public function sendEmail()
    {
        $message = [
            'event'=> 'Evento de ejemplo 1'
        ];
        
        Mail::to(['jhonv4sq.01@gmail.com', 'madlarocha@gmail.com'])->send(new MessageNewEvent,($message));

        return 'Mensaje enviado';
    }
}
