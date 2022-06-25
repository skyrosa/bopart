<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class EventController extends Controller
{
    public function __construct(){
        $this->middleware('auth'); // unfinished
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = Event::all();
        return view('events.index', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('events.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Event::create([
            'name' => $request['name'],
            'date' => $request['date'],
            'startTime' => $request['startTime'],
            'endTime' => $request['endTime'],
        ]);

        return redirect()->route('events.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        $isCheck = false;

        if(auth()->user()){
            $myEvents = auth()->user()->event->where('id', $event->id)->first();
            
            switch($myEvents){
                case true:
                    $isCheck = true;
                    break;
                case false:
                    $isCheck = false;
                    break;
            }
        }
 
        return view('events.show', compact('event', 'isCheck'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        return view('events.edit', compact('event'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $this->authorize('update', $event);

        $event->update([
            'name' => $request['name'],
            'date' => $request['date'],
            'startTime' => $request['startTime'],
            'endTime' => $request['endTime'],
        ]);
        return redirect()->route('events.index');
    }

    public function checkIn(Event $event)
    {
        $user = auth()->user();
        $user->event()->attach($event);
        return redirect()->route('events.index');
    }

    public function dropOut(Event $event)
    {
        $user = auth()->user();
        $user->event()->detach($event);
        return redirect()->route('events.index');
    }

    public function myEvents()
    {
        $events = auth()->user()->event;
        
        return view('auth.profile', compact('events'));
    }


    public function deleteAllUserInEvent(Event $event)
    {
        $registered = $event->user;
        $event->user()->detach($registered);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        /*
        if(! Gate::allows('only-admin')){
            abort(403);
        }
 */
        $this->authorize('delete', $event);

        $this->deleteAllUserInEvent($event);

        $event->delete();
        return redirect()->route('events.index');
    }
}
