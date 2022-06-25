@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

                <div class="card-body">

                    <form method="POST" action="{{ route('events.store') }}">
                        @csrf
                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">Nuevo Evento</label>

                            <div class="col-md-6">
                                <input 
                                id="name" 
                                type="text" 
                                class="form-control" 
                                name="name" 
                                required 
                                autofocus>
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
                                required 
                                autofocus>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
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
@endsection