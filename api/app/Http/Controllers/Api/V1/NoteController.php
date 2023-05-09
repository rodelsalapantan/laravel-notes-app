<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Note;
use App\Http\Controllers\Controller;

use App\Http\Requests\V1\UpdateNoteRequest;
use App\Http\Requests\V1\StoreNoteRequest;

use App\Http\Resources\V1\NoteCollection;
use App\Http\Resources\V1\NoteResource;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function __construct()
    {
        // put all the policy
        $this->authorizeResource(Note::class, 'note');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $notesQuery = auth()->user()->notes()->orderBy('updated_at', 'desc')->paginate();
        return new NoteCollection($notesQuery);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNoteRequest $request)
    {
        return new NoteResource(auth()->user()->notes()->save(new Note($request->all())));
    }

    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        return new NoteResource($note);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        $note->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        $note->delete();
    }
}
