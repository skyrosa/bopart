@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

                <div class="card-body">


                    <form method="POST" action="{{ route('events.update', $event->id) }}">
                        @csrf
                        @method('PUT')
                            <div class="row mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-end">Nuevo Evento</label>

                                <div class="col-md-6">
                                    <input 
                                    id="name" 
                                    type="text" 
                                    class="form-control @error('name') is-invalid @enderror" 
                                    name="name" 
                                    value="{{ old('name') ?? $event->name }}"
                                    required autocomplete="name" 
                                    autofocus>

                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-end">fecha</label>
    
                                <div class="col-md-6">
                                    <input 
                                    id="date" 
                                    type="date" 
                                    class="form-control" 
                                    name="date" 
                                    value="{{ old('name') ?? $event->date }}"
                                    required 
                                    autofocus>
                                </div>
                            </div>
    
                            <div class="row mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-end">Hora de inicio</label>
    
                                <div class="col-md-6">
                                    <input 
                                    id="startTime" 
                                    type="time" 
                                    class="form-control" 
                                    name="startTime" 
                                    value="{{ old('name') ?? $event->startTime }}"
                                    required 
                                    autofocus>
                                </div>
                            </div>
    
                            <div class="row mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-end">Hora de finalizacion</label>
    
                                <div class="col-md-6">
                                    <input 
                                    id="endTime" 
                                    type="time" 
                                    class="form-control" 
                                    name="endTime" 
                                    value="{{ old('name') ?? $event->endTime }}"
                                    required 
                                    autofocus>
                                </div>
                            </div>
                        
                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-success text-white">
                                        Guardar cambios
                                    </button>
                                </div>
                            </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection