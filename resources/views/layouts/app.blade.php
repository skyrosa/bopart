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

        <nav class='w-full bg-colorBlack text-colorWhite  font-sansita py-2 space-y-2 lg:space-y-6 lg:text-2xl bg-cover bg-center bg-no-repeat' style="background-image: url('/storage/pictures/banner.png');">

            <div class='flex flex-row justify-end gap-2 mr-2'>
                <a href='#' class='hover:text-colorWhite'> Registrarse </a>|
                @auth
                    <a class='hover:text-colorWhite' href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                @endauth
                @guest
                    <a href='{{ route('login') }}' class='hover:text-colorWhite'>Iniciar Sesión</a> 
                @endguest
            </div>
    
            <div class='w-full flex flex-row'>
    
                <div class='w-full flex items-center justify-center'>
                    <a href='#' class='hover:text-colorWhite'>
                        Que ofrecemos
                    </a>
                </div>
    
                <div class='w-full flex justify-center items-center'>
                    <a href='{{ route('home') }}' class=' flex justify-center items-center bg-colorPink rounded-full w-[90px] h-[90px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] drop-shadow-lg'>
                        <div class='w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[190px] lg:h-[190px] bg-cover bg-center bg-no-repeat' style="background-image: url('/storage/pictures/logo.svg');"></div>
                    </a>
                </div>
    
                <div class='w-full flex items-center justify-center'>
                    <a href='#' class='hover:text-colorWhite'>
                        Quienes somos
                    </a>
                </div>
    
            </div>
    
            <div class='flex justify-center gap-2'>
                <a href='#' class='hover:text-colorWhite'>Contacto</a>|
                <a href='{{ route('events.index') }}' class='hover:text-colorWhite'>Evento</a>
            </div>
        </nav>
        
        <main class="">
            @yield('content')
        </main>
    </div>
</body>
</html>
