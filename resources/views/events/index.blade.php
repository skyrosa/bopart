@extends('layouts.app')

@section('content')
    <div class="w-full min-h-full py-5 bg-gradient-to-b from-colorPink to-colorTourq">
        <div class="container">
            <h1 class='font-inter font-bold text-[20px] lg:text-[32px] text-center  mb-5'>Todos los Eventos</h1>
            <div id='events'></div>
        </div>
    </div>
@endsection