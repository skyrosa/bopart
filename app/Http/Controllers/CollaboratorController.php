<?php

namespace App\Http\Controllers;

use App\Models\Collaborator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CollaboratorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('collaborators.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        return view('collaborators.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }

        Collaborator::create([
            'name' => $request['name'],
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Collaborator  $collaborator
     * @return \Illuminate\Http\Response
     */
    public function show(Collaborator $collaborator)
    {
        return view('collaborators.show', compact('collaborator'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Collaborator  $collaborator
     * @return \Illuminate\Http\Response
     */
    public function edit(Collaborator $collaborator)
    {
        $this->authorize('update', $collaborator);

        return view('collaborators.show', compact('collaborator'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Collaborator  $collaborator
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Collaborator $collaborator)
    {
        $this->authorize('update', $collaborator);

        $collaborator->update([
            'name' => $request['name'],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Collaborator  $collaborator
     * @return \Illuminate\Http\Response
     */
    public function destroy(Collaborator $collaborator)
    {
        $this->authorize('delete', $collaborator);

        $collaborator->delete();
    }
}
