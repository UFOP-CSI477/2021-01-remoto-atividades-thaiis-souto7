<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UnidadeFactory extends Factory
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
            'bairro' => $this->faker->lexify('????????????????????'),
            'cidade' => $this->faker->city,
            'estado' => $this->faker->state
        ];
    }
}
