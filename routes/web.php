<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [HomeController::class, 'index']);

Auth::routes();

Route::get('/profile', [EventController::class, 'myEvents'])->name('profile');

Route::get('/events/{event}/check-in', [EventController::class, 'checkIn'])->name('events.checkIn');
Route::get('/events/{event}/drop-out', [EventController::class, 'dropOut'])->name('events.dropOut');

Route::resource('events', EventController::class);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
