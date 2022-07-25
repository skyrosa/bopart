@extends('layouts.app')

@section('content')

    <section class="bg-colorTourq w-full flex-row flex h-40 md:h-64 lg:h-96 ">
        <div class="w-full h-full bg-cover bg-center bg-no-repeat" style=" background-image: url('https://images.unsplash.com/photo-1630807284621-9c1e13de79ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" ></div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat" style=" background-image: url('https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')"></div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat" style=" background-image: url('https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80')"></div>
        <div class="w-full h-full bg-cover bg-center bg-no-repeat" style=" background-image: url('https://images.unsplash.com/photo-1592321050415-411b2293852a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')"></div>
    </section>

    <div class="bg-gradient-to-b from-colorPink to-colorTourq flex flex-col">
        <h1 class='font-inter font-bold text-[20px] lg:text-[32px] text-center capitalize mt-3'>Proximos Eventos</h1>
        <div id="slide" class= py-5 ">
        </div>
    </div>
@endsection
