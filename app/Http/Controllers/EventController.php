<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEvent;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }


    public function index()
    {
        $events = Event::all();
        return view('events.index', compact('events'));
    }


    public function create()
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        
        $event = Event::factory()->make();
        return view('events.create', compact('event'));
    }


    public function store(StoreEvent $request)
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        Event::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'date' => $request['date'],
            'startTime' => $request['startTime'],
            'endTime' => $request['endTime'],
            'image' => $request['image'],
            'address' => $request['address'],
            'capacity' => $request['capacity'],
        ]);

        return redirect()->route('events.index');
    }


    public function show(Event $event)
    {
        $registereds = $this->showRegisteredUsers($event);

        $isCheck = $this->verifyRecord($event);
        $canRegister = $this->checkCapacity($event);

        return view('events.show', compact('event', 'isCheck', 'canRegister'), ['registereds' => Gate::allows('only-admin') ? $registereds : [] ]);
    }


    public function edit(Event $event)
    {
        $this->authorize('update', $event);

        return view('events.edit', compact('event'));
    }


    public function update(StoreEvent $request, Event $event)
    {
        $this->authorize('update', $event);

        $event->update([
            'name' => $request['name'],
            'description' => $request['description'],
            'date' => $request['date'],
            'startTime' => $request['startTime'],
            'endTime' => $request['endTime'],
            'image' => $request['image'],
            'address' => $request['address'],
            'capacity' => $request['capacity'],
        ]);
        return redirect()->route('events.show', compact('event'));
    }


    public function checkIn(Event $event)
    {   
        $isCheck = $this->verifyRecord($event);
        $canRegister = $this->checkCapacity($event);

        if($canRegister && !$isCheck){

            $event->capacity--;
            $event->save();

            $user = auth()->user();
            $user->event()->attach($event);
        }
        return redirect()->back();
    }


    public function dropOut(Event $event)
    {
        $event->capacity++;
        $event->save();

        $user = auth()->user();
        $user->event()->detach($event);
        // return redirect()->back();
    }

    public function verifyRecord(Event $event)
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
        return $isCheck;
    }

    public function checkCapacity(Event $event)
    {
        $canRegister = false;
        if($event->capacity > 0){
            $canRegister = true;
        }
        return $canRegister;
    }

    
    public function destroy(Event $event)
    {
        $this->authorize('delete', $event);

        $event->delete();
        return redirect()->route('events.index');
    }


    public function showRegisteredUsers(Event $event)
    {
        return $event->user;
    }


    public function detachRegisteredUser(Event $event, User $user)
    {
        $user->event()->detach($event);
        return redirect()->back();
    }
}