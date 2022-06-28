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
    {   $time = $this->faker->time();
        return [
            "name" => $this->faker->company(),
            "description" => $this->faker->paragraph(),
            "date" => $this->faker->dateTimeBetween('+0 days', '+2 years'),
            "startTime" => $time,
            "endTime" => $this->faker->time($format = 'H:i:s', $min = $time),
            "image" => $this->faker->imageUrl(),
            "address" => $this->faker->address(),
        ];
    }
}
