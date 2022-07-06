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
                                required 
                                value="{{ old('name') ?? $event->name }}"
                                autofocus>
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="description" class="col-md-4 col-form-label text-md-end">Descripcion</label>
                            
                            <div class="col-md-6">
                                <input 
                                id="description" 
                                type="text" 
                                class="form-control @error('description') is-invalid @enderror" 
                                name="description" 
                                required 
                                value="{{ old('description') ?? $event->description }}"
                                autofocus>
                                @error('description')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        
                        <div class="row mb-3">
                            <label for="date" class="col-md-4 col-form-label text-md-end">fecha</label>

                            <div class="col-md-6">
                                <input 
                                id="date" 
                                type="date" 
                                class="form-control @error('date') is-invalid @enderror" 
                                name="date" 
                                required 
                                value="{{ old('date') ?? $event->date }}"
                                autofocus>
                                @error('date')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="startTime" class="col-md-4 col-form-label text-md-end">Hora de inicio</label>

                            <div class="col-md-6">
                                <input 
                                id="startTime" 
                                type="time" 
                                class="form-control @error('startTime') is-invalid @enderror" 
                                name="startTime" 
                                required 
                                value="{{  old('startTime') ?? date('H:i' ,strtotime($event->startTime)) }}"
                                autofocus>
                                @error('startTime')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="endTime" class="col-md-4 col-form-label text-md-end">Hora de finalizacion</label>

                            <div class="col-md-6">
                                <input 
                                id="endTime" 
                                type="time" 
                                class="form-control @error('endTime') is-invalid @enderror" 
                                name="endTime" 
                                required 
                                value="{{ old('endTime') ?? date('H:i' ,strtotime($event->endTime)) }}"
                                autofocus>
                                @error('endTime')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="image" class="col-md-4 col-form-label text-md-end">Imagen</label>

                            <div class="col-md-6">
                                <input 
                                id="image" 
                                type="text" 
                                class="form-control @error('image') is-invalid @enderror" 
                                name="image" 
                                required 
                                value="{{ old('image') ?? $event->image }}"
                                autofocus>
                                @error('image')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="address" class="col-md-4 col-form-label text-md-end">Dirección</label>

                            <div class="col-md-6">
                                <input 
                                id="address" 
                                type="text" 
                                class="form-control @error('address') is-invalid @enderror" 
                                name="address" 
                                required 
                                value="{{ old('address') ?? $event->address }}"
                                autofocus>
                                @error('address')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="capacity" class="col-md-4 col-form-label text-md-end">Número de personas que pueden asistir</label>

                            <div class="col-md-6">
                                <input 
                                id="capacity" 
                                type="number" 
                                class="form-control @error('capacity') is-invalid @enderror" 
                                name="capacity" 
                                required 
                                value="{{ old('capacity') ?? $event->capacity }}"
                                autofocus>
                                @error('capacity')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
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