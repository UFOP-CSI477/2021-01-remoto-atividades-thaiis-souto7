<?php

    //Configuração: 
    $dbfile = "./db/database.sqlite";
    $dbuser = "";
    $dbpassword = "";
    $dbhost = "";

    $strConnection = "sqlite:" . $dbfile;

    $connection = new PDO($strConnection, $dbuser, $dbpassword);


    //Controller -> Model
    $estados = $connection->query("SELECT * FROM estados");

    //View 
    require 'estadosView.php';