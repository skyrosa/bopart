@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card  mb-2">

                <div class="card-header text-center">
                    <h3>{{ $event->name }}</h3>
                </div>
                <div class="card-body">
                </div>
                <div class="card-footer d-flex justify-content-evenly">
                    <form method="POST" action="{{ route('events.destroy', $event->id) }}">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">
                            Eliminar
                        </button>
                    </form>
                    <a href="{{ route('events.edit', $event->id) }}" class="btn btn-primary"> Editar</a>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection