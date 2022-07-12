@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">

        <div class="col-md-4">
            <div class="card  mb-5">

                <div class="card-header text-center">
                    <h3>{{ $event->name }}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>{{ $event->description }}</li>
                        <li>{{ $event->date }}</li>
                        <li>{{ $event->startTime }}</li>
                        <li>{{ $event->endTime }}</li>
                        <li>{{ $event->address }}</li>
                        <li>{{ $event->capacity }}</li>
                    </ul>
                </div>
                <div class="card-footer d-flex justify-content-evenly">
                    @can('view', $event)
                        <form method="POST" action="{{ route('events.destroy', $event->id) }}">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">
                                Eliminar
                            </button>
                        </form>
                        <a href="{{ route('events.edit', $event->id) }}" class="btn btn-primary"> Editar</a>
                    @endcan

                        @if (!$isCheck)
                            <form method="POST" action="{{ route('events.checkIn', $event->id) }}">
                                @csrf
                                @method('GET')
                                <button type="submit" class="btn btn-success text-white" @if (!$canRegister) disabled="true" @endif >
                                    Apuntarse al evento
                                </button>
                            </form>
                        @endif
                        @if ($isCheck)
                            <a href="{{ route('events.dropOut', $event->id) }}" class="btn btn-danger">Retirarse del evento</a>
                        @endif
                </div>
            </div>

            @foreach ($registereds as $user)
            <div class="card  mb-2">
                <div class="card-header text-center">
                    <h3>{{ $user->name }}</h3>
                </div>
                <div class="card-footer d-flex justify-content-evenly">
                    <a href="{{ route('events.detachRegisteredUser', [$event->id, $user->id]) }}" class="btn btn-danger">Retirar del evento</a>
                </div>
            </div>
            @endforeach
        </div>

    </div>
</div>
@endsection