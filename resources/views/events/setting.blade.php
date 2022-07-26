@extends('layouts.app')

@section('content')
    <section class="p-5 w-full flex flex-col justify-center items-center bg-gradient-to-b from-colorPink to-colorTourq gap-2">
        <h1 class='font-inter font-bold text-[20px] lg:text-[32px] text-center  mb-5'>Gestión de Eventos</h1>
        <a href="{{ route('events.create') }}" class=" w-3/5 tracking-[0.20em] py-3 px-[69px] font-librefranklin font-bold uppercase bg-colorTourq hover:bg-[#64a19b] rounded-[10px] flex justify-center items-center text-colorWhite hover:text-colorWhite text-base md:text-xl"> 
            Crear un nuevo evento
        </a>
        <table class="w-3/5 bg-colorYellow rounded-lg ">
            <thead class="text-2xl uppercase font-sansita font-bold">
                <tr>
                    <th class="p-3">Nombre del evento</th>
                    <th class="p-3 text-right">Opciones</th>
                </tr>
            </thead> 
            <tbody id="events-table" class="bg-[#c99a4e]">
            </tbody>
        </table>
    </section>

@endsection