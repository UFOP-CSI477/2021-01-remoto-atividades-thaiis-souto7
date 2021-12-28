<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Estados</title>
    <style type="text/css">
        table{
            margin-left: 20rem;
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
    </style>
</head>
<body>
    
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Sigla</td>
            </tr>
        </thead>
        <tbody>
            <?php
            
                while ($e = $estados->fetch()){
                    echo "<tr><td>" .$e["id"] ."</td>\n";
                    echo "<td>" .$e["nome"] ."</td>\n";
                    echo "<td>" .$e["sigla"] ."</td></tr>\n";
                }
            
            ?>
        </tbody>
    </table>

</body>
</html>