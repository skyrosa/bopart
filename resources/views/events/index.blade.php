@extends('layouts.app')

@section('content')
    @foreach ($events as $event)
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
    @endforeach
@endsection