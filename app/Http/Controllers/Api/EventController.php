<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'getFirstEvents');
    }

    public function index()
    {
        $events = Event::orderBy('date', 'asc')->get();
        return response(json_encode($events), Response::HTTP_OK);
    }

    public function getFirstEvents()
    {
        $events = Event::orderBy('date', 'asc')->take(6)->get();
        return response(json_encode($events), Response::HTTP_OK);
    }

    
    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        //
    }


    public function show(Event $event)
    {

    }


    public function edit(Event $event)
    {
        //
    }


    public function update(Request $request, Event $event)
    {
        //
    }


    public function destroy(Event $event)
    {
        //
    }
}
