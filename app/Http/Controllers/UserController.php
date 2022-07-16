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
        return view('auth.users', compact('users'));
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(User $user)
    {
        //
    }


    public function edit(User $user)
    {
        //
    }


    public function update(Request $request, User $user)
    {
        //
    }


    public function destroy(User $user)
    {
        $this->authorize('delete', $user);

        $user->delete();

        return redirect()->back();
    }

}
