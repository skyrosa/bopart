<?php

namespace Tests\Feature;

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

    //pagina principal es la home
    public function test_view_home_is_the_main()
    {
        $response = $this->get('/');
        $response->assertStatus(200)->assertViewIs('home');

        $this -> withoutExceptionHandling();
    }
}
