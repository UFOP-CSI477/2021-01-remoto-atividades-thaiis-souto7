<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RegistroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pessoa_id' => Pessoa::factory(),
            'unidade_id' => Unidade::factory(),
            'vacina_id' => Vacina::factory(),
            'dose' => $this->faker->lexify('?'),
            'dat_aplic' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
        ];
    }
}
