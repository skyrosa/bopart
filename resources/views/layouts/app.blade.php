<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"> 
        {{-- <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item"> <a href="{{ route('events.index') }}">Eventos</a> </li>
                        @auth 
                        <li class="nav-item"> <a href="{{ route('events.create') }}">nuevo Evento</a> </li>
                        @endauth
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('profile') }}"> Perfil </a>
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav> --}}
<!-- --A -->  
<div class="flex flex-col w-full h-screen justify-between    || bg-colorTourq">
<!-- --B -->    
<nav class="class='w-full bg-colorBlack text-colorWhite font-sansita py-2 space-y-2 lg:space-y-6 lg:text-2xl bg-cover bg-center bg-no-repeat" style="background-image: url('/storage/pictures/banner.png');">
            <div class='flex flex-row md:justify-end justify-between gap-2 mx-2'>
                @auth
                    <a href='{{ route('profile') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>Perfil</a>
                    <p class="hidden md:block">|</p>
    
                    <a class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase' href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                            {{ __('Cerrar Sesión') }}
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                @endauth
                @guest
                    <a href='{{ route('register') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'> Registrarse </a>
                    <p class="hidden md:block">|</p>
                    <a href='{{ route('login') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>Iniciar Sesión</a> 
                @endguest
            </div>

            <div class='w-full flex flex-row'>
                <div class='w-full flex items-center justify-center'>
                    <a href='/services' class='p-2   text-colorPink hover:text-[#E37383]  font-sansita text-[14px] md:text-[23px] lg:text-[40px] font-extrabold  self-center max-w-max uppercase'>
                        Que ofrecemos
                    </a>
                </div>
    
                <div class='w-full flex justify-center items-center'>
                    <a href='{{ route('home') }}' class=' flex justify-center items-center bg-colorPink rounded-full w-[90px] h-[90px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] drop-shadow-lg animate-bounce'>
                        <div class='w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[190px] lg:h-[190px] bg-cover bg-center bg-no-repeat' style="background-image: url('/storage/pictures/logo.svg');"></div>
                    </a>
                </div>
    
                <div class='w-full flex items-center justify-center'>
                    <a href='/about' class='p-2   text-colorPink hover:text-[#E37383]  font-sansita text-[14px] md:text-[23px] lg:text-[40px] font-extrabold  self-center max-w-max uppercase'>
                        Quienes somos
                    </a>
                </div>
            </div>

            <div class='flex justify-center gap-2'>
                <a class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>
                    Contacto
                </a>

                <a id="button-header" href='{{ route('events.index') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>
                    Evento
                </a>
            </div>
        </nav>
<!-- --C -->       
        <main class="w-full  justify-center    border-colorGreen border-4  || bg-colorPink">


            @yield('content')
        </main>
<!-- --C -->
<footer class='w-full bg-colorBlack text-colorWhite  font-sansita py-2 space-y-2 lg:space-y-6 lg:text-2xl ' >

<div class="md:flex md:flex-row md:text-left gap-5 flex text-center flex-col min-w-full justify-between space-x-9 bg-colorBlack p-9 | text-colorWhite font-sansita font-bold text-base  ">
    <section class="flex flex-col gap-5 center md:flex md:flex-row md:gap-5 md:space-x-9 ">

        <div class="  space-y-5 md:space-y-5 ">
            <section class=" text-xl ">
                <p>
                    Bopart S.L 
                </p>
            </section>
            
            <section class="space-y-1 ">
                <div> 
                    <p>
                    Carrer de Barnola, 5B · 08030 Barcelona · (+34) 934 198 864
                    </p>
                </div>
                <div>
                    <p>
                    Príncipe de Vergara 112 · 28002 Madrid · (+34) 910 205 328
                    </p> 
                </div>
            </section>

            <section>
                <p>
                    Copyright ℗ 2022. Bopart All rights reserved. </p>
                <p>
                    © 2022 Bopart  · 
                    <a href="" class="hover:text-colorTourq" href="">
                        BopartContacto@gmail.com </a> 
                    </p>
            </section>
        </div>

            <div class="  self-center flex space-x-6">
                <a class="self-center h-fit  ">
                <svg class="fill-colorWhite" xmlns="http://www.w3.org/2000/svg" width="54px" height="" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            
                <a href="" class="  place-self-center   ">
                <svg class="fill-colorWhite " xmlns="http://www.w3.org/2000/svg" width="54px" height="" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
            </div>
    </section>

    <div class=" space-x-1.5 flex border-colorPink self-center     ">
        <a href="" class="border">
            <img src="https://i.postimg.cc/7LsBnKHK/2collaborator.png" alt=""/>
        </a>
        <button class="">
            <img src="https://i.postimg.cc/fLV82YkD/1collaborator.png" alt=""/>
        </button>
        <button class="">
            <img src="https://i.postimg.cc/KzCJd4gL/3collaborator.png" alt=""/>
        </button>
    </div>
</div> 
</footer>
<!-- --A -->  
</div>    

</body>
</html>
