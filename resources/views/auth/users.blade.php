@extends('layouts.app')

@section('content')
    {{-- <ul>
        @foreach ($users as $user)
            <li>
                {{ $user->name }} 
                <a href="/users/{{ $user->id }}/destroy" class="btn btn-danger">Eliminar</a>
            </li>  
        @endforeach
    </ul> --}}
    <section class="p-5 w-full flex flex-col justify-center items-center bg-gradient-to-b from-colorPink to-colorTourq gap-2">
        <h1 class='font-inter font-bold text-[20px] lg:text-[32px] text-center  mb-5'>Gestión de Usuarios</h1>
        <table class="w-3/5 bg-colorYellow rounded-lg ">
            <thead class="text-2xl uppercase font-sansita font-bold">
                <tr>
                    <th class="p-3">Nombres de los usuarios</th>
                    <th class="p-3 text-right">Opciones</th>
                </tr>
            </thead> 
            <tbody id="users-table" class="bg-[#c99a4e]">
            </tbody>
        </table>
    </section>
@endsection