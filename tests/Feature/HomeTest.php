<?php

namespace Tests\Feature;

use App\Models\Event;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomeTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    use RefreshDatabase;

    //pagina principal es la home
    public function test_home_view_works()
    {
        $response = $this->get('/');
        $response->assertStatus(200)->assertViewIs('home');

        $this -> withoutExceptionHandling();
    }


    //una persona puede ver el formulario de registro
    public function test_can_see_register_view()
    {
        $response = $this->get(route('register'));
        $response->assertOk();

        $this->withoutExceptionHandling();
    }

    //una persona puede registrarse
    public function test_user_can_register()
    {
        $this->withoutExceptionHandling();
        $user = User::factory()->create();

        $this->assertDatabaseCount('users', 1);
    }
 
    //una persona puede ver el formulario de login
    public function test_can_see_view_login()
    {
        $response = $this->get(route('login'));
        $response->assertOk();

        $this->withoutExceptionHandling();
    }

    public function test_user_cannot_view_a_login_form_when_authenticated()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/login');

        $response->assertRedirect('/home');
    }

}
