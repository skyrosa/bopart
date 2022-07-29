<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function myInformation()
    {
        $user = auth()->user();
        $events = $user->event; 
        return response(json_encode($user), Response::HTTP_OK);
    }


    public function profile()
    {
        return view('auth.profile');
    }


    public function index()
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }

        $users = User::all();
        return view('auth.users');
    }

    public function getAllUsers()
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        $myUser = auth()->user();
        $users = User::all();

        return response(json_encode($users), Response::HTTP_OK);
    }

    public function destroy(User $user)
    {
        $this->authorize('delete', $user);

        $user->delete();

        return response(['message' => 'Usuario eliminado exitosamente.',
        'deleted' => true], Response::HTTP_ACCEPTED);
    }

}
