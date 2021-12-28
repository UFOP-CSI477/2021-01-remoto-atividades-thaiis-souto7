<?php

    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $cep = $_POST['cep'];

    //Controller
    if ($nome != "" && $cpf != "" && $email != "" && $telefone != "" && $cep != ""){
        echo "Nome: $nome </br>";
        echo "CPF: $cpf </br>";
        echo "Email: $email </br>";
        echo "Telefone: $telefone </br>";
        echo "CEP: $cep </br>";
    } else {
        echo "Inválido!";
    }

    echo '<a href="pessoas.html"></br>Voltar</a>';