<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEvent;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show', 'getAllEvent');
    }


    public function index()
    {
        return view('events.index', compact('events'));
    }

    public function getAllEvent(){
        $events = Event::orderBy('date', 'asc')->get();
        return response(json_encode($events), Response::HTTP_OK);
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
        
        $data = $request->validated();

        if(!filter_var($data['image'], FILTER_VALIDATE_URL)){
            $data['image'] =  $data['image'] ? $this->storeImage($data['image']) : '';
        }


        $event = Event::create($data);

        return response($event, Response::HTTP_CREATED);
    }


    public function storeImage($data)
    {
        $img = Image::make($data);
        $fileName = Str::uuid() . '.' . explode('/', $img->mime())[1];
        $filePath = "/storage/pictures/$fileName";
        $img->save(public_path($filePath));

        return $filePath;
    }


    public function deleteImage($event)
    {

    }


    public function show(Event $event)
    {
        $registereds = Event::showRegisteredUsers($event);

        $isCheck = Event::verifyRecord($event);
        $canRegister = Event::checkCapacity($event);
        
        return view('events.show', compact('event', 'isCheck', 'canRegister'), 
        ['registereds' => Gate::allows('only-admin') ? $registereds : [] ]);
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
            'type' => $request['type'],
        ]);
        return redirect()->route('events.show', compact('event'));
    }


    public function checkIn(Event $event)
    {   
        $isCheck = Event::verifyRecord($event);
        $canRegister = Event::checkCapacity($event);

        if($canRegister && !$isCheck){
            
            $user = auth()->user();
            $user->event()->attach($event);

            Event::minusStock($event);
        }
        return redirect()->back();
    }


    public function dropOut(Event $event)
    {
        $user = auth()->user();
        $user->event()->detach($event);

        Event::moreStock($event);
    }

    
    public function destroy(Event $event)
    {
        $this->authorize('delete', $event);

        $event->delete();
        return redirect()->route('events.index');
    }


    public function detachRegisteredUser(Event $event, User $user)
    {
        $user->event()->detach($event);
        Event::moreStock($event);

        return redirect()->back();
    }
}