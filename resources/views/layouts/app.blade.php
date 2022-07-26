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
    <div id="app" class="w-full flex flex-col justify-between">
        <div class="w-full flex flex-col">
            <nav class="class='w-full bg-colorBlack text-colorWhite font-sansita py-4 space-y-2 lg:space-y-6 lg:text-2xl bg-cover bg-center bg-no-repeat" style="background-image: url('/storage/pictures/banner.png');">
                <div class='flex flex-row md:justify-end justify-between items-center gap-2 mx-2'>
                    @auth
                        <a href='{{ route('profile') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>Perfil</a>

                        <p class="hidden md:block">|</p>

                        <div class="flex flex-col dropdown relative">
                            <button type="button" 
                            class='dropdown-toggle transition duration-150 ease-in-out py-2 px-4 flex flex-row gap-2 items-center  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase' 
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                                Opciones  
                            </button>

                            <ul class="dropdown-menu absolute hidden w-full flex-col items-center justify-center border-none py-0">
                            @if (Auth::user()->rol->first()->name == 'admin')
                                <li class="w-full text-center bg-colorPink hover:bg-[#cc706f] py-2 uppercase">
                                    <a href="{{ route('events.setting') }}"  class="w-full text-colorWhite hover:text-colorWhite font-sansita text-[13px] lg:text-lg  font-extrabold">Gestión de eventos</a>
                                </li>
                                <li class="w-full text-center bg-colorPink hover:bg-[#cc706f] py-2 uppercase">
                                    <a href="{{ route('users.index') }}"  class="w-full text-colorWhite hover:text-colorWhite font-sansita text-[13px] lg:text-lg  font-extrabold">Usuarios</a>
                                </li>
                                <li class="w-full text-center bg-colorPink hover:bg-[#cc706f] py-2 uppercase">
                                    <a href="#" class="w-full text-colorWhite hover:text-colorWhite font-sansita text-[13px] lg:text-lg  font-extrabold">Colaboradores</a>
                                </li>
                            @endif

                                <li class="w-full text-center bg-colorPink hover:bg-[#cc706f] py-2 uppercase">
                                    <a href="{{ route('logout') }}" 
                                        class="w-full text-colorWhite hover:text-colorWhite font-sansita text-[13px] lg:text-lg  font-extrabold"
                                     onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">Cerrar Sesión</a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </li>
                                
                            </ul>
                        </div>
        
                    @endauth
                    @guest
                        <a href='{{ route('register') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'> Registrarse </a>
                        <p class="hidden md:block">|</p>
                        <a href='{{ route('login') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>Iniciar Sesión</a> 
                    @endguest
                </div>
    
                <div class='w-full flex flex-row'>
                    <div class='w-full flex items-center justify-center'>
                        <a href='#' class='p-2   text-colorPink hover:text-[#E37383]  font-sansita text-[14px] md:text-[23px] lg:text-[40px] font-extrabold  self-center max-w-max uppercase'>
                            Que ofrecemos
                        </a>
                    </div>
        
                    <div class='w-full flex justify-center items-center'>
                        <a href='{{ route('home') }}' class=' flex justify-center items-center bg-colorPink rounded-full w-[90px] h-[90px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] drop-shadow-lg animate-bounce'>
                            <div class='w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[190px] lg:h-[190px] bg-cover bg-center bg-no-repeat' style="background-image: url('/storage/pictures/logo.svg');"></div>
                        </a>
                    </div>
        
                    <div class='w-full flex items-center justify-center'>
                        <a href='#' class='p-2   text-colorPink hover:text-[#E37383]  font-sansita text-[14px] md:text-[23px] lg:text-[40px] font-extrabold  self-center max-w-max uppercase'>
                            Quienes somos
                        </a>
                    </div>
                </div>
    
                <div class='flex justify-center gap-2'>
                    <a class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>
                        Contacto
                    </a>
     
                    <a id="button-header" href='{{ route('events.index') }}' class='p-2  bg-colorPink text-colorWhite hover:text-colorWhite hover:bg-[#cc706f] font-sansita text-[13px] lg:text-2xl font-extrabold rounded-md self-center max-w-max uppercase'>
                        Eventos
                    </a>
                </div>
            </nav>
            
            <main class="">
                @yield('content')
            </main>
        </div>

        <footer class="w-full text-colorWhite bg-colorBlack h-40 lg:h-64 flex flex-row justify-between p-2 ">
            <div class="h-full flex flex-col items-start justify-center gap-3 font-bold lg:pl-7">
                <h1 class="text-[9px] lg:text-xl w-full text-center ">Bopart S.L</h1>
                <p class="text-[7.5px] lg:text-[16px]">
                    Carrer de Barnola, 5B · 08030 Barcelona · (+34) 934 198 864<br>
                    Príncipe de Vergara 112 · 28002 Madrid · (+34) 910 205 328
                </p>
                <div class="flex w-full flex-row justify-between">
                    <p class="text-[7.5px] lg:text-[16px]">
                        Copyright ℗ 2022. Bopart All rights reserved.<br>
                        © 2022 Bopart<br>
                        BopartContacto@gmail.com
                    </p>
                    <div class="h-full flex flex-row items-center justify-center gap-2">
                        <a href="#" class="fa-brands fa-instagram text-lg lg:text-4xl  hover:text-colorWhite"></a>
                        <a href="#" class="fa-brands fa-facebook-square text-lg lg:text-4xl  hover:text-colorWhite"></a>
                    </div>
                </div>

            </div>

            <div class="h-full flex flex-row items-center justify-end gap-1 lg:pr-7">
                <img class="w-[40px] h-[35px] lg:w-40 lg:h-32" src="https://i.postimg.cc/7LsBnKHK/2collaborator.png" alt=""/>
                <img class="w-[40px] h-[35px] lg:w-40 lg:h-32" src="https://i.postimg.cc/fLV82YkD/1collaborator.png" alt=""/>
                <img class="w-[40px] h-[35px] lg:w-40 lg:h-32" src="https://i.postimg.cc/KzCJd4gL/3collaborator.png" alt=""/>
            </div>
        </footer>
    </div>
</body>
</html>
