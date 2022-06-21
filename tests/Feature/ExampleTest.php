<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }
    
}

/* CAN'T DO */
class ExampleTest extends TestCase
{
    public function test_all_users_cannot_register_same_event_many_times()
    {
    }

}

/* CAN DO */
class ExampleTest extends TestCase
{
    public function test_all_users_can_join_many_diferent_events_also_leave()
    {
    }

}