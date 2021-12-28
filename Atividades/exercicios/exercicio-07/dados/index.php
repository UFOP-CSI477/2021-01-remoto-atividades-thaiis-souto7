<?php

    require_once 'connection.php';

    //Controller -> Model
    $estados = $connection->query("SELECT * FROM estados");

    //View 
    require 'estadosView.php';