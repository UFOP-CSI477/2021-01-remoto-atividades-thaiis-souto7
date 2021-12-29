<?php

namespace App\Models;

    class Cidade {

        private $id, $nome, $estado_id;

        public function __construct($id, $nome, $estado_id){
            $this->id = $id;
            $this->nome = $nome;
            $this->estado_id = $estado_id;           
        }

        public function __destruct(){
           
        }
    }