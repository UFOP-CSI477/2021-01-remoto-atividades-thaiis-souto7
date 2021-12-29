<?php

require "../vendor/autoload.php";

use App\Models\Produto;
use App\Models\Estado;
use App\Models\Cidade;
use App\Database\Connection;
use App\Database\AdapterSQLite;

$produto = new Produto(1, "Leite", "L");
var_dump($produto);

$estado = new Estado(1, "Minas Gerais", "MG");
var_dump($estado);

$cidade = new Cidade(1, "Belo Horizonte", 1);
var_dump($cidade);

$connection = new Connection(new AdapterSQLite());
var_dump($connection);

$connection->getAdapter()->open();

// ------------------------------------------------------------
// Implementar na view de Estados ->
// Imprimir os estados com o adapter implementado:
$sql = "SELECT * FROM estados";
$result = $connection->getAdapter()->get()->query($sql);

echo "<hr><ol>";

while($e = $result->fetch()) {
    echo "<li>" .$e["nome"] . "-" . $e['sigla'] . "</li>\n";
}

echo "</ol><hr>";

// ------------------------------------------------------------

$connection->getAdapter()->close();