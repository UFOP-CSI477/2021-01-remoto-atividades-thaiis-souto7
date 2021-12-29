<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Inserir Produtos</title>
        <style type="text/css">
            .container{
                padding: 3rem;
                margin: 2rem 0rem 0rem 5rem;
                border-style: solid;
                background-color: #A4A9BD;
                color: #404A70;
                text-align: center;
            }
            .row{
                margin-left: 20rem;
            }
            #nome{
                margin-left: 8.18rem;
                margin-bottom: 1rem;
                border-color: #404A70;
                border-radius: .5rem;
            }
            #um{
                margin-left: 3rem;
                margin-bottom: 1rem;
                border-color: #404A70;
                border-radius: .5rem;
            }
            #botao{
                background-color: #404A70;
                color: #A4A9BD;
                text-align: center;
                border: none;
                margin-top: 1rem;
                width: 15rem;
                height: 2rem;
                border-radius: .5rem;
            }
        </style>
    </head>
    <body>

        <div class="container">
            <form action="produtosControllerInsert.php" method="post">

            <div class="row">
                <label for="nome">Produto: </label>
                <input type="text" name="nome" id="nome">
            </div>
            
            <div class="row">
                <label for="um">Unidade de Medida: </label>
                <input type="text" name="um" id="um">
            </div>

            
            <input type="submit" value="Inserir" id="botao">

            </form>
        </div>
        

    </body>
    </html>