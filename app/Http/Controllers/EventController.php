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
        $this->middleware('auth')->except('index', 'show');
    }


    public function index()
    { 
        return view('events.index');
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

    public function searchEvent(Event $event)
    {
        $data = json_decode($event, true);

        $data['isCheck'] = Event::verifyRecord($event);
        $data['canRegister'] = Event::checkCapacity($event);
        $data['registereds'] = Gate::allows('only-admin') ? Event::showRegisteredUsers($event): [];
        
        return response(json_encode($data) , Response::HTTP_OK);
    }

    public function show(Event $event)
    {   
        return view('events.show', compact('event'));
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

            return response(['message' => 'Te has registrado en este evento.',
                             'checkIn' => true], Response::HTTP_OK);
        }
        if($isCheck){
            return response(['message' => 'Ya estas registrado en este evento.',
                             'checkIn' => false], Response::HTTP_OK);
        }
        
    }


    public function dropOut(Event $event)
    {
        $isCheck = Event::verifyRecord($event);
        $user = auth()->user();

        if($isCheck){
            $user->event()->detach($event);
            Event::moreStock($event);
            return response(['message' => 'Ya no estas apuntado en este evento.',
                             'dropOut' => true], Response::HTTP_OK);
        }
        if(!$isCheck){
            return response(['message' => 'Ya no estas apuntado en este evento.',
            'dropOut' => false], Response::HTTP_OK);
        }
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