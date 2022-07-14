@extends('layouts.app')

@section('content')
<div class="w-full h-screen py-4 bg-gradient-to-b from-colorTourq to-colorYellow ">
    {{-- @foreach ($events as $event)
    <div class="container">
        <div class="row justify-content-center">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <a href="{{ route('events.show', $event->id) }}" class="card text-center mb-2">
                        <div class="card-header">
                            <h3>{{ $event->name }}</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    @endforeach --}}
    <div id='profile-user' name="{{ Auth::user()->name }}" email="{{ Auth::user()->email }}" ></div>
</div>
@endsection