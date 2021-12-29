<?php

namespace App\Models;

    class Estado {

        private $id, $nome, $sigla;

        public function __construct($id, $nome, $sigla){
            $this->id = $id;
            $this->nome = $nome;
            $this->sigla = $sigla;           
        }

        public function __destruct(){
           
        }
    }