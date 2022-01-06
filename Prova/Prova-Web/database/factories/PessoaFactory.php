<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PessoaFactory extends Factory
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
            'estado' => $this->faker->state,
            'dat_nasc' => $this->faker->date($format = 'Y-m-d'),
            'cpf' => $this->faker->lexify('???????????')
        ];
    }
}
