@extends('layouts.app')

@section('content')
<div class="w-full py-44  bg-gradient-to-b from-colorYellow to-colorTourq">

    <div class="container">
        <div class="flex justify-center">
            <div class="col-md-8">
                <div class="card">
    
                    <div class="card-body">
                        <h1 class='font-inter font-bold text-[20px] lg:text-[32px] text-center  mb-5'>Agregar Colaborador</h1>
                        <form method="POST" action="{{ route('collaborators.store') }}" enctype="multipart/form-data">
                            @csrf
                            <div class="row mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-end">Nombre</label>
                                
                                <div class="col-md-6">
                                    <input 
                                    id="name" 
                                    type="text" 
                                    class="form-control @error('name') is-invalid @enderror" 
                                    name="name" 
                                    required 
                                    autofocus>
                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            <div class="row mb-3">
                                <label for="image" class="col-md-4 col-form-label text-md-end">
                                  image
                                </label>
                  
                                <div class="col-md-6">
                                  <input
                                  type="file"
                                  class="form-control @error('image') is-invalid @enderror"
                                  name="image">
                  
                                  @error('image')
                                    <span class="invalid-feedback" role="alert">
                                      <strong>{{ $message }}</strong>
                                    </span>
                                  @enderror
                                </div>
                            </div>
    
                            <div class="row mb-3">
                                <label for="url" class="col-md-4 col-form-label text-md-end">pagina del colaborador</label>
                                
                                <div class="col-md-6">
                                    <input 
                                    id="url" 
                                    type="url" 
                                    class="form-control @error('url') is-invalid @enderror" 
                                    name="url">
                                    @error('url')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="w-3/5 tracking-[0.20em] py-3 px-[69px] font-librefranklin font-bold uppercase bg-colorTourq hover:bg-[#64a19b] rounded-[10px] flex justify-center items-center text-colorWhite hover:text-colorWhite text-base md:text-xl">
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </form>
    
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
@endsection