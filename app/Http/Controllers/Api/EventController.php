<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'getFirstEvents', 'getAllEvents');
    }

    public function index()
    {
        $today = Carbon::now();
        $events = Event::orderBy('date', 'asc')->where('date', '>', $today)->get();
        return response(json_encode($events), Response::HTTP_OK);
    }

    public function getFirstEvents()
    {
        $today = Carbon::now();
        $events = Event::orderBy('date', 'asc')->where('date', '>', $today)->take(6)->get();
        return response(json_encode($events), Response::HTTP_OK);
    }

    public function getAllEvents()
    {
        $events = Event::all();
        return response(json_encode($events), Response::HTTP_OK);
    }
}
