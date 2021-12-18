app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// CONEXAO COM O BANCO DE DADOS

// ROTAS

    app.get('/send', function(req, res))
    
app.listen(8081, function(){
    console.log("Servidor rodando na url https://localhost:8081");
})