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
        return [
            "name" => $this->faker->company(),
            "description" => $this->faker->paragraph(),
            "image" => $this->faker->imageUrl(),
            "dateTime" => $this->faker->dateTime(),
            "address" => $this->faker->address(),
        ];
    }
}
