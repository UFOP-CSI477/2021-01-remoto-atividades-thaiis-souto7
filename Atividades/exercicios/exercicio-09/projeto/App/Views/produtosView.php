<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Produtos</title>
    <style type="text/css">
        table{
            margin: 2rem 0rem 0rem 20rem;
            border-style: solid;
            border-collapse: collapse;
        }
        tr, td{ 
            border-style: solid;
            padding: .5rem;
            border-color: #404A70;
            width: 10rem;
            text-align: center;
        }
        thead {
            background-color: #404A70;
            color: #A4A9BD;
            font-family: Arial;
            
        }
        tbody{
            background-color: #A4A9BD;
            color: #404A70;
            font-family: Arial;
        }
        tr:hover{
            background-color: #e2e2e4;
        }
        #botao{
            background-color: #A4A9BD;
            color: #404A70;
            border: none;
            width: 30rem;
            height: 3rem;
            border-radius: 1rem;
            margin: 2rem 0rem 0rem 21.5rem;
        }
        a{
            text-decoration: none;
            color: #404A70;
            font-weight: bold;
        }

    </style>
</head>
<body>
   
    <button id="botao"><a href="produtosViewInsert.php">Inserir Produto</a></button>

    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Un. Medida</td>
            </tr>
        </thead>
        <tbody>
            <?php
            
                while ($p = $produtos->fetch()){
                    echo "<tr><td>" .$p["id"] ."</td>\n";
                    echo "<td>" .$p["nome"] ."</td>\n";
                    echo "<td>" .$p["um"] ."</td></tr>\n";
                }
            
            ?>
        </tbody>
    </table>

</body>
</html>