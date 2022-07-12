<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCollaborator;
use App\Models\Collaborator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File as FacadesFile;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class CollaboratorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }


    public function index()
    {
        $collaborators = Collaborator::all();
        return view('collaborators.index', compact('collaborators'));
    }


    public function create()
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        return view('collaborators.create');
    }


    public function store(StoreCollaborator $request)
    {
        if(! Gate::allows('only-admin')){
            abort(403);
        }
        
        Collaborator::create([
            'name' => $request['name'],
            'image' => $this->storeImage($request->all()),
            'url' => $request['url'],
        ]);
        return redirect()->back();
    }


    public function storeImage($request)
    {   
        if(array_key_exists('image', $request))
        {
            $img = $request['image']->store('pictures', 'public');
            return "/storage/$img";
        }
    }


    public function show(Collaborator $collaborator)
    {
        return view('collaborators.show', compact('collaborator'));
    }


    public function edit(Collaborator $collaborator)
    {
        $this->authorize('update', $collaborator);

        return view('collaborators.edit', compact('collaborator'));
    }


    public function update(Request $request, Collaborator $collaborator)
    {
        $this->authorize('update', $collaborator);

        $data = $request->all();
        
        if($this->storeImage($data)){

            $this->deleteImage($collaborator);

            $data['image'] = $this->storeImage($data);
        }

        $collaborator->update($data);

        return redirect()->route('collaborators.index');
    }


    public function deleteImage($collaborator){
        $this->authorize('delete', $collaborator);

        $url = str_replace('storage', 'public', $collaborator->image);
        Storage::delete($url);
    }


    public function destroy(Collaborator $collaborator)
    {
        $this->authorize('delete', $collaborator);

        $this->deleteImage($collaborator);

        $collaborator->delete();
        return redirect()->route('collaborators.index');
    }
}
