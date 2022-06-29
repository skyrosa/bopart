<?php

namespace Tests\Feature;

use App\Models\Rol;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminEventTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $rol = Rol::factory()->create(['name' => 'admin']);
        $this->user = User::factory()->create();
        $this->user->Rol()->attach($rol);
        $this->actingAs($this->user);
    }
    
    public function test_admin_can_see_view_create()
    {
        $this -> withoutExceptionHandling();

        $response = $this->get(route('events.create'));
        $response->assertOk();
    }
}
