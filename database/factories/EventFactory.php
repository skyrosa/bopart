<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {   
        $date = $this->faker->dateTimeBetween('+0 days', '+2 years');
        $time = date('H:i' ,strtotime($this->faker->time()));
        return [
            "name" => $this->faker->company(),
            "description" => $this->faker->paragraph(),
            "date" => date_format($date, 'Y-m-d'),
            "startTime" => $time,
            "endTime" => $time,
            "image" => $this->faker->imageUrl(),
            "address" => $this->faker->address(),
            "capacity" => $this->faker->numberBetween($min = 1, $max = 10),
            "type" => 'Evento'
        ];
    }
}
