<?php

namespace Tests\Feature;

use App\Models\Collaborator;
use App\Models\Rol;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CollaboratorEventTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use RefreshDatabase;

    private $user;

    // creamos el usuario admin que va a estar haciendo cada uno de los test 
    protected function setUp(): void
    {
        parent::setUp();
        $rol = Rol::factory()->create(['name' => 'admin']);
        $this->user = User::factory()->create();
        $this->user->Rol()->attach($rol);
        $this->actingAs($this->user);
    }

    private function collaborator()
    {
        return Collaborator::factory()->make()->toArray(); //creamos evento usando las factory
    }


    public function test_can_store_collaborator()
    {
        $this->withoutExceptionHandling();
        
        $collaborator = $this->collaborator();
        $response = $this->post(route('collaborators.store'), $collaborator);
        
        $this->assertDatabaseCount('collaborators', 1);
    }

    public function test_can_delete_collaborator()
    {
        $this->withoutExceptionHandling();

        $collaborator = Collaborator::factory()->create();
        $this->assertDatabaseCount('collaborators', 1);

        $response = $this->delete(route('collaborators.destroy', $collaborator->id));

        $this->assertDatabaseCount('collaborators', 0);
    }

    public function test_can_edit_collaborator()
    {
        $this->withoutExceptionHandling();

        $collaborator = Collaborator::factory()->create();
        $editedCollaborator = $collaborator->toArray();

        $newName = 'new name';
        $editedCollaborator['name'] = $newName;
        
        $response = $this->put(route('collaborators.update', $collaborator->id), $editedCollaborator);
        $this->assertDatabaseCount('collaborators', 1);
        $this->assertEquals(Collaborator::find($collaborator->id)->name, $newName);
    }

    public function test_can_show_collaborator()
    {
        $this->withoutExceptionHandling();

        $collaborator = Collaborator::factory()->create();
        $this->assertDatabaseCount('collaborators', 1);

        $response = $this->get(route('collaborators.show', $collaborator->id));
        $response->assertOk();

    }
   
}
