<?php

namespace Tests\Feature;

use App\Models\Event;
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

    private function event()
    {
        return Event::factory()->make()->toArray(); //creamos evento usando las factory
    }

    // usuario admin puede acceder a la formulario de crear evento
    public function test_admin_can_see_view_create()
    {
        $response = $this->get(route('events.create'));
        $response->assertOk();

        $this->withoutExceptionHandling();
    }

    // usuario admin puede crear un evento 
    public function test_admin_can_store_event()
    {
        $event = $this->event();
        $response = $this->post(route('events.store'), $event); //almacenamos el evento en la base de datos
        // $response->assertCreated(); //status 201
        $this->assertDatabaseCount('events', 1); //verificamos si el registro existe en la base de datos 

        $this->withoutExceptionHandling();
    }

    //no se puede introducir datos con un fomato incorrecto en los formularios
    public function test_throw_invalid_error_input()
    {
        $event = $this->event();
        $event['date'] = 'invalidDate'; //cambiamos el contenido
        $response = $this->post(route('events.store'), $event); //intentamos agregar a la base de datos
        $response->assertSessionHasErrors(['date']); //detectamos que el formato es invalido 

        $this->assertDatabaseCount('events', 0); //verificamos que no hay registros en la base de datos

        $this->withoutExceptionHandling();
    }

    public function test_admin_can_see_view_edit()
    {
        $event = Event::factory()->create(); //agregamos un evento en la base de datos
        $response = $this->get(route('events.edit', $event));
        $response->assertOk();

        $this->withoutExceptionHandling();
    }

    //admin puede actualizar evento
    public function test_admin_can_update_event()
    {
        $event = Event::factory()->create(); //agregamos un evento en la base de datos
        $editedEvent = $event->toArray(); //convertimos el evento en un array
        $newName = 'new name';
        $editedEvent['name'] = $newName; //cambiamos el nombre del evento

        $response = $this->put(route('events.update', $event->id), $editedEvent); //agregamos los cambios a la database
        //$response->assertOk(); //status 200

        $this->assertDatabaseCount('events', 1); //verificamos que hay un registro en la database
        $this->assertEquals(Event::find($event->id)->name, $newName); //verificamos si el cambio se ha realizado en la database

        $this->withoutExceptionHandling();
    }

    //no se puede actualizar datos con un fomato incorrecto en los formularios
    public function test_throw_invalid_error_while_update()
    {
        $event = Event::factory()->create(); //agregamos un evento en la base de datos
        $editedEvent = $event->toArray(); //convertimos el evento en un array
        $editEvent['date'] = 'invalidDate'; //cambiamos el contenido

        $response = $this->put(route('events.update', $event->id), $editEvent); //intentamos agregar a la base de datos
        $response->assertSessionHasErrors(['date']); //detectamos que el formato es invalido 

        $this->assertDatabaseCount('events', 1); //verificamos que hay un registro en la database
        $this->assertEquals(Event::find($event->id)->date, $event->date); //verificamos la fecha siga siendo la misma

        $this->withoutExceptionHandling();
    }

    // admin puede eliminar evento
    public function test_admin_can_delete_event()
    {
        $event = Event::factory()->create(); //agregamos un evento en la base de datos
        $this->assertDatabaseCount('events', 1); //verificamos que hay un registro en la database

        $response = $this->delete(route('events.destroy', $event->id)); //eliminamos el evento

        $this->assertDatabaseCount('events', 0); //verificamos que no hay registro en la database
        $this->withoutExceptionHandling();
    }
}
