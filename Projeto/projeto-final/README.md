# ProtecaoVeicular
Utilizando Docker

1 - Com o Docker instalado na máquina executar o comando docker run --name postgres -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres

2 - Depois iniciar o container PostgreSQL com o comando docker start postgres

3 - Crie a database postgres

4 - Modifique o campo password dentro do arquivo .env, seguindo os moldes do arquivo .env.exaplepara a sua senha e portas configuradas seja utilizada na conexão com banco de dados PostgreSQL.

[SETUP] - Aplicação backend
Execute os comandos no diretório do projeto
yarn ou npm install

Execute esse comando para instalar todas as dependências utilizadas no projeto.
yarn typeorm migration:run ou npm typeorm migration:run

Execute esse comando para rodar as migrations e criar as tabelas no banco de dados.
yarn dev:server ou npm dev:server

Execute esse comando para executar a API no endereço http://localhost:3333
yarn test ou npm test

Execute esse comando para executar os testes automatizados.
Criar um usuário

1 - Faça o download do Insomnia Core em https://insomnia.rest/download, depois a instalação e execute.

2 - Com o Insomnia Core aberto, clique em New Request do tipo POST e coloque o endereço http://localhost:3333/users

3 - Envie um JSON Body no seguinte formato:

{

"name": "seunome",
"email": "seuemail",
"password": "suasenha",
"type": "Administrador"

}

Para iniciar o frontend utilize o comando yarn start, após ter instalado todas as bibliotecas com o o comando yarn

#ATENÇÃO# É necessario acessar o repositorio web ou api para usar os comando yarn caso contrário, a node modules
será criada fora da pasta no diretorio /ProtecaoVeicular/node_modules a forma correta seria /ProtecaoVeicular/api/node_modules e /ProtecaoVeicular/web/node_modules