@extends('layouts.app')

@section('content')
    <ul>
        @foreach ($users as $user)
            <li>
                {{ $user->name }} 
                <a href="/users/{{ $user->id }}/destroy" class="btn btn-danger">Eliminar</a>
            </li>  
        @endforeach
    </ul>
@endsection