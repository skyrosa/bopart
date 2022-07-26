<?php

use App\Http\Controllers\CollaboratorController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
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


Route::get('/profile', [UserController::class, 'profile'])->name('profile');
Route::get('/myInformation', [UserController::class, 'myInformation']);
Route::get('/getAllUsers', [UserController::class, 'getAllUsers'])->name('getAllUsers');

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');


Route::get('/events/setting', [EventController::class, 'setting'])->name('events.setting');


Route::get('/events/{event}/check-in', [EventController::class, 'checkIn'])->name('events.checkIn');
Route::get('/events/{event}/drop-out', [EventController::class, 'dropOut'])->name('events.dropOut');

Route::get('/searchEvent/{event}', [EventController::class, 'searchEvent'])->name('searchEvent');

Route::get('/events/{event}/{user}/drop-out', [EventController::class, 'detachRegisteredUser'])->name('events.detachRegisteredUser');

Route::resource('events', EventController::class);


Route::resource('collaborators', CollaboratorController::class);

Route::get('/home', [HomeController::class, 'index'])->name('home');
