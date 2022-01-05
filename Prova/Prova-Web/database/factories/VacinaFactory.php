<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VacinaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome' => $this->faker->lexify('????????????????????'),
            'fabricante' => $this->faker->lexify('????????????????????'),
            'país' => $this->faker->country,
            'dose' => $this->faker->lexify('?')
        ];
    }
}
