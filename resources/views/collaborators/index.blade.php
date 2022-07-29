 @extends('layouts.app')

@section('content')
<div  class="w-full py-20 lg:py-48 flex justify-center h-full items-center bg-gradient-to-b from-colorYellow to-colorTourq">

        <div class="borde w-full flex flex-col lg:px-40 md:px-32 sm:px-20  text-center md:gap-[50px] sm:gap-8 px-[10px] py-[25px] lg:py-[25px]  bg-colorBlack text-colorWhite font-sansita text-lg  md:text-3xl gap-3">
        
                    
            <section class="flex-col  self-center flex gap-4 font-extrabold">
                <div class=" text-left text-colorPink flex flex-col gap-4 ">
                    <p class="">
                        Bopart S.L 
                    </p>
                    <a href=""  
                        class="hover:text-colorTourq hover:animate-pulse"> 
                        Bopart@bopmail.es 
                    </a>
                </div>
                
                <div class=" text-base sm:text-lg md:text-3xl ">
                    <p>
                    Carrer de Barnola, 5B · 08030 Barcelona · (+34) 675 936 567
                    </p>
                </div>
            </section>
            <div class=" justify-center sm:gap-4 gap-8 space flex-wrap sm:flex flex ">
                @foreach ($collaborators as $collaborator)
                    <a href="{{$collaborator->url}}" class="flex sm:m-4 bg-cover bg-no-repeat bg-center w-full lg:w-1/4 md:w-2/5 sm:w-1/3 h-40 " style=" background-image: url({{ $collaborator->image }})" >
                        @can('view', $collaborator)
                        <form method="POST" action="{{ route('collaborators.destroy', $collaborator->id) }}">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="focus:outline-none text-white bg-colorPink hover:bg-[#be6665] focus:ring-4 focus:ring-bg-[#4e9f4c] font-inter rounded-lg text-sm px-4 py-2.5 mr-2 mb-2">
                                Eliminar
                            </button>
                        </form>
                        @endcan
                    </a>
                @endforeach
            </div>
                        
        </div>
</div>
@endsection