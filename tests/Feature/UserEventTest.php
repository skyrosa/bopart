<?php

namespace Tests\Feature;

use App\Models\Event;
use App\Models\Rol;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserEventTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    use RefreshDatabase;

    private $user;

    // creamos un usuario que va a estar haciendo cada uno de los test 
    protected function setUp(): void
    {
        parent::setUp();
        $rol = Rol::factory()->create(['name' => 'user']);
        $this->user = User::factory()->create();
        $this->user->Rol()->attach($rol);
        $this->actingAs($this->user);
    }

    private function event()
    {
        return Event::factory()->make()->toArray(); //creamos evento usando las factory
    }

    //Un usuario puede apuntarse a un evento
    public function test_user_can_check_in_to_an_event()
    {
        $event = Event::factory()->create(); // agregamos un evento en la database
        $response = $this->get(route('events.checkIn', $event->id)); //nos registramos en un evento desde la ruta
        $this->assertDatabaseCount('event_user', 1); //verificamos si el registros se hace en la base de datos

        $this->withExceptionHandling();
    }

    //Un usuario puede desapuntarse de un evento
    public function test_user_can_drop_out_to_an_event()
    {
        $event = Event::factory()->create(); // agregamos un evento en la database
        $this->user->event()->attach($event); //nos apuntamos al evento

        $response = $this->get(route('events.dropOut', $event->id)); //nos desapuntamos del evento desde la ruta
        $this->assertDatabaseCount('event_user', 0); //verificamos resultados en la database

        $this->withExceptionHandling();
    }

    //no se puede entrar a la vista de crear evento
    public function test_cant_see_view_create_event()
    {
        $response = $this->get(route('events.create'));
        $response->assertStatus(403);

        $this->withExceptionHandling();
    }

    //no se puede agregar un evento
    public function test_cant_store_event()
    {
        $event = $this->event();
        $response = $this->post(route('events.store'), $event);//Intentamos crear el evento

        $this->assertDatabaseCount('events', 0); //verificamos si el registro no existe en la base de datos 
        $this->withoutExceptionHandling();
    }

    //No se puede acceder a la vista de crear evento
    public function test_cant_see_view_edit_event()
    {
        $event = Event::factory()->create(); //Agregamos un evento en la database
        $response = $this->get(route('events.edit', $event));//Intentamos entrar a la vista create
        $response->assertStatus(403);

        $this->withExceptionHandling();
    }

    //No se puede modificar evento
    public function test_cant_update_event()
    {
        $event = Event::factory()->create(); //agregamos un evento en la base de datos
        $editedEvent = $event->toArray(); //convertimos el evento en un array
        $newName = 'new name';
        $editedEvent['name'] = $newName; //cambiamos el nombre del evento

        $response = $this->put(route('events.update', $event->id), $editedEvent); //agregamos los cambios a la database

        $this->assertDatabaseCount('events', 1); //verificamos que hay un registro en la database
        $this->assertEquals(Event::find($event->id)->name, $event->name); //verificamos si el cambio no se ha realizado en la database

        $this->withoutExceptionHandling();
    }

    //no se puede eliminar evento
    public function test_cant_delete_event()
    {
        $event = Event::factory()->create(); //agregamos un evento en la base de datos
        $this->assertDatabaseCount('events', 1); //verificamos que hay un registro en la database

        $response = $this->delete(route('events.destroy', $event->id)); //intentamos eliminaman el evento

        $this->assertDatabaseCount('events', 1); //verificamos que no se ha eliminado el evento
        $this->withoutExceptionHandling();
    }

}
