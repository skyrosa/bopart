@extends('layouts.app')

@section('content')
    @foreach ($collaborators as $collaborator)
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card  mb-2">
    
                    <div class="card-header text-center">
                        <h3>{{ $collaborator->name }}</h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li> <a href="{{ $collaborator->url }}"><img src="{{ $collaborator->image }}" alt=""></a>  </li>
                        </ul>
                    </div>
                    <div class="card-footer d-flex justify-content-evenly">
                        @can('view', $collaborator)
                            <form method="POST" action="{{ route('collaborators.destroy', $collaborator->id) }}">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">
                                    Eliminar
                                </button>
                            </form>
                            <a href="{{ route('collaborators.edit', $collaborator->id) }}" class="btn btn-primary"> Editar</a>
                        @endcan
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
@endsection